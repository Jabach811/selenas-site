# Blog / Updates Section PRD

Last updated: 2026-06-24

## 1. Purpose

Build a simple updates area for Selena's site where she can post short notes for readers.

This should feel more like "Notes From Selena" than a heavy traditional blog. The expected content is periodic, short, and personal: usually one or two paragraphs at a time.

## 2. Plain-English Summary

Selena needs a place to post occasional updates without creating a whole publishing machine.

The site should show the newest updates on the homepage and keep the full list on a separate archive page. Readers can browse what she has posted, but they do not need accounts, profiles, public replies, or comments.

## 3. Recommended Direction

Use a two-part setup:

1. Homepage section showing the latest 2-3 updates.
2. Dedicated `updates.html` page showing the full archive.

Do not include comments in v1.

Instead, include a soft private response path:

> Want to reply? Send Selena a note.

That can link to an email address at first and later become a contact form if needed.

## 4. Goals

- Give Selena a simple place to post reader-facing updates.
- Keep the homepage feeling fresh without making it crowded.
- Provide a full archive for older updates.
- Avoid the moderation and spam problems that come with public comments.
- Keep posting lightweight enough that the site can be maintained manually at first.
- Leave room for a future CMS, newsletter sync, or individual post pages if the update system grows.

## 5. Non-Goals

- Do not build a full blog platform in v1.
- Do not add public comments or replies.
- Do not add user accounts.
- Do not add likes, reactions, or social feeds.
- Do not add a CMS/admin dashboard yet.
- Do not require separate pages for every update in v1.
- Do not make Selena choose from too many categories.

## 6. Target Users

### Primary User

A reader who wants to know what Selena is working on, what is coming next, where she may appear, or what she wants to share between book releases.

### Secondary User

Selena, who needs a low-friction place to publish short updates without managing a complicated blog system.

## 7. Content Model

Each update should have:

- Title
- Date
- Category
- Body text
- Optional link

### Required Fields

| Field | Purpose | Example |
| --- | --- | --- |
| Title | Gives the update a clear subject | `A Little News From the Porch` |
| Date | Shows when the update was posted | `June 24, 2026` |
| Category | Helps readers scan the archive | `Book News` |
| Body | The actual note from Selena | 1-2 paragraphs |

### Optional Fields

| Field | Purpose | Example |
| --- | --- | --- |
| Link label | Text for a related action | `Join the reader list` |
| Link URL | Destination for the action | `#contact` or email-list section |

## 8. Categories

Keep categories simple.

Recommended v1 categories:

- `Book News`
- `Behind the Story`
- `Events`
- `From Selena`

These cover the most likely update types without making posting feel like admin work.

## 9. Homepage Section Requirements

The homepage should include a section titled:

> Notes From Selena

The section should show the latest 2-3 updates.

Each homepage update card should include:

- Category
- Date
- Title
- Short preview or full short body if the update is only one paragraph
- Link to the full archive

The homepage section should include a clear archive link:

> Read all notes

The homepage should not display every update forever. That would make the page too long over time.

## 10. Updates Archive Page Requirements

Create a dedicated page:

> `updates.html`

This page should show the full list of updates in reverse chronological order, newest first.

Each archive entry should include:

- Category
- Date
- Title
- Full body text
- Optional related link
- Optional private response link

Suggested page heading:

> Notes From Selena

Suggested intro copy:

> Short updates, book news, event notes, and the occasional thought from Selena.

## 11. Comments / Replies Decision

Do not include comments in v1.

### Why

Comments create work immediately:

- Spam moderation
- Bot posts
- Weird or inappropriate replies
- Privacy cleanup
- Broken third-party widgets
- Someone has to monitor the section

That is too much operational weight for a small author site.

### Replacement

Use a private reply path instead:

> Want to reply? Send Selena a note.

This is cleaner, safer, and easier to manage.

## 12. Publishing Workflow

For v1, updates can be maintained directly in the site files.

When Selena has a new update, add:

1. Title
2. Date
3. Category
4. Body text
5. Optional link

The homepage should show the newest 2-3 updates. The archive page should show all updates.

If updates become frequent later, move the content into a cleaner system such as a CMS, Markdown files, JSON data, or an email-platform/newsletter workflow.

## 13. Design Requirements

The section should match the existing Selena site:

- Warm
- Literary
- Personal
- Southern fiction tone
- Dark romantic visual system
- Gold/blush accents
- Clean spacing
- Easy scanning

The section should feel like a note from an author, not a corporate blog.

## 14. Suggested Copy Direction

### Section Title

> Notes From Selena

### Homepage Intro

> A few words between books: release news, reader notes, and little glimpses behind the story.

### Archive Page Intro

> Short updates, book news, event notes, and the occasional thought from Selena.

### Private Reply Line

> Want to reply? Send Selena a note.

## 15. Functional Requirements

### Homepage Preview

The homepage must show only the latest 2-3 updates.

### Full Archive

The archive page must show all updates, newest first.

### Navigation

The homepage must link to the full archive.

The archive page must provide a way back to the main site.

### No Comments

There must be no public comment box, public reply feed, login area, or comment widget in v1.

### Mobile Layout

Updates must be easy to read on phones.

Cards or entries should stack vertically on narrow screens.

### Accessibility

Post titles should use proper heading order.

Dates should be readable text.

Links should have clear labels.

The archive link should make sense out of context.

## 16. Implementation Checklist

- [ ] Decide final section name: recommended `Notes From Selena`.
- [ ] Decide whether homepage shows 2 or 3 latest updates.
- [ ] Create a small starter set of sample updates.
- [ ] Add homepage updates section to `index.html`.
- [ ] Create `updates.html` archive page.
- [ ] Add all starter updates to the archive page.
- [ ] Add a homepage link to `updates.html`.
- [ ] Add a navigation link if the main nav has room.
- [ ] Add private reply link text.
- [ ] Confirm there are no public comments or reply widgets.
- [ ] Test desktop layout.
- [ ] Test mobile layout.
- [ ] Test keyboard navigation.
- [ ] Confirm archive page links back to the homepage.
- [ ] Confirm future updates can be added without redesigning the section.

## 17. Starter Update Examples

These are placeholders for design and layout testing only. Replace them with Selena's real updates before launch.

### Example 1

Category: `Book News`

Title: `A Little Book News`

Date: `June 24, 2026`

Body:

> I have been spending time with a few familiar characters again, and they are already making trouble in the best way. More soon.

### Example 2

Category: `Behind the Story`

Title: `Where the Stories Start`

Date: `June 12, 2026`

Body:

> Most of my stories begin with a woman at a turning point. She may not know what comes next yet, but she knows she cannot stay exactly where she is.

### Example 3

Category: `From Selena`

Title: `A Note to Readers`

Date: `May 28, 2026`

Body:

> Thank you for reading, sharing, recommending, and showing up for these stories. Every message means more than you know.

## 18. Future Enhancements

These should wait until after the basic version is working.

- Individual pages for each update.
- SEO metadata for individual posts.
- Share buttons.
- Newsletter-to-site publishing workflow.
- CMS/admin editor.
- Tags beyond the four starter categories.
- Featured update at the top of the archive.
- Image support for special announcements.

## 19. Definition of Done

This feature is done when:

- The homepage shows the latest 2-3 updates.
- `updates.html` shows the full archive.
- Updates are readable on desktop and mobile.
- The design matches the rest of the site.
- There are no public comments or reply widgets.
- Readers have a private way to respond.
- The next update can be added without rethinking the whole layout.

