import { useState } from "react";

export default function Weekthreeback() {
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
    · Week 2
  </span>
</div>

     <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A1F44] mb-5">
    Advanced MongoDB & Data Design 
    </h1>


  <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed text-base sm:text-lg">
    This week dives deeper into MongoDB by focusing on performance, scalability,
    and real-world data design decisions. You will learn how MongoDB handles
    relationships between data, how indexes improve query speed, and how to
    design schemas that scale as applications grow. By the end of this week,
    you will be able to model complex data structures confidently and apply
    MongoDB best practices used in production systems.
  </p>
</div>

{/* LEARNING OBJECTIVES */}
<div className="bg-white rounded-3xl border border-gray-200 p-8 mb-16">

  <h2 className="text-xl font-bold text-[#0A1F44] mb-6">
    What you will learn
  </h2>

  <ul className="space-y-4 text-gray-700 text-base leading-relaxed">
    {[
      "Understanding indexes and how they improve MongoDB performance",
      "Modeling relationships between documents in MongoDB",
      "Embedded vs referenced documents and when to use each",
      "Designing scalable schemas for real-world applications",
      "Applying MongoDB best practices for performance and maintainability",
      "Common data modeling mistakes and how to avoid them"
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
    {/* SECTION: INDEXES & PERFORMANCE */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Understanding Indexes and How They Improve MongoDB Performance
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
          As databases grow, performance becomes one of the most important
          concerns in backend development. When MongoDB stores thousands or
          millions of documents, finding specific data quickly is no longer
          automatic. This is where <strong>indexes</strong> play a critical role.
          Indexes help MongoDB locate data efficiently without scanning every
          document in a collection.
        </p>

        <p>
          By default, MongoDB creates an index on the <strong>_id</strong> field.
          This means MongoDB can instantly find documents by their ID. However,
          when you query other fields—such as email, username, or createdAt—
          MongoDB must scan each document unless an index exists. This process,
          called a <strong>collection scan</strong>, becomes slow as data grows.
        </p>

        <p>
          An index works similarly to the index in a textbook. Instead of reading
          every page to find a topic, you jump directly to the correct page.
          MongoDB indexes store ordered references to documents, allowing the
          database engine to jump directly to matching data instead of checking
          every document one by one.
        </p>

        <p>
          In real-world applications, indexes are essential for features like
          user authentication, search functionality, filtering, sorting, and
          pagination. For example, when users log in using an email address,
          an index on the email field ensures the database responds instantly,
          even with millions of users.
        </p>

        <p>
          While indexes improve read performance, they also come with trade-offs.
          Each index consumes memory and storage, and MongoDB must update indexes
          whenever documents are inserted, updated, or deleted. This means
          writing too many indexes can slow down write operations.
        </p>

        <p>
          The key to using indexes effectively is balance. You should index
          fields that are frequently searched, filtered, or sorted, but avoid
          indexing fields that are rarely queried. Understanding your
          application’s query patterns is essential for designing efficient
          indexes.
        </p>

        <p>
          Professional backend developers treat indexing as a performance
          optimization strategy, not a default action. Knowing when and why to
          create indexes separates beginner developers from production-ready
          engineers.
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
            <code>{`// Creating a collection
db.users.insertMany([
  { name: "Azeez", email: "azeez@email.com", age: 24 },
  { name: "Zainab", email: "zainab@email.com", age: 22 },
  { name: "Ibrahim", email: "ibrahim@email.com", age: 26 }
]);`}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`// Query without an index (slow for large datasets)
db.users.find({ email: "azeez@email.com" });`}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`// Creating an index on email
db.users.createIndex({ email: 1 });`}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`// Query using the index (fast)
db.users.find({ email: "azeez@email.com" }).explain("executionStats");`}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`// Compound index for filtering and sorting
db.users.createIndex({ age: 1, name: 1 });`}</code>
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
              src="https://www.youtube.com/embed/-xNDM4eAn1U"
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
              Understand what indexes are and how they improve query performance.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/l5l7BoNwKDs"
              title="MongoDB Index Performance"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Indexes & Performance
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how indexes affect speed and efficiency in MongoDB.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/HlPq2k7Dq5A"
              title="MongoDB Explain Execution Stats"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Using explain() in MongoDB
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              See how MongoDB executes queries and uses indexes internally.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}
{currentTopic === 1 && (
  <>
    {/* SECTION: DATA RELATIONSHIPS IN MONGODB */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Modeling Relationships in MongoDB (Embedded vs Referenced Documents)
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
          In real-world applications, data rarely exists in isolation. Users
          place orders, posts have comments, students enroll in courses, and
          products belong to categories. These connections between pieces of
          data are called <strong>relationships</strong>, and understanding how
          to model them correctly is one of the most important skills in backend
          development.
        </p>

        <p>
          Unlike relational databases (such as MySQL or PostgreSQL), MongoDB does
          not use joins by default. Instead, MongoDB gives you flexibility by
          allowing relationships to be modeled using either
          <strong> embedded documents</strong> or
          <strong> referenced documents</strong>. Choosing the right approach
          depends on how your data is used.
        </p>

        <p>
          <strong>Embedded documents</strong> store related data inside the same
          document. This approach works best when related data is frequently
          accessed together. For example, storing a user’s profile and address
          inside a single user document makes reading that data very fast and
          simple.
        </p>

        <p>
          <strong>Referenced documents</strong> store related data in separate
          collections and link them using IDs. This approach is useful when data
          is large, shared across many records, or frequently updated. For
          example, storing orders in a separate collection prevents user
          documents from growing too large.
        </p>

        <p>
          One key advantage of embedding is performance. Because all related data
          lives in one document, MongoDB can return everything in a single query.
          However, embedded documents can become problematic if they grow too
          large or are updated frequently.
        </p>

        <p>
          Referencing, on the other hand, improves flexibility and scalability.
          It allows data to be reused and updated independently, but requires
          additional queries to retrieve related information. In large systems,
          this trade-off is often worth it.
        </p>

        <p>
          Professional backend developers decide between embedding and
          referencing by asking questions like: How often is the data read
          together? How large can it grow? How frequently does it change? The
          right answers lead to scalable and maintainable database designs.
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
            <code>{`// Embedded documents example
{
  _id: ObjectId("1"),
  name: "Azeez",
  email: "azeez@email.com",
  address: {
    street: "Ahmadu Bello Way",
    city: "Zaria",
    country: "Nigeria"
  }
}`}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`// Referenced documents example

// users collection
{
  _id: ObjectId("user1"),
  name: "Azeez",
  email: "azeez@email.com"
}

// orders collection
{
  _id: ObjectId("order1"),
  userId: ObjectId("user1"),
  total: 45000,
  status: "paid"
}`}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`// Fetch user orders using reference
db.orders.find({ userId: ObjectId("user1") });`}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`// Embedded comments example
{
  _id: ObjectId("post1"),
  title: "Learning MongoDB",
  comments: [
    { author: "Zainab", message: "Very helpful!" },
    { author: "Ibrahim", message: "Clear explanation" }
  ]
}`}</code>
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
              src="https://www.youtube.com/embed/9G2Hc1FJz7I"
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
              Learn how to structure relationships in MongoDB applications.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/bp7tC4jTnSg"
              title="Embedding vs Referencing"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Embed vs Reference
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand when to embed data and when to reference it.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/xlFqj6s2kZ0"
              title="MongoDB Relationships Best Practices"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Relationship Best Practices
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Real-world guidance for scalable MongoDB schema design.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}
{currentTopic === 2 && (
  <>
    {/* SECTION: SCHEMA DESIGN BEST PRACTICES */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Schema Design Best Practices for Real-World MongoDB Applications
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
          Schema design is one of the most critical decisions in backend
          development. Even though MongoDB is a schema-flexible database, this
          does not mean that data should be stored randomly or without structure.
          Poor schema design leads to slow queries, duplicated data, difficult
          maintenance, and systems that break as they scale.
        </p>

        <p>
          In real-world applications, schema design starts with understanding
          <strong> how data is used</strong>, not just how it is stored. Backend
          developers must think about how often data is read, written, updated,
          and deleted. A schema that looks fine on day one can become a serious
          bottleneck when the application grows.
        </p>

        <p>
          One core principle of good schema design is
          <strong> designing for your queries</strong>. Instead of modeling data
          based purely on theory, MongoDB schemas should be shaped around the
          most common access patterns. If data is frequently fetched together,
          it often belongs together.
        </p>

        <p>
          Another best practice is controlling document size. MongoDB documents
          have a size limit, and very large documents can slow down performance.
          When documents grow endlessly—such as logs, comments, or transactions—
          it is often better to split them into separate collections.
        </p>

        <p>
          Consistent field naming is also essential. Using clear, predictable
          names like <strong>createdAt</strong>,
          <strong>updatedAt</strong>, or <strong>userId</strong> makes queries
          easier to write, reduces confusion across teams, and improves
          maintainability.
        </p>

        <p>
          Avoid unnecessary nesting. While MongoDB supports nested objects, very
          deep nesting can make queries complex and inefficient. A good schema
          balances readability with performance and simplicity.
        </p>

        <p>
          Professional backend systems also plan for growth. A good schema today
          should still work when the database has millions of records. This
          means anticipating future features, traffic, and data volume from the
          beginning.
        </p>

        <p>
          Ultimately, good schema design makes applications faster, easier to
          maintain, and more scalable. It separates beginner-level databases
          from production-ready backend systems.
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
            <code>{`// Poor schema design (uncontrolled growth)
{
  _id: ObjectId("user1"),
  name: "Azeez",
  orders: [
    { item: "Laptop", price: 250000 },
    { item: "Phone", price: 120000 },
    // Orders grow endlessly
  ]
}`}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`// Improved schema using references

// users collection
{
  _id: ObjectId("user1"),
  name: "Azeez"
}

// orders collection
{
  _id: ObjectId("order1"),
  userId: ObjectId("user1"),
  item: "Laptop",
  price: 250000,
  createdAt: new Date()
}`}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`// Consistent field naming
{
  title: "Backend Course",
  createdAt: new Date(),
  updatedAt: new Date(),
  isActive: true
}`}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`// Designing for queries
db.orders.find({ userId: ObjectId("user1") })
  .sort({ createdAt: -1 })
  .limit(10);`}</code>
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
              src="https://www.youtube.com/embed/LeVjQeJwA0s"
              title="MongoDB Schema Design Best Practices"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              MongoDB Schema Design
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how professionals design scalable MongoDB schemas.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/MIc7GZs5e8I"
              title="Designing for Queries in MongoDB"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Designing for Queries
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand how access patterns shape schema design.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/lW7eXk6h9Yk"
              title="MongoDB Data Modeling Pitfalls"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Common Schema Mistakes
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn what to avoid when designing MongoDB schemas.
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
    {/* SECTION: REAL-WORLD MONGODB BEST PRACTICES & COMMON MISTAKES */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Real-World MongoDB Best Practices & Common Mistakes
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
          Learning MongoDB syntax is only the beginning. In real-world backend
          systems, performance issues, data inconsistency, and scalability
          problems usually come from poor design decisions rather than lack of
          features. Understanding best practices helps you avoid mistakes that
          can cripple applications as traffic and data grow.
        </p>

        <p>
          One of the most common mistakes beginners make is
          <strong> overusing flexibility</strong>. Because MongoDB allows
          schema-less documents, developers sometimes store wildly different
          document structures in the same collection. While this may work early
          on, it becomes a nightmare when querying, validating data, or building
          APIs.
        </p>

        <p>
          Another frequent issue is
          <strong> over-indexing</strong>. Indexes improve read performance, but
          they slow down writes and consume memory. Adding indexes blindly
          without understanding query patterns leads to slower systems instead
          of faster ones.
        </p>

        <p>
          Poor handling of relationships is also a major problem. Beginners
          either embed everything (leading to massive documents) or reference
          everything (leading to excessive queries). Real-world systems balance
          embedding and referencing based on how data is accessed.
        </p>

        <p>
          Backend developers must also be careful with
          <strong> unbounded arrays</strong>. Arrays that grow endlessly—such as
          logs, comments, or activity history—can exceed document size limits
          and slow down queries. These should often be moved into separate
          collections.
        </p>

        <p>
          Ignoring data validation is another costly mistake. MongoDB allows you
          to store almost anything, but production systems must enforce rules.
          Schema validation ensures that bad data does not enter the database
          and break application logic later.
        </p>

        <p>
          Real-world best practices also include
          <strong> consistent naming conventions</strong>,
          <strong> timestamps</strong> for tracking changes, and
          <strong> soft deletes</strong> instead of permanently removing data
          when records may still be needed for auditing or recovery.
        </p>

        <p>
          Finally, professional backend systems always think about scale.
          Decisions made today should still work when the database contains
          millions of documents. This mindset separates hobby projects from
          production-ready backend applications.
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
            <code>{`// ❌ Bad practice: inconsistent document structure
{
  name: "Azeez",
  age: 24
}

{
  username: "TechCXel",
  isActive: true
}`}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`// ✅ Better practice: consistent schema
{
  name: "Azeez",
  email: "azeez@email.com",
  isActive: true,
  createdAt: new Date()
}`}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`// ❌ Over-indexing
db.users.createIndex({ email: 1 });
db.users.createIndex({ name: 1 });
db.users.createIndex({ isActive: 1 });

// Indexes should match real query usage`}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`// ✅ Soft delete instead of hard delete
db.users.updateOne(
  { _id: ObjectId("user1") },
  { $set: { isDeleted: true } }
);`}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`// Avoid unbounded arrays
{
  userId: ObjectId("user1"),
  action: "LOGIN",
  createdAt: new Date()
}`}</code>
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
              src="https://www.youtube.com/embed/LS_8lHuZHVU"
              title="MongoDB Best Practices"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              MongoDB Best Practices
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn production-level MongoDB practices.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/9FG2WJjZl0o"
              title="Common MongoDB Mistakes"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Common MongoDB Mistakes
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Avoid errors that break real-world systems.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/bAL8H2p1zVQ"
              title="Scaling MongoDB Applications"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Scaling MongoDB Applications
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand how MongoDB behaves at scale.
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