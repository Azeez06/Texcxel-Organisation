export default function Home() {
  return (
    <div className="w-full">    
    <section className="bg-[#FAF7F2] border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-10 py-32">

    <div className="max-w-3xl">
      
      {/* EYEBROW */}
      <p className="text-sm font-semibold tracking-wide text-[#B11226] mb-4">
        Work With Us
      </p>

      {/* MAIN HEADLINE */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#0A1F44] leading-tight mb-6">
        Book a Consultation With TechcXel
      </h1>

      {/* DESCRIPTION */}
      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        We design and build reliable digital solutions for organisations,
        institutions, and individuals who want technology that works —
        clearly, securely, and at scale.
      </p>

      {/* CTA */}
      <div className="flex items-center gap-4">
        <button className="bg-[#B11226] text-white font-semibold px-7 py-3 rounded-md hover:bg-[#8E0F1E] transition">
          Book a Consultation
        </button>

        <a
          href="/projects"
          className="text-[#0A1F44] font-semibold hover:underline"
        >
          View Our Work →
        </a>
      </div>

    </div>

  </div>
</section>

<section className="bg-[#FAF7F2] border-t border-gray-200">
  <div className="relative max-w-7xl mx-auto px-10 py-28">

    {/* SECTION HEADING — SITS ABOVE BOTH */}
<div className="absolute left-1/2 -translate-x-1/2 top-8 z-20 bg-[#FAF7F2] px-6">

 <h2 className="text-3xl md:text-4xl font-extrabold">
  <span className="text-[#B11226]">Who </span>
  <span className="text-[#0A1F44]">We Work With</span>
</h2>

</div>


    {/* TWO-COLUMN LAYOUT */}
    <div className="grid md:grid-cols-2 gap-16 items-center">

      {/* IMAGE SIDE */}
      <div className="relative w-full h-[440px] rounded-2xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80"
          alt="Web design and development workspace"
          className="w-full h-full object-cover"
        />
      </div>

      {/* TEXT SIDE */}
      <div className="space-y-8">

        <div>
          <h3 className="text-xl font-bold text-[#0A1F44] mb-2">
            NGOs & Social Organisations
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Organisations looking to communicate clearly, engage communities,
            and build digital platforms that support real social impact.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-[#0A1F44] mb-2">
            Startups & Founders
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Early-stage and growing teams that need reliable websites or
            platforms built with scalability, performance, and clarity in mind.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-[#0A1F44] mb-2">
            Businesses & Professionals
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Individuals and organisations seeking professional digital presence
            that builds trust, credibility, and long-term value.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-[#0A1F44] mb-2">
            Institutions & Communities
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Groups and institutions interested in problem-solving platforms
            that improve access, learning, and information sharing.
          </p>
        </div>

      </div>

    </div>

  </div>
</section>


<section className="bg-[#FAF7F2] border-t border-gray-200">
  <div className="max-w-7xl mx-auto px-10 py-28">

    {/* CENTERED WRAPPER */}
    <div className="max-w-3xl mx-auto text-center">

      {/* HEADER */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A1F44] mb-4">
        Start the Conversation
      </h2>
      <p className="text-lg text-gray-600 leading-relaxed mb-12">
        Tell us a bit about what you’re looking to build.
        <span className="font-semibold text-[#0A1F44]">
          {" "}We respond instantly.
        </span>
      </p>

      {/* FORM (left-aligned for clarity) */}
      <form className="space-y-6 text-left bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">

        <div>
          <label className="block text-sm font-semibold text-[#0A1F44] mb-2">
            Full Name
          </label>
          <input
            type="text"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B11226]"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#0A1F44] mb-2">
            Email Address
          </label>
          <input
            type="email"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B11226]"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#0A1F44] mb-2">
            Organisation <span className="text-gray-400">(optional)</span>
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B11226]"
            placeholder="Organisation or project name"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#0A1F44] mb-2">
            What are you looking to build?
          </label>
          <textarea
            rows={5}
            required
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B11226]"
            placeholder="Briefly describe your idea, project, or need"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#0A1F44] mb-2">
            Timeline <span className="text-gray-400">(optional)</span>
          </label>
          <select className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B11226]">
            <option>Not sure yet</option>
            <option>Immediately</option>
            <option>Within 1 month</option>
            <option>1–3 months</option>
            <option>3+ months</option>
          </select>
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          className="w-full bg-[#B11226] text-white font-semibold px-8 py-3 rounded-md hover:bg-[#8E0F1E] transition"
        >
          Submit Request
        </button>

      </form>

      {/* FOOT NOTE */}
      <p className="text-sm text-gray-500 mt-6">
        We respect your time and privacy. Submitting this form does not
        obligate you to any commitment.
      </p>

    </div>

  </div>
</section>

</div>

    );
  }