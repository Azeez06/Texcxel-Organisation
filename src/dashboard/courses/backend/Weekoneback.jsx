import { useState } from "react";

export default function Weekseven() {
   const [currentTopic, setCurrentTopic] = useState(0);

  return (
    <section className="bg-[#FAF7F2] min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-8">

   {/* HEADER */}
<div className="mb-16">
  <span className="text-sm font-bold uppercase tracking-wide text-red-600">
    Backend Development · Week 1
  </span>

  <h1 className="text-4xl font-extrabold text-[#0A1F44] mt-4 mb-6">
    Backend & Data Foundations
  </h1>

  <p className="text-gray-700 max-w-3xl leading-relaxed">
    This week introduces you to the core ideas behind backend development and
    data-driven applications. You will learn how servers work, how clients
    communicate with backends, how data is stored, and why databases are a
    critical part of modern web applications. The week also lays the foundation
    for working with MongoDB in later modules.
  </p>
</div>

{/* LEARNING OBJECTIVES */}
<div className="bg-white rounded-3xl border p-8 mb-12">
  <h2 className="text-xl font-bold text-[#0A1F44] mb-6">
    What you will learn
  </h2>

  <ul className="space-y-4 text-gray-700">
    <li>— What backend development is and how it differs from frontend</li>
    <li>— Client–server architecture and how requests and responses work</li>
    <li>— Core data concepts: data, records, storage, and persistence</li>
    <li>— Types of databases and why databases are used</li>
    <li>— Introduction to MongoDB and the NoSQL ecosystem</li>
  </ul>
</div>

{currentTopic === 0 && (
  <>
    {/* SECTION: BACKEND VS FRONTEND */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        What Backend Development Is and How It Differs from Frontend
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          Backend development focuses on everything that happens
          <strong> behind the scenes</strong> of a website or application.
          While users interact with buttons, forms, and pages on the screen,
          the backend handles the logic, data processing, storage, and
          communication that make those interactions meaningful.
        </p>

        <p>
          A simple real-life example is a <strong>restaurant</strong>.
          The frontend is the dining area — the menu, tables, waiters, and
          atmosphere that customers see and interact with. The backend is
          the kitchen. Customers never enter the kitchen, but that’s where
          orders are received, meals are prepared, ingredients are managed,
          and rules are followed to deliver the right food to the right table.
        </p>

        <p>
          In web development, the <strong>frontend</strong> is responsible
          for layout, design, and user interaction using technologies like
          HTML, CSS, and JavaScript. The <strong>backend</strong> handles
          user authentication, saving data, fetching information from
          databases, enforcing business rules, and responding to requests
          from the frontend.
        </p>

        <p>
          Consider an online banking app. The frontend allows users to log in,
          view their balance, and click “Transfer Money.” The backend verifies
          the user’s identity, checks account balances, ensures security rules
          are followed, updates records in the database, and confirms that
          the transaction is valid before responding.
        </p>

        <p>
          Backend developers work with <strong>servers</strong>,
          <strong>databases</strong>, and <strong>APIs</strong>. Their job is
          to make sure data is stored safely, processed correctly, and sent
          back to the frontend in a reliable and efficient way.
        </p>

        <p>
          Unlike frontend code, backend code is not visible to users. This is
          intentional. Sensitive logic such as passwords, payment validation,
          and access control must be protected from exposure to ensure
          security and trust.
        </p>

        <p>
          In modern applications, frontend and backend work together as a
          team. The frontend asks questions, and the backend provides answers.
          Understanding this relationship is the foundation of becoming a
          strong backend developer.
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
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Frontend example (what the user sees)
<button>Login</button>

// Backend responsibility (what happens behind the scenes)
- Check username and password
- Verify user exists in database
- Grant or deny access
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Example backend logic (conceptual)
User sends login request
↓
Server validates credentials
↓
Database checks user record
↓
Server sends response (success or error)
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Another real-world example
User clicks "Add to Cart"
Frontend: Button click event
Backend: Save cart data for that user in the database
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

        {/* VIDEO 1 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/XBu54nfzxAQ"
              title="Frontend vs Backend Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Frontend vs Backend Explained
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              A clear explanation of the roles frontend and backend play.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/4r6WdaY3SOA"
              title="What Does a Backend Developer Do?"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              What Backend Developers Do
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand backend responsibilities in real applications.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Q1np5gN7rGg"
              title="Client Server Architecture"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Client–Server Architecture
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how frontend and backend communicate.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}

{currentTopic === 1 && (
  <>
    {/* SECTION: CLIENT–SERVER ARCHITECTURE */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Client–Server Architecture and How Requests and Responses Work
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          At the heart of every modern web application lies a simple but powerful
          idea known as the <strong>client–server architecture</strong>. This
          architecture defines how different parts of an application communicate
          with each other over the internet. Understanding this concept is one of
          the most important steps in becoming a backend developer because every
          backend system exists primarily to serve clients.
        </p>

        <p>
          The <strong>client</strong> is any device or software that initiates
          communication. This could be a web browser like Chrome, a mobile app,
          or even another server. The client’s job is to request information or
          actions. The <strong>server</strong>, on the other hand, is a powerful
          computer or application that listens for requests, processes them,
          applies logic, interacts with databases, and sends back responses.
        </p>

        <p>
          A helpful real-life analogy is ordering food online. Your phone or
          laptop is the client. When you place an order, you are sending a
          request. The restaurant’s kitchen system is the server. It receives
          the order, checks availability, prepares the meal, and sends back a
          confirmation. You never enter the kitchen, but everything depends on
          how efficiently it works.
        </p>

        <p>
          In web development, this communication happens using
          <strong> HTTP requests and responses</strong>. When a user visits a
          website, submits a form, or clicks a button, the client sends an HTTP
          request to the server. This request contains important information
          such as the action being requested, data sent by the user, and headers
          describing the client environment.
        </p>

        <p>
          Once the server receives the request, it does the heavy lifting. It
          decides what the request means, validates the data, applies business
          rules, communicates with a database if necessary, and prepares a
          response. This response may contain data (such as user information),
          a success message, an error message, or instructions for the client on
          what to do next.
        </p>

        <p>
          For example, when a user logs into a website, the client sends the
          email and password to the server. The server checks the database,
          confirms whether the credentials are correct, and responds with either
          a success message or an error. The frontend does not decide who is
          allowed in—the backend makes that decision and reports the result.
        </p>

        <p>
          This separation of responsibilities makes applications more secure,
          scalable, and organized. The client focuses on user experience and
          presentation, while the server focuses on logic, data management, and
          security. As applications grow, this architecture allows teams to
          improve each side independently without breaking the entire system.
        </p>

        <p>
          As a backend developer, your primary role is to design and build the
          server side of this communication. You control how requests are
          handled, how data is stored, and how responses are structured. Mastery
          of client–server architecture is what enables you to build APIs,
          authentication systems, and data-driven applications used by thousands
          or even millions of users.
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
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Example of a client sending a request (Frontend)
fetch("https://example.com/api/users")
  .then(response => response.json())
  .then(data => console.log(data));
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Example of a server handling a request (Backend - Node.js)
app.get("/api/users", (req, res) => {
  res.json({
    message: "Users fetched successfully",
    users: ["Azeez", "Fatima", "Sadiq"]
  });
});
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Client sending data to the server
fetch("/api/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    email: "user@example.com",
    password: "password123"
  })
});
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Server responding to a login request
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "user@example.com" && password === "password123") {
    res.status(200).json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
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
              src="https://www.youtube.com/embed/eesqK59rhGA"
              title="Client Server Architecture Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Client–Server Architecture
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand how clients and servers communicate over the web.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/iYM2zFP3Zn0"
              title="HTTP Requests and Responses"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              HTTP Requests & Responses
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how data flows between frontend and backend.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/kBXQZMmiA4s"
              title="How the Web Works"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              How the Web Works
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              A complete overview of how browsers and servers interact.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}

{currentTopic === 2 && (
  <>
    {/* SECTION: CORE DATA CONCEPTS */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Core Data Concepts: Data, Records, Storage, and Persistence
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          Every backend system exists for one main reason: to
          <strong> manage data</strong>. Whether you are building a social media
          app, an e-commerce platform, a school portal, or a banking system, the
          real value of the application lies in how well it stores, retrieves,
          updates, and protects data. Understanding core data concepts is
          essential before working with databases like MongoDB.
        </p>

        <p>
          <strong>Data</strong> refers to raw information collected from users
          or systems. This can include names, emails, passwords, product prices,
          dates, messages, or even user behavior. On its own, data may look
          meaningless, but once organized and structured, it becomes valuable
          information that applications can use to make decisions.
        </p>

        <p>
          A <strong>record</strong> represents a single, complete unit of data.
          For example, one user’s profile—containing a name, email, and
          password—is a record. In real life, this is similar to a single page
          in a physical file cabinet. While data is the individual pieces,
          records bring related data together into something meaningful.
        </p>

        <p>
          <strong>Storage</strong> refers to where data lives. In backend
          development, storage usually means databases, but it can also include
          files, cloud services, or in-memory storage. Storage systems are
          designed to keep data safe, organized, and retrievable even when the
          application is restarted or the server goes offline.
        </p>

        <p>
          Imagine running a school without record books or computers. Each time
          a student comes in, you would need to ask for their name, class, and
          history again. That would be inefficient and unreliable. Storage
          solves this problem by ensuring that once data is saved, it can be
          reused anytime it is needed.
        </p>

        <p>
          <strong>Persistence</strong> is the concept of data surviving beyond
          the life cycle of an application. When a server shuts down or crashes,
          persistent data remains intact. Without persistence, all user data
          would disappear once the app stops running, making real-world
          applications impossible.
        </p>

        <p>
          For example, when you close WhatsApp and reopen it later, your chats
          are still there. That is persistence at work. The messages are stored
          permanently in a database, not just in temporary memory. Backend
          developers are responsible for ensuring this persistence using proper
          databases and storage strategies.
        </p>

        <p>
          These concepts—data, records, storage, and persistence—form the
          backbone of backend development. Once you understand them clearly,
          learning MongoDB, APIs, and server-side logic becomes much easier and
          more intuitive.
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
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Example of raw data
const email = "student@example.com";
const age = 22;
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Example of a record (grouped data)
const userRecord = {
  name: "Azeez",
  email: "azeez@example.com",
  role: "Student",
  active: true
};
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Temporary storage (not persistent)
let sessionData = {
  loggedIn: true,
  userId: 123
};

// Data will disappear if the server restarts
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Persistent storage concept (database example)
User.create({
  name: "Azeez",
  email: "azeez@example.com",
  password: "hashedPassword"
});

// Data remains saved even after server restarts
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Fetching persisted data
User.find({ role: "Student" })
  .then(users => console.log(users));
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
              src="https://www.youtube.com/embed/4Z9KEBexzcM"
              title="What is Data in Computer Science"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Understanding Data
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn what data is and why it matters in applications.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/jtHb94_MHGA"
              title="Databases Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Databases & Storage
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand how data is stored and managed.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Dn1kZtE-Fq0"
              title="Data Persistence Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Data Persistence
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn why persistence is critical for real-world systems.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}
{currentTopic === 3 && (
  <>
    {/* SECTION: TYPES OF DATABASES */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Types of Databases & Why Databases Are Used
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          As applications grow, handling data using simple files or in-memory
          variables becomes unreliable and inefficient. This is where
          <strong> databases</strong> come in. A database is a structured system
          designed to store, organize, retrieve, and manage data efficiently
          over time. Without databases, modern applications like banking apps,
          social media platforms, and e-commerce systems would not exist.
        </p>

        <p>
          Databases are used because they solve several critical problems at
          once. They ensure <strong>data persistence</strong>, allow
          <strong> fast querying</strong>, handle
          <strong> large volumes of data</strong>, and support
          <strong> multiple users</strong> accessing data simultaneously.
          Instead of manually searching through files, databases allow
          applications to retrieve exactly what they need in milliseconds.
        </p>

        <p>
          One major reason databases are essential is
          <strong> data consistency</strong>. Imagine two users updating the
          same account balance at the same time in a banking app. A database
          ensures that updates happen safely and correctly without corrupting
          the data. This reliability is something simple storage methods cannot
          guarantee.
        </p>

        <p>
          There are different <strong>types of databases</strong> because
          different applications have different needs. Some applications
          require strict structure and relationships, while others need
          flexibility and scalability. Understanding database types helps you
          choose the right tool for the right problem.
        </p>

        <p>
          <strong>Relational databases (SQL)</strong> store data in tables with
          fixed schemas. Each table has rows and columns, and relationships
          between data are enforced using keys. Examples include MySQL,
          PostgreSQL, and SQLite. These databases are excellent for systems
          where data structure is predictable, such as accounting or payroll
          systems.
        </p>

        <p>
          <strong>NoSQL databases</strong>, on the other hand, are designed for
          flexibility and scale. They store data in formats like documents,
          key-value pairs, graphs, or columns. MongoDB, which you will learn in
          this course, is a <strong>document-based NoSQL database</strong>. It
          allows data to grow and change without strict schemas, making it ideal
          for modern web applications.
        </p>

        <p>
          For example, in a social media app, user profiles may evolve over
          time—adding new fields like profile pictures, bio, followers, or
          verification status. NoSQL databases handle this evolution naturally
          without breaking existing data, which is why they are widely used in
          startups and scalable systems.
        </p>

        <p>
          In summary, databases are used to ensure data safety, speed,
          reliability, and scalability. Understanding the different types of
          databases prepares you to work confidently with MongoDB and backend
          systems in real-world applications.
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
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Example of structured data (Relational Database style)
User Table:
| id | name   | email              |
|----|--------|--------------------|
| 1  | Azeez  | azeez@email.com    |
| 2  | Fatima | fatima@email.com   |
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Example of flexible data (MongoDB / NoSQL style)
{
  name: "Azeez",
  email: "azeez@email.com",
  skills: ["Node.js", "MongoDB"],
  isVerified: true
}
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Another MongoDB document with extra fields
{
  name: "Fatima",
  email: "fatima@email.com",
  followers: 1200,
  profileImage: "avatar.png"
}
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Why files alone are problematic
// Searching a text file for one user
// is slower and error-prone compared to database queries
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
              src="https://www.youtube.com/embed/hRulZhTtUTg"
              title="What is a Database?"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              What Is a Database?
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand the purpose and importance of databases.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/ZS_kXvOeQ5Y"
              title="SQL vs NoSQL Databases"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              SQL vs NoSQL
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn the differences between relational and NoSQL databases.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/0buKQHokLK8"
              title="Why MongoDB?"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Why MongoDB?
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand why MongoDB is popular in modern backend development.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}
{currentTopic === 4 && (
  <>
    {/* SECTION: INTRODUCTION TO MONGODB */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Introduction to MongoDB & Its Ecosystem
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          MongoDB is a <strong>NoSQL, document-based database</strong> designed
          to store data in a flexible, scalable, and modern way. Unlike
          traditional relational databases that rely on rigid tables and fixed
          schemas, MongoDB stores data as <strong>documents</strong> using a
          format called <strong>BSON</strong> (Binary JSON). This makes MongoDB
          a natural fit for JavaScript-based backend systems like Node.js.
        </p>

        <p>
          Think of MongoDB as a digital filing cabinet. Instead of forcing every
          document to look exactly the same, MongoDB allows each document to
          contain only the fields it needs. This flexibility is extremely
          powerful for applications that evolve over time, such as startups,
          social platforms, and SaaS products.
        </p>

        <p>
          At the heart of MongoDB are <strong>collections</strong>. A collection
          is similar to a table in relational databases, but with one major
          difference: documents inside a collection do not need to share the
          same structure. For example, one user document may contain a
          <strong>profileImage</strong> field, while another may not—and that
          is perfectly valid.
        </p>

        <p>
          MongoDB’s ecosystem provides tools that make working with data easier
          and more intuitive. One of the most important tools is
          <strong> MongoDB Compass</strong>, a graphical interface that allows
          developers to visually explore databases, run queries, and manage
          collections without writing commands in the terminal.
        </p>

        <p>
          <strong>MongoDB Atlas</strong> is MongoDB’s cloud platform. It allows
          you to host your database online without worrying about servers,
          scaling, backups, or security configuration. Atlas is widely used in
          real-world production applications because it integrates seamlessly
          with backend frameworks and supports automatic scaling as your
          application grows.
        </p>

        <p>
          Together, MongoDB, Compass, and Atlas form a complete ecosystem that
          supports local development, cloud deployment, and real-time data
          management. Learning how these tools work together prepares you for
          professional backend development workflows.
        </p>

        <p>
          By mastering MongoDB early in this course, you will gain a strong
          foundation in handling real application data—users, products,
          orders, messages, and more—using industry-standard tools.
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
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// A MongoDB document (BSON / JSON-like)
{
  "_id": "64fdac23e4b1a9",
  "name": "Azeez",
  "email": "azeez@email.com",
  "role": "Backend Developer",
  "skills": ["Node.js", "MongoDB"],
  "isActive": true
}
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Another document in the same collection
{
  "_id": "64fdac24e4b1aa",
  "name": "Fatima",
  "email": "fatima@email.com",
  "followers": 1200,
  "verified": true
}
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// MongoDB structure overview
Database: internshipDB
  └── Collection: users
        ├── Document 1
        ├── Document 2
        └── Document 3
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Why Compass is useful
// - View documents visually
// - Filter records easily
// - Edit data safely
// - Analyze indexes
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
              src="https://www.youtube.com/embed/EE8ZTQxa0AM"
              title="MongoDB Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              What Is MongoDB?
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              A beginner-friendly introduction to MongoDB and document databases.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/jlZJqfZcZrE"
              title="MongoDB Compass Tutorial"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              MongoDB Compass Tutorial
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how to explore and manage data visually using Compass.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/KKyag6t98g8"
              title="MongoDB Atlas Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              MongoDB Atlas Explained
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand how MongoDB Atlas works and why it is used in production.
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