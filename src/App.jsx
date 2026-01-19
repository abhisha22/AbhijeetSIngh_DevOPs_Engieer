import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function App() {
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const contact = e.target.contact.value;
    const message = e.target.message.value;

    if (contact.length !== 10) {
      setStatus("❌ Contact number must be exactly 10 digits.");
      return;
    }
    setStatus("Sending request...");
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name,
        contact,
        message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )    
      .then(() => {
        setStatus("✅ Request sent successfully!");
        e.target.reset();
      })
      .catch(() => {
        setStatus("❌ Failed to send request. Try again.");
      });
  };

  return (
    <>
      <header>
        <h1>Abhijeet Singh</h1>
        <h2>Cloud / DevOps Engineer</h2>
        <p>
          📧 <a href="mailto:asingh74175@gmail.com">asingh74175@gmail.com</a> |
          📞 +91-6392779856 | 📍 Gurugram, India
        </p>
      </header>

      <section>
        <h3 className="section-title">Need Help With Cloud or Deployment?</h3>
        <div className="card">
          <form onSubmit={sendEmail}>
            <input name="name" placeholder="Your Name" required />

            <input
              name="contact"
              placeholder="Contact Number"
              maxLength={10}
              required
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
              }
            />

            <textarea
              name="message"
              placeholder="What help do you need?"
              required
            />

            <button type="submit">Send Request</button>
            <p>{status}</p>
          </form>
        </div>
      </section>

      <footer>© 2026 Abhijeet Singh | Cloud / DevOps Engineer</footer>
    </>
  );
}