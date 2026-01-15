import { useState, useEffect } from "react";

export default function RequestQuotePage() {
  // Quotes (you can add up to 20+ later)
  const quotes = [
    "Technology should simplify life, not complicate it.",
    "Good design feels effortless, even when powerful systems work behind the scenes.",
    "Build for people first, then scale with purpose.",
    "Every meaningful digital product starts with a real problem.",
    "Clarity is the foundation of every great system.",
    "Design is not decoration; it is direction.",
    "The best technology is invisible but impactful.",
    "Simplicity is a competitive advantage in digital products."
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentQuote, setCurrentQuote] = useState("");

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  useEffect(() => {
    if (isOpen) {
      getRandomQuote();
    }
  }, [isOpen]);

  return (
    <div className="relative">

      {/* REQUEST QUOTE BUTTON */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-[#B11226] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#8E0F1E] transition"
      >
        Request a Quote
      </button>

      {/* MODAL */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">

          <div className="relative bg-[#FAF7F2] rounded-2xl max-w-lg w-full p-8 shadow-xl">

            {/* CLOSE */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
            >
              ×
            </button>

            {/* TITLE */}
            <h2 className="text-2xl font-extrabold text-[#0A1F44] mb-6 text-center">
              Quote of the Moment
            </h2>

            {/* QUOTE */}
            <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
              “{currentQuote}”
            </p>

            {/* ACTIONS */}
            <div className="flex justify-center gap-6">
              <button
                onClick={getRandomQuote}
                className="text-[#B11226] font-semibold hover:underline"
              >
                Another quote
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="text-[#0A1F44] font-semibold hover:underline"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
