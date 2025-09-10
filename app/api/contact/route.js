import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Use Web3Forms API for reliable email delivery
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY,
        name: name,
        email: email,
        subject: `Portfolio Contact: ${subject}`,
        message: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

Sent from: Portfolio Website
Time: ${new Date().toLocaleString()}
        `,
        from_name: name,
        replyto: email
      })
    })

    if (response.ok) {
      // Log successful submission
      console.log('Contact form submission sent successfully:', {
        name,
        email,
        subject,
        timestamp: new Date().toISOString()
      })

      return NextResponse.json(
        { 
          success: true, 
          message: 'Thank you for your message! I will get back to you soon.' 
        },
        { status: 200 }
      )
    } else {
      const errorData = await response.text()
      console.error('Web3Forms error:', errorData)
      throw new Error('Failed to send email via Web3Forms')
    }

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or contact me directly.' },
      { status: 500 }
    )
  }
}
