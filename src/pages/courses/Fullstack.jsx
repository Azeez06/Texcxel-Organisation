export default function Fullstack() {
  return (
     <main className="bg-[#F6F1E8]">

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#0A1F44] to-[#0E2F66] text-white">
        <div className="max-w-7xl mx-auto px-8 py-24">

          <p className="text-sm font-bold text-red-500 uppercase tracking-wide mb-4">
            Full-Stack Development
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Become a <span className="text-red-500">Complete Web Developer</span>
          </h1>

          <p className="max-w-3xl text-xl text-gray-200 leading-relaxed">
            Master both frontend and backend development in one
            intensive program — build full-scale web applications
            from idea to deployment.
          </p>

        </div>
      </section>
 {/* PROGRAM STATS */}
      <section className="bg-[#0A1F44] text-white border-t border-red-500/40">
        <div className="max-w-7xl mx-auto px-8 py-8 grid grid-cols-2 md:grid-cols-5 gap-8 text-base font-semibold">

          <div>
            <p className="text-red-400 uppercase text-sm mb-1">Duration</p>
            <p className="text-lg">3 Months</p>
          </div>

          <div>
            <p className="text-red-400 uppercase text-sm mb-1">Commitment</p>
            <p className="text-lg">20–25 hrs / week</p>
          </div>

          <div>
            <p className="text-red-400 uppercase text-sm mb-1">Mode</p>
            <p className="text-lg">Online</p>
          </div>

          <div>
            <p className="text-red-400 uppercase text-sm mb-1">Certificate</p>
            <p className="text-lg">Yes</p>
          </div>

          <div>
            <p className="text-red-400 uppercase text-sm mb-1">Price</p>
            <p className="text-lg">₦4,000 / month</p>
          </div>

        </div>
      </section>
       <section className="max-w-7xl mx-auto px-8 py-24 grid lg:grid-cols-3 gap-20">

        {/* LEFT */}
        <div className="lg:col-span-2">

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A1F44] mb-6">
            From Beginner to <span className="text-red-600">Job-Ready Full-Stack Developer</span>
          </h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            This intensive 3-month Full-Stack program combines
            frontend and backend development into a single
            career-ready pathway.
          </p>

          <p className="text-lg text-gray-700 mb-14 leading-relaxed">
            You will build complete applications, understand
            system architecture, work with databases, APIs,
            authentication, and deploy real products.
          </p>

          {/* PROGRAM STRUCTURE */}
          <h3 className="text-2xl font-extrabold text-[#0A1F44] mb-10">
            Program Structure
          </h3>

          <div className="space-y-8">

            {/* MONTH 1 */}
            <div className="bg-white rounded-2xl border-l-8 border-red-600 p-8 shadow-sm">
              <div className="flex justify-between mb-4">
                <h4 className="text-xl font-bold text-[#0A1F44]">
                  Frontend Foundations
                </h4>
                <span className="text-sm font-bold text-red-600 uppercase">
                  Month 1
                </span>
              </div>
              <p className="text-lg text-gray-700">
                HTML, CSS, responsive design, JavaScript,
                and building user-focused interfaces.
              </p>
            </div>

            {/* MONTH 2 */}
            <div className="bg-white rounded-2xl border-l-8 border-[#0A1F44] p-8 shadow-sm">
              <div className="flex justify-between mb-4">
                <h4 className="text-xl font-bold text-[#0A1F44]">
                  Backend Development
                </h4>
                <span className="text-sm font-bold text-[#0A1F44] uppercase">
                  Month 2
                </span>
              </div>
              <p className="text-lg text-gray-700">
                APIs, databases, authentication, server logic,
                and backend architecture.
              </p>
            </div>

            {/* MONTH 3 */}
            <div className="bg-white rounded-2xl border-l-8 border-red-600 p-8 shadow-sm">
              <div className="flex justify-between mb-4">
                <h4 className="text-xl font-bold text-[#0A1F44]">
                  Full-Stack Projects & Deployment
                </h4>
                <span className="text-sm font-bold text-red-600 uppercase">
                  Month 3
                </span>
              </div>
              <p className="text-lg text-gray-700">
                Build complete applications, integrate frontend
                and backend, deploy, and finalize your portfolio.
              </p>
            </div>

          </div>
        </div>
       {/* ENROLL CARD – FULLSTACK */}
<div className="bg-white rounded-3xl border shadow-md p-8 h-fit sticky top-24">

  {/* IMAGE */}
  <div className="rounded-2xl overflow-hidden mb-8">
    <img
      src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
      alt="Fullstack development workspace"
      className="w-full h-52 object-cover"
    />
  </div>

  {/* PRICE */}
  <div className="mb-6">
    <p className="text-sm uppercase tracking-wide text-gray-500 font-bold">
      Program Fee
    </p>
    <h3 className="text-4xl font-extrabold text-red-600">
      ₦4,000
      <span className="text-lg text-gray-600 font-semibold"> / month</span>
    </h3>
  </div>

  {/* TITLE */}
  <h4 className="text-2xl font-extrabold text-[#0A1F44] mb-6">
    This Fullstack program includes
  </h4>

  {/* FEATURES */}
  <ul className="space-y-4 text-lg text-gray-700 mb-10">
    <li className="flex gap-3">
      <span className="text-red-600 font-bold">—</span>
      Advanced frontend & backend projects
    </li>
    <li className="flex gap-3">
      <span className="text-red-600 font-bold">—</span>
      REST APIs & server-side development
    </li>
    <li className="flex gap-3">
      <span className="text-red-600 font-bold">—</span>
      Databases (SQL & NoSQL)
    </li>
    <li className="flex gap-3">
      <span className="text-red-600 font-bold">—</span>
      Authentication & authorization
    </li>
    <li className="flex gap-3">
      <span className="text-red-600 font-bold">—</span>
      Deployment, DevOps & production setup
    </li>
    <li className="flex gap-3">
      <span className="text-red-600 font-bold">—</span>
      Career-ready Fullstack portfolio
    </li>
  </ul>

  {/* CTA */}
  <button
  onClick={() => navigate("/dashboard/fullstack")}
  className="w-full bg-red-600 text-white py-4 rounded-xl text-lg font-bold hover:bg-red-700 transition"
>
  Enroll Now
</button>


  {/* FOOTER LINK */}
  <p className="text-center text-base text-[#0A1F44] mt-6 hover:underline cursor-pointer font-semibold">
    Back to all programs →
  </p>

</div>
      </section>

    
    </main>
  );
}
