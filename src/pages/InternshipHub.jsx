import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const programs = [
  {
    id: 1,
    title: "Frontend Developer",
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    description:
      "Learn HTML, CSS, JavaScript, React, and UI/UX best practices to build modern, responsive interfaces.",
    route: "frontend",
  },
  {
    id: 2,
    title: "Backend Developer",
    category: "Backend",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    description:
      "Master server-side development, databases, APIs, and application logic using modern backend tools.",
    route: "backend",
  },
  {
    id: 3,
    title: "Fullstack Developer",
    category: "Fullstack",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    description:
      "Become a complete developer by learning both frontend and backend technologies with real-world projects.",
    route: "fullstack",
  },
];

export default function InternshipHub() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredPrograms =
    activeFilter === "All"
      ? programs
      : programs.filter((p) => p.category === activeFilter);

  return (
    <section className="bg-[#F6F1E8] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-8">

        {/* HEADER */}
        <div className="mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#08162F] mb-6">
            Internship Programmes
          </h1>
          <p className="text-gray-700 max-w-2xl">
            Choose a focused internship track designed to equip you with
            real-world experience and industry-ready skills.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-14">

          {/* FILTER */}
          <aside className="lg:col-span-1">
            <p className="text-sm font-semibold text-[#08162F] mb-5 uppercase tracking-wide">
              Filter by Track
            </p>

            <div className="flex flex-col gap-3">
              {["All", "Frontend", "Backend", "Fullstack"].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveFilter(item)}
                  className={`px-4 py-2 text-sm rounded-md border transition font-medium
                    ${
                      activeFilter === item
                        ? "bg-[#08162F] text-white border-[#08162F]"
                        : "bg-white text-[#08162F] border-gray-300 hover:border-[#B11226] hover:text-[#B11226]"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </aside>

          {/* PROGRAM CARDS */}
          <div className="lg:col-span-3 grid md:grid-cols-3 gap-10">

            {filteredPrograms.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition"
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="h-48 w-full object-cover"
                />

                <div className="p-6 flex flex-col justify-between min-h-[250px]">
                  <div>
                    <span className="inline-block text-xs font-semibold text-[#B11226] mb-2 uppercase">
                      {program.category}
                    </span>

                    <h3 className="font-bold text-lg text-[#08162F] mb-3">
                      {program.title}
                    </h3>

                    <p className="text-sm text-gray-600">
                      {program.description}
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      navigate(`/auth?course=${program.route}`)
                    }
                    className="mt-8 bg-[#08162F] text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-[#B11226] transition"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
