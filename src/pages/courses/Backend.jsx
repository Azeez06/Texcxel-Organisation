import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
import { payWithPaystack } from "../../utils/paystack";

export default function Backend() {
  const navigate = useNavigate();
  const handleEnroll = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    navigate("/auth?course=backend");
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
          courseId: "6974fdf4630ac1dd0ce8faab", // FRONTEND COURSE ID
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
    <main className="bg-[#FBF7F2]">

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#0A1F44] to-[#102F5E] text-white">
        <div className="max-w-7xl mx-auto px-8 py-24">
          <p className="text-sm font-bold tracking-widest text-red-400 uppercase mb-4">
            Backend Development
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Power the Web <br /> From Behind the Scenes
          </h1>

          <p className="max-w-2xl text-lg text-gray-200 leading-relaxed">
            Master server-side development, APIs, databases, and authentication
            systems that drive scalable and secure web applications.
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
            <p className="text-lg">₦4,000 / month</p>
          </div>

        </div>
      </section>

     {/* MAIN CONTENT */}
<section className="max-w-7xl mx-auto px-8 py-24 grid lg:grid-cols-3 gap-20">

  {/* LEFT */}
  <div className="lg:col-span-2">

    <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A1F44] mb-6">
      From Beginner to <span className="text-red-600">Job-Ready Backend Developer</span>
    </h2>

    <p className="text-lg text-gray-700 leading-relaxed mb-6">
      This intensive 3-month Backend Development program is designed to
      teach you how real production systems work — not just syntax.
    </p>

    <p className="text-lg text-gray-700 leading-relaxed mb-14">
      You will build APIs, manage databases, handle authentication,
      and deploy backend systems that power real-world applications.
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
            Backend Fundamentals & APIs
          </h4>
          <span className="text-sm font-bold text-red-600 uppercase">
            Month 1
          </span>
        </div>

        <p className="text-gray-700 text-lg leading-relaxed">
          Understand how the backend works, HTTP protocols,
          RESTful APIs, server architecture, and backend workflows.
        </p>
      </div>

      {/* MONTH 2 */}
      <div className="bg-white rounded-2xl border-l-8 border-[#0A1F44] p-8 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-xl font-bold text-[#0A1F44]">
            Databases & Authentication
          </h4>
          <span className="text-sm font-bold text-[#0A1F44] uppercase">
            Month 2
          </span>
        </div>

        <p className="text-gray-700 text-lg leading-relaxed">
          Work with SQL & NoSQL databases, data modeling,
          authentication, authorization, and security best practices.
        </p>
      </div>

      {/* MONTH 3 */}
      <div className="bg-white rounded-2xl border-l-8 border-red-600 p-8 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-xl font-bold text-[#0A1F44]">
            Deployment, Scaling & Final Project
          </h4>
          <span className="text-sm font-bold text-red-600 uppercase">
            Month 3
          </span>
        </div>

        <p className="text-gray-700 text-lg leading-relaxed">
          Deploy backend systems, optimize performance,
          and complete a real-world backend project
          ready for production use.
        </p>
      </div>

    </div>
  </div>

  {/* ENROLL CARD */}
  <div className="bg-white rounded-3xl border shadow-md p-8 h-fit sticky top-24">

    <div className="rounded-2xl overflow-hidden mb-8">
      <img
        src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
        alt="Backend development workspace"
        className="w-full h-52 object-cover"
      />
    </div>

    <h4 className="text-2xl font-extrabold text-[#0A1F44] mb-6">
      This program includes
    </h4>

    <ul className="space-y-4 text-lg text-gray-700 mb-8">
      <li className="flex gap-3">
        <span className="text-red-600 font-bold">—</span>
        Real-world backend projects
      </li>
      <li className="flex gap-3">
        <span className="text-red-600 font-bold">—</span>
        API & database mastery
      </li>
      <li className="flex gap-3">
        <span className="text-red-600 font-bold">—</span>
        Production-ready backend systems
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
{/* FAQ SECTION */}
<section className="bg-[#F6F1E8] border-t border-red-500/30 py-24">
  <div className="max-w-5xl mx-auto px-8">

    {/* HEADER */}
    <div className="text-center mb-16">
      <p className="text-sm font-bold text-red-600 uppercase tracking-wide mb-2">
        Frequently Asked Questions
      </p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A1F44]">
        Backend Program FAQs
      </h2>
    </div>

    {/* FAQ LIST */}
    <div className="space-y-6">

      {/* FAQ ITEM */}
      <div className="bg-white rounded-2xl border-l-8 border-red-600 p-6 shadow-sm">
        <h3 className="text-lg font-bold text-[#0A1F44] mb-2">
          Do I need prior backend experience?
        </h3>
        <p className="text-gray-700 leading-relaxed">
          No. This program starts from the fundamentals and gradually
          progresses to advanced backend concepts. Basic computer
          knowledge is enough to begin.
        </p>
      </div>

      <div className="bg-white rounded-2xl border-l-8 border-[#0A1F44] p-6 shadow-sm">
        <h3 className="text-lg font-bold text-[#0A1F44] mb-2">
          What backend technologies will I learn?
        </h3>
        <p className="text-gray-700 leading-relaxed">
          You will work with Node.js, databases (SQL & NoSQL),
          RESTful APIs, authentication systems, and deployment tools.
        </p>
      </div>

      <div className="bg-white rounded-2xl border-l-8 border-red-600 p-6 shadow-sm">
        <h3 className="text-lg font-bold text-[#0A1F44] mb-2">
          Is this program fully online?
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Yes. All classes, projects, mentorship, and assessments
          are delivered online with live guidance and recorded sessions.
        </p>
      </div>

      <div className="bg-white rounded-2xl border-l-8 border-[#0A1F44] p-6 shadow-sm">
        <h3 className="text-lg font-bold text-[#0A1F44] mb-2">
          Will I build real backend projects?
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Absolutely. You will build real-world APIs, authentication systems,
          and a final backend project suitable for production use.
        </p>
      </div>

      <div className="bg-white rounded-2xl border-l-8 border-red-600 p-6 shadow-sm">
        <h3 className="text-lg font-bold text-[#0A1F44] mb-2">
          Do I get a certificate after completion?
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Yes. You will receive a certificate of completion after
          successfully finishing the 3-month program and final project.
        </p>
      </div>

      <div className="bg-white rounded-2xl border-l-8 border-[#0A1F44] p-6 shadow-sm">
        <h3 className="text-lg font-bold text-[#0A1F44] mb-2">
          What happens after the program?
        </h3>
        <p className="text-gray-700 leading-relaxed">
          You will graduate with a backend portfolio, mentorship guidance,
          and readiness to apply for backend or full-stack roles.
        </p>
      </div>

    </div>

  </div>
</section>


    </main>
  );
}
