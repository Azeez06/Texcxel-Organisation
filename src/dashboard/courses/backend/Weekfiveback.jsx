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
    · Week 5
  </span>
</div>

     <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A1F44] mb-5">
    Express.js & Rest API
    </h1>


  <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed text-base sm:text-lg">
    This week focuses on building real backend applications using Express.js.
    You will learn how to create structured APIs, handle client requests,
    process data, and send meaningful responses. By the end of this week,
    you will understand how modern RESTful APIs are designed and how backend
    servers power real-world web and mobile applications.
  </p>
</div>

{/* LEARNING OBJECTIVES */}
<div className="bg-white rounded-3xl border border-gray-200 p-8 mb-16">

  <h2 className="text-xl font-bold text-[#0A1F44] mb-6">
    What you will learn
  </h2>

  <ul className="space-y-4 text-gray-700 text-base leading-relaxed">
    {[
      "Learn how to use Express.js to create a backend server",
      "What Express.js is and why it is used in backend development",
      "Setting up an Express server and understanding application structure",
      "Handling routes and HTTP methods (GET, POST, PUT, DELETE)",
      "Understanding middleware and how it processes requests",
      "Sending structured responses using JSON",
      "RESTful API design principles and best practices",
      "Building clean, scalable, and maintainable API endpoints",
     ].map((item, i) => (
      <li key={i} className="flex items-start gap-3">
        <span className="mt-1 w-2 h-2 rounded-full bg-red-600" />
        <span>{item}</ span>
      </li>
    ))}
  </ul>
</div>
      

{currentTopic === 0 && (
  <>
    {/* SECTION: WHAT EXPRESS.JS IS */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        What Express.js Is and Why It Is Used in Backend Development
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
          Express.js is a lightweight and flexible backend framework built on
          top of Node.js. While Node.js gives you the ability to run JavaScript
          on the server, Express.js provides a structured and efficient way to
          build backend applications and APIs without writing everything from
          scratch.
        </p>

        <p>
          To understand why Express exists, imagine running a restaurant.
          Node.js gives you the building itself, electricity, and water. But it
          does not tell you where to place the kitchen, how orders should flow,
          or how staff should communicate. Express.js acts like the restaurant
          system—it organizes how requests come in, how they are handled, and
          how responses are sent back to customers.
        </p>

        <p>
          Without Express, handling requests in Node.js requires writing a lot
          of repetitive and low-level code. Express simplifies this by providing
          clear tools for routing, request handling, responses, middleware, and
          error management. This allows developers to focus on application logic
          instead of infrastructure details.
        </p>

        <p>
          Express is widely used because it follows a simple but powerful idea:
          requests come in, logic is applied, and responses go out. This model
          makes Express perfect for building REST APIs that power frontend
          applications, mobile apps, dashboards, and third-party integrations.
        </p>

        <p>
          Another major reason Express is popular is its flexibility. It does
          not force strict rules on how you structure your application. This
          means beginners can start small, while professionals can scale the
          same Express app into large production systems used by millions of
          users.
        </p>

        <p>
          Express also has a massive ecosystem of middleware and tools that
          extend its capabilities. From authentication and logging to security
          and file uploads, Express allows you to plug in features without
          rewriting core logic.
        </p>

        <p>
          In real-world backend development, Express.js is often the bridge
          between the client (frontend), the database (MongoDB), and business
          logic. Learning Express means learning how real backend systems are
          built, structured, and maintained.
        </p>

      </div>
    </div>

    {/* PRACTICAL EXAMPLE */}
    <div className="mb-20">

      <h3 className="text-xl font-bold text-[#0A1F44] mb-6">
        Practical Example
      </h3>

      <div className="space-y-8 text-gray-700">

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Basic Express server example

const express = require("express");

const app = express();

// Route handler
app.get("/", (req, res) => {
  res.send("Welcome to your first Express server!");
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
            `}</code>
          </pre>
        </div>

        <p>
          In this example, Express handles incoming requests, matches them to
          routes, and sends responses back to the client. This simple structure
          is the foundation of every Express application—from small projects to
          large-scale APIs.
        </p>

      </div>
    </div>

    {/* VIDEO RESOURCES */}
    <div className="mb-20">

      <h3 className="text-xl font-bold text-[#0A1F44] mb-8">
        Watch & Understand
      </h3>

      <div className="grid md:grid-cols-3 gap-8">

        {/* VIDEO 1 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/L72fhGm1tfE"
              title="What is Express.js?"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              What Is Express.js?
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              A beginner-friendly explanation of Express and its role in backend
              development.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/pKd0Rpw7O48"
              title="Node.js vs Express.js"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Node.js vs Express.js
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand the difference between Node.js and Express.js.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/H9M02of22z4"
              title="Why Use Express?"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Why Use Express?
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn why Express is the most popular Node.js framework.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}
{currentTopic === 1 && (
  <>
    {/* SECTION: SETTING UP AN EXPRESS SERVER */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Setting Up an Express Server and Project Structure
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
          Before building APIs with Express, it is important to understand how
          an Express project is structured and how a server is properly set up.
          A well-organized project makes your backend easier to understand,
          debug, scale, and maintain as the application grows.
        </p>

        <p>
          In real-world backend development, servers are not written in a single
          file. Instead, responsibilities are separated into folders such as
          routes, controllers, and configuration files. Express allows you to
          start simple and gradually introduce structure as your application
          becomes more complex.
        </p>

        <p>
          Setting up an Express server begins with initializing a Node.js
          project and installing Express as a dependency. This gives you access
          to Express’s routing system, middleware handling, and response tools.
          From there, you create an application instance that represents your
          backend server.
        </p>

        <p>
          The Express app listens for incoming HTTP requests on a specific port.
          When a request arrives, Express checks whether it matches any defined
          routes. If a match is found, the corresponding logic runs and a
          response is sent back to the client.
        </p>

        <p>
          Proper project structure is especially important when working in
          teams. When files are clearly organized, any developer can quickly
          understand where routes live, where business logic is handled, and
          where configurations are defined.
        </p>

        <p>
          In professional environments, backend applications often grow to
          dozens or hundreds of files. Learning to structure Express projects
          early prepares you for real production systems rather than small demo
          projects.
        </p>

      </div>
    </div>

    {/* PRACTICAL SETUP */}
    <div className="mb-20">

      <h3 className="text-xl font-bold text-[#0A1F44] mb-6">
        Practical Setup
      </h3>

      <div className="space-y-10 text-gray-700">

        {/* STEP 1 */}
        <div>
          <p className="mb-4 font-semibold">
            1. Initialize a Node.js project
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
npm init -y
            `}</code>
          </pre>
        </div>

        {/* STEP 2 */}
        <div>
          <p className="mb-4 font-semibold">
            2. Install Express
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
npm install express
            `}</code>
          </pre>
        </div>

        {/* STEP 3 */}
        <div>
          <p className="mb-4 font-semibold">
            3. Create the main server file (index.js)
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
const express = require("express");

const app = express();
const PORT = 3000;

// Basic route
app.get("/", (req, res) => {
  res.send("Express server is running");
});

// Start server
app.listen(PORT, () => {
  console.log(\`Server running on http://localhost:\${PORT}\`);
});
            `}</code>
          </pre>
        </div>

        {/* STEP 4 */}
        <div>
          <p className="mb-4 font-semibold">
            4. Basic project structure
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
project-folder/
│
├── index.js
├── package.json
├── routes/
│   └── users.js
├── controllers/
│   └── userController.js
└── config/
    └── database.js
            `}</code>
          </pre>
        </div>

        <p>
          This structure separates concerns clearly. Routes handle incoming
          requests, controllers contain business logic, and configuration files
          manage application settings. As your backend grows, this structure
          prevents chaos and improves readability.
        </p>

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
              src="https://www.youtube.com/embed/Oe421EPjeBE"
              title="Express Server Setup"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Express Server Setup
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how to create and run your first Express server.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/SccSCuHhOw0"
              title="Express Project Structure"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Express Project Structure
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              How professionals organize Express applications.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/gnsO8-xJ8rs"
              title="Express App Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Express App Explained
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand how Express apps handle requests internally.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}

{currentTopic === 2 && (
  <>
    {/* SECTION: ROUTES & HTTP METHODS */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Handling Routes and HTTP Methods (GET, POST, PUT, DELETE)
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
          In backend development, <strong>routes</strong> define how your server
          responds to different client requests. A route connects a specific
          URL and an HTTP method to a piece of logic that runs on the server.
          Without routes, a backend application would not know how to handle
          incoming requests.
        </p>

        <p>
          HTTP methods describe <strong>what action</strong> the client wants to
          perform. For example, a browser or mobile app may want to retrieve
          data, create new data, update existing data, or delete data. Express
          makes handling these actions simple and readable by mapping each HTTP
          method directly to a function.
        </p>

        <p>
          The <strong>GET</strong> method is used to retrieve data from the
          server. This could be fetching a list of users, loading a product
          page, or retrieving account information. GET requests should never
          change data — they are read-only.
        </p>

        <p>
          The <strong>POST</strong> method is used to send new data to the
          server. Examples include creating a user account, submitting a form,
          or placing an order. POST requests usually include data in the
          request body.
        </p>

        <p>
          The <strong>PUT</strong> method is used to update existing data. For
          example, editing a user profile or changing a product’s price. PUT
          requests tell the server that an existing resource should be modified.
        </p>

        <p>
          The <strong>DELETE</strong> method is used to remove data from the
          server, such as deleting a user, removing a post, or cancelling an
          order. This method permanently affects stored data and must be used
          carefully.
        </p>

        <p>
          Together, these HTTP methods form the foundation of
          <strong> RESTful APIs</strong>. Almost every modern backend system —
          from social media platforms to banking applications — relies on these
          methods to manage data consistently and securely.
        </p>

      </div>
    </div>

    {/* PRACTICAL EXAMPLES */}
    <div className="mb-20">

      <h3 className="text-xl font-bold text-[#0A1F44] mb-6">
        Practical Examples
      </h3>

      <div className="space-y-10 text-gray-700">

        {/* GET */}
        <div>
          <p className="mb-4 font-semibold">
            GET — Fetching data
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Azeez" },
    { id: 2, name: "Fatima" }
  ]);
});
            `}</code>
          </pre>
        </div>

        {/* POST */}
        <div>
          <p className="mb-4 font-semibold">
            POST — Creating new data
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
app.use(express.json());

app.post("/users", (req, res) => {
  const newUser = req.body;

  res.status(201).json({
    message: "User created successfully",
    user: newUser
  });
});
            `}</code>
          </pre>
        </div>

        {/* PUT */}
        <div>
          <p className="mb-4 font-semibold">
            PUT — Updating existing data
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
app.put("/users/:id", (req, res) => {
  const userId = req.params.id;
  const updatedData = req.body;

  res.json({
    message: \`User \${userId} updated\`,
    updates: updatedData
  });
});
            `}</code>
          </pre>
        </div>

        {/* DELETE */}
        <div>
          <p className="mb-4 font-semibold">
            DELETE — Removing data
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
app.delete("/users/:id", (req, res) => {
  const userId = req.params.id;

  res.json({
    message: \`User \${userId} deleted successfully\`
  });
});
            `}</code>
          </pre>
        </div>

        <p>
          In real applications, these routes usually interact with a database
          instead of returning hardcoded data. However, the structure remains
          the same whether you are working with MongoDB, PostgreSQL, or any
          other database system.
        </p>

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
              src="https://www.youtube.com/embed/pKd0Rpw7O48"
              title="Express Routing Basics"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Express Routing Basics
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how routes and HTTP methods work in Express.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/fgTGADljAeg"
              title="REST API HTTP Methods"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              HTTP Methods Explained
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand GET, POST, PUT, and DELETE in real APIs.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/l8WPWK9mS5M"
              title="Building REST APIs with Express"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              REST APIs with Express
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Build real RESTful routes step by step.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}
{currentTopic === 3 && (
  <>
    {/* SECTION: EXPRESS MIDDLEWARE */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Understanding Middleware in Express (req, res, next)
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
          In Express, <strong>middleware</strong> is one of the most important
          concepts to understand because it controls how requests are processed
          before they reach your final route logic. Middleware functions sit
          between the client’s request and the server’s response.
        </p>

        <p>
          When a request comes into an Express application, it does not jump
          straight to a route like <code>GET /users</code>. Instead, the request
          passes through a chain of middleware functions. Each middleware can
          read the request, modify it, stop it, or pass it forward.
        </p>

        <p>
          Every middleware function has access to three core objects:
          <strong> req</strong> (the request),
          <strong> res</strong> (the response), and
          <strong> next</strong>. The <strong>next</strong> function is what
          tells Express to move on to the next middleware or route handler.
        </p>

        <p>
          Middleware is commonly used for tasks like logging requests,
          validating data, checking authentication, handling errors, and
          parsing incoming JSON. Instead of repeating the same logic in every
          route, middleware allows you to write that logic once and reuse it.
        </p>

        <p>
          Think of middleware like security checkpoints at an airport. Every
          passenger (request) must pass through multiple checks before boarding
          (reaching the route). Some passengers may be stopped, redirected, or
          allowed to continue based on certain conditions.
        </p>

        <p>
          Middleware can be applied globally (to all routes), to specific
          routes, or even to specific HTTP methods. This flexibility makes
          Express powerful and scalable for real-world backend systems.
        </p>

        <p>
          Understanding middleware deeply is what separates beginner Express
          developers from professional backend engineers. Almost every serious
          backend application relies heavily on middleware.
        </p>

      </div>
    </div>

    {/* PRACTICAL EXAMPLES */}
    <div className="mb-20">

      <h3 className="text-xl font-bold text-[#0A1F44] mb-6">
        Practical Examples
      </h3>

      <div className="space-y-10 text-gray-700">

        {/* BASIC MIDDLEWARE */}
        <div>
          <p className="mb-4 font-semibold">
            Basic middleware — logging requests
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
app.use((req, res, next) => {
  console.log(\`\${req.method} \${req.url}\`);
  next();
});
            `}</code>
          </pre>

          <p className="mt-4 text-sm text-gray-600">
            This middleware runs for every request and logs the HTTP method and
            URL. The <strong>next()</strong> call allows the request to continue.
          </p>
        </div>

        {/* JSON MIDDLEWARE */}
        <div>
          <p className="mb-4 font-semibold">
            Built-in middleware — parsing JSON
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
app.use(express.json());

app.post("/login", (req, res) => {
  console.log(req.body);
  res.send("Login data received");
});
            `}</code>
          </pre>

          <p className="mt-4 text-sm text-gray-600">
            Without <code>express.json()</code>, Express would not understand
            JSON data sent from the client.
          </p>
        </div>

        {/* ROUTE LEVEL MIDDLEWARE */}
        <div>
          <p className="mb-4 font-semibold">
            Route-level middleware — protecting routes
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
const isAuthenticated = (req, res, next) => {
  const loggedIn = true;

  if (!loggedIn) {
    return res.status(401).send("Unauthorized");
  }

  next();
};

app.get("/dashboard", isAuthenticated, (req, res) => {
  res.send("Welcome to your dashboard");
});
            `}</code>
          </pre>

          <p className="mt-4 text-sm text-gray-600">
            This middleware checks if a user is authenticated before allowing
            access to the dashboard route.
          </p>
        </div>

        {/* ERROR HANDLING */}
        <div>
          <p className="mb-4 font-semibold">
            Error-handling middleware
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong");
});
            `}</code>
          </pre>

          <p className="mt-4 text-sm text-gray-600">
            Error middleware helps you handle unexpected issues gracefully
            instead of crashing the server.
          </p>
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
              src="https://www.youtube.com/embed/lY6icfhap2o"
              title="Express Middleware Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Express Middleware Explained
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how middleware works step by step.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/9HOem0amlyg"
              title="Middleware in Express.js"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Middleware in Express.js
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Practical middleware use cases.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/XpLgITRGA30"
              title="Authentication Middleware Example"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Authentication Middleware
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how middleware protects routes.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}
{currentTopic === 4 && (
  <>
    {/* SECTION: RESTFUL API DESIGN PRINCIPLES */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        RESTful API Design Principles
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
          A <strong>RESTful API</strong> is a way of designing backend services
          so that different applications can communicate with each other in a
          clear, predictable, and scalable manner. REST stands for
          <strong> Representational State Transfer</strong>, and it defines a
          set of principles—not rules—that guide how APIs should behave.
        </p>

        <p>
          In real-world applications, APIs are consumed by many clients:
          websites, mobile apps, third-party services, and even other servers.
          RESTful design ensures that all these clients can understand and use
          your API without confusion.
        </p>

        <p>
          One of the core ideas of REST is that everything is treated as a
          <strong> resource</strong>. Resources are things like users, products,
          orders, or posts. Each resource is identified by a clear and
          meaningful URL.
        </p>

        <p>
          RESTful APIs rely heavily on standard HTTP methods such as
          <strong> GET</strong>, <strong>POST</strong>,
          <strong> PUT</strong>, and <strong> DELETE</strong>. Each method has a
          specific purpose, which helps make APIs self-explanatory and easy to
          use.
        </p>

        <p>
          Another important principle is the use of proper
          <strong> HTTP status codes</strong>. Status codes tell the client what
          happened with a request—whether it was successful, failed, or
          requires further action. This makes debugging and error handling much
          easier.
        </p>

        <p>
          RESTful APIs are <strong>stateless</strong>, meaning each request must
          contain all the information the server needs to process it. The
          server does not remember previous requests. This improves scalability
          and reliability.
        </p>

        <p>
          Designing APIs properly from the start saves time, prevents breaking
          changes, and makes your backend professional and production-ready.
        </p>

      </div>
    </div>

    {/* PRACTICAL EXAMPLES */}
    <div className="mb-20">

      <h3 className="text-xl font-bold text-[#0A1F44] mb-6">
        Practical Examples
      </h3>

      <div className="space-y-10 text-gray-700">

        {/* RESOURCE-BASED ROUTES */}
        <div>
          <p className="mb-4 font-semibold">
            Resource-based endpoint design
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Bad ❌
GET /getAllUsers
POST /createUser

// Good ✅
GET /users
POST /users
GET /users/:id
PUT /users/:id
DELETE /users/:id
            `}</code>
          </pre>

          <p className="mt-4 text-sm text-gray-600">
            REST APIs focus on nouns (resources), not verbs. The HTTP method
            already describes the action.
          </p>
        </div>

        {/* STATUS CODES */}
        <div>
          <p className="mb-4 font-semibold">
            Using proper HTTP status codes
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
app.post("/users", (req, res) => {
  res.status(201).json({
    message: "User created successfully"
  });
});

app.get("/users/:id", (req, res) => {
  res.status(404).json({
    error: "User not found"
  });
});
            `}</code>
          </pre>

          <p className="mt-4 text-sm text-gray-600">
            Status codes clearly communicate success or failure to the client.
          </p>
        </div>

        {/* CONSISTENT RESPONSES */}
        <div>
          <p className="mb-4 font-semibold">
            Consistent response structure
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
res.json({
  success: true,
  data: user
});

// Error response
res.status(400).json({
  success: false,
  message: "Invalid input"
});
            `}</code>
          </pre>

          <p className="mt-4 text-sm text-gray-600">
            Consistency helps frontend developers consume your API easily.
          </p>
        </div>

        {/* API VERSIONING */}
        <div>
          <p className="mb-4 font-semibold">
            API versioning
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Versioned API
GET /api/v1/users
GET /api/v2/users
            `}</code>
          </pre>

          <p className="mt-4 text-sm text-gray-600">
            Versioning prevents breaking existing clients when APIs evolve.
          </p>
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
              src="https://www.youtube.com/embed/Q-BpqyOT3a8"
              title="REST API Design Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              REST API Design Explained
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn REST principles with real examples.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/lsMQRaeKNDk"
              title="HTTP Status Codes Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              HTTP Status Codes
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand how servers communicate outcomes.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Y6dZlD_wlBU"
              title="REST API Best Practices"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              REST API Best Practices
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how professionals design APIs.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}
{currentTopic === 5 && (
  <>
    {/* SECTION: CLEAN & SCALABLE API ENDPOINT DESIGN */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Building Clean, Scalable, and Maintainable API Endpoints
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
          As backend applications grow, APIs can quickly become difficult to
          manage if they are not structured properly. Clean and scalable API
          endpoints are essential for long-term success, especially when
          multiple developers are working on the same project or when features
          are added over time.
        </p>

        <p>
          A <strong>clean API endpoint</strong> is easy to understand, easy to
          extend, and easy to debug. When someone looks at an endpoint, they
          should immediately understand what it does without reading complex
          logic or unnecessary code.
        </p>

        <p>
          <strong>Scalability</strong> means your API can grow without breaking.
          New features, routes, and logic should be added without rewriting
          existing code. This is achieved by separating concerns, organizing
          files properly, and following consistent patterns.
        </p>

        <p>
          <strong>Maintainability</strong> focuses on future developers—including
          your future self. Clean APIs reduce bugs, simplify testing, and make
          it easier to modify behavior without unintended side effects.
        </p>

        <p>
          One of the biggest mistakes beginners make is putting all logic
          directly inside route handlers. While this works for small demos, it
          becomes unmanageable in real applications. Clean APIs separate
          routing, business logic, and data access.
        </p>

        <p>
          Professional backend developers design APIs as systems, not scripts.
          Every endpoint follows the same structure, naming conventions, error
          handling style, and response format.
        </p>

      </div>
    </div>

    {/* PRACTICAL EXAMPLES */}
    <div className="mb-20">

      <h3 className="text-xl font-bold text-[#0A1F44] mb-6">
        Practical Examples
      </h3>

      <div className="space-y-10 text-gray-700">

        {/* FAT VS CLEAN ROUTES */}
        <div>
          <p className="mb-4 font-semibold">
            Avoiding “fat” route handlers
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// ❌ Bad: too much logic in the route
app.post("/users", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(409).json({ error: "User exists" });
  }

  const user = await User.create({ email, password });
  res.status(201).json(user);
});
            `}</code>
          </pre>
        </div>

        {/* CLEAN STRUCTURE */}
        <div>
          <p className="mb-4 font-semibold">
            Clean route + controller separation
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// routes/user.routes.js
router.post("/", createUser);

// controllers/user.controller.js
export const createUser = async (req, res) => {
  const user = await userService.create(req.body);
  res.status(201).json(user);
};
            `}</code>
          </pre>

          <p className="mt-4 text-sm text-gray-600">
            Routes define WHAT happens. Controllers define HOW it happens.
          </p>
        </div>

        {/* CONSISTENT RESPONSES */}
        <div>
          <p className="mb-4 font-semibold">
            Consistent API responses
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
res.status(200).json({
  success: true,
  message: "User fetched successfully",
  data: user
});
            `}</code>
          </pre>

          <p className="mt-4 text-sm text-gray-600">
            A consistent structure improves frontend integration and debugging.
          </p>
        </div>

        {/* ERROR HANDLING */}
        <div>
          <p className="mb-4 font-semibold">
            Centralized error handling
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// error middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Server error"
  });
});
            `}</code>
          </pre>

          <p className="mt-4 text-sm text-gray-600">
            This keeps routes clean and avoids repeated error code.
          </p>
        </div>

        {/* FILE STRUCTURE */}
        <div>
          <p className="mb-4 font-semibold">
            Scalable folder structure
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
src/
 ├── routes/
 ├── controllers/
 ├── services/
 ├── models/
 ├── middlewares/
 ├── utils/
 └── app.js
            `}</code>
          </pre>

          <p className="mt-4 text-sm text-gray-600">
            This structure scales cleanly as applications grow.
          </p>
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
              src="https://www.youtube.com/embed/iJfM2W9v3Sc"
              title="Clean API Design"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Clean API Design
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how professionals structure APIs.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/4yqu8YF29cU"
              title="Express Project Structure"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Express Project Structure
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Organizing large Express applications.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/rltfdjcXjmk"
              title="Scalable Backend Architecture"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Scalable Backend Architecture
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Designing APIs that grow without breaking.
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