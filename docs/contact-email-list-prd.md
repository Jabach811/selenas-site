# Contact / Email List Section PRD

Last updated: 2026-06-24

## 1. Purpose

Build a simple contact-area section for Selena's site where readers can join her email list.

This section is not meant to be a full customer-support form, booking form, or custom database. Its main job is to collect reader emails and send them into a real email-list platform so Selena can later send release news, reader updates, giveaways, and event announcements.

## 2. Plain-English Summary

The website should not try to "own" the mailing list.

The website is the front counter. The email platform is the actual list system.

When someone enters their email and clicks Join, the site should hand that email to an email marketing service. That service stores the subscriber, handles unsubscribe links, protects deliverability, and lets Selena send newsletters later.

## 3. Goals

- Let a reader join Selena's email list from the website.
- Keep the form simple and low-friction.
- Make it obvious what the reader is signing up for.
- Show a clear success message after signup.
- Show a clear error message if something goes wrong.
- Use a real email-list provider instead of building a custom database.
- Leave room to add a separate contact form later if Selena needs one.

## 4. Non-Goals

- Do not build a custom newsletter system.
- Do not store subscribers directly in the static website files.
- Do not collect unnecessary reader information.
- Do not mix "join the email list" and "send Selena a message" into one confusing form.
- Do not add advanced automation, tagging, launch funnels, or segmentation in the first version.

## 5. Target Users

### Primary User

A reader who likes Selena's books and wants updates about new releases, signings, giveaways, or bonus notes.

### Secondary User

Selena, who needs a clean way to grow and manage a reader list without dealing with technical list management.

## 6. Recommended Product Direction

The first version should be an email-list signup section only.

It can include a small secondary contact option, such as:

> For direct inquiries, email Selena at [email address].

But the main form should only collect email-list subscribers.

## 7. Form Fields

### Required

- Email address

### Optional

- First name

First name is useful if Selena wants friendlier emails later, like "Hey Maria," but it also adds friction. If speed matters, start with email only.

### Hidden / System Fields

- Signup source: `selena-website`
- Signup location: `contact-email-list-section`

These help identify where subscribers came from later.

## 8. Section Copy Requirements

The section should tell readers what they get.

Suggested headline:

> Join Selena's reader list.

Suggested supporting copy:

> Get release news, first looks, giveaways, and the occasional note from Selena.

Suggested trust text:

> No spam. Unsubscribe anytime.

Suggested success message:

> You're on the list. Check your inbox.

Suggested error message:

> Something went wrong. Please try again in a minute.

Suggested duplicate/already-subscribed message:

> Looks like you're already on the list.

## 9. User Flow

1. Reader reaches the contact/email-list section.
2. Reader sees what they will receive by joining.
3. Reader enters email address.
4. Reader clicks Join.
5. Button changes to a loading state.
6. Site sends the email to the chosen email-list provider.
7. Provider accepts or rejects the signup.
8. Site shows the correct result message.
9. Reader either sees success, fixes an error, or tries again later.

## 10. Functional Requirements

### Email Collection

The form must collect a valid email address.

### Provider Integration

The form must submit to an email-list provider such as Mailchimp, ConvertKit, MailerLite, Beehiiv, or a similar service.

### Validation

The form must prevent empty or invalid email submissions.

### Loading State

After clicking Join, the button should show that the form is working.

Example:

> Joining...

### Success State

After a successful signup, the form should show a friendly confirmation.

### Error State

If the signup fails, the form should show a useful message instead of silently doing nothing.

### Accessibility

The email field must have a real label or accessible label.

The result message should be readable by screen readers.

The form must be usable with a keyboard.

### Mobile Layout

The input and button must fit cleanly on small screens.

If the row becomes too tight, the button should stack under the input.

## 11. Provider Requirements

The selected email platform should support:

- Subscriber list management
- Signup forms or API submissions
- Unsubscribe handling
- Confirmation emails if needed
- Basic tags or source tracking
- Exporting subscribers
- Sending newsletters

Nice-to-have:

- Free or low-cost starter plan
- Simple visual email editor
- Automation later if Selena wants welcome emails

## 12. Recommended Provider Path

Start with a normal email marketing provider, not custom code.

Best basic path:

1. Create the account.
2. Create Selena's reader list.
3. Create a signup form inside the provider.
4. Copy the provider's form action URL or embed settings.
5. Wire the existing site form to that provider.
6. Test with a real email address.

## 13. Design Requirements

The section should match the existing site style:

- Warm, bookish, Southern fiction tone
- Dark romantic background treatment
- Gold/blush accent styling
- Rounded email input
- Existing gold button style
- Clear, calm copy

The section should not feel like a generic marketing popup.

## 14. Content Requirements

The copy should be short and specific.

Good:

> Get release news, first looks, giveaways, and the occasional note from Selena.

Weak:

> Subscribe to our newsletter for updates.

The better version tells the reader why joining is worth it.

## 15. Privacy / Compliance Notes

The form should not promise anything misleading.

The signup copy should make it clear that the reader is joining an email list.

The email platform should handle unsubscribe links in every email.

If a double opt-in confirmation is enabled, the success message should tell the reader to check their inbox.

## 16. Implementation Checklist

- [ ] Decide whether the first version is email-only or email plus first name.
- [ ] Pick the email-list provider.
- [ ] Create the subscriber list/audience in that provider.
- [ ] Create the signup form in that provider.
- [ ] Get the provider form action URL, embed code, or API details.
- [ ] Update the website form so it submits for real.
- [ ] Add form validation for missing or invalid email.
- [ ] Add loading state after clicking Join.
- [ ] Add success message after signup.
- [ ] Add error message for failed signup.
- [ ] Add already-subscribed handling if the provider supports it.
- [ ] Add hidden source tracking fields if supported.
- [ ] Test with a real email address.
- [ ] Confirm the subscriber appears in the provider dashboard.
- [ ] Test the form on mobile.
- [ ] Test keyboard navigation.
- [ ] Confirm the first real newsletter includes unsubscribe handling.

## 17. Future Enhancements

These should wait until the basic version works.

- Add a reader magnet, such as a bonus chapter or downloadable extra.
- Add a welcome email.
- Add separate tags for book interests.
- Add separate contact form for press, events, or reader messages.
- Add analytics for signup conversion rate.
- Add A/B testing for section copy.

## 18. Open Decisions

### Provider

Still needs to be chosen.

### First Name Field

Decision needed:

- Email only for lowest friction.
- Email plus first name for friendlier future emails.

### Double Opt-In

Decision needed:

- Single opt-in is simpler for readers.
- Double opt-in is cleaner for list quality and spam protection.

## 19. Definition of Done

This section is done when:

- The form is connected to a real email-list provider.
- A test email can successfully join the list.
- The user gets a visible success message.
- Invalid submissions show a useful error message.
- The section works on desktop and mobile.
- The signup copy clearly says what the reader is joining.
- The provider can send emails with unsubscribe support.

