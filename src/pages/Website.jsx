import React from "react";
import Footer from "../components/common/Footer";
import { Link } from "react-router-dom";

export default function Website() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="w-full min-h-screen bg-[#0B1C2D]">
        <div className="grid md:grid-cols-2 min-h-screen">

          {/* LEFT SIDE — IMAGE */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              alt="Web developer working on computer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0B1C2D]/40"></div>
          </div>

          {/* RIGHT SIDE — CONTENT */}
          <div className="flex items-center px-10 md:px-16 lg:px-20">
            <div className="max-w-lg">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Web Design company <br />
                with a mint of creativity
              </h1>

              <p className="text-gray-300 leading-relaxed mb-8">
                Powerful websites that help you easily, effectively, and
                affordably grow your business. We design with purpose,
                clarity, and long-term value in mind.
              </p>

              <button className="bg-[#B11226] hover:bg-[#8F0E1E] transition text-white px-7 py-3 rounded-md text-sm font-medium">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

{/* E-COMMERCE SECTION */}
<section className="bg-gray-50 py-24">
  <div className="max-w-7xl mx-auto px-8">

    {/* HEADER — CENTERED */}
    <div className="max-w-3xl mx-auto mb-16 text-center">
      <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-2">
        E-Commerce Websites
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Online stores built for growth and scalability
      </h2>
      <p className="text-gray-600 leading-relaxed">
        We design e-commerce platforms ranging from simple product catalogs
        to advanced systems with secure payments and AI-powered customer support.
      </p>
    </div>

    {/* CARDS */}
    <div className="grid md:grid-cols-3 gap-10 mb-20">

      {/* CARD 1 */}
      <div className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition group">
        <div className="h-64 md:h-72">
          <img
            src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?auto=format&fit=crop&w=1200&q=80"
            alt="E-commerce website storefront"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
        </div>
        <div className="p-6 flex flex-col justify-between h-[180px]">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Standard E-Commerce Website
            </h3>
            <p className="text-sm text-gray-600">
              A clean online store showcasing products, categories, and promotions.
            </p>
          </div>

          <Link
            to="/ecommerce/basic"
            className="mt-4 text-sm font-semibold text-blue-700 hover:underline"
          >
            View details →
          </Link>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition group">
        <div className="h-64 md:h-72">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80"
            alt="Online payment and checkout system"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
        </div>
        <div className="p-6 flex flex-col justify-between h-[180px]">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Payment Gateway Integration
            </h3>
            <p className="text-sm text-gray-600">
              Secure checkout systems with cards, transfers, and mobile payments.
            </p>
          </div>

          <Link
            to="/ecommerce/payments"
            className="mt-4 text-sm font-semibold text-blue-700 hover:underline"
          >
            View details →
          </Link>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition group">
        <div className="h-64 md:h-72">
          <img
            src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&w=1200&q=80"
            alt="AI chatbot on website interface"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
        </div>
        <div className="p-6 flex flex-col justify-between h-[180px]">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">
              AI Chatbot E-Commerce
            </h3>
            <p className="text-sm text-gray-600">
              Intelligent chatbots that assist customers and boost conversions.
            </p>
          </div>

          <Link
            to="/ecommerce/ai"
            className="mt-4 text-sm font-semibold text-blue-700 hover:underline"
          >
            View details →
          </Link>
        </div>
      </div>

    </div>


  </div>
</section>

<section className="bg-white py-24">
  <div className="max-w-7xl mx-auto px-8">

    {/* SECTION HEADER */}
    <div className="max-w-3xl mx-auto mb-16 text-center">
      <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-2">
        Education Websites
      </p>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Digital platforms for learning, growth, and impact
      </h2>
      <p className="text-gray-600 leading-relaxed">
        From simple school websites to advanced learning platforms,
        we design education-focused solutions that are clear, engaging,
        and easy to manage.
      </p>
    </div>

    {/* CARDS */}
    <div className="grid md:grid-cols-3 gap-10">

      {/* CARD 1 */}
      <div className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition">
        <div className="h-64 md:h-72 bg-gray-100">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80"
            alt="Basic education website"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 flex flex-col justify-between min-h-[220px]">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2 text-lg">
              Basic Education Website
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              A simple and professional website for schools, training centers,
              or academies to share information, admissions, and announcements.
            </p>
          </div>

          <div className="pt-4">
            <span className="text-sm font-medium text-[#B11226] hover:underline cursor-pointer">
              Learn More →
            </span>
          </div>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition">
        <div className="h-64 md:h-72 bg-gray-100">
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80"
            alt="Advanced education platform"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 flex flex-col justify-between min-h-[220px]">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2 text-lg">
              Advanced Education Platform
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Enhanced education websites with course listings, student portals,
              downloadable materials, and interactive content.
            </p>
          </div>

          <div className="pt-4">
            <span className="text-sm font-medium text-[#B11226] hover:underline cursor-pointer">
              Contact Us →
            </span>
          </div>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition">
        <div className="h-64 md:h-72 bg-gray-100">
          <img
            src="https://images.unsplash.com/photo-1600195077077-7c815f540a3a?auto=format&fit=crop&w=1200&q=80"
            alt="Smart learning system"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 flex flex-col justify-between min-h-[220px]">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2 text-lg">
              Smart Learning System
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Advanced learning platforms with LMS integration, virtual classrooms,
              analytics, and AI-powered student engagement tools.
            </p>
          </div>

          <div className="pt-4">
            <span className="text-sm font-medium text-[#B11226] hover:underline cursor-pointer">
              Learn More →
            </span>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<section className="bg-gray-50 py-24">
  <div className="max-w-7xl mx-auto px-8">

    {/* SECTION HEADER */}
    <div className="max-w-3xl mx-auto mb-16 text-center">
      <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-2">
        NGO & Non-Profit Websites
      </p>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Websites that tell stories and drive impact
      </h2>
      <p className="text-gray-600 leading-relaxed">
        We help non-profits and social impact organizations communicate
        their mission clearly, inspire trust, and connect with donors,
        partners, and communities.
      </p>
    </div>

    {/* CARDS */}
    <div className="grid md:grid-cols-3 gap-10">

      {/* CARD 1 */}
      <div className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition">
        <div className="h-64 md:h-72 bg-gray-100">
          <img
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80"
            alt="NGO basic website"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 flex flex-col justify-between min-h-[230px]">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2 text-lg">
              Basic NGO Website
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              A clean and informative website that showcases your mission,
              activities, team, and contact information.
            </p>
          </div>

          <div className="pt-4">
            <span className="text-sm font-medium text-[#B11226] hover:underline cursor-pointer">
              Learn More →
            </span>
          </div>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition">
        <div className="h-64 md:h-72 bg-gray-100">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
            alt="NGO programs and campaigns"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 flex flex-col justify-between min-h-[230px]">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2 text-lg">
              Program-Focused NGO Website
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Websites designed to highlight projects, campaigns, impact stories,
              galleries, and volunteer opportunities.
            </p>
          </div>

          <div className="pt-4">
            <span className="text-sm font-medium text-[#B11226] hover:underline cursor-pointer">
              Contact Us →
            </span>
          </div>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition">
        <div className="h-64 md:h-72 bg-gray-100">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
            alt="Advanced NGO platform"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 flex flex-col justify-between min-h-[230px]">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2 text-lg">
              Advanced NGO Platform
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Full-featured platforms with donation systems, volunteer portals,
              event management, reports, and data-driven storytelling.
            </p>
          </div>

          <div className="pt-4">
            <span className="text-sm font-medium text-[#B11226] hover:underline cursor-pointer">
              Learn More →
            </span>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<section className="bg-white py-24">
  <div className="max-w-7xl mx-auto px-8">

    {/* SECTION HEADER */}
    <div className="max-w-3xl mx-auto mb-16 text-center">
      <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-2">
        Media & Communication
      </p>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Platforms for storytelling, publishing, and engagement
      </h2>
      <p className="text-gray-600 leading-relaxed">
        We build media-focused websites that help journalists, creators,
        and organizations publish content, manage audiences, and amplify
        their voices in the digital space.
      </p>
    </div>

    {/* CARDS */}
    <div className="grid md:grid-cols-3 gap-10">

      {/* CARD 1 */}
      <div className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition">
        <div className="h-64 md:h-72 bg-gray-100">
          <img
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80"
            alt="Media portfolio website"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 flex flex-col justify-between min-h-[230px]">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2 text-lg">
              Basic Media Website
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Simple and clean websites for journalists, writers, or media
              teams to showcase articles, portfolios, and contact details.
            </p>
          </div>

          <div className="pt-4">
            <span className="text-sm font-medium text-[#B11226] hover:underline cursor-pointer">
              Learn More →
            </span>
          </div>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition">
        <div className="h-64 md:h-72 bg-gray-100">
          <img
            src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1200&q=80"
            alt="Online media platform"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 flex flex-col justify-between min-h-[230px]">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2 text-lg">
              News & Publishing Platform
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Advanced platforms with article management, categories,
              multimedia publishing, and audience-friendly layouts.
            </p>
          </div>

          <div className="pt-4">
            <span className="text-sm font-medium text-[#B11226] hover:underline cursor-pointer">
              Contact Us →
            </span>
          </div>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition">
        <div className="h-64 md:h-72 bg-gray-100">
          <img
            src="https://images.unsplash.com/photo-1603575448878-868a20723f5d?auto=format&fit=crop&w=1200&q=80"
            alt="Advanced media platform"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 flex flex-col justify-between min-h-[230px]">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2 text-lg">
              Advanced Media Platform
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Full-scale media systems with analytics, subscriptions,
              editorial workflows, and audience engagement tools.
            </p>
          </div>

          <div className="pt-4">
            <span className="text-sm font-medium text-[#B11226] hover:underline cursor-pointer">
              Learn More →
            </span>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


      <Footer />
    </>
  );
}
