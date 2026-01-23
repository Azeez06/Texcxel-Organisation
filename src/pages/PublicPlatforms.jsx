export default function PublicPlatforms() {
  return (
    <main className="bg-[#FBF6EF] text-[#0F172A]">

     {/* ================= HERO ================= */}
{/* ================= HERO ================= */}
<section
  className="
    relative
    h-[70vh]
    min-h-[520px]
    md:h-[85vh]
    md:min-h-[620px]
    overflow-hidden
  "
>
  {/* BACKGROUND IMAGE */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80)",
    }}
  />

  {/* GRADIENT BLEND (same logic as Website hero) */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#08162F]/90 via-[#0A1F44]/85 to-[#08162F]/95" />

  {/* CONTENT */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 h-full flex items-center">
    <div className="grid md:grid-cols-2 gap-16 items-center w-full">

      {/* COPY */}
      <div>
        <span className="inline-block mb-5 px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-[#B11226] bg-white/10 rounded-full">
          Open-Access Digital Products
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold text-[#FAF7F2] leading-tight mb-6">
          Built for <span className="text-[#F6F1E8]">Nigerian Realities</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl mb-10">
          We design and release public digital platforms that solve recurring
          problems in education, careers, and research — intentionally built
          without paywalls, ads, or unnecessary complexity.
        </p>

        {/* Proof points */}
        <div className="flex flex-wrap gap-6 text-sm text-gray-200">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#B11226]" />
            Free by design
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#B11226]" />
            Nigerian-first problems
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#B11226]" />
            Built to scale
          </span>
        </div>
      </div>

      {/* VISUAL BLOCK (FLOATING CARD) */}
      <div className="hidden md:block">
        <div className="relative bg-[#F6F1E8] rounded-3xl p-8 shadow-2xl border border-white/10">
          <p className="text-sm font-bold tracking-wide text-[#0F172A] mb-4">
            What makes these platforms different
          </p>

          <ul className="space-y-4 text-[#0F172A]">
            <li className="flex gap-3">
              <span className="text-[#B11226] font-bold">•</span>
              Designed from real Nigerian workflows
            </li>
            <li className="flex gap-3">
              <span className="text-[#B11226] font-bold">•</span>
              No forced upgrades or dark patterns
            </li>
            <li className="flex gap-3">
              <span className="text-[#B11226] font-bold">•</span>
              Clear interfaces, not intimidating tools
            </li>
            <li className="flex gap-3">
              <span className="text-[#B11226] font-bold">•</span>
              Built as long-term public infrastructure
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</section>

{/* ================= WHY THIS MATTERS ================= */}
<section className="bg-[#FBF6EF]">
  <div className="max-w-7xl mx-auto px-6 sm:px-10 py-28">

    {/* INTRO */}
    <div className="max-w-3xl mb-24">
      <span className="inline-block mb-4 text-xs font-semibold tracking-widest uppercase text-[#B11226]">
        Why this work matters
      </span>

      <h2 className="text-3xl md:text-5xl font-extrabold text-[#0F172A] mb-6 leading-tight">
        Why TechcXel Builds <br className="hidden sm:block" />
        Public Platforms
      </h2>

      <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
        This work is not charity. It is intentional product thinking —
        focused on reducing everyday friction, widening access, and proving
        what thoughtful engineering can achieve when it’s built for people.
      </p>
    </div>

    {/* CARDS */}
    <div className="grid md:grid-cols-3 gap-10">

      {/* CARD 1 — CREAM */}
      <div className="rounded-3xl p-10 bg-[#F6F1E8] border border-[#E7E2D8] hover:shadow-xl transition">
        <span className="block mb-4 text-sm font-semibold text-[#B11226]">
          Access
        </span>

        <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
          Access Over Privilege
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          Too many capable people are locked out of opportunity by cost,
          complexity, or unnecessary gatekeeping.
        </p>

        <p className="text-sm text-gray-600 leading-relaxed">
          We build tools that work immediately — no subscriptions,
          no intimidation, no hidden barriers.
        </p>
      </div>

      {/* CARD 2 — DEEP NAVY */}
      <div className="rounded-3xl p-10 bg-[#0A1F44] text-white hover:shadow-2xl transition">
        <span className="block mb-4 text-sm font-semibold text-[#FCA5A5]">
          Design Philosophy
        </span>

        <h3 className="text-2xl font-bold mb-4">
          Problem-First Design
        </h3>

        <p className="text-gray-200 leading-relaxed mb-6">
          We don’t chase trends or buzzwords. Every platform begins with
          a real, repeated problem we observe in Nigerian schools,
          offices, and research spaces.
        </p>

        <p className="text-sm text-gray-300 leading-relaxed">
          Solutions come after understanding — not the other way around.
        </p>
      </div>

      {/* CARD 3 — WHITE */}
      <div className="rounded-3xl p-10 bg-white border border-gray-200 hover:shadow-xl transition">
        <span className="block mb-4 text-sm font-semibold text-[#0F172A]">
          Credibility
        </span>

        <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
          Proof of Capability
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          These platforms are not demos or experiments. They are living
          systems used by real people.
        </p>

        <p className="text-sm text-gray-600 leading-relaxed">
          They show our engineering depth, product judgment, and ability
          to design systems that last beyond launch.
        </p>
      </div>

    </div>

  </div>
</section>
{/* ================= PLATFORM 1 ================= */}
<section className="relative py-36 bg-[#0A1F44] overflow-hidden">

  <div className="max-w-7xl mx-auto px-6 sm:px-10">

    <div className="grid md:grid-cols-2 gap-24 items-center">

      {/* IMAGE — PRODUCT AS HERO */}
      <div className="relative">
        {/* Soft red focus glow */}
        <div className="absolute -inset-6 rounded-[32px] bg-[#B11226]/15 blur-3xl" />

        <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.45)] border border-white/10 bg-white">
          <img
            src="/screenshots/careerbuilder-ui.png"
            alt="CareerBuilder platform interface"
            className="w-full object-cover"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-xl">

        {/* Eyebrow */}
        <span className="inline-block mb-6 text-xs font-semibold tracking-widest uppercase text-[#FCA5A5]">
          Career Platform
        </span>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#F6F1E8] leading-tight mb-6">
          CareerBuilder
        </h2>

        {/* Core value */}
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10">
          CareerBuilder helps students and early-career professionals create
          clear, professional CVs, cover letters, statements of purpose, and
          mini portfolios — without design skills or formatting stress.
        </p>

        {/* Key benefits */}
        <div className="space-y-4 mb-12 text-gray-200">
          <div className="flex gap-3">
            <span className="h-2 w-2 mt-2 rounded-full bg-[#B11226]" />
            Built around Nigerian education and job markets
          </div>
          <div className="flex gap-3">
            <span className="h-2 w-2 mt-2 rounded-full bg-[#B11226]" />
            Guided workflows that eliminate blank-page anxiety
          </div>
          <div className="flex gap-3">
            <span className="h-2 w-2 mt-2 rounded-full bg-[#B11226]" />
            Optimised for low-end devices and unreliable networks
          </div>
        </div>

        {/* Credibility blocks */}
        <div className="grid sm:grid-cols-2 gap-10 mb-14">

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#FCA5A5] mb-3">
              Technology
            </p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Built with React, Tailwind CSS, Node.js, and scalable
              cloud infrastructure designed for reliability.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#FCA5A5] mb-3">
              6-Month Outlook
            </p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Expanded templates, improved exports, and portfolio
              hosting features tailored to local career needs.
            </p>
          </div>

        </div>

        {/* CTA */}
        <a
          href="https://my-real-final-plp-project-8q5a.vercel.app/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#B11226] hover:underline"
        >
          Visit CareerBuilder
          <span aria-hidden>→</span>
        </a>

      </div>

    </div>
  </div>
</section>


{/* ================= PLATFORM 2 ================= */}
<section className="bg-[#F6F1E8] py-36">
  <div className="max-w-7xl mx-auto px-6 sm:px-10">

    <div className="grid md:grid-cols-2 gap-24 items-center">

      {/* CONTENT */}
      <div className="max-w-xl">

        {/* Eyebrow */}
        <span className="inline-block mb-6 text-xs font-semibold tracking-widest uppercase text-[#0A1F44]">
          Academic Tool
        </span>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#0F172A] leading-tight mb-6">
          Academic Analysis Tool
        </h2>

        {/* Core value */}
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10">
          The Academic Analysis Tool allows students to generate frequency tables,
          correlation, regression, and ANOVA results directly in the browser —
          without SPSS or complex statistical software.
        </p>

        {/* Key benefits */}
        <div className="space-y-4 mb-12 text-gray-700">
          <div className="flex gap-3">
            <span className="h-2 w-2 mt-2 rounded-full bg-[#0A1F44]" />
            Designed for Nigerian social science workflows
          </div>
          <div className="flex gap-3">
            <span className="h-2 w-2 mt-2 rounded-full bg-[#0A1F44]" />
            Removes dependency on expensive or pirated software
          </div>
          <div className="flex gap-3">
            <span className="h-2 w-2 mt-2 rounded-full bg-[#0A1F44]" />
            Outputs ready for assignments, projects, and reports
          </div>
        </div>

        {/* Credibility blocks */}
        <div className="grid sm:grid-cols-2 gap-10 mb-14">

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#0F172A] mb-3">
              Technology
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Built with browser-based computation logic, structured data
              processing, and client-side rendering for speed and clarity.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#0F172A] mb-3">
              6-Month Outlook
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Additional statistical tests, dataset uploads, and exportable
              result formats tailored to academic standards.
            </p>
          </div>

        </div>

        {/* CTA */}
        <a
          href="https://social-sciences-xi.vercel.app/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#B11226] hover:underline"
        >
          Visit Analysis Tool
          <span aria-hidden>→</span>
        </a>

      </div>

      {/* IMAGE — PRODUCT SURFACE */}
      <div className="relative">

        {/* Subtle depth frame */}
        <div className="absolute -inset-4 rounded-3xl bg-white/60 border border-[#E7E2D8]" />

        <div className="relative rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.18)] bg-white">
          <img
            src="/screenshots/academic-analysis-ui.png"
            alt="Academic analysis tool interface"
            className="w-full object-cover"
          />
        </div>

      </div>

    </div>
  </div>
</section>


      {/* ================= FUTURE VISION ================= */}
      <section className="bg-[#0A1F44] text-white py-28">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-6">
            What Comes Next
          </h3>

          <p className="text-lg text-gray-200 mb-8">
            Our goal is to build at least six open-access digital products
            within one year — each addressing a clear Nigerian pain point.
          </p>

          <p className="text-gray-300 mb-10">
            These platforms will continue to evolve based on real usage,
            feedback, and emerging needs across education and work.
          </p>

          <a
            href="/contact"
            className="inline-block bg-[#B11226] px-10 py-4 rounded-xl font-semibold hover:bg-red-700 transition"
          >
            Suggest a Platform Idea
          </a>
        </div>
      </section>

    </main>
  );
}
