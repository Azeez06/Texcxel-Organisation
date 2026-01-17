import { useState } from "react";

export default function Weekfourback() {
   const [currentTopic, setCurrentTopic] = useState(0);

  return (
    <section className="bg-[#FAF7F2] min-h-screen py-20">
       <div className="max-w-5xl mx-auto px-6 md:px-8">

  {/* HEADER */}
  <div className="mb-20 text-center">

   <div
  className="
    inline-flex items-center
    gap-1 sm:gap-2
    mb-6
    px-3 sm:px-4
    py-2 sm:py-1.5
    rounded-full
    bg-[#F6F1E8]
    border border-red-200
    whitespace-nowrap
  "
>
  <span className="text-sm sm:text-sm font-bold uppercase tracking-wide text-red-600">
    Backend Development
  </span>

  <span className="text-sm sm:text-sm font-bold text-[#0A1F44]">
    · Week 8
  </span>
</div>

     <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A1F44] mb-5">
    Backend Security & Validation
    </h1>


  <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed text-base sm:text-lg">
    This week focuses on securing backend applications and building systems
    that are safe, reliable, and scalable. You will learn how to protect APIs
    from common attacks, validate incoming data, enforce usage limits, and
    structure backend code in a clean and maintainable way. These practices
    are essential for building production-ready backend systems.
  </p>
</div>

{/* LEARNING OBJECTIVES */}
<div className="bg-white rounded-3xl border border-gray-200 p-8 mb-16">

  <h2 className="text-xl font-bold text-[#0A1F44] mb-6">
    What you will learn
  </h2>

  <ul className="space-y-4 text-gray-700 text-base leading-relaxed">
    {[
      "Validating user input and request data to prevent errors and attacks",
      "Common backend security risks and how to mitigate them",
      "Implementing rate limiting and request throttling in APIs",
      "Securing API endpoints using best practices and middleware",
      "Designing clean, scalable, and maintainable backend architecture"
    ].map((item, i) => (
      <li key={i} className="flex items-start gap-3">
        <span className="mt-1 w-2 h-2 rounded-full bg-red-600" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
</div>

{currentTopic === 0 && (
  <>
    {/* SECTION: INPUT VALIDATION & WHY IT MATTERS */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Input Validation and Why It Is Critical for Backend Security
      </h2>

    
  <div
    className="
      space-y-7
      text-gray-700
      text-base sm:text-lg
      leading-[1.8]
      text-left md:text-justify
      hyphens-auto
    "
  >

        <p>
          Input validation is the process of checking and controlling the data
          that users send to your backend before it is processed or stored.
          Every backend application receives data from external sources such
          as forms, APIs, URLs, and request bodies. Without proper validation,
          your application is exposed to serious security risks and unexpected
          behavior.
        </p>

        <p>
          In real-world systems, you should never trust user input. Users can
          send malformed data, incorrect data types, missing fields, or even
          malicious payloads intentionally. For example, instead of sending a
          username, a user could attempt to inject scripts, database queries,
          or extremely large payloads to crash your server.
        </p>

        <p>
          Input validation protects your backend from common attacks such as
          SQL injection, NoSQL injection, cross-site scripting (XSS), and
          malformed request exploitation. Even when using MongoDB or Mongoose,
          improper validation can allow attackers to manipulate queries or
          bypass application logic.
        </p>

        <p>
          Validation also improves data quality. When your backend enforces
          rules like required fields, correct formats, and value limits, your
          database remains clean and consistent. This prevents bugs that may
          surface later during reporting, analytics, or feature expansion.
        </p>

        <p>
          From a user experience perspective, validation helps return clear,
          meaningful error messages. Instead of crashing the server or silently
          failing, a well-validated backend tells the client exactly what went
          wrong and how to fix it.
        </p>

        <p>
          Professional backend systems always validate data at multiple levels:
          request validation, schema validation, and business-rule validation.
          This layered approach ensures that even if one layer fails, the
          system remains secure and predictable.
        </p>

      </div>
    </div>

    {/* PRACTICAL EXAMPLES */}
    <div className="mb-20">

      <h3 className="text-xl font-bold text-[#0A1F44] mb-6">
        Practical Examples
      </h3>

      <div className="space-y-8 text-gray-700">

        <div>
          <p className="mb-3">
            <strong>Example 1:</strong> Basic manual validation in an Express
            route. Here we check for missing fields before processing data.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
<code>{`
app.post("/users", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      message: "Name and email are required"
    });
  }

  res.status(201).json({
    message: "User created successfully"
  });
});
`}</code>
          </pre>
        </div>

        <div>
          <p className="mb-3">
            <strong>Example 2:</strong> Validating data using Mongoose schema
            rules to enforce structure at the database level.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
<code>{`
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
});

const User = mongoose.model("User", userSchema);
`}</code>
          </pre>
        </div>

        <div>
          <p className="mb-3">
            <strong>Example 3:</strong> Preventing invalid input values before
            database operations.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
<code>{`
if (typeof age !== "number" || age < 18) {
  return res.status(400).json({
    message: "Age must be a number and at least 18"
  });
}
`}</code>
          </pre>
        </div>

      </div>
    </div>

    {/* VIDEO RESOURCES */}
    <div className="mb-20">

      <h3 className="text-xl font-bold text-[#0A1F44] mb-8">
        Watch & Practice
      </h3>

      <div className="grid md:grid-cols-3 gap-8">

        {/* VIDEO 1 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/9kL2KQvR8k8"
              title="Why Input Validation Matters"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Why Input Validation Matters
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn why validating user input is critical for backend security.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Ll6knx7s4sM"
              title="Express Input Validation Basics"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Express Input Validation Basics
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              See how validation fits into Express route handling.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/72dKpC2kJ8U"
              title="Common Backend Security Mistakes"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Common Backend Security Mistakes
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn what happens when validation is ignored.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}


{currentTopic === 1 && (
  <>
    {/* SECTION: COMMON BACKEND SECURITY RISKS */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Common Backend Security Risks and How to Mitigate Them
      </h2>

    <div
    className="
      space-y-7
      text-gray-700
      text-base sm:text-lg
      leading-[1.8]
      text-left md:text-justify
      hyphens-auto
    "
  >

        <p>
          Backend applications are constantly exposed to the internet, which
          means they are a direct target for attackers. Unlike frontend issues
          that may affect only visuals, backend security flaws can expose user
          data, compromise systems, or bring entire applications down.
          Understanding common backend security risks is essential for building
          safe and reliable systems.
        </p>

        <p>
          One of the most common risks is <strong>injection attacks</strong>.
          These occur when untrusted input is sent directly into database
          queries or system commands. In MongoDB-based systems, poorly handled
          queries can lead to NoSQL injection, allowing attackers to bypass
          authentication or access unauthorized data.
        </p>

        <p>
          Another major risk is <strong>authentication and authorization
          flaws</strong>. If login systems are weak or routes are not properly
          protected, attackers can impersonate users, access admin features,
          or escalate privileges. This is why secure authentication and role
          checks are critical in backend development.
        </p>

        <p>
          <strong>Exposed sensitive information</strong> is also a frequent
          problem. This includes leaking passwords, API keys, database
          credentials, or detailed error messages. When error messages reveal
          internal logic or stack traces, attackers gain valuable information
          about how your system works.
        </p>

        <p>
          <strong>Rate abuse and denial-of-service attacks</strong> happen when
          attackers overwhelm your server with too many requests. Without rate
          limiting, a single malicious script can exhaust server resources,
          making your application unavailable to legitimate users.
        </p>

        <p>
          Backend security is not about adding one protection—it’s about
          layering defenses. Input validation, authentication, proper error
          handling, rate limiting, and secure configuration all work together
          to reduce attack surfaces.
        </p>

        <p>
          In real-world backend systems, security is treated as a core feature,
          not an afterthought. Writing secure code from the beginning saves
          time, prevents data breaches, and builds trust with users.
        </p>

      </div>
    </div>

    {/* PRACTICAL EXAMPLES */}
    <div className="mb-20">

      <h3 className="text-xl font-bold text-[#0A1F44] mb-6">
        Practical Examples
      </h3>

      <div className="space-y-8 text-gray-700">

        <div>
          <p className="mb-3">
            <strong>Example 1:</strong> Preventing NoSQL injection by validating
            and sanitizing input before querying MongoDB.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
<code>{`
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (typeof email !== "string" || typeof password !== "string") {
    return res.status(400).json({
      message: "Invalid input format"
    });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({ message: "Login successful" });
});
`}</code>
          </pre>
        </div>

        <div>
          <p className="mb-3">
            <strong>Example 2:</strong> Hiding sensitive error details from users
            while logging them internally.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
<code>{`
app.use((err, req, res, next) => {
  console.error(err); // Internal logging

  res.status(500).json({
    message: "Something went wrong. Please try again later."
  });
});
`}</code>
          </pre>
        </div>

        <div>
          <p className="mb-3">
            <strong>Example 3:</strong> Basic rate limiting to prevent abuse.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
<code>{`
import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});

app.use("/api", limiter);
`}</code>
          </pre>
        </div>

      </div>
    </div>

    {/* VIDEO RESOURCES */}
    <div className="mb-20">

      <h3 className="text-xl font-bold text-[#0A1F44] mb-8">
        Watch & Practice
      </h3>

      <div className="grid md:grid-cols-3 gap-8">

        {/* VIDEO 1 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/2tV1K2K1A1k"
              title="Backend Security Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Backend Security Explained
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Overview of common backend security threats.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/f0LpY6c-1oI"
              title="Common Web Security Vulnerabilities"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Common Web Security Vulnerabilities
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how attackers exploit backend weaknesses.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/bnM9X4C0q8k"
              title="Protecting Express Applications"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Protecting Express Applications
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Practical steps for securing Express backends.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}


  {currentTopic === 2 && (
  <>
    {/* SECTION: RATE LIMITING & ABUSE PREVENTION */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Rate Limiting, Request Throttling, and Abuse Prevention
      </h2>

    <div
    className="
      space-y-7
      text-gray-700
      text-base sm:text-lg
      leading-[1.8]
      text-left md:text-justify
      hyphens-auto
    "
  >

        <p>
          Modern backend applications are designed to serve many users at the
          same time, but they are also vulnerable to abuse. Without limits,
          anyone can send thousands of requests to your server in seconds,
          overwhelming system resources and making your application unavailable
          to legitimate users.
        </p>

        <p>
          <strong>Rate limiting</strong> is a security and performance technique
          that controls how many requests a client can make within a specific
          time window. Instead of allowing unlimited access, rate limiting
          enforces fair usage by slowing down or blocking excessive requests.
        </p>

        <p>
          <strong>Request throttling</strong> works alongside rate limiting by
          controlling the speed at which requests are processed. While rate
          limiting focuses on the number of requests, throttling focuses on how
          frequently they are allowed. Together, they protect your backend from
          traffic spikes and malicious behavior.
        </p>

        <p>
          One common real-world example is a login endpoint. Without rate
          limiting, attackers can perform brute-force attacks by trying
          thousands of password combinations. Rate limiting ensures that after
          a few failed attempts, further requests are delayed or blocked.
        </p>

        <p>
          Abuse prevention is not only about attackers. Poorly written client
          applications, infinite loops, or buggy scripts can unintentionally
          overload your server. Rate limiting protects your backend even from
          accidental misuse.
        </p>

        <p>
          In production systems, rate limits are often applied differently
          depending on the route. Public endpoints may have strict limits,
          while authenticated or premium users may be allowed higher limits.
          This flexibility allows systems to scale safely.
        </p>

        <p>
          Implementing rate limiting early improves reliability, reduces server
          costs, and ensures a consistent experience for all users. It is a
          fundamental part of secure backend architecture.
        </p>

      </div>
    </div>

    {/* PRACTICAL EXAMPLES */}
    <div className="mb-20">

      <h3 className="text-xl font-bold text-[#0A1F44] mb-6">
        Practical Examples
      </h3>

      <div className="space-y-8 text-gray-700">

        <div>
          <p className="mb-3">
            <strong>Example 1:</strong> Basic rate limiting using
            <code> express-rate-limit</code>.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
<code>{`
import rateLimit from "express-rate-limit";

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests
  message: {
    message: "Too many requests. Please try again later."
  }
});

app.use("/api", apiLimiter);
`}</code>
          </pre>
        </div>

        <div>
          <p className="mb-3">
            <strong>Example 2:</strong> Stricter rate limits for authentication
            routes.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
<code>{`
const loginLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 5,
  message: {
    message: "Too many login attempts. Try again later."
  }
});

app.post("/login", loginLimiter, loginController);
`}</code>
          </pre>
        </div>

        <div>
          <p className="mb-3">
            <strong>Example 3:</strong> Applying different limits based on user
            authentication.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
<code>{`
app.use((req, res, next) => {
  if (req.user) {
    req.rateLimit = 500;
  } else {
    req.rateLimit = 100;
  }
  next();
});
`}</code>
          </pre>
        </div>

      </div>
    </div>

    {/* VIDEO RESOURCES */}
    <div className="mb-20">

      <h3 className="text-xl font-bold text-[#0A1F44] mb-8">
        Watch & Practice
      </h3>

      <div className="grid md:grid-cols-3 gap-8">

        {/* VIDEO 1 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/2kM4nZ6yJ7g"
              title="Rate Limiting Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Rate Limiting Explained
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand how rate limiting protects backend systems.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/VnVxRykzRjA"
              title="Preventing Brute Force Attacks"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Preventing Brute Force Attacks
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how rate limits stop login abuse.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/9wzUq6Fv7GI"
              title="Express Rate Limiting Tutorial"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Express Rate Limiting Tutorial
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Step-by-step guide to implementing rate limits in Express.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}
{currentTopic === 3 && (
  <>
    {/* SECTION: CLEAN ARCHITECTURE & SCALABLE BACKEND STRUCTURE */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Clean Architecture, Folder Structure, and Scalable Backend Design
      </h2>

     <div
    className="
      space-y-7
      text-gray-700
      text-base sm:text-lg
      leading-[1.8]
      text-left md:text-justify
      hyphens-auto
    "
  >
        <p>
          As backend applications grow, writing code that simply “works” is no
          longer enough. Large applications quickly become difficult to
          understand, debug, and extend if the codebase is poorly structured.
          This is where <strong>clean architecture</strong> becomes essential.
        </p>

        <p>
          Clean architecture focuses on organizing backend code in a way that
          separates responsibilities clearly. Each part of the application has
          a single purpose, making the system easier to maintain, test, and
          scale as new features are added.
        </p>

        <p>
          One of the biggest mistakes beginners make is placing all logic inside
          route files. While this may work for small projects, it leads to
          bloated files, duplicated logic, and fragile systems that break easily
          when changes are made.
        </p>

        <p>
          In a clean backend architecture, routes are responsible only for
          receiving requests and sending responses. The actual business logic
          is moved into <strong>controllers</strong>, while database operations
          are handled by <strong>services</strong> or <strong>models</strong>.
        </p>

        <p>
          This separation makes your application easier to reason about. When
          something breaks, you know exactly where to look—routing issues in
          routes, logic issues in controllers, and data issues in services or
          models.
        </p>

        <p>
          Scalability is another major benefit. Clean architecture allows teams
          to add new features, endpoints, or services without rewriting existing
          code. This is how real-world backend systems grow sustainably over
          time.
        </p>

        <p>
          A well-structured backend also improves collaboration. Multiple
          developers can work on different parts of the system without stepping
          on each other’s code, because responsibilities are clearly defined.
        </p>

        <p>
          Ultimately, clean architecture is not about writing more files—it is
          about writing better systems that are reliable, readable, and ready
          for production.
        </p>

      </div>
    </div>

    {/* PRACTICAL EXAMPLES */}
    <div className="mb-20">

      <h3 className="text-xl font-bold text-[#0A1F44] mb-6">
        Practical Examples
      </h3>

      <div className="space-y-8 text-gray-700">

        <div>
          <p className="mb-3">
            <strong>Example 1:</strong> Recommended backend folder structure.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
<code>{`
src/
 ├─ config/
 │   └─ database.js
 ├─ controllers/
 │   └─ user.controller.js
 ├─ models/
 │   └─ user.model.js
 ├─ routes/
 │   └─ user.routes.js
 ├─ services/
 │   └─ user.service.js
 ├─ middlewares/
 │   └─ auth.middleware.js
 ├─ utils/
 │   └─ errorHandler.js
 └─ app.js
`}</code>
          </pre>
        </div>

        <div>
          <p className="mb-3">
            <strong>Example 2:</strong> Route file with no business logic.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
<code>{`
import express from "express";
import { createUser } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/users", createUser);

export default router;
`}</code>
          </pre>
        </div>

        <div>
          <p className="mb-3">
            <strong>Example 3:</strong> Controller handling application logic.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
<code>{`
import { createUserService } from "../services/user.service.js";

export const createUser = async (req, res) => {
  try {
    const user = await createUserService(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
`}</code>
          </pre>
        </div>

        <div>
          <p className="mb-3">
            <strong>Example 4:</strong> Service layer handling database logic.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
<code>{`
import User from "../models/user.model.js";

export const createUserService = async (data) => {
  const user = new User(data);
  return await user.save();
};
`}</code>
          </pre>
        </div>

      </div>
    </div>

    {/* VIDEO RESOURCES */}
    <div className="mb-20">

      <h3 className="text-xl font-bold text-[#0A1F44] mb-8">
        Watch & Practice
      </h3>

      <div className="grid md:grid-cols-3 gap-8">

        {/* VIDEO 1 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/CnailTcJV_U"
              title="Backend Folder Structure Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Backend Folder Structure Explained
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how to organize backend projects professionally.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/1nRj4ALuw7A"
              title="Clean Architecture for Node.js"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Clean Architecture for Node.js
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand clean architecture principles in backend systems.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/yj8u2bTZJ3Q"
              title="Scalable Backend Design"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Scalable Backend Design
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how real backend systems scale safely.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}
{currentTopic === 3 && (
  <>
    {/* SECTION: CLEAN ARCHITECTURE & SCALABLE BACKEND STRUCTURE */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Clean Architecture, Folder Structure, and Scalable Backend Design
      </h2>

    <div
    className="
      space-y-7
      text-gray-700
      text-base sm:text-lg
      leading-[1.8]
      text-left md:text-justify
      hyphens-auto
    "
  >

        <p>
          As backend applications grow, poor structure becomes one of the
          biggest causes of bugs, slow development, and system failures.
          Writing code that only works is not enough — it must also be
          <strong> organized, readable, and scalable</strong>.
        </p>

        <p>
          <strong>Clean architecture</strong> is a way of structuring backend
          applications so that each part of the system has a clear
          responsibility. This prevents files from becoming too large and
          avoids mixing routing, business logic, and database logic together.
        </p>

        <p>
          In clean backend design, routes should only define endpoints.
          Controllers handle application logic, services handle business rules,
          and models manage database interactions. Each layer depends on the
          layer below it — not the other way around.
        </p>

        <p>
          This separation makes debugging easier. When something breaks, you
          immediately know where to look. It also makes testing simpler,
          because each part of the system can be tested independently.
        </p>

        <p>
          Scalability is another major benefit. Clean architecture allows teams
          to add new features without rewriting existing code. This is how
          production systems survive long-term growth.
        </p>

        <p>
          A clean folder structure also improves collaboration. Multiple
          developers can work on different parts of the backend without
          interfering with each other’s code.
        </p>

        <p>
          Professional backend systems are not judged by how fast they were
          built, but by how well they scale, how easy they are to maintain, and
          how safely they handle growth. Clean architecture makes all of this
          possible.
        </p>

      </div>
    </div>

    {/* PRACTICAL EXAMPLES */}
    <div className="mb-20">

      <h3 className="text-xl font-bold text-[#0A1F44] mb-6">
        Practical Examples
      </h3>

      <div className="space-y-8 text-gray-700">

        <div>
          <p className="mb-3">
            <strong>Example 1:</strong> A clean and scalable backend folder
            structure.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
<code>{`
src/
 ├─ config/
 │   └─ database.js
 ├─ controllers/
 │   └─ user.controller.js
 ├─ services/
 │   └─ user.service.js
 ├─ models/
 │   └─ user.model.js
 ├─ routes/
 │   └─ user.routes.js
 ├─ middlewares/
 │   └─ auth.middleware.js
 ├─ utils/
 │   └─ errorHandler.js
 └─ app.js
`}</code>
          </pre>
        </div>

        <div>
          <p className="mb-3">
            <strong>Example 2:</strong> Routes only define endpoints.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
<code>{`
import express from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", registerUser);

export default router;
`}</code>
          </pre>
        </div>

        <div>
          <p className="mb-3">
            <strong>Example 3:</strong> Controller handles request logic.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
<code>{`
import { createUser } from "../services/user.service.js";

export const registerUser = async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
`}</code>
          </pre>
        </div>

        <div>
          <p className="mb-3">
            <strong>Example 4:</strong> Service handles business and database logic.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
<code>{`
import User from "../models/user.model.js";

export const createUser = async (data) => {
  const user = new User(data);
  return await user.save();
};
`}</code>
          </pre>
        </div>

      </div>
    </div>

    {/* VIDEO RESOURCES */}
    <div className="mb-20">

      <h3 className="text-xl font-bold text-[#0A1F44] mb-8">
        Watch & Practice
      </h3>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/CnailTcJV_U"
              title="Backend Folder Structure"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Backend Folder Structure
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how professionals organize backend projects.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/1nRj4ALuw7A"
              title="Clean Architecture Node.js"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Clean Architecture in Node.js
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand scalable backend design principles.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/yj8u2bTZJ3Q"
              title="Scalable Backend Systems"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Scalable Backend Systems
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              How real-world backends are structured for growth.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}

 <div className="mt-16 flex justify-between">
  
  {/* PREVIOUS */}
  {currentTopic > 0 && (
    <button
      onClick={() => setCurrentTopic(currentTopic - 1)}
      className="px-8 py-3 rounded-xl border border-[#0A1F44] text-[#0A1F44] font-semibold hover:bg-[#0A1F44] hover:text-white transition"
    >
      ← Previous Topic
    </button>
  )}

  {/* NEXT */}
  {currentTopic < 4 && (
    <button
      onClick={() => setCurrentTopic(currentTopic + 1)}
      className="px-8 py-3 rounded-xl bg-[#B11226] text-white font-semibold hover:opacity-90"
    >
      Next Topic →
    </button>
  )}

</div>

    </div>
    </section>
  );
}