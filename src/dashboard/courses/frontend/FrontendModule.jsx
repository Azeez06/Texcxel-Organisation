import { Link } from "react-router-dom";

/* FRONTEND COURSE WEEKS */
const weeks = [
  {
    id: 1,
    title: "Week 1 — Web & HTML Foundations",
    description:
      "Understanding how the web works, HTML structure, semantic tags, and accessibility basics.",
    route: "Weekone",
  },
  {
    id: 2,
    title: "Week 2 — CSS Fundamentals",
    description:
      "Styling with confidence: CSS syntax, selectors, box model, colors, fonts, and spacing.",
    route: "Weektwo",
  },
  {
    id: 3,
    title: "Week 3 — Layouts & Responsive Design",
    description:
      "Flexbox, CSS Grid, responsive layouts, and mobile-first design principles.",
          route: "Weekthree",
  },
  {
    id: 4,
    title: "Week 4 — Advanced CSS & Mini Project",
    description:
      "Animations, transitions, best practices, and building a complete responsive mini project.",
    route: "Weekfour",
  },
  {
    id: 5,
    title: "Week 5 — JavaScript Fundamentals",
    description:
      "Programming basics: variables, data types, conditions, loops, functions, and logic.",
    route: "Weekfive",
  },
  {
    id: 6,
    title: "Week 6 — JavaScript & the DOM",
    description:
      "Making websites interactive using DOM manipulation, events, and form handling.",
    route: "Weeksix",
  },
  {
    id: 7,
    title: "Week 7 — Modern JavaScript (ES6+)",
    description:
      "Modern JavaScript features like arrow functions, array methods, modules, and clean code.",
    route: "Weekseven",
  },
  {
    id: 8,
    title: "Week 8 — React Fundamentals",
    description:
      "Introduction to React, JSX, components, props, and building reusable UI blocks.",
    route: "Weekeight",
  },
  {
    id: 9,
    title: "Week 9 — React State & Routing",
    description:
      "Managing state, conditional rendering, React Router, and application structure.",
      route: "Weeknine",
  },
  {
    id: 10,
    title: "Week 10 — Tailwind CSS & UI Systems",
    description:
      "Building fast, responsive interfaces using Tailwind CSS and modern UI patterns.",
      route: "Weekten",
  },
  {
    id: 11,
    title: "Week 11 — Final Project & Deployment",
    description:
      "Building, polishing, and deploying a complete frontend application for your portfolio.",
  },
];

export default function FrontendCourse() {
  return (
    <section className="bg-[#FAF7F2] py-20">
      <div className="max-w-6xl mx-auto px-8">

        {/* HEADER */}
        <h1 className="text-4xl font-extrabold text-[#0A1F44] mb-4">
          Frontend Development Course
        </h1>

        <p className="text-gray-700 mb-14 max-w-2xl">
          An intensive 11-week frontend program designed to take you from
          foundational web concepts to building modern, production-ready
          applications using React and Tailwind CSS.

        </p>

        {/* WEEKS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
         {weeks.map((week) => (
  <Link
    key={week.id}
    to={`/dashboard/courses/frontend/${week.route}`}
    className="group bg-white border border-gray-200 rounded-3xl p-7 hover:shadow-xl transition"
  >
    <h3 className="text-lg font-extrabold text-[#0A1F44] mb-3 group-hover:text-red-600 transition">
      {week.title}
    </h3>

    <p className="text-sm text-gray-600 leading-relaxed">
      {week.description}
    </p>

    <span className="inline-block mt-6 text-sm font-semibold text-red-600">
      View week →
    </span>
  </Link>
))}
        </div>
      </div>
    </section>
  );
}
