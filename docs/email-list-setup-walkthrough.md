# Email List Setup Walkthrough

Last updated: 2026-06-25

## 1. The Big Picture

The website should not store or manage the email list by itself.

Use an email marketing platform for that job. The website collects the email. The email platform stores the subscriber, handles unsubscribes, sends campaigns, and keeps the list organized.

Think of it like this:

- Website = signup window
- Email platform = actual mailing list
- Existing database = old contacts we need to review and import carefully

## 2. Recommended Simple Path

Use a normal email marketing platform.

Good options:

- MailerLite
- Mailchimp
- ConvertKit
- Beehiiv

For this site, start with either MailerLite or Mailchimp unless Selena already has another tool. Both can import a spreadsheet of contacts and both can generate a signup form for the website.

## 3. Before Creating Anything

First, find out what Selena's existing email database actually is.

It might be:

- A spreadsheet
- Gmail contacts
- A customer list
- A previous newsletter export
- A list from book events
- A random collection of reader emails

The important question is:

> Did these people agree to receive marketing/newsletter emails from Selena?

If yes, they can probably be imported as subscribers.

If no, or if nobody knows, be careful. Do not just blast them with marketing emails. Keep them separate, tag them as old/unverified, and only move them into the active newsletter list if there is a clean reason to do so.

This is not just a legal thing. It is also a deliverability thing. If a bunch of people ignore, unsubscribe, or mark emails as spam, Selena's future emails are more likely to land in junk.

## 4. Step 1 - Pick the Platform

Choose one platform and stick with it.

For now, do not overthink this.

Decision checklist:

- Can it import a CSV spreadsheet?
- Can it create signup forms?
- Can it send normal newsletters?
- Does it automatically include unsubscribe links?
- Is it affordable for the current list size?
- Is the interface simple enough for Selena to use?

Recommended starter answer:

> Use MailerLite if she wants simple and clean. Use Mailchimp if she already knows it or already has an account.

## 5. Step 2 - Create the Account

Create the email marketing account under an email Selena controls.

Use something stable, not a temporary personal helper address.

Good examples:

- `selena@example.com`
- `hello@example.com`
- `books@example.com`

Bad examples:

- Someone else's personal email
- A temporary contractor email
- An account only one person can access

During account setup, expect to enter:

- Sender name
- Sender email
- Website URL
- Business/author name
- Physical mailing address or PO box
- Basic business/category information

The physical address matters because marketing emails generally need a mailing address and unsubscribe information.

## 6. Step 3 - Create the Main List

Inside the platform, create one main audience/list.

Suggested name:

> Selena Reader List

Do not create a bunch of separate lists at the beginning. One main list is easier to manage.

Use tags or groups inside that list instead.

Starter tags:

- `website-signup`
- `existing-database`
- `legacy-unverified`
- `book-event`
- `reader-list`

## 7. Step 4 - Clean the Existing Database

Open the old email database in Excel or Google Sheets.

Create a clean spreadsheet with these columns:

| Column | Required? | Notes |
| --- | --- | --- |
| Email Address | Yes | The main required field |
| First Name | Optional | Useful for friendlier emails |
| Last Name | Optional | Keep only if already available |
| Source | Recommended | Where the address came from |
| Consent Status | Recommended | `confirmed`, `unclear`, or `do-not-email` |
| Notes | Optional | Any context worth keeping |

Clean it before importing:

- Remove blank rows.
- Remove duplicate email addresses.
- Fix obvious typos.
- Remove emails that bounced before, if known.
- Remove anyone who previously unsubscribed, if known.
- Remove people who clearly did not ask for updates.

Simple rule:

> If we would feel weird explaining why someone is on the list, do not import them as subscribed.

## 8. Step 5 - Split the Old Database Into Buckets

Do not treat every old email the same.

Use three buckets:

### Bucket A - Safe to Import as Subscribed

Use this for people who clearly agreed to receive updates.

Examples:

- Signed up at an event
- Joined an older newsletter
- Filled out a reader signup form
- Asked to be notified about books

Tag them:

- `existing-database`
- `confirmed`

### Bucket B - Keep, But Do Not Email Yet

Use this for addresses where the source is unclear.

Examples:

- Random contact list
- Old customer/contact spreadsheet
- No clue where it came from

Tag them:

- `existing-database`
- `legacy-unverified`

Depending on the platform, these may need to stay outside the active subscribed audience or be imported as non-subscribed contacts.

### Bucket C - Do Not Import

Use this for addresses that should not receive marketing.

Examples:

- People who unsubscribed
- Bounced addresses
- Work/vendor emails that are not reader signups
- Anyone who asked not to be contacted

Keep these out of the active list.

## 9. Step 6 - Export the Clean File

Save the clean spreadsheet as a CSV file.

Suggested file name:

> `selena-reader-list-import-YYYY-MM-DD.csv`

Example:

> `selena-reader-list-import-2026-06-25.csv`

Keep a backup copy of the original database before changing anything.

## 10. Step 7 - Import the Existing Data

In the email platform:

1. Go to the subscribers/audience/contact area.
2. Choose import contacts/subscribers.
3. Upload the CSV file.
4. Match the spreadsheet columns to the platform fields.
5. Apply the right tags.
6. Choose the correct subscription status.
7. Review the import summary.
8. Complete the import.
9. Check how many imported, failed, or were duplicates.

Important:

Only import people as subscribed if Selena has permission to send them marketing/newsletter emails.

If the platform reports failed emails, save that report. It may show invalid, duplicate, bounced, banned, or previously unsubscribed addresses.

## 11. Step 8 - Create the Website Signup Form

In the platform, create a signup form for the website.

Form name:

> Website Reader List Signup

Fields:

- Email address: required
- First name: optional

Form tags:

- `website-signup`
- `reader-list`

Signup copy:

> Get release news, first looks, giveaways, and the occasional note from Selena.

Trust copy:

> No spam. Unsubscribe anytime.

Success message:

> You're on the list. Check your inbox.

If double opt-in is turned on:

> Almost done. Check your inbox to confirm your signup.

## 12. Step 9 - Connect the Form to the Website

The platform should give us one of these:

- Embed code
- Form action URL
- API details

For this site, the easiest path is usually embed code or form action URL.

Once we have that, the website's current fake form can be replaced with a real one.

Current site situation:

The signup form exists visually, but it does not submit anywhere yet. It is currently just a shell.

What needs to happen:

- Connect the form to the provider.
- Preserve the site's styling.
- Add loading text.
- Add success text.
- Add error text.
- Test the form with a real email.

## 13. Step 10 - Test the Pipeline

Do not launch this blind.

Test with 2-3 email addresses:

- One Gmail address
- One Outlook/Yahoo/iCloud address if available
- One duplicate test address

Confirm:

- The form submits.
- The success message appears.
- The email shows up in the platform.
- The right tags are applied.
- Duplicate signup behavior is acceptable.
- Confirmation email works if double opt-in is enabled.
- Unsubscribe link appears in test campaigns.

## 14. Step 11 - Send the First Simple Email

Do not start with a giant polished newsletter.

Start with a short welcome/re-introduction.

Example:

Subject:

> A quick note from Selena

Body shape:

1. Short hello.
2. Why they are receiving the email.
3. What Selena will send going forward.
4. Link to the website.
5. Clear unsubscribe footer handled by the platform.

If using old confirmed contacts, make the first email gentle:

> I'm getting my reader list cleaned up and wanted to make sure you still want book updates from me. If not, no worries - the unsubscribe link is right below.

Do not guilt people for unsubscribing. A clean list is better than a big messy one.

## 15. Step 12 - Open the Pipeline Going Forward

Once the website form is live:

1. New reader visits the site.
2. Reader enters email.
3. Website sends email to the platform.
4. Platform adds tags.
5. Reader gets confirmation or welcome email.
6. Selena can send future updates to the list.

This becomes the clean path going forward.

The old database is a one-time migration. The website form is the long-term pipeline.

## 16. Recommended Operating Rules

Keep these rules simple:

- One main reader list.
- Tags instead of multiple separate lists.
- No public comments or replies tied to the list.
- Every signup gets a source tag.
- Never manually add someone unless there is a clear reason.
- Keep unsubscribed people unsubscribed.
- Export a backup before big list changes.
- Send small, consistent emails instead of rare giant blasts.

## 17. What We Need From Selena

To finish setup, we need:

- Which email platform she wants to use.
- Access to the existing email database.
- Confirmation of where the old emails came from.
- Sender email address.
- Sender name.
- Mailing address or PO box for email footer.
- Whether she wants single opt-in or double opt-in.

## 18. Simple Decision Guide

### Use Single Opt-In If:

- She wants the easiest signup experience.
- The list is small.
- The form has basic spam protection.

### Use Double Opt-In If:

- She wants a cleaner list.
- She is worried about fake signups.
- She wants people to confirm before joining.

Recommended:

> Start with double opt-in if the platform makes it painless. Use single opt-in only if confirmations become a barrier.

## 19. Build Checklist

- [ ] Pick the provider.
- [ ] Create the account.
- [ ] Create the main reader list/audience.
- [ ] Export the old database backup.
- [ ] Clean the old database.
- [ ] Split old emails into safe, unclear, and do-not-import buckets.
- [ ] Import confirmed contacts.
- [ ] Tag imported contacts.
- [ ] Create the website signup form.
- [ ] Get the embed code or form action URL.
- [ ] Connect the site form.
- [ ] Test signups.
- [ ] Test duplicate signups.
- [ ] Send a small first email.
- [ ] Keep the website form as the main pipeline going forward.

## 20. Sources Checked

- MailerLite import subscribers help: https://www.mailerlite.com/help/how-to-import-subscribers
- Mailchimp import contacts help: https://mailchimp.com/help/import-contacts-mailchimp/
- Mailchimp embedded signup form help: https://mailchimp.com/help/add-a-signup-form-to-your-website/
- FTC CAN-SPAM compliance guide: https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business

