import { useState } from "react";

export default function NewsletterModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
  e.preventDefault();

  const iframe = document.createElement("iframe");
  iframe.name = "hidden_iframe";
  iframe.style.display = "none";
  document.body.appendChild(iframe);

  const form = document.createElement("form");
  form.action = "https://techcxel.substack.com/api/v1/free";
  form.method = "POST";
  form.target = "hidden_iframe";

  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.name = "email";
  emailInput.value = email;

  form.appendChild(emailInput);
  document.body.appendChild(form);

  form.submit();

  setEmail("");
  onClose(); // close modal instantly
};

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-[#F6F1E8] rounded-2xl w-full max-w-md p-8 relative shadow-2xl">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-[#B11226]"
        >
          ✕
        </button>

        {/* HEADER */}
        <h3 className="text-2xl font-extrabold text-[#0F172A] mb-3">
          Join the TechcXel Newsletter
        </h3>

        <p className="text-gray-700 text-sm mb-6">
          Get tech insights, tools, and updates built for Nigerian realities.
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300
                       focus:outline-none focus:ring-2 focus:ring-[#B11226]"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#B11226] text-white py-3 rounded-lg
                       font-semibold hover:bg-[#8F0E1E] transition"
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      </div>
    </div>
  );
}
