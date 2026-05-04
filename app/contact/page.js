"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // stops page reload
    setSent(true);      // show success message

    // optional: reset message after 3 seconds
    setTimeout(() => setSent(false), 3000);

    e.target.reset();   // clears form fields
  };

  return (
    <section className="section-container">
      <div className="section-header">
        <h1 className="text-gradient">Contact Us</h1>
        <p>We’d love to hear from you. Send us a message anytime.</p>
      </div>

      <div
        className="card"
        style={{ maxWidth: "700px", margin: "0 auto" }}
      >
        <form className="contact-form" onSubmit={handleSubmit}>

          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" required />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="your@email.com" required />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" placeholder="What is this about?" />
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message..."
              required
            />
          </div>

          <button type="submit">Send Message</button>

          {sent && (
            <p style={{ marginTop: "1rem", color: "green" }}>
              ✅ Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}