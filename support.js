(function () {
  var handlers = [];

  function toDatasetEventName(name) {
    return name.replace(/^on/, '').toLowerCase();
  }

  function evaluate(expr, values, local) {
    try {
      return Function('values', 'local', 'with(values){with(local){return (' + expr + ')}}')(values, local);
    } catch (_error) {
      return '';
    }
  }

  function renderTemplate(html, values, local) {
    var loopPattern = /<sc-for\b([^>]*)>([\s\S]*?)<\/sc-for>/gi;
    html = html.replace(loopPattern, function (_match, attrs, body) {
      var listMatch = attrs.match(/list="\{\{\s*([^}]+?)\s*\}\}"/i);
      var asMatch = attrs.match(/\bas="([^"]+)"/i);
      if (!listMatch || !asMatch) return '';
      var list = evaluate(listMatch[1], values, local);
      if (!Array.isArray(list)) return '';
      return list.map(function (item) {
        var childLocal = Object.assign({}, local);
        childLocal[asMatch[1]] = item;
        return renderTemplate(body, values, childLocal);
      }).join('');
    });

    html = html.replace(/\s(ref)="\{\{\s*([^}]+?)\s*\}\}"/gi, ' data-dc-ref="$2"');
    html = html.replace(/\s(on[A-Za-z]+)="\{\{\s*([^}]+?)\s*\}\}"/g, function (_match, name, expr) {
      var fn = evaluate(expr, values, local);
      if (typeof fn === 'function') {
        handlers.push(fn);
        return ' data-dc-handler-' + toDatasetEventName(name) + '="' + (handlers.length - 1) + '"';
      }
      return ' data-dc-event-' + toDatasetEventName(name) + '="' + expr + '"';
    });

    return html.replace(/\{\{\s*([^}]+?)\s*\}\}/g, function (_match, expr) {
      var value = evaluate(expr, values, local);
      if (typeof value === 'function' || value == null) return '';
      return String(value);
    });
  }

  function wire(root, component, values) {
    root.querySelectorAll('[data-dc-ref]').forEach(function (node) {
      var ref = evaluate(node.getAttribute('data-dc-ref'), values, {});
      if (typeof ref === 'function') ref(node);
    });

    root.querySelectorAll('[style-hover]').forEach(function (node) {
      var base = node.getAttribute('style') || '';
      var hover = node.getAttribute('style-hover') || '';
      node.addEventListener('mouseenter', function () {
        node.setAttribute('style', base + ';' + hover);
      });
      node.addEventListener('mouseleave', function () {
        node.setAttribute('style', base);
      });
    });

    root.querySelectorAll('*').forEach(function (node) {
      Array.prototype.slice.call(node.attributes).forEach(function (attr) {
        if (attr.name.startsWith('data-dc-handler-')) {
          var storedEventName = attr.name.replace('data-dc-handler-', '');
          var storedHandler = handlers[Number(attr.value)];
          if (typeof storedHandler === 'function') {
            node.addEventListener(storedEventName, storedHandler);
          }
          return;
        }
        if (!attr.name.startsWith('data-dc-event-')) return;
        var eventName = attr.name.replace('data-dc-event-', '');
        var handler = evaluate(attr.value, values, {});
        if (typeof handler === 'function') {
          node.addEventListener(eventName, handler);
        }
      });
    });
  }

  function boot() {
    var host = document.querySelector('x-dc');
    var script = document.querySelector('script[type="text/x-dc"][data-dc-script]');
    if (!host || !script) return;

    var helmet = host.querySelector('helmet');
    if (helmet) {
      Array.prototype.slice.call(helmet.children).forEach(function (child) {
        document.head.appendChild(child);
      });
      helmet.remove();
    }

    window.DCLogic = class {
      setState(update) {
        var next = typeof update === 'function' ? update(this.state) : update;
        this.state = Object.assign({}, this.state, next || {});
      }
    };

    try {
      Function(script.textContent + '\nwindow.__dcComponent = Component;')();
      var component = new window.__dcComponent();
      var values = component.renderVals ? component.renderVals() : {};
      host.innerHTML = renderTemplate(host.innerHTML, values, {});
      wire(host, component, values);
      if (component.componentDidMount) component.componentDidMount();
    } catch (error) {
      console.error('Design runtime failed:', error);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
