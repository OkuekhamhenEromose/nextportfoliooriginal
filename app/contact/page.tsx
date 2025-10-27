"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { submitContactForm } from "./actions";
import Address from "@/public/images/contact/addresslocation.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" }); // type: 'success' or 'error'

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const showMessage = (text: string, type: string) => {
    setMessage({ text, type });
    setTimeout(() => {
      setMessage({ text: "", type: "" });
    }, 5000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Basic validation
    const { name, email, subject, message } = formData;
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!name || !email || !subject || !message) {
      showMessage("Please fill in all fields", "error");
      setIsLoading(false);
      return;
    }

    if (!email.match(emailPattern)) {
      showMessage("Please enter a valid email address", "error");
      setIsLoading(false);
      return;
    }

    try {
      // Use server action to handle form submission
      const result = await submitContactForm(formData);
      
      if (result.success) {
        showMessage("Message sent successfully!", "success");
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        showMessage(result.error || "Failed to send message. Please try again.", "error");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      showMessage("Failed to send message. Please try again.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="section py-2">
      <div className="container mx-auto px-4 pt-12">
        {/* Message Notification */}
        {message.text && (
          <div
            className={`fixed right-4 z-50 px-3 py-2 rounded-md shadow-md max-w-sm text-sm font-medium flex items-center animate-fade-in-down ${
              message.type === "success" ? "bg-green-400" : "bg-red-400"
            }`}
            style={{ color: "#003366", top: "100px" }}
          >
            {message.type === "success" ? (
              <CheckCircle className="w-4 h-4 mr-2" />
            ) : (
              <AlertCircle className="w-4 h-4 mr-2" />
            )}
            <span>{message.text}</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Left Side - Contact Form */}
          <div>
            {/* Heading */}
            <h1 className="h1 mb-2 mt-4 text-[#003366] dark:text-gray-200 animate-fade-in-down">
              Let&apos;s work together
            </h1>

            {/* Paragraph */}
            <p className="mb-4 text-gray-700 dark:text-gray-300 animate-fade-in-down delay-100">
              I&apos;m a Software Engineer driven by innovation and results. Open to
              new opportunities where I can add value and grow — let&apos;s connect!
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="contact-input animate-fade-in-left delay-200"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="contact-input animate-fade-in-left delay-300"
                required
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="contact-input animate-fade-in-left delay-400"
                required
              />

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="contact-input resize-vertical animate-fade-in-left delay-500"
                required
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`btn uppercase flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                } animate-fade-in-left delay-600`}
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Side - Map and Contact Info */}
          <div className="mt-4">
            <h3 className="h2 mb-4 text-[#003366] dark:text-gray-200 animate-fade-in-down">
              Find Me Here
            </h3>

            <div
              className="rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600 mb-2 animate-fade-in-right"
            >
              <Image
                src={Address}
                alt="Address Direction Map - Ikeja, Lagos"
                width={600}
                height={430}
                className="w-full h-full object-cover min-h-[430px]"
                placeholder="blur"
              />
            </div>

            {/* Address Info */}
            <div className="space-y-1 animate-fade-in-right delay-200">
              <div className="flex items-center mb-2">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                <h4 className="h3 text-[#003366] dark:text-gray-200">My Location</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Ikeja, Lagos State, Nigeria
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-xs mt-1">
                Easily accessible via major highways and public transportation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}