import { NextRequest, NextResponse } from 'next/server';
import { insertContact } from '@/lib/supabase';
import { sendUserConfirmationEmail, sendAdminNotificationEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, type, message, subscribed } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate type
    const validTypes = ['investor', 'beta', 'partner', 'press', 'general'];
    if (!validTypes.includes(type)) {
      return NextResponse.json(
        { error: 'Invalid contact type' },
        { status: 400 }
      );
    }

    // Save to Supabase
    const contactData = {
      name,
      email,
      type,
      message,
      subscribed: !!subscribed,
    };

    try {
      const savedContact = await insertContact(contactData);
      
      // Prepare email data
      const emailData = {
        ...contactData,
        contactId: savedContact.id
      };

      // Send emails (don't fail the request if emails fail)
      try {
        await Promise.all([
          sendUserConfirmationEmail(emailData),
          sendAdminNotificationEmail(emailData)
        ]);
        console.log('Emails sent successfully for contact:', savedContact.id);
      } catch (emailError) {
        console.error('Email sending failed (non-critical):', emailError);
        // Continue - don't fail the request if emails fail
      }
      
      console.log('Contact saved to Supabase:', savedContact.id);

      return NextResponse.json(
        { 
          message: 'Contact form submitted successfully',
          contactId: savedContact.id
        },
        { status: 200 }
      );
    } catch (supabaseError) {
      console.error('Supabase error:', supabaseError);
      return NextResponse.json(
        { error: 'Failed to save contact information' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}