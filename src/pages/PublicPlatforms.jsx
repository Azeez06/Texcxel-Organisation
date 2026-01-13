export default function PublicPlatforms() {
  return (
    <main className="bg-[#FBF6EF]">

      {/* HERO */}
      <section className="bg-[#0A1F44] text-white">
        <div className="max-w-7xl mx-auto px-8 py-28 text-center">
          <p className="text-sm uppercase tracking-widest text-red-400 mb-4 font-semibold">
            Public Platforms Initiative
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Building Free Digital Tools <br />
            <span className="text-red-500">for Real-World Problems</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-gray-200 leading-relaxed">
            Beyond client work, we design and release free web platforms that
            solve practical challenges in education, careers, and research —
            making powerful digital tools accessible to everyone.
          </p>
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="max-w-7xl mx-auto px-8 py-24 grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-extrabold text-[#0A1F44] mb-4">
            Why We Do This
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            We believe technology should reduce barriers, not create them.
            These platforms are our way of contributing real value to society
            while showcasing what thoughtful web engineering can achieve.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-extrabold text-[#0A1F44] mb-4">
            How It Works
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            We identify common pain points, design complete solutions,
            and deploy fully functional platforms — free to use, without
            ads or forced payments.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-extrabold text-[#0A1F44] mb-4">
            Long-Term Vision
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            We aim to launch new public platforms regularly, building a growing
            ecosystem of tools that empower students, professionals, and communities.
          </p>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A1F44] mb-14 text-center">
            Our Public Platforms
          </h2>

          <div className="grid md:grid-cols-2 gap-16">

            {/* CareerBuilder */}
            <div className="bg-[#FBF6EF] rounded-3xl border p-8 shadow-sm">
              <div className="rounded-2xl overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1586281380349-632531db7ed4"
                  alt="CareerBuilder platform"
                  className="w-full h-56 object-cover"
                />
              </div>

              <h3 className="text-2xl font-extrabold text-[#0A1F44] mb-4">
                CareerBuilder
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A free career development platform that helps students and
                professionals generate CVs, SOPs, cover letters, and portfolios —
                without needing design or writing expertise.
              </p>

              <a
                href="#"
                className="inline-block text-red-600 font-bold hover:underline"
              >
                Visit Platform →
              </a>
            </div>

            {/* Research Toolkit */}
            <div className="bg-[#FBF6EF] rounded-3xl border p-8 shadow-sm">
              <div className="rounded-2xl overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0"
                  alt="Research toolkit platform"
                  className="w-full h-56 object-cover"
                />
              </div>

              <h3 className="text-2xl font-extrabold text-[#0A1F44] mb-4">
                Research Toolkit
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A web-based research assistant that enables students to generate
                frequency tables, ANOVA, regression analysis, and more —
                without relying on SPSS or complex software.
              </p>

              <a
                href="#"
                className="inline-block text-red-600 font-bold hover:underline"
              >
                Visit Platform →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A1F44] text-white py-24">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h3 className="text-3xl font-extrabold mb-6">
            Have an Idea That Could Help Others?
          </h3>

          <p className="text-lg text-gray-200 mb-10">
            If you see a recurring problem in education, research, or community
            workflows, we’d love to explore building a public platform around it.
          </p>

          <a
            href="/contact"
            className="inline-block bg-red-600 text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-red-700 transition"
          >
            Suggest a Platform Idea
          </a>
        </div>
      </section>

    </main>
  );
}
