# Contact form — Netlify Forms setup

The booking form on the homepage (`src/components/Contact.astro`) is wired to
[Netlify Forms](https://docs.netlify.com/manage/forms/setup/). Netlify detects
the form from the deployed HTML at build time, captures every submission, and
fires whatever notifications you configure in the dashboard.

## What's already in the code

- `<form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">`
- A hidden `form-name` input (required because we submit via `fetch`)
- A honeypot field `bot-field` for silent spam rejection
- A hidden `subject` input that customises the notification email subject:
  `Buchungsanfrage von %{formName} · Art of Voices (%{submissionId})`
- AJAX submission to `/` with `application/x-www-form-urlencoded`
- Success state on the page; visible error fallback if the POST fails

## One-time Netlify dashboard setup

After the first deploy, do this once in the Netlify UI:

1. **Forms → Enable form detection**
   - Project → Forms → toggle on if not already
   - The "contact" form will appear here once a deploy with the form has gone live

2. **Configuration → Notifications → Form submission notifications**
   - Click **Add notification** → **Email notification**
   - **Event:** *New form submission*
   - **Form:** `contact`
   - **Email to notify:** `info@artofvoices.de` (or whichever inbox should receive bookings — comma-separate for multiple)
   - **Subject** (optional override): the form already sets a subject via the hidden `subject` input, so leave blank or override here
   - Save

That's it — every submission to the booking form will arrive in the configured
inbox within seconds of being submitted. The full submission body is also
viewable in the Netlify dashboard under **Forms → contact**.

## Optional extras

- **Slack notifications** — install the Netlify app for Slack and add a Slack notification in the same Notifications panel
- **Webhook** — point at any HTTPS endpoint to integrate with Zapier / n8n / a custom backend
- **Auto-reply to the sender** — Netlify itself doesn't do this, but a Zapier/n8n flow listening on the webhook can send a templated "Wir haben Ihre Anfrage erhalten" reply using the `email` field from the submission

## Local testing

Form submissions only flow through Netlify when the site is deployed to
Netlify (or run via `netlify dev`). On `npx astro dev` the POST to `/` will
404 — that's expected. Test the success/error UX by stubbing the fetch in
DevTools, or run the site under `netlify dev`.
