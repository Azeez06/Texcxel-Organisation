import { Link } from "react-router-dom";

/* BACKEND COURSE WEEKS */
const weeks = [
  {
    id: 1,
    title: "Week 1 — Backend & Data Foundations",
    description:
      "Understanding backend development, client-server architecture, data concepts, databases, and introduction to MongoDB ecosystem.",
    route: "Weekoneback",
  },
  {
    id: 2,
    title: "Week 2 — MongoDB Fundamentals",
    description:
      "Working with MongoDB: databases, collections, documents, CRUD operations, MongoDB Compass, and data modeling basics.",
    route: "Weektwoback",
  },
  {
    id: 3,
    title: "Week 3 — Advanced MongoDB & Data Design",
    description:
      "Indexes, relationships, schema design, embedded vs referenced documents, and real-world MongoDB best practices.",
    route: "Weekthreeback",
  },
  {
    id: 4,
    title: "Week 4 — Node.js Fundamentals",
    description:
      "Server-side JavaScript with Node.js: runtime concepts, modules, file system, environment variables, and simple servers.",
    route: "Weekfourback",
  },
  {
    id: 5,
    title: "Week 5 — Express.js & REST APIs",
    description:
      "Building APIs with Express: routing, middleware, request handling, responses, and RESTful design principles.",
    route: "Weekfiveback",
  },
  {
    id: 6,
    title: "Week 6 — MongoDB & Node Integration",
    description:
      "Connecting MongoDB to Express using Mongoose, schemas, models, CRUD APIs, and error handling.",
    route: "Weeksixback",
  },
  {
    id: 7,
    title: "Week 7 — Authentication & Authorization",
    description:
      "User authentication with JWT, password hashing, protected routes, roles, and access control.",
    route: "Weeksevenback",
  },
  {
    id: 8,
    title: "Week 8 — Backend Security & Validation",
    description:
      "Input validation, API security basics, rate limiting, clean architecture, and scalable backend structure.",
    route: "Weekeightback",
  },
  {
    id: 9,
    title: "Week 9 — Advanced Backend Features",
    description:
      "Pagination, filtering, searching, file uploads, email services, and production-ready backend patterns.",
    route: "Weeknineback",
  },
  
  {
    id: 10,
    title: "Week 10 — Deployment & Capstone Project",
    description:
      "Deploying backend applications, environment configuration, MongoDB Atlas, and building a complete backend project.",
    route: "Weektenback",
  },
];

export default function BackendModule() {
  return (
    <section className="bg-[#FAF7F2] py-20">
      <div className="max-w-6xl mx-auto px-8">

        {/* HEADER */}
        <h1 className="text-4xl font-extrabold text-[#0A1F44] mb-4">
          Backend Development Course
        </h1>

        <p className="text-gray-700 mb-14 max-w-2xl">
          A practical 10-week backend program focused on databases, server-side
          logic, APIs, authentication, and deployment using MongoDB, Node.js,
          and Express.
        </p>

        {/* WEEKS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {weeks.map((week) => (
            <Link
              key={week.id}
              to={`/dashboard/courses/backend/${week.route}`}
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
