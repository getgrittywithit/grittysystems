import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactEmailData {
  name: string;
  email: string;
  type: string;
  message: string;
  subscribed: boolean;
  contactId: string;
}

// Send confirmation email to the user
export async function sendUserConfirmationEmail(contactData: ContactEmailData) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'GrittySystems <noreply@grittysystems.com>',
      to: [contactData.email],
      subject: 'Thank you for contacting GrittySystems!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #f56a18 0%, #00a550 100%); padding: 30px; border-radius: 12px; text-align: center; margin-bottom: 30px;">
            <h1 style="color: white; margin: 0; font-size: 28px;">GrittySystems</h1>
            <p style="color: white; margin: 10px 0 0 0; opacity: 0.9;">AI-Powered Business Applications</p>
          </div>
          
          <h2 style="color: #2c2c2c; margin-bottom: 20px;">Thanks for reaching out, ${contactData.name}!</h2>
          
          <p style="color: #555; line-height: 1.6; margin-bottom: 20px;">
            We've received your message about <strong>${contactData.type === 'general' ? 'general inquiry' : contactData.type}</strong> 
            and will get back to you within 24 hours.
          </p>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #f56a18; margin: 20px 0;">
            <h3 style="margin: 0 0 10px 0; color: #2c2c2c;">Your Message:</h3>
            <p style="margin: 0; color: #555; font-style: italic;">"${contactData.message}"</p>
          </div>
          
          <p style="color: #555; line-height: 1.6; margin-bottom: 30px;">
            In the meantime, feel free to explore our AI-powered applications:
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://grittysystems.com/#apps" 
               style="background: linear-gradient(135deg, #f56a18 0%, #00a550 100%); 
                      color: white; 
                      text-decoration: none; 
                      padding: 15px 30px; 
                      border-radius: 8px; 
                      display: inline-block; 
                      font-weight: bold;">
              Explore Our Projects
            </a>
          </div>
          
          ${contactData.type === 'investor' ? `
          <div style="background: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin: 0 0 10px 0; color: #00a550;">Investment Opportunities</h3>
            <p style="margin: 0; color: #555;">
              Check out our detailed pitch deck for PantryPal Pro: 
              <a href="https://grittysystems.com/invest/pantrypal-pro" style="color: #00a550; font-weight: bold;">View Pitch Deck</a>
            </p>
          </div>
          ` : ''}
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          
          <p style="color: #888; font-size: 14px; text-align: center;">
            Contact ID: ${contactData.contactId}<br>
            GrittySystems • Building the future of AI-powered applications
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Error sending user confirmation email:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('User confirmation email failed:', error);
    throw error;
  }
}

// Send notification email to admin
export async function sendAdminNotificationEmail(contactData: ContactEmailData) {
  const notificationEmail = process.env.CONTACT_NOTIFICATION_EMAIL || 'contact@grittysystems.com';
  
  try {
    const { data, error } = await resend.emails.send({
      from: 'GrittySystems Contact Form <noreply@grittysystems.com>',
      to: [notificationEmail],
      subject: `New ${contactData.type} contact: ${contactData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: #2c2c2c; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: white; margin: 0;">🔔 New Contact Form Submission</h2>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="margin: 0 0 15px 0; color: #2c2c2c;">Contact Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555; width: 120px;">Name:</td>
                <td style="padding: 8px 0; color: #2c2c2c;">${contactData.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
                <td style="padding: 8px 0; color: #2c2c2c;">
                  <a href="mailto:${contactData.email}" style="color: #f56a18;">${contactData.email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Type:</td>
                <td style="padding: 8px 0; color: #2c2c2c;">
                  <span style="background: ${getTypeColor(contactData.type)}; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; text-transform: uppercase;">
                    ${contactData.type}
                  </span>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Newsletter:</td>
                <td style="padding: 8px 0; color: #2c2c2c;">${contactData.subscribed ? '✅ Yes' : '❌ No'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Contact ID:</td>
                <td style="padding: 8px 0; color: #888; font-family: monospace;">${contactData.contactId}</td>
              </tr>
            </table>
          </div>
          
          <div style="background: #fff; border: 1px solid #eee; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="margin: 0 0 15px 0; color: #2c2c2c;">Message</h3>
            <p style="margin: 0; color: #555; line-height: 1.6; white-space: pre-wrap;">${contactData.message}</p>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="mailto:${contactData.email}?subject=Re: Your inquiry about ${contactData.type}" 
               style="background: #f56a18; 
                      color: white; 
                      text-decoration: none; 
                      padding: 12px 24px; 
                      border-radius: 6px; 
                      display: inline-block; 
                      font-weight: bold;">
              Reply to ${contactData.name}
            </a>
          </div>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          
          <p style="color: #888; font-size: 14px; text-align: center;">
            GrittySystems Contact Form • Received at ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Error sending admin notification email:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Admin notification email failed:', error);
    throw error;
  }
}

// Helper function to get color for contact type
function getTypeColor(type: string): string {
  const colors = {
    investor: '#00a550',
    partner: '#f56a18', 
    beta: '#2196f3',
    press: '#9c27b0',
    general: '#666'
  };
  return colors[type as keyof typeof colors] || '#666';
}