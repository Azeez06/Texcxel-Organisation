import { X } from "lucide-react";

export default function NewsletterModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      
      {/* Modal Box */}
      <div className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <h3 className="text-2xl font-extrabold text-[#0F172A] mb-3">
          Subscribe to our Newsletter
        </h3>

        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
          Get tech insights, digital tools, and updates we’re building for
          Nigerian realities. No spam. Unsubscribe anytime.
        </p>

        {/* Substack Embed (Hidden UX) */}
        <iframe
          src="https://techcxel.substack.com/embed"
          className="w-full h-[220px] border border-gray-200 rounded-lg"
          frameBorder="0"
          scrolling="no"
        />

      </div>
    </div>
  );
}
