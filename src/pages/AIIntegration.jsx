export default function AIIntegration() {
  return (
    <main className="bg-[#F8F4EC] text-[#0A1F44]">

      {/* HERO SECTION */}
      <section className="bg-[#0A1F44] text-white">
        <div className="max-w-7xl mx-auto px-8 py-28 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <p className="text-red-500 uppercase font-bold tracking-wide mb-4">
              AI & System Integration
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Smart Systems That Power <br />
              <span className="text-red-500">Modern Digital Businesses</span>
            </h1>

            <p className="text-lg text-gray-200 leading-relaxed mb-10">
              We integrate AI tools, automation systems, and third-party services
              into websites and applications to improve efficiency, user
              experience, and operational scale.
            </p>

            <a
              href="#consultation"
              className="inline-block bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-xl font-bold text-lg"
            >
              Request Integration Consultation
            </a>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
              alt="AI system integration"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* WHAT WE INTEGRATE */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-16 text-center">
          What We Integrate
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {[
            {
              title: "AI Chatbots & Assistants",
              text: "Customer support bots, sales assistants, WhatsApp and website chatbots powered by AI."
            },
            {
              title: "Payment Gateways",
              text: "Secure integrations with Paystack, Flutterwave, Stripe, PayPal, and subscription systems."
            },
            {
              title: "Automation Systems",
              text: "Automated workflows connecting forms, emails, CRMs, notifications, and dashboards."
            },
            {
              title: "AI APIs & Tools",
              text: "OpenAI, recommendation engines, AI analytics, and data processing integrations."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border-l-8 border-red-600 shadow-sm"
            >
              <h3 className="text-xl font-bold mb-4">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="bg-[#0A1F44] text-white">
        <div className="max-w-7xl mx-auto px-8 py-24">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-14 text-center">
            Who This Service Is For
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-lg">
            {[
              "Startups & SaaS Products",
              "E-commerce Businesses",
              "Service-Based Companies",
              "Non-Technical Founders"
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#102B5A] rounded-2xl p-8 text-center font-semibold"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-16 text-center">
          How It Works
        </h2>

        <div className="grid md:grid-cols-4 gap-10 text-center">
          {[
            "Discovery & Requirement Analysis",
            "System Design & Tool Selection",
            "Integration & Testing",
            "Deployment & Support"
          ].map((step, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm border-t-8 border-red-600"
            >
              <span className="text-red-600 font-extrabold text-2xl block mb-4">
                0{i + 1}
              </span>
              <p className="font-semibold text-lg">
                {step}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONSULTATION FORM */}
      <section
        id="consultation"
        className="bg-[#0A1F44] text-white"
      >
        <div className="max-w-4xl mx-auto px-8 py-24">

          <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center">
            Start Your AI Integration Project
          </h2>

          <form className="bg-white rounded-3xl p-10 text-[#0A1F44] shadow-xl space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="text"
              placeholder="Business / Project Type"
              className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <textarea
              rows="4"
              placeholder="What would you like to integrate?"
              className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-red-600"
            />

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 transition text-white font-bold text-lg py-4 rounded-xl"
            >
              Request Consultation
            </button>
          </form>

        </div>
      </section>

    </main>
  );
}
