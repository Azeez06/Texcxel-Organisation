import { useState } from "react";

export default function Weekfourback() {
   const [currentTopic, setCurrentTopic] = useState(0);

  return (
    <section className="bg-[#FAF7F2] min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-8">
   {/* HEADER */}
<div className="mb-16">
  <span className="text-sm font-bold uppercase tracking-wide text-red-600">
    Backend Development · Week 10
  </span>

  <h1 className="text-4xl font-extrabold text-[#0A1F44] mt-4 mb-6">
    Deployment & Capstone Project
  </h1>

  <p className="text-gray-700 max-w-3xl leading-relaxed">
    This final week focuses on taking your backend skills into the real world.
    You will learn how to deploy backend applications, configure environments,
    connect to cloud databases, and build a complete, production-ready backend
    project. By the end of this week, you will have a fully deployed backend
    application suitable for real users and your professional portfolio.
  </p>
</div>

{/* LEARNING OBJECTIVES */}
<div className="bg-white rounded-3xl border p-8 mb-12">
  <h2 className="text-xl font-bold text-[#0A1F44] mb-6">
    What you will learn
  </h2>

  <ul className="space-y-4 text-gray-700">
    <li>— Preparing backend applications for production deployment</li>
    <li>— Managing environment configuration and secrets securely</li>
    <li>— Deploying Node.js & Express applications to cloud platforms</li>
    <li>— Connecting production apps to MongoDB Atlas</li>
    <li>— Building and presenting a complete backend capstone project</li>
  </ul>
</div>
{currentTopic === 0 && (
  <>
    {/* SECTION: PREPARING BACKEND APPS FOR PRODUCTION */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Preparing Backend Applications for Production Deployment
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          Building a backend application locally is only the first step. In real
          software development, an application must be prepared for
          <strong> production</strong>—a live environment where real users,
          real data, and real traffic exist. Production-ready backends are
          designed to be stable, secure, scalable, and easy to maintain.
        </p>

        <p>
          One major difference between development and production is
          <strong> environment configuration</strong>. In development, you may
          hardcode values or use test credentials. In production, sensitive
          information such as database URLs, API keys, and secret tokens must
          never be stored directly in the codebase. Instead, they are managed
          using environment variables.
        </p>

        <p>
          Preparing for production also means handling
          <strong> errors and crashes properly</strong>. In development, detailed
          error messages help debugging. In production, error responses should
          be clean, minimal, and user-safe, while full error details are logged
          internally for developers.
        </p>

        <p>
          Another important step is ensuring your backend can
          <strong> handle traffic efficiently</strong>. This includes avoiding
          blocking code, structuring routes cleanly, optimizing database queries,
          and ensuring that unnecessary console logs or debug tools are removed
          before deployment.
        </p>

        <p>
          Production applications must also follow
          <strong> security best practices</strong>. This includes validating
          inputs, securing API routes, preventing exposure of stack traces, and
          ensuring that secrets like JWT keys and database passwords are never
          publicly visible.
        </p>

        <p>
          Finally, a production-ready backend should be structured in a way that
          allows future growth. Clean folder structure, separation of concerns,
          reusable services, and consistent naming conventions all make the
          application easier to scale and maintain after deployment.
        </p>

      </div>
    </div>

    {/* PRACTICAL STEPS */}
    <div className="mb-20">

      <h3 className="text-xl font-bold text-[#0A1F44] mb-6">
        Practical Preparation Checklist
      </h3>

      <div className="space-y-8 text-gray-700">

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Example: Using environment variables
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5000;
const DB_URI = process.env.MONGO_URI;

if (!DB_URI) {
  throw new Error("Database connection string is missing");
}
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Example: Production-safe error handling
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    message: "Something went wrong. Please try again later."
  });
});
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Example: Starting server properly
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
            `}</code>
          </pre>
        </div>

      </div>
    </div>

    {/* VIDEO RESOURCES */}
    <div className="mb-20">

      <h3 className="text-xl font-bold text-[#0A1F44] mb-8">
        Watch & Understand
      </h3>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/2jqok-WgelI"
              title="Preparing Node.js Apps for Production"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Preparing Node.js Apps for Production
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn key steps to make backend apps production-ready.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/ENrzD9HAZK4"
              title="Environment Variables Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Environment Variables Explained
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              How to safely manage secrets in production.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/lh9XVGv6BHs"
              title="Production Best Practices for Node.js"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Node.js Production Best Practices
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how professionals deploy and maintain backend systems.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}
{currentTopic === 1 && (
  <>
    {/* SECTION: DEPLOYING BACKEND APPS */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Deploying Backend Applications with Render, Railway & Vercel
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          Once a backend application is production-ready, the next critical
          step is <strong>deployment</strong>—making your API available on the
          internet so real users and frontend applications can access it.
          Deployment platforms handle server provisioning, environment setup,
          scaling, and uptime for you.
        </p>

        <p>
          Modern backend developers no longer manually configure physical
          servers. Instead, platforms like <strong>Render</strong>,
          <strong>Railway</strong>, and <strong>Vercel</strong> allow you to
          deploy applications directly from a GitHub repository with minimal
          configuration.
        </p>

        <p>
          <strong>Render</strong> is ideal for full backend services. It supports
          Node.js servers, background workers, environment variables, and
          persistent services. It behaves very similarly to traditional cloud
          servers, making it excellent for APIs and databases.
        </p>

        <p>
          <strong>Railway</strong> focuses on developer experience and speed. It
          provides instant deployments, built-in logs, database provisioning,
          and automatic environment variable handling. It is especially popular
          for startups and rapid prototyping.
        </p>

        <p>
          <strong>Vercel</strong> is best known for frontend hosting, but it also
          supports backend logic through <strong>serverless functions</strong>.
          While not ideal for large Express servers, it is powerful for APIs,
          authentication endpoints, and microservices.
        </p>

        <p>
          Regardless of platform, the deployment process always follows the
          same core principles: connect your GitHub repository, configure
          environment variables, define a start command, and ensure your server
          listens on the correct port.
        </p>

      </div>
    </div>

    {/* PRACTICAL DEPLOYMENT STEPS */}
    <div className="mb-20">

      <h3 className="text-xl font-bold text-[#0A1F44] mb-6">
        Practical Deployment Steps
      </h3>

      <div className="space-y-8 text-gray-700">

        {/* SERVER SETUP */}
        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// server.js
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Backend deployed successfully" });
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
            `}</code>
          </pre>
        </div>

        {/* PACKAGE.JSON */}
        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// package.json
{
  "name": "backend-api",
  "type": "module",
  "scripts": {
    "start": "node server.js"
  }
}
            `}</code>
          </pre>
        </div>

        {/* ENV VARIABLES */}
        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// .env (DO NOT COMMIT)
PORT=5000
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=supersecretkey
            `}</code>
          </pre>
        </div>

      </div>
    </div>

    {/* PLATFORM GUIDES */}
    <div className="mb-20">

      <h3 className="text-xl font-bold text-[#0A1F44] mb-8">
        Platform-Specific Deployment Flow
      </h3>

      <div className="space-y-6 text-gray-700">

        <p>
          <strong>Render:</strong> Create a new Web Service → Connect GitHub →
          Select branch → Set build command (optional) → Set start command
          (<code>npm start</code>) → Add environment variables → Deploy.
        </p>

        <p>
          <strong>Railway:</strong> Create a project → Deploy from GitHub →
          Railway auto-detects Node.js → Add environment variables →
          Deployment runs automatically.
        </p>

        <p>
          <strong>Vercel:</strong> Use serverless functions inside an
          <code>/api</code> folder → Each file becomes an endpoint → Ideal for
          lightweight APIs and auth logic.
        </p>

      </div>
    </div>

    {/* VIDEO RESOURCES */}
    <div className="mb-20">

      <h3 className="text-xl font-bold text-[#0A1F44] mb-8">
        Watch & Deploy
      </h3>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/71wSzpLyW9k"
              title="Deploy Node.js App on Render"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Deploying Node.js on Render
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Step-by-step backend deployment using Render.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/8RjI9y0aD3Y"
              title="Deploy Express App on Railway"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Express Deployment on Railway
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn fast backend deployment using Railway.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/5U8z6tWzW7k"
              title="Serverless APIs with Vercel"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Backend APIs on Vercel
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Using Vercel serverless functions for APIs.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}
{currentTopic === 2 && (
  <>
    {/* SECTION: BACKEND CAPSTONE PROJECT */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Backend Capstone Project — Building a Production-Ready API
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          The capstone project is the final and most important part of this
          backend program. It is designed to test your understanding of
          backend fundamentals, databases, APIs, authentication, security,
          and deployment by applying everything you have learned to a
          real-world problem.
        </p>

        <p>
          Instead of isolated exercises, you will build a
          <strong> complete backend application</strong> that follows
          professional standards. This project should be something you can
          confidently include in your portfolio and explain during technical
          interviews.
        </p>

        <p>
          Your task is to design, build, secure, and deploy a
          <strong> RESTful backend API</strong> that manages real data,
          supports authenticated users, and exposes clean, well-structured
          endpoints.
        </p>

        <p>
          You are encouraged to think like a backend engineer working on a
          production system—consider data structure, performance, security,
          maintainability, and scalability from the beginning.
        </p>

      </div>
    </div>

    {/* PROJECT REQUIREMENTS */}
    <div className="mb-20">

      <h3 className="text-xl font-bold text-[#0A1F44] mb-6">
        Project Requirements
      </h3>

      <div className="space-y-6 text-gray-700">

        <ul className="space-y-3 list-disc list-inside">
          <li>
            Build a backend application using <strong>Node.js</strong> and
            <strong> Express.js</strong>
          </li>
          <li>
            Use <strong>MongoDB</strong> as the database with
            <strong> Mongoose</strong> for schema modeling
          </li>
          <li>
            Implement full <strong>CRUD operations</strong> for at least
            two main resources
          </li>
          <li>
            Add <strong>user authentication</strong> using JWT
          </li>
          <li>
            Protect routes with authentication and authorization logic
          </li>
          <li>
            Validate incoming data and handle errors gracefully
          </li>
          <li>
            Store sensitive values using <strong>environment variables</strong>
          </li>
          <li>
            Deploy the application to <strong>Render, Railway, or Vercel</strong>
          </li>
        </ul>

      </div>
    </div>

    {/* PROJECT IDEAS */}
    <div className="mb-20">

      <h3 className="text-xl font-bold text-[#0A1F44] mb-6">
        Suggested Project Ideas
      </h3>

      <div className="space-y-6 text-gray-700">

        <p>
          You may choose any project idea as long as it meets the requirements.
          Below are examples of realistic backend systems:
        </p>

        <ul className="space-y-3 list-disc list-inside">
          <li>Student Internship Management API</li>
          <li>E-commerce Product & Order API</li>
          <li>Task / Project Management System</li>
          <li>Blog or Content Management API</li>
          <li>Course Enrollment & Learning Platform API</li>
        </ul>

        <p>
          Each project should involve users, protected actions, and data
          relationships (for example: users → posts, users → tasks, users →
          orders).
        </p>

      </div>
    </div>

    {/* DELIVERABLES */}
    <div className="mb-20">

      <h3 className="text-xl font-bold text-[#0A1F44] mb-6">
        Expected Deliverables
      </h3>

      <div className="space-y-6 text-gray-700">

        <ul className="space-y-3 list-disc list-inside">
          <li>Public GitHub repository with clean commit history</li>
          <li>Well-structured project folders (controllers, routes, models)</li>
          <li>Clear API endpoints and HTTP status codes</li>
          <li>Deployed API URL</li>
          <li>README file explaining the project, setup, and API usage</li>
        </ul>

        <p>
          Your README should clearly describe what the API does, how to run it
          locally, and how to interact with its endpoints.
        </p>

      </div>
    </div>

    {/* EVALUATION */}
    <div className="mb-20">

      <h3 className="text-xl font-bold text-[#0A1F44] mb-6">
        Evaluation Criteria
      </h3>

      <div className="space-y-6 text-gray-700">

        <ul className="space-y-3 list-disc list-inside">
          <li>Correct use of backend concepts and tools</li>
          <li>Clean, readable, and maintainable code</li>
          <li>Proper authentication and security practices</li>
          <li>Correct data modeling and database usage</li>
          <li>Successful deployment and working endpoints</li>
        </ul>

        <p>
          This project is not about perfection—it is about demonstrating that
          you understand how backend systems are built and how all the pieces
          work together.
        </p>

      </div>
    </div>

    {/* FINAL NOTE */}
    <div className="bg-white border rounded-3xl p-8">

      <h3 className="text-xl font-bold text-[#0A1F44] mb-4">
        Final Note
      </h3>

      <p className="text-gray-700 leading-relaxed">
        Completing this capstone means you are no longer just learning backend
        development—you are <strong>building like a backend engineer</strong>.
        This project represents your transition from theory to real-world
        backend practice.
      </p>

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