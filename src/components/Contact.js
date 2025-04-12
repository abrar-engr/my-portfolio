import React, { useState } from "react";

export default function Contact() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <button onClick={() => setShowForm(prev => !prev)}>
        {showForm ? "Hide Form" : "Show Contact Form"}
      </button>
      {showForm && (
        <form>
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Your email" required />
          <textarea placeholder="Your message" required></textarea>
          <button type="submit">Send</button>
        </form>
      )}
    </section>
  );
}
