export default function About() {
  return (
    <section className="bg-[#FAF7F2] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-8 py-28 space-y-28">

        {/* SECTION 1 — WHO WE ARE */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="w-full h-[420px] rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80"
              alt="Modern workspace with technology and creative tools"
              className="w-full h-full object-cover"
            />
          </div>

          {/* TEXT */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A1F44]">
              Who We Are
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We are a technology-focused organisation committed to building
              digital solutions with clarity, intention, and long-term value
              in mind. Our work sits at the intersection of technology,
              learning, and problem-solving.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We collaborate with individuals, organisations, and institutions
              that value thoughtful design, disciplined learning, and systems
              that actually work in the real world.
            </p>
          </div>

        </div>

        {/* SECTION 2 — HOW WE WORK */}
        <div className="max-w-4xl space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A1F44]">
            How We Work
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our approach is grounded in rigorous learning, careful thinking,
            and practical execution. We prioritise clarity over complexity and
            focus on building systems that are easy to understand, maintain,
            and scale.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Rather than chasing trends, we invest time in understanding
            fundamentals, refining processes, and continuously improving how
            we design, build, and deliver technology.
          </p>
        </div>

        {/* SECTION 3 — WHAT WE’RE BUILDING TOWARD */}
        <div className="max-w-4xl space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A1F44]">
            What We’re Building Toward
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We are building towards a future where technology supports learning,
            empowers people to start meaningful projects, and helps organisations
            solve real problems with confidence.
          </p>
          <p className="text-gray-700 leading-relaxed">
            As we grow, our focus remains on steady progress, responsible
            innovation, and creating digital tools and platforms that stand
            the test of time.
          </p>
        </div>

      </div>
    </section>
  );
}
