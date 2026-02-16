# Netlify Email Integration Setup Guide

This guide will help you set up the Netlify Email Integration with SendGrid for the contact form.

## Prerequisites

1. A SendGrid account ([sign up here](https://sendgrid.com/))
2. A verified SendGrid API key
3. A Netlify account with your site deployed

## Step 1: Get Your SendGrid API Key

1. Log in to your SendGrid account
2. Navigate to **Settings** > **API Keys**
3. Click **Create API Key**
4. Give it a name (e.g., "Netlify Email Integration")
5. Select **Full Access** or **Restricted Access** with Mail Send permissions
6. Copy the API key (you won't be able to see it again!)

## Step 2: Enable Netlify Email Integration

### Option A: Using Netlify UI (Recommended)

1. In the Netlify UI, go to your site
2. Navigate to **Site configuration** > **Emails** > **Configuration**
3. Click **Enable email extension**
4. Complete the setup:
   - **Emails provider**: Select `sendgrid`
   - **Emails provider API key**: Paste your SendGrid API key
   - **Emails directory**: Leave as default (`./emails`) or customize
5. Click **Save**
6. Deploy your site

### Option B: Using Environment Variables

1. In the Netlify UI, go to **Site configuration** > **Environment variables**
2. Add the following environment variables:

   | Variable Name                     | Value                          |
   | --------------------------------- | ------------------------------ |
   | `NETLIFY_EMAILS_PROVIDER`         | `sendgrid`                     |
   | `NETLIFY_EMAILS_PROVIDER_API_KEY` | Your SendGrid API key           |
   | `NETLIFY_EMAILS_SECRET`           | A random secret string (generate one) |

3. Make sure the scope includes both **Builds** and **Functions**
4. Deploy your site

## Step 3: Verify Setup

1. After deploying, test the contact form on your site
2. Submit a test message
3. Check your email inbox (info@thebronzingcove.com) for the message

## Troubleshooting

- **401 Error**: Check that `NETLIFY_EMAILS_SECRET` is set correctly
- **Email not sending**: Verify your SendGrid API key has Mail Send permissions
- **Template not found**: Ensure the email template exists at `emails/contact/index.html`

## Files Created

- `netlify.toml` - Netlify configuration with email plugin
- `emails/contact/index.html` - Email template for contact form submissions
- `netlify/functions/sendContactEmail.js` - Function to handle form submissions

For more information, see the [Netlify Email Integration documentation](https://docs.netlify.com/extend/install-and-use/setup-guides/email-integration/).
