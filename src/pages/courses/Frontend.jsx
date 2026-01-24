import Footer from "../../components/common/Footer";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
import { payWithPaystack } from "../../utils/paystack";

export default function Frontend() {
  const navigate = useNavigate();
  const handleEnroll = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    navigate("/auth?course=frontend");
    return;
  }

  const reference = `TX-${Date.now()}`;

  payWithPaystack({
    email: user.email,
    amount: 3000, // ₦3,000
    reference,
    onSuccess: async (ref) => {
      try {
        await api.post("/payment/verify", {
          reference: ref,
          courseId: "6973ee20f7e528ecb82edd7a", // FRONTEND COURSE ID
        });

        navigate("/dashboard");
      } catch (err) {
        alert("Payment verification failed");
        console.error(err);
      }
    },
    onClose: () => {
      alert("Payment cancelled");
    },
  });
};

  return (
    <main className="bg-[#FFF8EE]">

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#0A1F44] to-[#102E5E] text-white">
        <div className="max-w-7xl mx-auto px-8 py-28">

          <p className="text-sm font-bold tracking-widest text-red-400 uppercase mb-4">
            Frontend Development
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8">
            Design & Build <br />
            <span className="text-5xl">High-Impact Web Interfaces</span>
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-gray-200 leading-relaxed">
            A practical, fast-paced program focused on building modern,
            responsive, and interactive user interfaces using today’s
            frontend technologies.
          </p>

        </div>
      </section>

      {/* PROGRAM STATS */}
<section className="bg-[#0A1F44] text-white border-t border-red-500/40">
  <div className="max-w-7xl mx-auto px-8 py-8 grid grid-cols-2 md:grid-cols-5 gap-8 text-base font-semibold">

    <div>
      <p className="text-red-400 uppercase text-sm tracking-wide mb-1">
        Duration
      </p>
      <p className="text-lg">3 Months</p>
    </div>

    <div>
      <p className="text-red-400 uppercase text-sm tracking-wide mb-1">
        Commitment
      </p>
      <p className="text-lg">15–20 hrs / week</p>
    </div>

    <div>
      <p className="text-red-400 uppercase text-sm tracking-wide mb-1">
        Mode
      </p>
      <p className="text-lg">Online</p>
    </div>

    <div>
      <p className="text-red-400 uppercase text-sm tracking-wide mb-1">
        Certificate
      </p>
      <p className="text-lg">Yes</p>
    </div>

    <div>
      <p className="text-red-400 uppercase text-sm tracking-wide mb-1">
        Price
      </p>
      <p className="text-lg">₦3,000 / month</p>
    </div>

  </div>
</section>


      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-8 py-24 grid lg:grid-cols-3 gap-20">

        {/* LEFT */}
        <div className="lg:col-span-2">

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A1F44] mb-6">
            From Beginner to <span className="text-red-600">Job-Ready Frontend Developer</span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            This intensive 3-month Frontend Development program is built to
            give you real-world skills — not theory overload.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-14">
            You will build real projects, master core frontend tools,
            and graduate with a portfolio that clearly demonstrates
            your ability to design and develop modern web interfaces.
          </p>

          {/* PROGRAM STRUCTURE */}
          <h3 className="text-2xl font-extrabold text-[#0A1F44] mb-10">
            Program Structure
          </h3>

          <div className="space-y-8">

            {/* MONTH 1 */}
            <div className="bg-white rounded-2xl border-l-8 border-red-600 p-8 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold text-[#0A1F44]">
                  HTML, CSS & Responsive Design
                </h4>
                <span className="text-sm font-bold text-red-600 uppercase">
                  Month 1
                </span>
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                Learn how the web works, structure content properly,
                and design beautiful, responsive layouts that work
                seamlessly across devices.
              </p>
            </div>

            {/* MONTH 2 */}
            <div className="bg-white rounded-2xl border-l-8 border-[#0A1F44] p-8 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold text-[#0A1F44]">
                  JavaScript & User Interactions
                </h4>
                <span className="text-sm font-bold text-[#0A1F44] uppercase">
                  Month 2
                </span>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Add logic and interactivity to your websites using
                JavaScript — from DOM manipulation to real-world
                user interactions.
              </p>
            </div>

            {/* MONTH 3 */}
            <div className="bg-white rounded-2xl border-l-8 border-red-600 p-8 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold text-[#0A1F44]">
                  React, Projects & Deployment
                </h4>
                <span className="text-sm font-bold text-red-600 uppercase">
                  Month 3
                </span>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Build modern frontend applications using React,
                deploy your projects, and complete a professional
                portfolio ready for the job market.
              </p>
            </div>

          </div>
        </div>

        {/* ENROLL CARD */}
        <div className="bg-white rounded-3xl border shadow-md p-8 h-fit sticky top-24">

          <div className="rounded-2xl overflow-hidden mb-8">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
              alt="Frontend development workspace"
              className="w-full h-52 object-cover"
            />
          </div>

          <h4 className="text-2xl font-extrabold text-[#0A1F44] mb-6">
            This program includes
          </h4>

          <ul className="space-y-4 text-lg text-gray-700 mb-8">
            <li className="flex gap-3">
              <span className="text-red-600 font-bold">—</span>
              Real-world frontend projects
            </li>
            <li className="flex gap-3">
              <span className="text-red-600 font-bold">—</span>
              Portfolio-ready applications
            </li>
            <li className="flex gap-3">
              <span className="text-red-600 font-bold">—</span>
              Modern tools & best practices
            </li>
            <li className="flex gap-3">
              <span className="text-red-600 font-bold">—</span>
              Mentorship & career guidance
            </li>
          </ul>
<button
  onClick={handleEnroll}
  className="w-full bg-red-600 text-white py-4 rounded-xl text-lg font-bold hover:bg-red-700 transition"
>
  Enroll Now
</button>



          <p className="text-center text-base text-[#0A1F44] mt-6 hover:underline cursor-pointer font-semibold">
            Back to all programs →
          </p>

        </div>

      </section>
      {/* FAQ */}
<section className="bg-[#FFF8EE] py-24">
  <div className="max-w-6xl mx-auto px-8">

    <div className="text-center mb-16">
      <p className="text-sm font-bold tracking-widest text-red-600 uppercase mb-4">
        FAQ
      </p>
      <h2 className="text-4xl font-extrabold text-[#0A1F44]">
        Frequently Asked Questions
      </h2>
    </div>

    <div className="space-y-6">

      {/* FAQ ITEM */}
      <div className="bg-white rounded-2xl border-l-8 border-red-600 p-8 shadow-sm">
        <h4 className="text-xl font-bold text-[#0A1F44] mb-3">
          Do I need prior coding experience?
        </h4>
        <p className="text-lg text-gray-700 leading-relaxed">
          No. This program is beginner-friendly and starts from the basics.
          You’ll be guided step-by-step until you can confidently build
          frontend applications.
        </p>
      </div>

      <div className="bg-white rounded-2xl border-l-8 border-[#0A1F44] p-8 shadow-sm">
        <h4 className="text-xl font-bold text-[#0A1F44] mb-3">
          How long is the program?
        </h4>
        <p className="text-lg text-gray-700 leading-relaxed">
          The Frontend Development program runs for a total of 3 months,
          with structured learning, projects, and mentorship throughout.
        </p>
      </div>

      <div className="bg-white rounded-2xl border-l-8 border-red-600 p-8 shadow-sm">
        <h4 className="text-xl font-bold text-[#0A1F44] mb-3">
          Is the ₦4,000 payment monthly?
        </h4>
        <p className="text-lg text-gray-700 leading-relaxed">
          Yes. You pay ₦4,000 per month for the duration of the program.
          There are no hidden fees.
        </p>
      </div>

      <div className="bg-white rounded-2xl border-l-8 border-[#0A1F44] p-8 shadow-sm">
        <h4 className="text-xl font-bold text-[#0A1F44] mb-3">
          Will I get a certificate?
        </h4>
        <p className="text-lg text-gray-700 leading-relaxed">
          Yes. You will receive a certificate of completion after
          successfully finishing the program.
        </p>
      </div>

      <div className="bg-white rounded-2xl border-l-8 border-red-600 p-8 shadow-sm">
        <h4 className="text-xl font-bold text-[#0A1F44] mb-3">
          What happens after the program?
        </h4>
        <p className="text-lg text-gray-700 leading-relaxed">
          You’ll graduate with a portfolio, real project experience,
          and guidance on how to apply for frontend roles or freelance work.
        </p>
      </div>

    </div>
  </div>
</section>
<Footer />
    </main>
  );
}
