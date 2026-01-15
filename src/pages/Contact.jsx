import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function ContactForm() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i44fkz5",   // 🔁 replace
        "template_ztacjk9",  // 🔁 replace
        formRef.current,
        "SG-shQoL2bw3p-53g"    // 🔁 replace
      )
      .then(
        () => {
          alert("Message sent successfully. We’ll respond shortly.");
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="bg-[#FAF7F2] py-28">
      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A1F44] mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-600 mb-10">
          We usually respond within 24 hours.
        </p>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">

          <input
            type="text"
            name="user_name"
            required
            placeholder="Your full name"
            className="w-full border border-gray-300 rounded-md px-4 py-3"
          />

          <input
            type="email"
            name="user_email"
            required
            placeholder="Your email address"
            className="w-full border border-gray-300 rounded-md px-4 py-3"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full border border-gray-300 rounded-md px-4 py-3"
          />

          <textarea
            name="message"
            rows="5"
            required
            placeholder="Your message"
            className="w-full border border-gray-300 rounded-md px-4 py-3"
          />

          <button
            type="submit"
            className="bg-[#B11226] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#8E0F1E] transition"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
}
