import { useState } from "react";

export default function Weekfourback() {
   const [currentTopic, setCurrentTopic] = useState(0);

  return (
    <section className="bg-[#FAF7F2] min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-8">
{/* HEADER */}
<div className="mb-16">
  <span className="text-sm font-bold uppercase tracking-wide text-red-600">
    Backend Development · Week 6
  </span>

  <h1 className="text-4xl font-extrabold text-[#0A1F44] mt-4 mb-6">
    MongoDB & Node Integration
  </h1>

  <p className="text-gray-700 max-w-3xl leading-relaxed">
    This week focuses on connecting your backend logic to a real database.
    You will learn how to integrate MongoDB with Node.js and Express using
    Mongoose, define schemas and models, and build full CRUD APIs backed by
    persistent data. By the end of this week, you will be able to design
    structured data models, handle database errors properly, and connect
    your APIs to MongoDB in a clean and scalable way.
  </p>
</div>

{/* LEARNING OBJECTIVES */}
<div className="bg-white rounded-3xl border p-8 mb-12">
  <h2 className="text-xl font-bold text-[#0A1F44] mb-6">
    What you will learn
  </h2>

  <ul className="space-y-4 text-gray-700">
    <li>— Connecting MongoDB to Express using Mongoose</li>
    <li>— Defining schemas and models to structure application data</li>
    <li>— Performing CRUD operations using Mongoose models</li>
    <li>— Building REST APIs backed by MongoDB</li>
    <li>— Handling database errors and validation failures</li>
    <li>— Writing clean and maintainable data access logic</li>
  </ul>
</div>
{currentTopic === 0 && (
  <>
    {/* SECTION: CONNECTING MONGODB TO EXPRESS WITH MONGOOSE */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Connecting MongoDB to Express Using Mongoose
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          In real-world backend applications, data needs to be stored
          permanently and accessed efficiently. MongoDB provides the database
          layer, while Express handles incoming requests and outgoing responses.
          However, connecting these two directly can be complex and repetitive.
          This is where <strong>Mongoose</strong> becomes essential.
        </p>

        <p>
          <strong>Mongoose</strong> is an Object Data Modeling (ODM) library that
          sits between your Express application and MongoDB. It provides a
          structured way to define how your data should look, interact with the
          database using JavaScript objects, and enforce rules such as required
          fields and data types. Instead of writing raw MongoDB queries
          everywhere, Mongoose allows you to work with clean, readable models.
        </p>

        <p>
          One major reason Mongoose is widely used is that it adds
          <strong> structure</strong> to MongoDB, which is naturally flexible.
          While MongoDB allows documents to have different shapes, real
          applications need consistency. Mongoose schemas help define what a
          document should contain, making your data predictable and easier to
          maintain as your project grows.
        </p>

        <p>
          To connect MongoDB to Express using Mongoose, the first step is
          installing the Mongoose package and importing it into your server
          file. Mongoose handles the database connection internally and
          maintains a persistent connection that your API can reuse for every
          request.
        </p>

        <p>
          The connection process involves providing a MongoDB connection string
          (usually from MongoDB Atlas or a local database) and calling
          <strong>mongoose.connect()</strong>. This connection is typically
          established once when the server starts, ensuring that all routes and
          controllers can access the database safely.
        </p>

        <p>
          In production-ready applications, database connection logic is
          separated from route handling. This keeps your code clean and allows
          better error handling, logging, and scalability. A failed database
          connection should stop the server from running, preventing your API
          from operating in an unstable state.
        </p>

        <p>
          Once MongoDB is connected through Mongoose, your Express application
          can use models to create, read, update, and delete data. This
          integration forms the backbone of modern backend systems, enabling
          APIs to persist data reliably and securely.
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
// 1. Install mongoose
npm install mongoose
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// 2. Import mongoose in your server file
import mongoose from "mongoose";
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// 3. Connect MongoDB to Express using mongoose
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// 4. Use the connection function in your server
import express from "express";
import connectDB from "./config/db.js";

const app = express();
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
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
              src="https://www.youtube.com/embed/DZBGEVgL2eE"
              title="What is Mongoose?"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              What is Mongoose?
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand what Mongoose does and why it is used with MongoDB.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/fgTGADljAeg"
              title="Connecting MongoDB with Node.js"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              MongoDB + Node.js Connection
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how to connect MongoDB to an Express app using Mongoose.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/BL4sP5g5o-8"
              title="Mongoose in Real Projects"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Mongoose in Real Projects
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              See how Mongoose is used in production-ready applications.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}
{currentTopic === 1 && (
  <>
    {/* SECTION: DEFINING SCHEMAS & MODELS WITH MONGOOSE */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Defining Schemas and Models to Structure Application Data
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          As backend applications grow, data consistency becomes extremely
          important. Without clear rules, databases can quickly become messy,
          unpredictable, and difficult to maintain. This is why Mongoose
          introduces the concept of <strong>schemas</strong> and
          <strong> models</strong>—to bring structure, validation, and clarity
          to MongoDB data.
        </p>

        <p>
          A <strong>schema</strong> defines the shape of documents inside a
          MongoDB collection. It describes what fields exist, what data types
          they should have, and which rules must be followed. Think of a schema
          as a blueprint or contract that every document must follow when it is
          created or updated.
        </p>

        <p>
          For example, in a user system, you may want every user to have a
          name, email, and password. A schema ensures that these fields exist,
          that they are stored as the correct data types, and that invalid data
          is rejected before it reaches the database.
        </p>

        <p>
          Schemas also allow you to define advanced rules such as
          <strong> required fields</strong>,
          <strong> default values</strong>,
          <strong> unique constraints</strong>, and
          <strong> data validation</strong>. This prevents common bugs and
          protects your database from inconsistent or corrupted data.
        </p>

        <p>
          Once a schema is defined, it is converted into a
          <strong> model</strong>. A model is a JavaScript representation of a
          MongoDB collection and provides an interface for interacting with the
          database. Models allow you to create, read, update, and delete
          documents using clean, readable methods.
        </p>

        <p>
          In real-world backend applications, models act as the central point of
          data access. Routes and controllers never talk directly to MongoDB;
          instead, they communicate through models. This separation of concerns
          makes applications easier to test, scale, and maintain.
        </p>

        <p>
          Proper schema and model design is one of the most important skills in
          backend development. A well-designed schema improves data integrity,
          application performance, and long-term scalability, while a poorly
          designed one leads to technical debt and frequent refactoring.
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
// 1. Import mongoose
import mongoose from "mongoose";
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// 2. Define a schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  role: {
    type: String,
    default: "user"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// 3. Create a model from the schema
const User = mongoose.model("User", userSchema);

export default User;
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// 4. Using the model to create a new document
import User from "./models/User.js";

const newUser = await User.create({
  name: "Azeez",
  email: "azeez@example.com",
  password: "securepassword"
});

console.log(newUser);
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// 5. Finding documents using the model
const users = await User.find();
console.log(users);
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
              src="https://www.youtube.com/embed/DZBGEVgL2eE"
              title="Mongoose Schemas Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Mongoose Schemas Explained
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how schemas define and protect your data structure.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/fgTGADljAeg"
              title="Mongoose Models Tutorial"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Mongoose Models Tutorial
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand how models interact with MongoDB collections.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/BL4sP5g5o-8"
              title="Real World Mongoose Data Modeling"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Real-World Mongoose Data Modeling
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              See how schemas and models are used in real applications.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}
{currentTopic === 2 && (
  <>
    {/* SECTION: BUILDING CRUD APIS WITH MONGOOSE MODELS */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Building CRUD APIs Using Mongoose Models
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          Once MongoDB is connected to your application and schemas and models
          are defined, the next step is exposing your data through
          <strong> CRUD APIs</strong>. CRUD stands for
          <strong> Create</strong>, <strong>Read</strong>,
          <strong> Update</strong>, and <strong> Delete</strong>—the four core
          operations performed on data in almost every backend system.
        </p>

        <p>
          In real-world applications, APIs act as the bridge between the client
          (frontend, mobile app, or external service) and the database. Instead
          of allowing direct database access, the backend exposes controlled
          endpoints that define exactly how data can be created, fetched,
          modified, or removed.
        </p>

        <p>
          Mongoose models make building CRUD APIs much easier by providing
          intuitive methods such as
          <strong> create()</strong>, <strong> find()</strong>,
          <strong> findById()</strong>, <strong> findByIdAndUpdate()</strong>,
          and <strong> findByIdAndDelete()</strong>. These methods abstract away
          complex MongoDB commands and allow developers to focus on application
          logic.
        </p>

        <p>
          Each CRUD operation is typically mapped to an HTTP method.
          <strong> POST</strong> is used to create data,
          <strong> GET</strong> to retrieve data,
          <strong> PUT / PATCH</strong> to update data, and
          <strong> DELETE</strong> to remove data. This mapping forms the
          foundation of RESTful API design.
        </p>

        <p>
          A well-structured CRUD API validates input, handles errors gracefully,
          and returns meaningful responses. This ensures that clients know
          whether an operation was successful and what went wrong if it fails.
        </p>

        <p>
          In professional backend development, CRUD APIs are often organized
          using controllers and routes, making the codebase clean, modular, and
          easy to maintain as the application grows.
        </p>

        <p>
          Mastering CRUD APIs with Mongoose is a major milestone in backend
          development. Once you understand this, you can build authentication
          systems, dashboards, content management systems, and full-scale
          applications.
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
// Example User model
import User from "../models/User.js";
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// CREATE: Add a new user
export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// READ: Get all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// READ: Get one user by ID
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: "Invalid ID" });
  }
};
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// UPDATE: Update a user
export const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// DELETE: Remove a user
export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
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
              src="https://www.youtube.com/embed/WDrU305J1yw"
              title="CRUD Operations with Mongoose"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              CRUD with Mongoose
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how to perform create, read, update, and delete operations.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/fgTGADljAeg"
              title="Building REST APIs with Mongoose"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              REST APIs with Mongoose
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Build clean and structured APIs using models.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/l8WPWK9mS5M"
              title="Mongoose Controllers Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Controllers & CRUD Logic
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how to organize CRUD logic in controllers.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}
{currentTopic === 3 && (
  <>
    {/* SECTION: REST APIS + DB ERRORS & VALIDATION */}
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Building REST APIs Backed by MongoDB + Handling Database Errors & Validation Failures
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">
        <p>
          A REST API becomes truly useful when it is backed by real data. That means your
          Express routes should connect to MongoDB (through Mongoose), perform operations,
          and return responses that the frontend can trust. In real products—like e-commerce,
          school portals, fintech dashboards—almost every screen on the frontend is powered
          by an API call that reads or writes MongoDB data.
        </p>

        <p>
          But the “real work” is not only creating endpoints. The real work is building endpoints
          that behave correctly under pressure: invalid data, missing fields, wrong IDs, duplicate
          emails/usernames, and unexpected server issues. This is where many beginners struggle,
          because without proper error handling, your API will crash or return confusing messages.
        </p>

        <p>
          Mongoose helps with structure and validation. When you define a schema, you can enforce
          rules like: “name is required”, “price must be a number”, “email must be unique”, or
          “password must be at least 8 characters”. When a client sends bad input, Mongoose throws
          a <strong>ValidationError</strong>. A good API catches that and responds with a clear,
          friendly message (usually a 400 status code).
        </p>

        <p>
          Another common failure is when the client sends a wrong MongoDB ID (for example,
          <code> /users/123</code> instead of a real ObjectId). Mongoose may throw a
          <strong> CastError</strong>. If you don’t handle it, it will look like your server is broken.
          A clean API detects it and returns: “Invalid ID format”.
        </p>

        <p>
          You also need to handle duplicates properly. Example: registration APIs often require
          unique email addresses. If a user tries to register the same email twice, MongoDB
          throws a duplicate key error (usually code <strong>11000</strong>). A professional API
          translates that into: “Email already exists” — not a confusing system error.
        </p>

        <p>
          The goal is simple: build endpoints that are stable, predictable, and safe.
          That means: validate inputs, wrap async code properly, and use a central error handler
          middleware so every error gets handled in one place.
        </p>
      </div>
    </div>

    {/* PRACTICAL EXAMPLES */}
    <div className="mb-20">
      <h3 className="text-xl font-bold text-[#0A1F44] mb-6">
        Practical Examples (Real REST API Pattern)
      </h3>

      <div className="space-y-8 text-gray-700">

        {/* 1) MODEL */}
        <div>
          <p className="mb-3 font-semibold text-[#0A1F44]">
            1) Example Mongoose Model with Validation
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      minlength: [3, "Full name must be at least 3 characters"]
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true
    },
    age: {
      type: Number,
      min: [10, "Age must be at least 10"]
    }
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
            `}</code>
          </pre>
        </div>

        {/* 2) ROUTES */}
        <div>
          <p className="mb-3 font-semibold text-[#0A1F44]">
            2) REST Routes (Create, Read, Update, Delete)
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// routes/userRoutes.js
import express from "express";
import User from "../models/User.js";

const router = express.Router();

// CREATE
router.post("/", async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ message: "User created", data: user });
  } catch (error) {
    next(error);
  }
});

// READ ALL
router.get("/", async (req, res, next) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json({ message: "Users fetched", data: users });
  } catch (error) {
    next(error);
  }
});

// READ ONE
router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User fetched", data: user });
  } catch (error) {
    next(error);
  }
});

// UPDATE
router.put("/:id", async (req, res, next) => {
  try {
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!updated) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User updated", data: updated });
  } catch (error) {
    next(error);
  }
});

// DELETE
router.delete("/:id", async (req, res, next) => {
  try {
    const deleted = await User.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    next(error);
  }
});

export default router;
            `}</code>
          </pre>
        </div>

        {/* 3) CENTRAL ERROR HANDLER */}
        <div>
          <p className="mb-3 font-semibold text-[#0A1F44]">
            3) Central Error Handler (Validation, CastError, Duplicate Key)
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// middleware/errorHandler.js
export default function errorHandler(err, req, res, next) {
  console.error("ERROR:", err);

  // 1) Invalid MongoDB ObjectId (CastError)
  if (err.name === "CastError") {
    return res.status(400).json({ message: "Invalid ID format" });
  }

  // 2) Mongoose Validation Errors
  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({ message: "Validation failed", errors: messages });
  }

  // 3) Duplicate key (like unique email)
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    return res.status(409).json({ message: \`\${field} already exists\` });
  }

  // Default fallback
  res.status(500).json({ message: "Server error. Please try again." });
}
            `}</code>
          </pre>
        </div>

        {/* 4) APP SETUP */}
        <div>
          <p className="mb-3 font-semibold text-[#0A1F44]">
            4) App Setup (Plug routes + error handler)
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// app.js (or server.js)
import express from "express";
import userRoutes from "./routes/userRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

app.use(express.json());

// routes
app.use("/api/users", userRoutes);

// error handler MUST be last
app.use(errorHandler);

export default app;
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
              src="https://www.youtube-nocookie.com/embed/Oe421EPjeBE"
              title="Node.js + Express + MongoDB Crash Course"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Express + MongoDB REST API
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Build a complete REST API connected to MongoDB.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/fgTGADljAeg"
              title="Mongoose REST API Tutorial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              CRUD + Mongoose Models
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Practical CRUD endpoints with Mongoose methods.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/pKd0Rpw7O48"
              title="Express Error Handling Tutorial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Error Handling + Status Codes
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Handle validation failures, bad IDs, and API errors properly.
            </p>
          </div>
        </div>

      </div>

      {/* QUICK FIX NOTE */}
      <div className="mt-10 text-sm text-gray-600 leading-relaxed">
        <p className="font-semibold text-[#0A1F44] mb-2">If a video still doesn’t play:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Some YouTube channels disable embedding (it will show a playback restriction).</li>
          <li>Try replacing the embed link with another YouTube video that allows embedding.</li>
          <li>Keep using <code>youtube-nocookie.com/embed/VIDEO_ID</code> like in this code.</li>
        </ul>
      </div>
    </div>
  </>
)}

{currentTopic === 4 && (
  <>
    {/* SECTION: CLEAN & MAINTAINABLE DATA ACCESS LOGIC */}
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Writing Clean and Maintainable Data Access Logic
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">
        <p>
          As backend applications grow, one of the fastest ways to create bugs
          and technical debt is by writing database logic directly inside routes.
          When database queries are scattered across controllers and mixed with
          request-handling logic, the code quickly becomes difficult to read,
          debug, test, and extend.
        </p>

        <p>
          Clean data access logic means clearly separating <strong>what your API
          does</strong> from <strong>how data is retrieved or stored</strong>.
          Routes should focus on handling HTTP requests and responses, while
          database-related operations should live in dedicated functions or
          service layers.
        </p>

        <p>
          This separation makes your code easier to reason about. When something
          breaks, you immediately know whether the issue is in the API layer
          (routing, validation, authentication) or the data layer (queries,
          schemas, relationships). This is how professional backend systems stay
          stable as they scale.
        </p>

        <p>
          Another key principle is avoiding repetition. If multiple endpoints
          perform similar queries—such as fetching users, updating records, or
          checking existence—those operations should be written once and reused.
          Reusable data-access functions reduce bugs and ensure consistency.
        </p>

        <p>
          Clean data access logic also improves testability. When database logic
          is isolated, you can test it independently, mock it during unit tests,
          and swap implementations later if needed (for example, changing from
          MongoDB to another data store).
        </p>

        <p>
          In real-world applications, this approach allows teams to grow without
          fear. New developers can quickly understand where data logic lives,
          changes are safer to make, and the system remains maintainable even
          after months or years of development.
        </p>
      </div>
    </div>

    {/* PRACTICAL EXAMPLES */}
    <div className="mb-20">
      <h3 className="text-xl font-bold text-[#0A1F44] mb-6">
        Practical Examples (Professional Pattern)
      </h3>

      <div className="space-y-8 text-gray-700">

        {/* BAD PRACTICE */}
        <div>
          <p className="mb-3 font-semibold text-red-600">
            ❌ Bad Practice: Database Logic Inside Routes
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// routes/userRoutes.js
router.post("/", async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});
            `}</code>
          </pre>

          <p className="text-sm text-gray-600 mt-2">
            This approach looks simple, but quickly becomes messy as validation,
            error handling, and business rules increase.
          </p>
        </div>

        {/* SERVICE LAYER */}
        <div>
          <p className="mb-3 font-semibold text-[#0A1F44]">
            ✅ Good Practice: Dedicated Data Access Layer
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// services/userService.js
import User from "../models/User.js";

export async function createUser(data) {
  return await User.create(data);
}

export async function getAllUsers() {
  return await User.find().sort({ createdAt: -1 });
}

export async function getUserById(id) {
  return await User.findById(id);
}
            `}</code>
          </pre>
        </div>

        {/* ROUTE USING SERVICE */}
        <div>
          <p className="mb-3 font-semibold text-[#0A1F44]">
            Using the Data Layer Inside Routes
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// routes/userRoutes.js
import express from "express";
import { createUser, getAllUsers } from "../services/userService.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json({ message: "User created", data: user });
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const users = await getAllUsers();
    res.json({ message: "Users fetched", data: users });
  } catch (error) {
    next(error);
  }
});

export default router;
            `}</code>
          </pre>
        </div>

        {/* BENEFITS */}
        <div>
          <p className="mb-3 font-semibold text-[#0A1F44]">
            Why This Approach Is Better
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Routes stay short and readable</li>
            <li>Database logic is reusable across endpoints</li>
            <li>Error handling becomes consistent</li>
            <li>Testing and debugging are much easier</li>
            <li>Codebase scales cleanly as features grow</li>
          </ul>
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
              src="https://www.youtube-nocookie.com/embed/1n5R7E7rM3E"
              title="Clean Architecture in Node.js"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Clean Architecture for Node.js
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how to separate routes, services, and data layers.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/CnH3kAXSrmU"
              title="Express Controller & Service Pattern"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Controller & Service Pattern
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Organize Express apps for scalability and clarity.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/otqz4OS3ncs"
              title="Building Maintainable APIs"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Maintainable REST APIs
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Real-world patterns for clean backend codebases.
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