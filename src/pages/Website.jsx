import React from "react";
import Footer from "../components/common/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Website() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ================= HERO SECTION ================= */}
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
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80)",
        }}
      />

      {/* GRADIENT BLEND */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#08162F]/85 via-[#0A1F44]/80 to-[#08162F]/90" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          {/* Eyebrow */}
          <p className="text-[#B11226] font-bold uppercase tracking-wide mb-4">
            Web Design & Digital Solutions
          </p>

          {/* Heading */}
          <h1 className="font-extrabold leading-tight mb-6 text-[#FAF7F2] text-4xl sm:text-5xl md:text-6xl">
            Websites built to work,
            <br />
            not just to exist.
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-xl mb-10 leading-relaxed">
            We design and build modern websites and digital platforms that help
            businesses, startups, and institutions communicate clearly, scale
            confidently, and convert users into outcomes.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-6">
            <button
              onClick={() => navigate("/website")}
              className="bg-[#B11226] text-white px-8 py-4 rounded-full text-sm md:text-base font-bold hover:bg-red-700 transition"
            >
              Start a Project
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="text-[#FAF7F2] font-semibold hover:underline"
            >
              Book a Discovery Call →
            </button>
          </div>
        </motion.div>
      </div>
    </section>

{/* ================= CONSULTATION SECTION ================= */}
<section className="bg-[#FBF6EF] border-t border-[#E7E2D8]">
  <div className="max-w-7xl mx-auto px-6 sm:px-10 py-28">

    {/* HEADER */}
    <div className="max-w-3xl mb-16">
      <p className="text-xs font-semibold tracking-widest uppercase text-[#B11226] mb-4">
        Website Consultation & Strategy
      </p>

      <h2 className="text-3xl md:text-5xl font-extrabold text-[#0A1F44] leading-tight mb-5">
        The decisions before code <br className="hidden sm:block" />
        determine the outcome.
      </h2>

      <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
        Before design. Before development. We help organisations make the right
        website decisions early — so your build is clear, efficient, and built
        for real results.
      </p>
    </div>

    {/* CARDS */}
    <div className="grid md:grid-cols-3 gap-8">

      {/* CARD 1 — CREAM */}
      <div className="rounded-3xl bg-[#F6F1E8] border border-[#E7E2D8] p-10 shadow-sm hover:shadow-xl transition">
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#B11226]">
            <span className="h-2 w-2 rounded-full bg-[#B11226]" />
            Strategy
          </span>
        </div>

        <h3 className="text-xl md:text-2xl font-extrabold text-[#0A1F44] mb-4 leading-snug">
          Business & Website Discovery
        </h3>

        <p className="text-gray-700 leading-relaxed">
          We define your goals, audience, and success metrics — then translate
          that into a website direction that makes sense. This prevents wrong
          assumptions, wasted effort, and “nice-looking” websites that fail to
          deliver outcomes.
        </p>

        <div className="mt-8 pt-6 border-t border-[#E7E2D8]">
          <p className="text-sm text-gray-600">
            Output: clear scope, priorities, and direction.
          </p>
        </div>
      </div>

      {/* CARD 2 — NAVY (HIGH CONTRAST) */}
      <div className="rounded-3xl bg-[#0A1F44] p-10 shadow-[0_25px_70px_rgba(0,0,0,0.25)] hover:shadow-[0_35px_90px_rgba(0,0,0,0.35)] transition">
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#FCA5A5]">
            <span className="h-2 w-2 rounded-full bg-[#B11226]" />
            UX & Structure
          </span>
        </div>

        <h3 className="text-xl md:text-2xl font-extrabold text-[#F6F1E8] mb-4 leading-snug">
          User Experience & Content Planning
        </h3>

        <p className="text-gray-200 leading-relaxed">
          We plan the structure of your pages, user journeys, and content flow —
          so your website is intuitive, focused, and easy to use. No clutter.
          No confusing navigation. Just clarity that guides users to action.
        </p>

        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-sm text-gray-300">
            Output: sitemap, content plan, and UX direction.
          </p>
        </div>
      </div>

      {/* CARD 3 — CREAM */}
      <div className="rounded-3xl bg-[#F6F1E8] border border-[#E7E2D8] p-10 shadow-sm hover:shadow-xl transition">
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#B11226]">
            <span className="h-2 w-2 rounded-full bg-[#B11226]" />
            Technical
          </span>
        </div>

        <h3 className="text-xl md:text-2xl font-extrabold text-[#0A1F44] mb-4 leading-snug">
          Technical Advisory & Feasibility
        </h3>

        <p className="text-gray-700 leading-relaxed">
          We recommend the right technology, integrations, and system scope —
          based on your needs, timeline, and budget. No hype. The goal is a
          website that stays secure, scalable, and maintainable.
        </p>

        <div className="mt-8 pt-6 border-t border-[#E7E2D8]">
          <p className="text-sm text-gray-600">
            Output: stack guidance, integrations plan, feasibility review.
          </p>
        </div>
      </div>

    </div>

    {/* SUPPORTING LINE + CTA */}
    <div className="mt-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">

      <p className="text-base md:text-lg text-[#0A1F44] font-semibold">
        Most failed websites fail before they’re built.{" "}
        <span className="text-gray-700 font-normal">
          Our consultation process exists to prevent that.
        </span>
      </p>

      <div className="flex gap-4">
        <a
          href="/contact"
          className="inline-flex items-center justify-center px-7 py-3 rounded-lg bg-[#B11226] text-white text-sm font-semibold hover:bg-[#8F0E1E] transition"
        >
          Start With a Consultation
        </a>

        <a
          href="/website"
          className="inline-flex items-center justify-center px-7 py-3 rounded-lg border border-[#0A1F44] text-[#0A1F44] text-sm font-semibold hover:bg-[#0A1F44] hover:text-[#F6F1E8] transition"
        >
          See Service Scope →
        </a>
      </div>
    </div>

  </div>
</section>
{/* ================= ENGINEERING / TESTING / DEPLOYMENT ================= */}
<section className="bg-[#FBF6EF] border-t border-[#E7E2D8]">
  <div className="max-w-7xl mx-auto px-6 sm:px-10 py-28">

    {/* HEADER */}
    <div className="max-w-3xl mb-20">
      <p className="text-xs font-semibold tracking-widest uppercase text-[#B11226] mb-4">
        Engineering & Delivery
      </p>

      <h2 className="text-3xl md:text-5xl font-extrabold text-[#0A1F44] leading-tight mb-6">
        Turning strategy into <br className="hidden sm:block" />
        reliable digital systems
      </h2>

      <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
        Once direction is clear, we engineer, test, and deploy systems that        perform consistently under real-world usage.
      </p>
    </div>

    {/* PROCESS RAIL */}
    <div className="relative mb-24 hidden md:block">
      <div className="absolute top-1/2 left-0 right-0 h-px bg-[#0A1F44]/20" />
      <div className="flex justify-between">
        {["Engineering", "Testing", "Deployment"].map((step, i) => (
          <div key={i} className="relative">
            <span className="h-4 w-4 rounded-full bg-[#B11226] absolute -top-2 left-1/2 -translate-x-1/2" />
            <p className="mt-6 text-sm font-semibold text-[#0A1F44]">
              {step}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* CARDS */}
    <div className="grid md:grid-cols-3 gap-10">

      {/* ENGINEERING */}
      <div className="rounded-3xl bg-white border border-[#E7E2D8] shadow-lg hover:-translate-y-1 transition duration-300">
        <div className="h-56 overflow-hidden rounded-t-3xl">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
            alt="Software engineering and development"
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </div>

        <div className="p-8">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#B11226]">
            Engineering
          </span>

          <h3 className="text-xl md:text-2xl font-extrabold text-[#0A1F44] mt-3 mb-4">
            Product-Grade Development
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            We build clean, scalable, and secure websites and platforms using
            modern frontend and backend technologies — designed to grow with
            your organisation.
          </p>

          <p className="text-sm text-gray-600">
            Output: production-ready systems, documented architecture.
          </p>
        </div>
      </div>

      {/* TESTING */}
      <div className="rounded-3xl bg-white border border-[#E7E2D8] shadow-lg hover:-translate-y-1 transition duration-300">
       <div className="h-56 overflow-hidden rounded-t-3xl">
  <img
    src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg"
    alt="Website usability and quality assurance testing"
    className="w-full h-full object-cover hover:scale-105 transition duration-500"
  />
</div>


        <div className="p-8">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#B11226]">
            Testing
          </span>

          <h3 className="text-xl md:text-2xl font-extrabold text-[#0A1F44] mt-3 mb-4">
            Performance & Quality Assurance
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            We test usability, responsiveness, and performance across devices
            and browsers — resolving issues before real users encounter them.
          </p>

          <p className="text-sm text-gray-600">
            Output: validated builds, performance tuning.
          </p>
        </div>
      </div>

      {/* DEPLOYMENT */}
      <div className="rounded-3xl bg-white border border-[#E7E2D8] shadow-lg hover:-translate-y-1 transition duration-300">
        <div className="h-56 overflow-hidden rounded-t-3xl">
          <img
            src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg"
            alt="Cloud deployment and hosting"
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </div>

        <div className="p-8">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#B11226]">
            Deployment
          </span>

          <h3 className="text-xl md:text-2xl font-extrabold text-[#0A1F44] mt-3 mb-4">
            Launch, Hosting & Stability
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            We deploy on secure, scalable infrastructure, configure domains,
            optimise performance, and ensure long-term stability post-launch.
          </p>

          <p className="text-sm text-gray-600">
            Output: live deployment, monitoring readiness.
          </p>
        </div>
      </div>

    </div>

    {/* CTA */}
    <div className="mt-20 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
      <p className="text-lg font-semibold text-[#0A1F44]">
        Delivery is where strategy becomes reality.
      </p>

     <button
  onClick={() => setOpen(true)}
  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#B11226] text-white text-sm font-semibold hover:bg-[#8F0E1E] transition"
>
  Discuss Your Project
</button>

    </div>

  </div>
</section>

{/* ================= INDUSTRIES & USE-CASES ================= */}
<section className="bg-[#FBF6EF] border-t border-[#E7E2D8]">
  <div className="max-w-7xl mx-auto px-6 sm:px-10 py-28">

    {/* HEADER */}
    <div className="max-w-3xl mb-20">
      <p className="text-xs font-semibold tracking-widest uppercase text-[#B11226] mb-4">
        Industries & Use-Cases
      </p>

      <h2 className="text-3xl md:text-5xl font-extrabold text-[#0A1F44] leading-tight mb-6">
        Built for real sectors, <br className="hidden sm:block" />
        real workflows, real people
      </h2>

      <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
        We don’t design in abstraction. Our work is shaped by the realities
        of the industries and communities we serve.
      </p>
    </div>

    {/* GRID */}
    <div className="grid md:grid-cols-2 gap-12">

      {/* EDUCATION */}
      <div className="bg-white rounded-3xl border border-[#E7E2D8] shadow-lg p-10 hover:-translate-y-1 transition">
        <span className="inline-block mb-4 text-xs font-semibold tracking-widest uppercase text-[#B11226]">
          Education
        </span>

        <h3 className="text-2xl font-extrabold text-[#0A1F44] mb-4">
          Schools, Students & Academic Workflows
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          We build platforms that simplify learning, research, and academic
          administration — especially within Nigerian educational contexts.
        </p>

        <ul className="space-y-3 text-gray-700">
          <li className="flex gap-3">
            <span className="h-2 w-2 mt-2 rounded-full bg-[#B11226]" />
            Student portals and academic tools
          </li>
          <li className="flex gap-3">
            <span className="h-2 w-2 mt-2 rounded-full bg-[#B11226]" />
            Research and data analysis platforms
          </li>
          <li className="flex gap-3">
            <span className="h-2 w-2 mt-2 rounded-full bg-[#B11226]" />
            Career and skills development systems
          </li>
        </ul>
      </div>

      {/* STARTUPS & BUSINESSES */}
      <div className="bg-white rounded-3xl border border-[#E7E2D8] shadow-lg p-10 hover:-translate-y-1 transition">
        <span className="inline-block mb-4 text-xs font-semibold tracking-widest uppercase text-[#B11226]">
          Startups & Businesses
        </span>

        <h3 className="text-2xl font-extrabold text-[#0A1F44] mb-4">
          Growth-Focused Digital Products
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          We work with founders and teams to design and launch websites that
          support growth, credibility, and operations — not just presence.
        </p>

        <ul className="space-y-3 text-gray-700">
          <li className="flex gap-3">
            <span className="h-2 w-2 mt-2 rounded-full bg-[#B11226]" />
            Company websites and landing pages
          </li>
          <li className="flex gap-3">
            <span className="h-2 w-2 mt-2 rounded-full bg-[#B11226]" />
            E-commerce and payment systems
          </li>
          <li className="flex gap-3">
            <span className="h-2 w-2 mt-2 rounded-full bg-[#B11226]" />
            Internal tools and dashboards
          </li>
        </ul>
      </div>

      {/* MEDIA & CONTENT */}
      <div className="bg-white rounded-3xl border border-[#E7E2D8] shadow-lg p-10 hover:-translate-y-1 transition">
        <span className="inline-block mb-4 text-xs font-semibold tracking-widest uppercase text-[#B11226]">
          Media & Content
        </span>

        <h3 className="text-2xl font-extrabold text-[#0A1F44] mb-4">
          Publishing, News & Digital Storytelling
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          We design media platforms that balance speed, clarity, and scale —
          enabling teams to publish efficiently and engage audiences.
        </p>

        <ul className="space-y-3 text-gray-700">
          <li className="flex gap-3">
            <span className="h-2 w-2 mt-2 rounded-full bg-[#B11226]" />
            News and magazine websites
          </li>
          <li className="flex gap-3">
            <span className="h-2 w-2 mt-2 rounded-full bg-[#B11226]" />
            Content management systems
          </li>
          <li className="flex gap-3">
            <span className="h-2 w-2 mt-2 rounded-full bg-[#B11226]" />
            Analytics and audience insights
          </li>
        </ul>
      </div>

      {/* NGOs & PUBLIC SECTOR */}
      <div className="bg-white rounded-3xl border border-[#E7E2D8] shadow-lg p-10 hover:-translate-y-1 transition">
        <span className="inline-block mb-4 text-xs font-semibold tracking-widest uppercase text-[#B11226]">
          NGOs & Public Sector
        </span>

        <h3 className="text-2xl font-extrabold text-[#0A1F44] mb-4">
          Platforms for Impact & Access
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          We support organisations focused on social impact with platforms
          that communicate clearly, scale responsibly, and serve communities.
        </p>

        <ul className="space-y-3 text-gray-700">
          <li className="flex gap-3">
            <span className="h-2 w-2 mt-2 rounded-full bg-[#B11226]" />
            Programme and campaign websites
          </li>
          <li className="flex gap-3">
            <span className="h-2 w-2 mt-2 rounded-full bg-[#B11226]" />
            Data collection and reporting tools
          </li>
          <li className="flex gap-3">
            <span className="h-2 w-2 mt-2 rounded-full bg-[#B11226]" />
            Public-facing digital services
          </li>
        </ul>
      </div>
    </div>

    {/* FOOTNOTE */}
    <div className="mt-20 max-w-3xl">
      <p className="text-lg font-semibold text-[#0A1F44]">
        If your use-case doesn’t fit neatly into a box, that’s fine.
      </p>
      <p className="text-gray-700 mt-2">
        Our process adapts to problems — not templates.
      </p>
    </div>

  </div>
</section>


{/* ================= FINAL CTA ================= */}
<section className="bg-[#FBF6EF] border-t border-[#E7E2D8]">
  <div className="max-w-7xl mx-auto px-6 sm:px-10 py-32">

    {/* NAVY WRAP */}
    <div className="relative rounded-3xl bg-[#0A1F44] px-8 sm:px-16 py-24 overflow-hidden">

      {/* subtle gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F44] via-[#0F2A5C] to-[#08162F]" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">

        {/* Eyebrow */}
        <p className="text-xs font-semibold tracking-widest uppercase text-[#FCA5A5] mb-4">
          Ready to move forward?
        </p>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#F6F1E8] leading-tight mb-6">
          Choose how you want <br className="hidden sm:block" />
          to work with TechcXel
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-14">
          Whether you’re learning, building, or solving a specific problem,
          there’s a clear next step.
        </p>

        {/* CTA OPTIONS */}
        <div className="grid sm:grid-cols-3 gap-6">

          {/* STUDENT */}
          <a
            href="/academy"
            className="group rounded-2xl bg-[#F6F1E8] text-[#0A1F44] px-8 py-8 text-left hover:-translate-y-1 transition shadow-lg"
          >
            <p className="text-sm font-semibold text-[#B11226] mb-2">
              For Students
            </p>
            <h3 className="text-lg font-extrabold mb-3">
              Learn Practical Tech Skills
            </h3>
            <p className="text-sm text-gray-700 mb-4">
              Gain hands-on experience through guided training and real-world
              projects.
            </p>
            <span className="text-sm font-semibold text-[#B11226]">
              Explore Training →
            </span>
          </a>

          {/* ORGANISATION */}
          <a
            href="/contact"
            className="group rounded-2xl bg-white text-[#0A1F44] px-8 py-8 text-left hover:-translate-y-1 transition shadow-lg"
          >
            <p className="text-sm font-semibold text-[#B11226] mb-2">
              For Organisations
            </p>
            <h3 className="text-lg font-extrabold mb-3">
              Build or Improve a Website
            </h3>
            <p className="text-sm text-gray-700 mb-4">
              Start with consultation, then move into engineering and delivery
              with clarity.
            </p>
            <span className="text-sm font-semibold text-[#B11226]">
              Start a Conversation →
            </span>
          </a>

          {/* FOUNDERS / PUBLIC */}
          <a
            href="/public-platforms"
            className="group rounded-2xl bg-[#F6F1E8] text-[#0A1F44] px-8 py-8 text-left hover:-translate-y-1 transition shadow-lg"
          >
            <p className="text-sm font-semibold text-[#B11226] mb-2">
              For Builders & Communities
            </p>
            <h3 className="text-lg font-extrabold mb-3">
              Explore Public Platforms
            </h3>
            <p className="text-sm text-gray-700 mb-4">
              See the free tools we’ve built to solve real problems at scale.
            </p>
            <span className="text-sm font-semibold text-[#B11226]">
              View Platforms →
            </span>
          </a>

        </div>

      </div>
    </div>

    {/* CLOSING LINE */}
    <div className="mt-16 text-center max-w-2xl mx-auto">
      <p className="text-lg font-semibold text-[#0A1F44]">
        Thoughtful technology starts with clear intent.
      </p>
      <p className="text-gray-700 mt-2">
        We’re ready when you are.
      </p>
    </div>

  </div>
</section>
{open && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    
    <div className="bg-white rounded-2xl p-6 max-w-sm w-full mx-4 text-center">
      <h3 className="text-lg font-bold text-[#0A1F44] mb-3">
        Continue to WhatsApp
      </h3>

      <p className="text-sm text-gray-600 mb-6">
        You’ll be redirected to WhatsApp to send us a message about your project.
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => setOpen(false)}
          className="flex-1 px-4 py-2 rounded-lg border text-sm font-semibold text-gray-600 hover:bg-gray-100"
        >
          Cancel
        </button>

        <a
          href="https://wa.me/2348133546108?text=Hello%2C%20my%20name%20is%20____.%20I%20found%20TechcXel%20and%20would%20like%20to%20discuss%20a%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 px-4 py-2 rounded-lg bg-[#B11226] text-white text-sm font-semibold hover:bg-[#8F0E1E]"
        >
          Continue
        </a>
      </div>
    </div>

  </div>
)}

      <Footer />
    </>
  );
}
