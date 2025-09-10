# 📧 Contact Form Email Setup Guide

Your contact form is now configured to send emails directly to your Outlook inbox! Follow these steps to complete the setup.

## 🚀 Quick Setup (2 minutes)

### Step 1: Configure Environment Variables

1. **Open** `.env.local` file in your project root
2. **Update with your Outlook credentials**:

```env
# Your Outlook email address (already set)
EMAIL_USER=connect-with-shibam@outlook.com

# Replace with your actual Outlook password
EMAIL_PASS=your-actual-outlook-password
```

### Step 2: If You Have 2FA Enabled

If you have two-factor authentication enabled on your Outlook account:

1. **Go to**: [account.microsoft.com](https://account.microsoft.com)
2. **Navigate to Security** → **Advanced security options**
3. **App passwords** → **Create a new app password**
4. **Use the app password** instead of your regular password in `.env.local`

### Step 3: Test the Contact Form

1. **Start your development server**: `npm run dev`
2. **Visit**: `http://localhost:3000/contact`
3. **Fill out the contact form** and submit
4. **Check your email** (`connect-with-shibam@outlook.com`)

## 📋 What Happens When Someone Contacts You

✅ **Email sent to**: `connect-with-shibam@outlook.com`  
✅ **Subject**: `Portfolio Contact: [Their Subject]`  
✅ **Styled HTML email** with all form details  
✅ **Reply-to**: Set to sender's email (easy to reply)  
✅ **Timestamp**: When the message was sent  

## 🎨 Email Template Features

- **Professional styling** with your brand colors
- **Organized layout** with sender details
- **Easy-to-read message** formatting
- **Reply functionality** built-in
- **Mobile-friendly** design

## 🔒 Security Features

- **Input validation** (required fields, email format)
- **Rate limiting** protection
- **Secure SMTP** connection
- **Environment variables** for credentials
- **Error handling** with user feedback

## 🛠️ Alternative Email Services

If you prefer not to use Gmail, you can easily switch to:

### Outlook/Hotmail
```javascript
service: 'hotmail'
```

### Custom SMTP
```javascript
host: 'your-smtp-server.com',
port: 587,
secure: false,
```

## 📱 Production Deployment

When deploying to Vercel/Netlify:

1. **Add environment variables** in your hosting dashboard
2. **Set the same values**:
   - `EMAIL_USER`: Your Gmail address
   - `EMAIL_PASS`: Your app password

## 🚨 Troubleshooting

### "Authentication failed"
- Double-check your Gmail app password
- Ensure 2-Step Verification is enabled
- Verify EMAIL_USER is correct

### "Network error"
- Check your internet connection
- Verify Gmail SMTP isn't blocked by firewall

### "Invalid email format"
- The form validates email format automatically
- Check for typos in sender's email

## 💡 Pro Tips

1. **Check spam folder** initially for test emails
2. **Add your Gmail to contacts** to avoid spam filtering
3. **Test thoroughly** before going live
4. **Monitor logs** for any delivery issues

---

🎉 **You're all set!** Your contact form will now send emails directly to your inbox with professional formatting and all the details you need to respond to potential clients.
