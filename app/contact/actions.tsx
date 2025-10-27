"use server";

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function submitContactForm(formData: ContactFormData) {
  try {
    // Validate form data
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      return { success: false, error: "All fields are required" };
    }

    // Email validation
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailPattern.test(formData.email)) {
      return { success: false, error: "Invalid email address" };
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Replace with your domain
      to: ['charleseromose@example.com'], // Replace with your email
      subject: `New Contact: ${formData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #003366;">New Contact Form Submission</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Subject:</strong> ${formData.subject}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #003366;">
              ${formData.message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return { success: false, error: "Failed to send email. Please try again." };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Contact form error:', error);
    return { success: false, error: "An unexpected error occurred. Please try again." };
  }
}