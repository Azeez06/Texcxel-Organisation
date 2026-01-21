import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import HeroSlider from "../components/home/HeroSlider";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, TrendingUp, UserPlus, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const services = [
  {
    title: "You Need Websites That Actually Work",
    text: "Many websites look good but fail to deliver results. TechcXel builds clean, scalable websites that are easy to use, fast to load, and designed to support real growth — not just online presence.",
    link: "/website",
  },
  {
    title: "You Need Clear, Trustworthy Branding",
    text: "Inconsistent visuals and weak design reduce credibility. We help you communicate clearly through strong brand identities and graphics that build trust and recognition across digital platforms.",
  },
  {
    title: "You Need Skills That Go Beyond Theory",
    text: "Learning tech shouldn’t stop at tutorials. TechcXel focuses on hands-on training and mentorship that prepares you to work on real projects with confidence.",
    link: "/internship",
  },
  {
    title: "You Need Systems That Save Time and Effort",
    text: "Manual processes slow teams down. We integrate AI tools, automation, and smart systems that improve efficiency, streamline workflows, and enhance user experience.",
    link: "/ai-integration",
  },
  {
    title: "You Need Real Project Experience",
    text: "Experience matters more than certificates. Our internship structure exposes learners to real-world design and development workflows, helping them build confidence and practical competence.",
  },
  {
    title: "You Need Tools That Solve Public Problems",
    text: "Access to useful digital tools shouldn’t be limited. TechcXel builds free public-good platforms that help students, professionals, and communities solve everyday challenge.",
    link: "/public-platforms",
  },
];

export default function Home() {
  const cards = ["career", "academic", "coming"];
const [activeCard, setActiveCard] = useState(0);
const [visible, setVisible] = useState(true);

useEffect(() => {
  const interval = setInterval(() => {
    setVisible(false);

    setTimeout(() => {
      setActiveCard((prev) => (prev + 1) % cards.length);
      setVisible(true);
    }, 400);
  }, 4000);

  return () => clearInterval(interval);
}, []);

  const messages = [
  "Academic research and data analysis tools",
  "Career, CV, and job-readiness platforms",
  "Everyday digital tools built for Nigerian workflows",
];

const [activeIndex, setActiveIndex] = useState(0);
const [fade, setFade] = useState(true);

useEffect(() => {
  const interval = setInterval(() => {
    setFade(false);

    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % messages.length);
      setFade(true);
    }, 300);
  }, 3000);

  return () => clearInterval(interval);
}, []);

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
      
      <Link to="/about"
      className="relative hover:text-[#B11226] transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#B11226] hover:after:w-full after:transition-all"
      >
        About
      </Link>
    
      <a className="relative hover:text-[#B11226] transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#B11226] hover:after:w-full after:transition-all">
        What We Do
      </a>
      <a className="relative hover:text-[#B11226] transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#B11226] hover:after:w-full after:transition-all">
        Community
      </a>
      <Link
  to="/contact"
  className="relative hover:text-[#B11226] transition
    after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:w-0 after:bg-[#B11226]
    hover:after:w-full after:transition-all"
>
  Contact
</Link>
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
  
<section className="bg-gradient-to-b from-[#FAF7F2] to-[#F6F1E8] border-t border-gray-200">
<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-13 sm:pt-24 lg:pt-32 pb-24">
    {/* SECTION HEADER */}
  <div className="text-center mb-8 sm:mb-12">

  <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
  What We Build at{" "}
  <span>
    <span className="text-[#B11226]">Tech</span>
    <span className="text-[#0F172A]">cXel</span>
  </span>
</h2>
 <p className="hidden sm:block text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">

    Techcxel operates across three focused pillars. We build practical tools,
create digital platforms, and develop tech talent for Nigerian realities.
  </p>
</div>
    {/* CARDS */}
    <div className="grid md:grid-cols-3 gap-10">

      {/* BUILD WITH US — TRUST & PROFESSIONALISM */}
      <div className="flex flex-col rounded-2xl overflow-hidden bg-[#0F172A] text-white shadow-md hover:shadow-xl transition min-h-[540px]">
        
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Team discussion and planning"
         className="h-56 w-full object-cover brightness-[0.97]"

        />
        <div className="p-8 flex flex-col justify-between flex-1">
          <div>
            <h3 className="text-2xl font-bold mb-4">
            Tech Services & Digital Solutions
            </h3>
            <p className="text-gray-300 leading-relaxed">
            We help individuals, startups, and organisations design, build, test, and scale digital products. This ranges from websites and payment integrations to backend systems, AI features, and platform optimisation.
            </p>
          </div>
          <button onClick={ () => navigate("/website")}
          className="mt-10 self-start text-sm font-semibold text-white border border-white px-5 py-2 rounded-md hover:bg-white hover:text-[#0F172A] transition">
          Book a Discovery Call
          </button>
        </div>
      </div>

      {/* PROBLEM SOLVERS — IMPACT & PURPOSE */}
      <div className="flex flex-col rounded-2xl overflow-hidden bg-[#B11226] text-white shadow-md hover:shadow-xl transition min-h-[540px]">
        <img
          src="https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg"
          alt="Community using technology"
         className="h-56 w-full object-cover brightness-[0.97]"

        />

        <div className="p-8 flex flex-col justify-between flex-1">
          <div>
            <h3 className="text-2xl font-bold mb-4">
     Open-Access Digital Products
            </h3>
            <p className="text-gray-100 leading-relaxed">
    We build and release free web products that address local challenges from education to productivity and community needs. Our products are designed to be accessible, practical, and impactful.
            </p>
          </div>

          <button onClick={ () => navigate("/public-platforms")}
          className="mt-10 self-start text-sm font-semibold bg-white text-[#B11226] px-5 py-2 rounded-md hover:bg-gray-100 transition">
          Explore Our Tools
          </button>
        </div>        
      </div>
{/* INTERNSHIP — LEARNING & GROWTH */}
      <div className="flex flex-col rounded-2xl overflow-hidden bg-[#ECF5EE] border border-[#D6EBDD]
shadow-[0_10px_30px_rgba(0,0,0,0.06)]
hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]
hover:-translate-y-1 transition-all duration-300 min-h-[540px]">

  <img
    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
    alt="People learning together"
    className="h-56 w-full object-cover brightness-[0.97]"
  />

  <div className="p-8 flex flex-col justify-between flex-1">
    <div>
      <h3 className="text-2xl font-bold tracking-tight text-[#0F172A] mb-4">
        Growing Tech Talent
      </h3>

      <p className="text-[15.5px] leading-7 text-gray-700">
        We grow designers and developers through hands-on training, mentorship,
        and real-world projects. This help people build practical tech skills
        that translate into real solutions, not just certificates.
      </p>
    </div>

    <Link
      to="/internship"
      className="group mt-10 inline-flex items-center gap-1 text-sm font-semibold text-[#2F7D4E]"
    >
      Explore Training
      <span className="group-hover:translate-x-1 transition-transform">→</span>
    </Link>
  </div>
</div>
    </div>

  </div>
</section>


<section className=" bg-[#F6F1E8] -mt-16 md:mt-0 "> 
  
<div className="max-w-7xl mx-auto px-10 py-28">
{/* HEADER */} 
<div className="max-w-2xl mx-auto mb-14 text-center">
  <h1 className="text-5xl md:text-6xl font-extrabold text-[#0F172A] mb-3">
    Why You Need{" "}
    <span className="text-[#B11226]">Us</span>
  
  </h1>

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
  <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-28">

    <div className="relative">

      {/* SECTION TITLE */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-10 z-20">
        <h2 className="font-extrabold tracking-tight whitespace-nowrap text-2xl sm:text-3xl md:text-6xl text-center">
          <span className="text-[#B11226]">Tech</span>
          <span className="text-[#0A1F44]">cXel</span>
          <span className="text-[#0A1F44] ml-2 md:ml-4">
            Philosophy
          </span>
        </h2>
      </div>

      {/* CONTENT */}
      <div className="grid md:grid-cols-2 gap-14 items-center pt-16">

        {/* IMAGE */}
        <img
          src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg"
          alt="Young people learning and building with technology"
          className="w-full h-[560px] object-cover rounded-3xl"
        />

        {/* TEXT */}
        <div className="space-y-10">

          {/* CORE BELIEF */}
          <div>
            <p className="text-2xl font-bold text-[#0A1F44] leading-snug mb-4">
              Nigeria doesn’t lack talent.
              <br />
              It lacks accessible tools and practical learning.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              TechcXel exists to close that gap — by building digital tools that
              solve real problems and by teaching technology in a way that is
              practical, grounded, and usable.
            </p>
          </div>

          {/* VALUES */}
          <div className="border-l-4 border-[#B11226] pl-6">
            <p className="text-gray-700 leading-relaxed">
              We believe technology should simplify life, not complicate it.
              Every system we design is guided by clarity, usefulness, and
              real-world impact — not hype.
            </p>
          </div>

          {/* DIRECTION */}
          <div className="grid sm:grid-cols-2 gap-6">

            <div>
              <h3 className="text-sm font-semibold text-[#B11226] uppercase tracking-wide mb-2">
                What We’re Doing Now
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Building and refining focused digital tools while training
                people to use and build technology confidently.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#B11226] uppercase tracking-wide mb-2">
                Where We’re Going
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Creating long-lasting digital solutions that improve access,
                productivity, and opportunity across Nigerian sectors.
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


<section className="bg-white py-24">
  <div className="max-w-6xl mx-auto px-6 text-center">
    
    {/* Title */}
    <h2 className="text-3xl md:text-4xl font-extrabold mb-16 text-[#0F172A]">
      Who We Work With
    </h2>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
      
      {/* Students */}
      <div className="flex flex-col items-center">
        <UserPlus className="w-11 h-11 text-[#B11226] mb-4" />
        <h3 className="font-bold text-lg mb-3 text-[#0F172A]">
          Students
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
          Students who need practical tools for academics, career preparation,
          and hands-on learning beyond theory.
        </p>
      </div>

      {/* Startups */}
      <div className="flex flex-col items-center">
        <TrendingUp className="w-11 h-11 text-[#B11226] mb-4" />
        <h3 className="font-bold text-lg mb-3 text-[#0F172A]">
          Startups
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
          Early-stage and growing startups looking to build functional websites
          and digital platforms that support real business goals.
        </p>
      </div>

      {/* NGOs */}
      <div className="flex flex-col items-center">
        <Clock className="w-11 h-11 text-[#B11226] mb-4" />
        <h3 className="font-bold text-lg mb-3 text-[#0F172A]">
          NGOs
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
          Non-profit organizations seeking clear, accessible digital solutions
          to communicate impact and manage their initiatives.
        </p>
      </div>

      {/* Institutions */}
      <div className="flex flex-col items-center">
        <Building2 className="w-11 h-11 text-[#B11226] mb-4" />
        <h3 className="font-bold text-lg mb-3 text-[#0F172A]">
          Institutions
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
          Schools, associations, and public institutions that require reliable
          digital systems tailored to their operational needs.
        </p>
      </div>

    </div>

    {/* Button */}
    <div className="mt-20">
      <button
        onClick={() => setIsOpen(true)}
        className="border-2 border-[#B11226] text-[#B11226] px-10 py-3 font-semibold rounded-md
                   hover:bg-[#B11226] hover:text-white transition"
      >
        Start a Conversation
      </button>
    </div>

  </div>
</section>

<section className="bg-[#FAF7F2] border-t border-[#E7E2D8] py-24">
  <div className="max-w-5xl mx-auto px-6 text-center">

    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-6">
      How would you like to engage with{" "}
      <span>
        <span className="text-[#B11226]">Tech</span>
        <span className="text-[#0F172A]">cXel</span>
      </span>
      ?
    </h2>

    <p className="text-gray-700 max-w-2xl mx-auto mb-14">
      Choose the option that best matches your goal. We’ll take it from there.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-6 justify-center">

      {/* Student */}
      <a
        href="/tools"
        className="px-8 py-4 text-sm font-semibold rounded-lg
                   bg-white text-[#0F172A] border border-[#E5E0D6]
                   hover:bg-gray-50 transition"
      >
        I’m a Student
      </a>

      {/* Website */}
      <a
        href="/studio"
        className="px-8 py-4 text-sm font-semibold rounded-lg
                   border-2 border-[#0F172A] text-[#0F172A]
                   hover:bg-[#0F172A] hover:text-white transition"
      >
        I Need a Website
      </a>

      {/* Learn Tech */}
      <a
        href="/academy"
        className="px-8 py-4 text-sm font-semibold rounded-lg
                   bg-[#B11226] text-white
                   hover:bg-red-700 transition"
      >
        I Want to Learn Tech
      </a>

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
