import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import HeroSlider from "../components/home/HeroSlider";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, TrendingUp, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const services = [ { title: "Website Design & Development", text: "We design and build clean, responsive, and scalable websites tailored to your goals. From landing pages to full web applications, our solutions prioritize usability, performance, and long-term growth.", link: "/website", }, 
  { title: "Brand & Graphic Design", text: "We create logos, brand identities, and visual systems that communicate clearly and consistently. Our designs help businesses build trust, recognition, and a strong digital presence.", }, 
  { title: "Learning & Training", text: "We teach practical website design and development skills through structured training and mentorship. Our focus is hands-on learning that prepares individuals for real-world projects.", link: "/internship", }, 
  { title: "AI & System Integration", text: "We integrate AI tools, chatbots, payment gateways, and automation systems into websites to improve efficiency, user experience, and business operations.",link: "/ai-integration" }, 
  { title: "Website Design Internship", text: "Our internship program provides aspiring designers and developers with real project experience, guidance, and exposure to modern tools and workflows in web design and development.", }, 
  { title: "Public-Good Web Platforms", text: "We design and build free web tools that solve real problems in diverse sectors. These platforms are open for public use, created to help students, professionals, and communities access to digital solutions", link: "/public-platforms" },
];
export default function Home() {
  const quotes =[
  {
    text: "Technology is best when it brings people together.",
    author: "Matt Mullenweg"
  },
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay"
  },
  {
    text: "Learning never exhausts the mind.",
    author: "Leonardo da Vinci"
  },
  {
    text: "Success is the product of daily habits, not once-in-a-lifetime transformations.",
    author: "James Clear"
  },
  {
    text: "It’s not about ideas. It’s about making ideas happen.",
    author: "Scott Belsky"
  },
  {
    text: "The most powerful skill in technology is the ability to learn continuously.",
    author: "Satya Nadella"
  },
  {
    text: "An investment in knowledge pays the best interest.",
    author: "Benjamin Franklin"
  },
  {
    text: "If you’re not embarrassed by the first version of your product, you launched too late.",
    author: "Reid Hoffman"
  },
  {
    text: "Discipline is choosing between what you want now and what you want most.",
    author: "Abraham Lincoln"
  },
  {
    text: "Every great developer you know got there by solving problems they were unqualified to solve.",
    author: "Patrick McKenzie"
  },
  {
    text: "The function of education is to teach one to think intensively and critically.",
    author: "Martin Luther King Jr."
  },
  {
    text: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe"
  },
  {
    text: "The real problem is not whether machines think but whether people do.",
    author: "B. F. Skinner"
  },
  {
    text: "Small disciplines repeated with consistency every day lead to great achievements.",
    author: "John C. Maxwell"
  },
  {
    text: "Learning to write programs stretches your mind and helps you think better.",
    author: "Bill Gates"
  },
  {
    text: "Do not wait to strike till the iron is hot; make it hot by striking.",
    author: "William Butler Yeats"
  },
  {
    text: "You don’t have to be great to start, but you have to start to be great.",
    author: "Zig Ziglar"
  },
  {
    text: "The ability to simplify means to eliminate the unnecessary so that the necessary may speak.",
    author: "Hans Hofmann"
  },
  {
    text: "Growth and comfort do not coexist.",
    author: "Ginni Rometty"
  },
  {
    text: "First learn the rules, then break them intelligently.",
    author: "Pablo Picasso"
  }
];

   const [isOpen, setIsOpen] = useState(false);
  const [currentQuote, setCurrentQuote] = useState("");

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  useEffect(() => {
    if (isOpen) getRandomQuote();
  }, [isOpen]);

  const navigate = useNavigate();
  return (
    <div className="w-full">      
   <section className="sticky top-0 z-50 bg-[#F6F1E8]/95 backdrop-blur border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-10 py-4 flex items-center justify-between">

    {/* BRAND */}
    <h1 className="text-xl font-extrabold tracking-tight text-[#0F172A]">
      <span className="text-[#B11226]">Tech</span>cXel
    </h1>

    {/* NAV LINKS */}
    <nav className="hidden md:flex gap-10 text-sm font-medium text-gray-700">
      <a className="relative hover:text-[#B11226] transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#B11226] hover:after:w-full after:transition-all">
        About
      </a>
      <a className="relative hover:text-[#B11226] transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#B11226] hover:after:w-full after:transition-all">
        What We Do
      </a>
      <a className="relative hover:text-[#B11226] transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#B11226] hover:after:w-full after:transition-all">
        Community
      </a>
      <a className="relative hover:text-[#B11226] transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#B11226] hover:after:w-full after:transition-all">
        Contact
      </a>
    </nav>

    {/* CTA */}
    <button 
    onClick={ () => navigate("/book-us")}
    className="text-sm font-semibold text-[#B11226] border border-[#B11226] px-6 py-2.5 rounded-lg hover:bg-[#B11226] hover:text-white transition">
      Talk to us
    </button>

  </div>

  {/* BRAND ACCENT LINE */}
  <div className="h-[2px] bg-gradient-to-r from-[#B11226] via-[#0F172A] to-transparent" />
</section>

 <HeroSlider />
   <section className="bg-[#F6F1E8]">
  <div className="max-w-7xl mx-auto px-10 py-28">

    {/* HEADER */}
    <div className="max-w-2xl mx-auto mb-14 text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold text-[#0F172A] mb-3">
        Digital <span className="text-[#B11226]">&amp;</span> Futures
      </h1>

      <h2 className="text-xl md:text-2xl font-bold text-[#0F172A]">
        World-class experiences shaped by design and technology
      </h2>
    </div>

    {/* CARDS */}
    <div className="grid md:grid-cols-3 gap-6">
      {services.map((item, i) => {
        const Card = (
          <div
            className="
             bg-white rounded-xl p-6 min-h-[260px] flex flex-col justify-between border border-gray-200 transition duration-300 hover:border-[#B11226] hover:-translate-y-1
            "
          >
            <div>
              <h3 className="text-xl font-extrabold text-[#0F172A] mb-3">
                {item.title}
              </h3>

              <p className="text-base text-gray-600 leading-relaxed">
                {item.text}
              </p>
            </div>

            <span className="mt-6 text-sm font-semibold text-[#B11226] hover:underline">
              Learn more →
            </span>
          </div>
        );

        return item.link ? (
          <Link key={i} to={item.link}>
            {Card}
          </Link>
        ) : (
          <div key={i}>{Card}</div>
        );
      })}
    </div>

  </div>
</section>


<section className="bg-[#FAF7F2] border-t border-gray-200">
  <div className="max-w-7xl mx-auto px-10 py-28">

    {/* WRAP GRID IN RELATIVE CONTAINER */}
    <div className="relative">

   {/* OVERLAY TITLE */}
<div className="absolute left-1/2 -translate-x-1/2 -top-10 z-20">
  <h2 className="text-6xl font-extrabold tracking-tight whitespace-nowrap">
    <span className="text-red-600">Tech</span>
    <span className="text-[#0A1F44]">cXel</span>
    <span className="text-[#0A1F44] ml-4">
      Philosophy
    </span>
  </h2>
</div>


      {/* Add top padding so content sits under the overlay */}
      <div className="grid md:grid-cols-2 gap-8 items-center pt-12">

        {/* IMAGE */}
        <img
          src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg"
          alt="Engineer coding at a workstation"
          className="w-full h-[600px] object-cover object-top rounded-2xl"
        />

        {/* TEXT */}
        <div className="space-y-10">

          {/* remove old title */}
          <p className="text-lg text-gray-700 font-semibold leading-relaxed">
            We believe technology should simplify life, not complicate it.
            We design systems that are easy to understand, useful to people,
            and grounded in real-world impact.
          </p>

          <div className="space-y-6">

            <div>
              <h3 className="text-xl font-bold text-[#0A1F44] mb-2">
                Core Values
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Clarity over complexity. Impact over hype. Every design choice
                is guided by usefulness and integrity.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#0A1F44] mb-2">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To create digital solutions and learning platforms that address
                real problems for people and organizations.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#0A1F44] mb-2">
            Our Short Term Goals
              </h3>
              <p className="text-gray-600 leading-relaxed">
                 To launch and refine digital solutions that meet current market needs,
  strengthen our portfolio, and establish Texcel as a credible technology partner.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#0A1F44] mb-2">
                Our Long Term Goals
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To consistently design and deploy long-lasting digital solutions that drive growth,
  improve access, and create measurable value for people and organizations.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>

  </div>
</section>



<section className="bg-[#F6F1E8] border-t border-gray-200">
  <div className="max-w-7xl mx-auto px-10 py-24">

    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0F172A] mb-12">
      Our <span className="text-[#B11226]">Media</span> Insight
    </h2>

    <div className="flex md:grid md:grid-cols-3 gap-10 overflow-x-auto md:overflow-visible pb-4">

     <motion.a
  href="https://aibase.ng"
  target="_blank"
  rel="noopener noreferrer"
  className="group min-w-[280px] md:min-w-0 bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#B11226] transition min-h-[520px] flex flex-col"
>
  {/* IMAGE */}
  <div className="h-76 overflow-hidden">
    <img
      src="https://aibase.ng/wp-content/uploads/2026/01/v2-16sxo9-t3z6a-768x512.jpg"
      alt="AI and tech developments in Nigeria"
      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
    />
  </div>

  {/* CONTENT */}
  <div className="p-6 flex flex-col justify-between flex-1">
    <p className="text-xs text-gray-500 mb-2">
      AIBase NG · Dec 21, 2025
    </p>

    <h3 className="text-lg font-bold text-[#0F172A] leading-snug mb-4 mt-3">
      The Defining AI Moments in Nigeria in 2025
    </h3>

    <span className="text-sm font-medium text-[#B11226]">
      Read more →
    </span>
  </div>
</motion.a>




      {/* CARD 2 */}
      <motion.a
        href="https://businesspost.ng/technology/ai-and-web-development-the-unexpected-partnership-thats-changing-everything/"
        target="_blank"
        rel="noopener noreferrer"
        className="group min-w-[280px] md:min-w-0 bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#B11226] transition min-h-[520px] flex flex-col"
>

        <div className="h-76 overflow-hidden">
          <img
            src="https://businesspost.ng/wp-content/uploads/2024/12/web-development.jpeg"
            alt="Hackathon and tech innovation in Nigeria"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
        </div>

        <div className="p-6 flex flex-col justify-between flex-1">
          <p className="text-xs text-gray-500 mb-2">
            Business Post · Oct 12, 2025
          </p>

          <h3 className="text-lg font-bold text-[#0F172A] leading-snug mb-4 mt-3">
            Lagos Team Nevo Wins Southwest Hackathon Showcasing AI & Tech
          </h3>

          <span className="text-sm font-medium text-[#B11226]">
            Read more →
          </span>
        </div>
      </motion.a>



      {/* CARD 3 */}
      <motion.a
        href="https://www.reuters.com/technology/google-among-investors-putting-110-million-into-nigerias-moniepoint-2024-10-29/"
        target="_blank"
        rel="noopener noreferrer"
        className="group min-w-[280px] md:min-w-0 bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#B11226] transition min-h-[520px] flex flex-col"
>

        <div className="h-76 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80"
            alt="Fintech and tech funding in Nigeria"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
        </div>

        <div className="p-6 flex flex-col justify-between flex-1">
          <p className="text-xs text-gray-500 mb-2">
            Reuters · Oct 29, 2024
          </p>

          <h3 className="text-lg font-bold text-[#0F172A] leading-snug mb-4">
            Google Invests $110M in Nigerian Fintech Moniepoint
          </h3>

          <span className="text-sm font-medium text-[#B11226]">
            Read more →
          </span>
        </div>
      </motion.a>

    </div>

  </div>
</section>


<section className="bg-gradient-to-b from-[#FAF7F2] to-[#F6F1E8] border-t border-gray-200">
  <div className="max-w-7xl mx-auto px-10 py-32">

    {/* SECTION HEADER */}
   <div className="text-center mb-12">
  <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-3">
    Choose Your Path
  </h2>
  <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
    There are different ways to engage with our work. Choose the path that
    matches your goals and intentions.
  </p>
</div>


    {/* CARDS */}
    <div className="grid md:grid-cols-3 gap-10">

      {/* INTERNSHIP — LEARNING & GROWTH */}
      <div className="flex flex-col rounded-2xl overflow-hidden bg-[#ECF5EE] border border-[#CFE6D8] shadow-sm hover:shadow-lg transition min-h-[540px]">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="People learning together"
          className="h-52 w-full object-cover"
        />

        <div className="p-8 flex flex-col justify-between flex-1">
          <div>
            <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
              Explore Our Internship
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Learn website design and development through real projects,
              mentorship, and guided practice. Our internship focuses on
              building confidence, clarity, and practical skills.
            </p>
          </div>

          <span className="mt-10 text-sm font-semibold text-[#2F7D4E] hover:underline cursor-pointer">
            View Internship →
          </span>
        </div>
      </div>

      {/* BUILD WITH US — TRUST & PROFESSIONALISM */}
      <div className="flex flex-col rounded-2xl overflow-hidden bg-[#0F172A] text-white shadow-md hover:shadow-xl transition min-h-[540px]">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Team discussion and planning"
          className="h-52 w-full object-cover opacity-90"
        />

        <div className="p-8 flex flex-col justify-between flex-1">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Build Your Website With Us
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Book a conversation with us to design and build a website or
              digital platform for your organisation. We work with NGOs,
              individuals, and public institutions.
            </p>
          </div>

          <button className="mt-10 self-start text-sm font-semibold text-white border border-white px-5 py-2 rounded-md hover:bg-white hover:text-[#0F172A] transition">
            Book a Chat
          </button>
        </div>
      </div>

      {/* PROBLEM SOLVERS — IMPACT & PURPOSE */}
      <div className="flex flex-col rounded-2xl overflow-hidden bg-[#B11226] text-white shadow-md hover:shadow-xl transition min-h-[540px]">
        <img
          src="https://images.unsplash.com/photo-1509099836639-18ba1795216d"
          alt="Community using technology"
          className="h-52 w-full object-cover opacity-95"
        />

        <div className="p-8 flex flex-col justify-between flex-1">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Explore Problem-Solving Websites
            </h3>
            <p className="text-gray-100 leading-relaxed">
              Explore free websites we have built to solve real problems in
              communities, education, and local sectors. These tools are open
              and accessible to everyone.
            </p>
          </div>

          <button className="mt-10 self-start text-sm font-semibold bg-white text-[#B11226] px-5 py-2 rounded-md hover:bg-gray-100 transition">
            View Projects
          </button>
        </div>
      </div>

    </div>

  </div>
</section>

 <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-16">
          WHY WORK WITH US?
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Item 1 */}
          <div className="flex flex-col items-center">
            <Clock className="w-12 h-12 text-red-600 mb-4" />
            <h3 className="font-bold text-lg mb-3">
              Quick and <span className="text-red-600">easy</span>
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              No more projects that run for months with no result in sight.
              Our process is optimized so you won’t waste time or costs.
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center">
            <TrendingUp className="w-12 h-12 text-red-600 mb-4" />
            <h3 className="font-bold text-lg mb-3">
              Grow your <span className="text-red-600">revenue</span>
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Forget about websites or designs that just sit there.
              Our work is result-driven, increasing your revenue by
              optimizing conversions.
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center">
            <UserPlus className="w-12 h-12 text-red-600 mb-4" />
            <h3 className="font-bold text-lg mb-3">
              Get the right <span className="text-red-600">clients</span>
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              We outline your business information in a clear and
              professional way, leaving you with the clients you want
              (and deserve).
            </p>
          </div>

        </div>

        {/* Button */}
        <div className="mt-16">
         <button
  onClick={() => setIsOpen(true)}
  className="border-2 border-red-600 text-red-600 px-10 py-3 font-semibold hover:bg-red-600 hover:text-white transition"
>
  REQUEST A QUOTE
</button>
        </div>

      </div>
    </section>
    {/* MODAL — OUTSIDE THE SECTION */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-[#FAF7F2] p-8 rounded-2xl relative max-w-lg w-full">

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-xl"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold text-center mb-6">
              Quote of the Moment
            </h2>

           <p className="text-center text-lg mb-4">
  “{currentQuote.text}”
</p>
<p className="text-center text-sm text-gray-500 font-semibold">
  — {currentQuote.author}
</p>


            <div className="flex justify-center gap-4">
              <button onClick={getRandomQuote}>
                Another quote
              </button>

              <button onClick={() => setIsOpen(false)}>
                Close
              </button>
            </div>

          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
