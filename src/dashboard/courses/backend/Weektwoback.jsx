import { useState } from "react";

export default function Weektwoback() {
   const [currentTopic, setCurrentTopic] = useState(0);

  return (
    <section className="bg-[#FAF7F2] min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-8">
{/* HEADER */}
<div className="mb-16">
  <span className="text-sm font-bold uppercase tracking-wide text-red-600">
    Backend Development · Week 2
  </span>

  <h1 className="text-4xl font-extrabold text-[#0A1F44] mt-4 mb-6">
    MongoDB Fundamentals
  </h1>

  <p className="text-gray-700 max-w-3xl leading-relaxed">
    This week focuses on building a solid practical foundation in MongoDB.
    You will learn how data is organized inside MongoDB databases, how
    collections and documents work, and how to perform essential data
    operations. By the end of this week, you will be comfortable using
    MongoDB Compass to explore data visually and understand basic data
    modeling principles used in real backend applications.
  </p>
</div>

{/* LEARNING OBJECTIVES */}
<div className="bg-white rounded-3xl border p-8 mb-12">
  <h2 className="text-xl font-bold text-[#0A1F44] mb-6">
    What you will learn
  </h2>

  <ul className="space-y-4 text-gray-700">
    <li>— Understanding MongoDB databases, collections, and documents</li>
    <li>— Creating and managing collections using MongoDB Compass</li>
    <li>— Performing CRUD operations (Create, Read, Update, Delete)</li>
    <li>— Writing basic queries and filters to retrieve data</li>
    <li>— Introduction to data modeling concepts in MongoDB</li>
    <li>— Best practices for organizing and structuring application data</li>
  </ul>
</div>

{currentTopic === 0 && (
  <>
    {/* SECTION: MONGODB DATABASES, COLLECTIONS & DOCUMENTS */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Understanding MongoDB Databases, Collections, and Documents
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          MongoDB is a <strong>NoSQL database</strong> designed to store data in
          a flexible, scalable, and developer-friendly way. Unlike traditional
          relational databases that use tables and rows, MongoDB stores data
          in a format that closely resembles real-world objects used in
          programming.
        </p>

        <p>
          At the highest level, MongoDB organizes data inside a
          <strong> database</strong>. A database is simply a container that
          holds related data for an application. For example, an e-commerce
          application might have one database that stores users, products,
          orders, and payments.
        </p>

        <p>
          Inside a database, data is grouped into
          <strong> collections</strong>. A collection is similar to a table in
          relational databases, but it is much more flexible. Documents inside
          the same collection do not need to have exactly the same structure,
          which makes MongoDB ideal for evolving applications.
        </p>

        <p>
          The actual data is stored as
          <strong> documents</strong>. A document is a single record represented
          in <strong>JSON-like format (BSON)</strong>. Documents store data as
          key–value pairs, making them easy to read, write, and map directly to
          JavaScript objects used in backend code.
        </p>

        <p>
          To understand this better, imagine a real-life example. Think of a
          <strong> school</strong> as a database. Each
          <strong> classroom</strong> is a collection, and each
          <strong> student file</strong> inside the classroom is a document.
          Every student file may contain different details, but they all belong
          to the same system.
        </p>

        <p>
          This structure makes MongoDB extremely powerful for modern backend
          development. It allows developers to store complex data, nested
          objects, and arrays without breaking strict table rules. As a result,
          MongoDB works naturally with JavaScript, Node.js, and modern APIs.
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
// Example of a MongoDB document
{
  "_id": "64fabc123",
  "name": "Azeez",
  "email": "azeez@example.com",
  "role": "Backend Student",
  "skills": ["Node.js", "MongoDB", "APIs"],
  "active": true
}
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Database structure example
Database: techcxel_backend

Collections:
- users
- courses
- enrollments

Each collection contains multiple documents
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Example document inside "courses" collection
{
  "title": "Backend Development",
  "duration": "10 Weeks",
  "level": "Beginner",
  "published": true
}
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
              src="https://www.youtube.com/embed/ZS_kXvOeQ5Y"
              title="MongoDB Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              MongoDB Explained
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Clear explanation of databases, collections, and documents.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/EE8ZTQxa0AM"
              title="MongoDB Collections and Documents"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Collections & Documents
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how MongoDB structures data internally.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/pWbMrx5rVBE"
              title="MongoDB for Beginners"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              MongoDB for Beginners
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Beginner-friendly introduction to MongoDB concepts.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}

{currentTopic === 1 && (
  <>
    {/* SECTION: MONGODB COMPASS – COLLECTION MANAGEMENT */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Creating and Managing Collections Using MongoDB Compass
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          MongoDB Compass is the official <strong>graphical user interface (GUI)</strong>
          for MongoDB. It allows developers to interact with databases visually,
          without writing commands in the terminal. This makes it an excellent
          tool for beginners and professionals alike when exploring, creating,
          and managing data.
        </p>

        <p>
          One of the first things you will do in MongoDB Compass is connect to a
          database. This connection can be to a local MongoDB server running on
          your computer or to a cloud database hosted on <strong>MongoDB Atlas</strong>.
          Once connected, Compass displays all available databases and their
          collections in a clear, navigable interface.
        </p>

        <p>
          Inside a database, you create <strong>collections</strong> to organize
          related data. For example, a backend application might have collections
          for users, courses, enrollments, and transactions. MongoDB Compass
          allows you to create these collections with just a few clicks, without
          worrying about schemas or strict table definitions.
        </p>

        <p>
          Unlike relational databases, MongoDB collections are
          <strong>schema-flexible</strong>. This means documents within the same
          collection can have different fields. MongoDB Compass makes this easy
          to visualize by showing each document exactly as it is stored, even if
          its structure differs from others.
        </p>

        <p>
          MongoDB Compass also allows you to
          <strong>insert, edit, and delete documents</strong> directly from the UI.
          This is extremely useful during development and learning because you
          can instantly see how data changes without restarting your server or
          writing scripts.
        </p>

        <p>
          Beyond basic creation, Compass helps you manage collections by
          inspecting indexes, validating documents, running queries, and
          analyzing performance. These features make Compass not just a learning
          tool, but a professional-grade database management interface.
        </p>

        <p>
          In real-world backend development, MongoDB Compass is often used for
          debugging APIs, verifying stored data, testing queries, and performing
          quick edits during development. Learning how to use it properly saves
          time and reduces errors when working with MongoDB-backed applications.
        </p>

      </div>
    </div>

    {/* PRACTICAL EXAMPLES */}
    <div className="mb-20">

      <h3 className="text-xl font-bold text-[#0A1F44] mb-6">
        Practical Walkthrough
      </h3>

      <div className="space-y-8 text-gray-700">

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Steps to create a collection in MongoDB Compass

1. Open MongoDB Compass
2. Connect to your MongoDB server (Local or Atlas)
3. Click on your database name
4. Click "Create Collection"
5. Enter collection name (e.g., users)
6. Click Create

Your collection is now ready
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Example document inserted using MongoDB Compass

{
  "name": "Zainab",
  "email": "zainab@techcxel.com",
  "role": "Backend Student",
  "track": "Backend Development",
  "enrolled": true,
  "createdAt": "2026-01-12"
}
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Managing collections in MongoDB Compass

- View documents in table or JSON view
- Edit fields directly by clicking them
- Delete documents with one click
- Filter documents using built-in query bar
- Sort data visually without writing code
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
              src="https://www.youtube.com/embed/rE_bJl2GAY8"
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
              Learn how to use MongoDB Compass step by step.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/kp3fCihUXEg"
              title="Creating Collections in MongoDB Compass"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Creating Collections
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Visual guide to creating and managing collections.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/4mOkFXyxfsU"
              title="MongoDB Compass CRUD Demo"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Compass CRUD Demo
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              See how to insert, edit, and delete data using Compass.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}
{currentTopic === 2 && (
  <>
    {/* SECTION: CRUD OPERATIONS IN MONGODB */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        CRUD Operations in MongoDB (Create, Read, Update, Delete)
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          At the core of every backend application is the ability to
          <strong> store data, retrieve data, modify data, and remove data</strong>.
          These four actions are known collectively as <strong>CRUD operations</strong>.
          Every database system, regardless of technology, is built around these
          same fundamental concepts.
        </p>

        <p>
          In MongoDB, CRUD operations are performed on
          <strong> documents inside collections</strong>. A document represents
          a single piece of data, such as a user profile, a course record, or an
          enrollment entry. MongoDB stores these documents in a JSON-like format
          called <strong>BSON</strong>, making data easy to read and flexible.
        </p>

        <p>
          <strong>Create</strong> operations allow you to insert new documents
          into a collection. This is what happens when a user signs up on a
          website, submits a form, or registers for a course. Without create
          operations, no data would ever exist in your system.
        </p>

        <p>
          <strong>Read</strong> operations are used to retrieve data from the
          database. Anytime you load a dashboard, fetch a user profile, display
          courses, or show enrolled students, you are performing read operations.
          MongoDB allows you to read all documents or filter specific ones using
          queries.
        </p>

        <p>
          <strong>Update</strong> operations allow you to modify existing data.
          This is used when a user edits their profile, updates their password,
          changes a course status, or when the system updates timestamps or flags.
          MongoDB updates only the fields you specify, keeping other data intact.
        </p>

        <p>
          <strong>Delete</strong> operations permanently remove data from the
          database. This might happen when a user deletes an account, an admin
          removes a course, or outdated records are cleaned up. Because deletes
          are irreversible, they must be used carefully in real applications.
        </p>

        <p>
          Understanding CRUD deeply is essential because every backend API you
          will build—whether with Node.js, Express, or any other framework—is
          ultimately a controlled interface for performing CRUD operations on a
          database.
        </p>

      </div>
    </div>

    {/* PRACTICAL EXAMPLES */}
    <div className="mb-20">

      <h3 className="text-xl font-bold text-[#0A1F44] mb-6">
        Practical Examples (MongoDB Shell & Compass)
      </h3>

      <div className="space-y-8 text-gray-700">

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// CREATE: Insert a new document
db.users.insertOne({
  name: "Azeez",
  email: "azeez@techcxel.com",
  track: "Backend Development",
  active: true,
  createdAt: new Date()
});
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// READ: Get all users
db.users.find();

// READ: Get specific users
db.users.find({ track: "Backend Development" });
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// UPDATE: Modify an existing document
db.users.updateOne(
  { email: "azeez@techcxel.com" },
  {
    $set: {
      active: false,
      updatedAt: new Date()
    }
  }
);
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// DELETE: Remove a document
db.users.deleteOne({ email: "azeez@techcxel.com" });
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// CRUD in real life:
// - Create → User signs up
// - Read → Dashboard loads users
// - Update → User edits profile
// - Delete → Account removal
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
              src="https://www.youtube.com/embed/Www6cTUymCY"
              title="MongoDB CRUD Operations Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              MongoDB CRUD Explained
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Clear explanation of Create, Read, Update, and Delete.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/ayp3tHEkRc0"
              title="CRUD Operations in MongoDB Compass"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              CRUD in MongoDB Compass
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Perform CRUD visually using MongoDB Compass.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/2QQGWYe7IDU"
              title="MongoDB CRUD with Real Examples"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              CRUD with Real Examples
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              See CRUD used in real backend scenarios.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}
{currentTopic === 3 && (
  <>
    {/* SECTION: DATA MODELING IN MONGODB */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Data Modeling in MongoDB (Embedding vs Referencing)
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          Data modeling is the process of deciding <strong>how data is structured,
          related, and stored</strong> inside a database. In MongoDB, data modeling
          is especially important because MongoDB is a
          <strong> document-based database</strong>, not a traditional relational
          database.
        </p>

        <p>
          Unlike SQL databases where tables and joins define relationships,
          MongoDB allows you to store related data together inside a single
          document or split it across multiple collections. This flexibility
          gives developers more control—but also more responsibility—to design
          efficient data structures.
        </p>

        <p>
          MongoDB provides two main data modeling strategies:
          <strong> embedding</strong> and <strong> referencing</strong>.
          Choosing the right approach depends on how your application reads,
          writes, and updates data in real-world usage.
        </p>

        <p>
          <strong>Embedding</strong> means storing related data inside the same
          document. This is ideal when data is tightly connected and frequently
          accessed together. For example, a user profile and their address
          details are often read at the same time, making embedding a good fit.
        </p>

        <p>
          <strong>Referencing</strong> means storing related data in separate
          collections and linking them using IDs. This approach is useful when
          data is shared across many records, grows very large, or changes
          independently—such as users and courses in an education platform.
        </p>

        <p>
          The goal of data modeling is not perfection, but balance. A good model
          minimizes duplication, improves performance, and makes future changes
          easier. Poor data modeling leads to slow queries, complex updates, and
          difficult maintenance.
        </p>

        <p>
          Understanding embedding vs referencing prepares you to design
          production-ready databases that scale as applications grow.
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
// EMBEDDING EXAMPLE
// User document with embedded address
{
  name: "Azeez",
  email: "azeez@techcxel.com",
  address: {
    street: "Ahmadu Bello Way",
    city: "Zaria",
    country: "Nigeria"
  }
}

// Best when data is always used together
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// REFERENCING EXAMPLE
// Users collection
{
  _id: ObjectId("user123"),
  name: "Azeez",
  email: "azeez@techcxel.com"
}

// Courses collection
{
  _id: ObjectId("course456"),
  title: "Backend Development",
  duration: "10 Weeks"
}

// Enrollments collection
{
  userId: ObjectId("user123"),
  courseId: ObjectId("course456"),
  enrolledAt: new Date()
}

// Best when data is shared or grows independently
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// WHEN TO EMBED
// - One-to-few relationships
// - Data read together
// - Rarely updated separately

// WHEN TO REFERENCE
// - One-to-many or many-to-many
// - Data reused across records
// - Large or frequently changing data
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// REAL LIFE EXAMPLE
// TechcXel platform:
// - User profile → embedded settings
// - Courses → separate collection
// - Enrollments → references users & courses
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
              src="https://www.youtube.com/embed/LEs-6wY0N7M"
              title="MongoDB Data Modeling Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              MongoDB Data Modeling
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how to structure data properly in MongoDB.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/jpO0lM7YV2k"
              title="Embedding vs Referencing in MongoDB"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Embedding vs Referencing
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Clear comparison with real-world use cases.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/3GHZd0zv170"
              title="MongoDB Schema Design Best Practices"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Schema Design Best Practices
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how professionals design MongoDB schemas.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}
{currentTopic === 4 && (
  <>
    {/* SECTION: INDEXES & PERFORMANCE IN MONGODB */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Indexes in MongoDB & Performance Optimization
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          As databases grow, searching through data becomes more expensive.
          Without optimization, MongoDB must scan every document in a
          collection to find matching results. This process is called a
          <strong> collection scan</strong>, and it becomes slower as data
          increases.
        </p>

        <p>
          An <strong>index</strong> is a special data structure that allows
          MongoDB to find documents faster. Think of an index like the index
          page of a book. Instead of reading every page to find a topic, you
          jump directly to the relevant section.
        </p>

        <p>
          When an index exists on a field, MongoDB uses it to quickly locate
          matching documents without scanning the entire collection. This
          dramatically improves performance, especially for frequently
          queried fields such as emails, usernames, IDs, or timestamps.
        </p>

        <p>
          Indexes are not free. While they speed up read operations, they add
          overhead to write operations like inserts, updates, and deletes
          because MongoDB must update the index whenever data changes.
        </p>

        <p>
          This means indexes should be created intentionally. You index fields
          that are commonly used in search queries, filters, sorting, or
          unique constraints—not every field in a document.
        </p>

        <p>
          In real-world applications, indexes are essential for scalability.
          Applications without indexes may work fine with small data but fail
          under real user traffic when collections grow large.
        </p>

        <p>
          Understanding indexes helps you write fast, reliable backends and
          prepares you for production environments where performance matters.
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
// Creating a basic index
db.users.createIndex({ email: 1 });

// This speeds up searches like:
db.users.find({ email: "user@example.com" });
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Creating a unique index
db.users.createIndex(
  { email: 1 },
  { unique: true }
);

// Prevents duplicate emails in the collection
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Compound index (multiple fields)
db.orders.createIndex({
  userId: 1,
  createdAt: -1
});

// Useful when filtering by user and sorting by date
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Viewing indexes on a collection
db.users.getIndexes();

// Helps audit performance and index usage
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// EXPLAIN QUERY PERFORMANCE
db.users.find({ email: "user@example.com" }).explain("executionStats");

// Shows whether MongoDB used an index or a collection scan
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
              src="https://www.youtube.com/embed/lWczmZzN8pE"
              title="MongoDB Indexes Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              MongoDB Indexes Explained
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand how indexes improve query performance.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/1EwZ5GdT6Zs"
              title="MongoDB Performance Optimization"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              MongoDB Performance Basics
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how indexes affect real application speed.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/5z5Wz4yLZFY"
              title="MongoDB Explain Plan Tutorial"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Explain & Query Analysis
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how to analyze queries using explain().
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