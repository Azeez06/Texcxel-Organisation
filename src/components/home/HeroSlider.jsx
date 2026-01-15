"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {useNavigate} from "react-router-dom";
/* SLIDES DATA */
const slides = [
 {
  id: 1,
  eyebrow: "Digital solutions with purpose",
  title: "TechcXel",
  description:
    "Designing, building, and scaling digital experiences that move people and institutions forward.",
  image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80"
,
},

  {
    id: 2,
    eyebrow: "Creativity meets technology",
    title: "Design that\ncommunicates clearly",
    description:
      "From branding to digital products, we create visuals that build trust and credibility.",
    image:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 3,
    eyebrow: "Modern development",
    title: "Websites built\nfor performance",
    description:
      "Clean, scalable, and modern websites engineered for speed, usability, and growth.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 4,
    eyebrow: "Technology for people",
    title: "Connecting ideas\nthrough technology",
    description:
      "We build platforms that connect communities, learners, and businesses through digital tools.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function HeroSlider() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  return (
   <section
  className="
    relative
    h-[64vh]
min-h-[500px]
md:h-[90vh]
md:min-h-[650px]
    overflow-hidden
  "
>
      {/* BACKGROUND IMAGE */}
      <AnimatePresence mode="wait">
        {slide.image && (
          <motion.div
            key={slide.image}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        )}
      </AnimatePresence>

      {/* DARK GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#08162F]/95 via-[#0A1F44]/85 to-[#08162F]/40" />

      {/* CONTENT */}
      <div
  className="
    relative z-10
    max-w-7xl mx-auto
    px-6 md:px-10
    h-full
    flex items-center
  "
>
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.7 }}
            className=" max-w-xl
    -mt-12
    sm:-mt-6
    md:mt-0"
          >
           <p className="text-red-600 font-bold uppercase tracking-wide mb-3 md:mb-6">

              {slide.eyebrow}
            </p>

           <h1
  className={`font-extrabold leading-tight mb-7 md:mb-8 text-[#FAF7F2] ${
    slide.id === 1
      ? "text-4xl md:text-7xl tracking-tight"
      : "text-3xl sm:text-4xl md:text-6xl"
  }`}
>
  {slide.title}
</h1>


    <p
  className={`mb-6 md:mb-10 ${
    slide.id === 1
      ? "text-base sm:text-lg md:text-xl text-gray-200 max-w-md"
      : "text-sm sm:text-base md:text-lg text-gray-200 max-w-lg"
  }`}
>
  {slide.description}
</p>


            <div className="flex gap-6">
              <button onClick={()=> navigate("/internship")}
              
              className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-red-700 transition">
                
                Start Learning
              </button>
              <button onClick ={() => navigate("/website")}
               className="text-[#FAF7F2] font-semibold hover:underline">
                Explore our work →
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CONTROLS */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-10 z-20 text-[#FAF7F2]">
        <button onClick={prev} className="text-2xl hover:text-red-600 transition">
          ←
        </button>

        <div className="flex gap-2">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full ${
                i === index ? "bg-red-600" : "bg-gray-400"
              }`}
            />
          ))}
        </div>

        <button onClick={next} className="text-2xl hover:text-red-600 transition">
          →
        </button>
      </div>

    </section>
  );
}
