(function(){
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Never let a page come back from history stuck in its faded-out state.
  addEventListener('pageshow', function(e){
    document.body.classList.remove('is-leaving');
    if(e.persisted && !reduce){
      document.body.style.animation = 'none';
      void document.body.offsetWidth;
      document.body.style.animation = '';
    }
  });

  if(reduce) return;

  document.addEventListener('click', function(e){
    if(e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = e.target.closest('a');
    if(!a) return;
    const href = a.getAttribute('href');
    if(!href || href.charAt(0) === '#' || a.target === '_blank' || a.hasAttribute('download')) return;
    let url;
    try{ url = new URL(a.href, location.href); }catch(_){ return; }
    if(url.origin !== location.origin) return;
    if(url.pathname === location.pathname && url.search === location.search) return;
    e.preventDefault();
    document.body.classList.add('is-leaving');
    setTimeout(function(){ location.href = a.href; }, 360);
  });
})();
