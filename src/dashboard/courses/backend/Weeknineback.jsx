import { useState } from "react";

export default function Weekfourback() {
   const [currentTopic, setCurrentTopic] = useState(0);

  return (
    <section className="bg-[#FAF7F2] min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-8">
{/* HEADER */}
<div className="mb-16">
  <span className="text-sm font-bold uppercase tracking-wide text-red-600">
    Backend Development · Week 9
  </span>

  <h1 className="text-4xl font-extrabold text-[#0A1F44] mt-4 mb-6">
    Advanced Backend Features
  </h1>

  <p className="text-gray-700 max-w-3xl leading-relaxed">
    This week focuses on building advanced, production-ready backend features
    commonly required in real-world applications. You will learn how to handle
    large datasets efficiently, implement searching and filtering logic, manage
    file uploads, send emails, and apply backend patterns that improve
    scalability, performance, and maintainability.
  </p>
</div>

{/* LEARNING OBJECTIVES */}
<div className="bg-white rounded-3xl border p-8 mb-12">
  <h2 className="text-xl font-bold text-[#0A1F44] mb-6">
    What you will learn
  </h2>

  <ul className="space-y-4 text-gray-700">
    <li>— Implementing pagination for large datasets</li>
    <li>— Filtering and searching data efficiently in APIs</li>
    <li>— Handling file uploads (images, documents, media)</li>
    <li>— Sending emails using backend services</li>
    <li>— Applying production-ready backend patterns and best practices</li>
  </ul>
</div>

{currentTopic === 0 && (
  <>
    {/* SECTION: PAGINATION FOR LARGE DATASETS */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Implementing Pagination for Large Datasets
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          In real-world backend applications, databases often contain thousands
          or even millions of records. Returning all this data at once is
          inefficient, slow, and can crash both the server and the client.
          <strong> Pagination</strong> solves this problem by breaking large
          datasets into smaller, manageable chunks.
        </p>

        <p>
          Pagination allows an API to return only a limited number of records
          per request, such as 10, 20, or 50 items at a time. Instead of loading
          everything at once, the client requests data page by page. This
          improves performance, reduces memory usage, and creates a smoother
          user experience.
        </p>

        <p>
          Think of pagination like flipping pages in a book. You don’t read the
          entire book at once—you read one page, then move to the next. In the
          same way, pagination lets users navigate through data gradually,
          making applications faster and more responsive.
        </p>

        <p>
          From a backend perspective, pagination is usually implemented using
          query parameters such as
          <strong> page</strong> and <strong> limit</strong>. The
          <strong> page</strong> represents the current page number, while the
          <strong> limit</strong> defines how many records should be returned
          per page.
        </p>

        <p>
          Pagination is critical in dashboards, admin panels, product listings,
          activity logs, and any application that displays lists of users,
          orders, posts, or transactions. Without pagination, these systems
          would be slow, expensive, and difficult to scale.
        </p>

        <p>
          In production systems, pagination also works hand-in-hand with
          indexes, filtering, and sorting to ensure APIs remain fast even as
          data grows over time.
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
            <strong>Basic pagination logic using page and limit:</strong>
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
<code>{`
// Example request:
// GET /api/users?page=2&limit=10

const page = parseInt(req.query.page) || 1;
const limit = parseInt(req.query.limit) || 10;

const skip = (page - 1) * limit;

const users = await User.find()
  .skip(skip)
  .limit(limit);

res.json({
  page,
  limit,
  results: users.length,
  data: users
});
`}</code>
          </pre>
        </div>

        <div>
          <p className="mb-3">
            <strong>Including total records and total pages:</strong>
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
<code>{`
const totalRecords = await User.countDocuments();
const totalPages = Math.ceil(totalRecords / limit);

res.json({
  page,
  limit,
  totalPages,
  totalRecords,
  data: users
});
`}</code>
          </pre>
        </div>

        <div>
          <p className="mb-3">
            <strong>Real-world example (products API):</strong>
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
<code>{`
app.get("/api/products", async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 20;
  const skip = (page - 1) * limit;

  const products = await Product.find()
    .skip(skip)
    .limit(limit);

  res.json(products);
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
              src="https://www.youtube.com/embed/ZX3qt0UWifc"
              title="Pagination Explained in Backend APIs"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Pagination in APIs
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn why pagination is essential and how it works.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/WcYp8J3o6Xc"
              title="MongoDB Pagination with Mongoose"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              MongoDB Pagination
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Implement pagination using skip and limit in Mongoose.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dOeV8tG0lq0"
              title="Backend Pagination Best Practices"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Pagination Best Practices
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn production-ready pagination strategies.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}

{currentTopic === 1 && (
  <>
    {/* SECTION: FILTERING & SEARCHING DATA */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Filtering & Searching Data in Backend APIs
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          As applications grow, users expect to quickly find exactly what they
          are looking for. Simply returning raw data is no longer enough.
          Modern backend systems must support <strong>filtering</strong> and
          <strong> searching</strong> to make large datasets usable and
          meaningful.
        </p>

        <p>
          <strong>Filtering</strong> allows users to narrow down results based
          on specific conditions such as category, price range, status, date,
          or role. For example, an admin dashboard might filter users by
          <em>active</em> or <em>inactive</em>, while an e-commerce platform may
          filter products by price, brand, or availability.
        </p>

        <p>
          <strong>Searching</strong>, on the other hand, allows users to find
          data using keywords. This is commonly used in search bars where users
          type names, emails, titles, or descriptions. Search functionality is
          critical in applications like blogs, dashboards, inventories, and
          messaging systems.
        </p>

        <p>
          From a backend perspective, filtering and searching are implemented
          using query parameters sent from the client. These parameters are
          then translated into database queries that return only the relevant
          records instead of the entire dataset.
        </p>

        <p>
          Efficient filtering and searching reduce server load, improve response
          time, and enhance user experience. When combined with indexes,
          pagination, and proper schema design, they form the backbone of
          scalable and production-ready APIs.
        </p>

        <p>
          In real-world systems, filtering and searching are rarely optional.
          They are core requirements for performance, usability, and business
          logic enforcement.
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
            <strong>Filtering data using query parameters:</strong>
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
<code>{`
// Example request:
// GET /api/users?role=admin&active=true

const { role, active } = req.query;

const filter = {};

if (role) {
  filter.role = role;
}

if (active) {
  filter.active = active === "true";
}

const users = await User.find(filter);

res.json(users);
`}</code>
          </pre>
        </div>

        <div>
          <p className="mb-3">
            <strong>Searching text fields using MongoDB regex:</strong>
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
<code>{`
// Example request:
// GET /api/products?search=laptop

const { search } = req.query;

const products = await Product.find({
  name: { $regex: search, $options: "i" }
});

res.json(products);
`}</code>
          </pre>
        </div>

        <div>
          <p className="mb-3">
            <strong>Combining filtering, searching, and pagination:</strong>
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
<code>{`
const page = Number(req.query.page) || 1;
const limit = Number(req.query.limit) || 10;
const skip = (page - 1) * limit;
const { category, search } = req.query;

const query = {};

if (category) {
  query.category = category;
}

if (search) {
  query.title = { $regex: search, $options: "i" };
}

const results = await Product.find(query)
  .skip(skip)
  .limit(limit);

res.json(results);
`}</code>
          </pre>
        </div>

        <div>
          <p className="mb-3">
            <strong>Production-style API endpoint:</strong>
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
<code>{`
app.get("/api/orders", async (req, res) => {
  const { status, userId } = req.query;

  const filters = {};

  if (status) filters.status = status;
  if (userId) filters.user = userId;

  const orders = await Order.find(filters);
  res.json(orders);
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
              src="https://www.youtube.com/embed/qv4l7zAqM2k"
              title="Filtering Data in Express APIs"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              API Filtering Explained
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how filtering works in real backend APIs.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/j6lZ4F9d5Kk"
              title="MongoDB Search with Regex"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Searching MongoDB Data
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Implement text search using MongoDB queries.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/7S_tz1z_5bA"
              title="Advanced Querying in Mongoose"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Advanced Mongoose Queries
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Combine filtering, searching, and pagination effectively.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}


{currentTopic === 2 && (
  <>
    {/* SECTION: FILE UPLOADS & MEDIA HANDLING */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Handling File Uploads & Media in Backend Applications
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          Modern backend applications rarely deal with text data alone. Real
          products require handling files such as profile pictures, documents,
          images, videos, and attachments. From user avatars to product images
          and downloadable files, file uploads are a core backend
          responsibility.
        </p>

        <p>
          File uploads work differently from normal JSON requests. Instead of
          sending plain data, the client sends files using a special request
          format called <strong>multipart/form-data</strong>. The backend must
          be properly configured to receive, validate, and store these files
          securely.
        </p>

        <p>
          In Node.js and Express applications, file uploads are commonly handled
          using middleware such as <strong>Multer</strong>. Multer intercepts
          incoming requests, extracts the file data, and makes it available to
          your application for processing.
        </p>

        <p>
          Once uploaded, files can be stored locally on the server, uploaded to
          cloud storage services (such as AWS S3 or Cloudinary), or processed
          further before storage. The choice depends on scalability, security,
          and performance requirements.
        </p>

        <p>
          Backend developers must also validate files carefully. This includes
          checking file type, file size, and file name to prevent malicious
          uploads. Poor file handling can expose servers to serious security
          risks.
        </p>

        <p>
          In production systems, files are usually stored separately from the
          database. Instead of saving the file itself, the backend stores the
          file path or URL inside the database, keeping the system efficient and
          scalable.
        </p>

        <p>
          Understanding file uploads prepares you to build real-world systems
          such as dashboards, learning platforms, e-commerce apps, and social
          media platforms.
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
            <strong>Installing Multer:</strong>
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
<code>{`
npm install multer
`}</code>
          </pre>
        </div>

        <div>
          <p className="mb-3">
            <strong>Basic Multer configuration:</strong>
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
<code>{`
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });
`}</code>
          </pre>
        </div>

        <div>
          <p className="mb-3">
            <strong>Uploading a single file:</strong>
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
<code>{`
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.json({
    message: "File uploaded successfully",
    file: req.file
  });
});
`}</code>
          </pre>
        </div>

        <div>
          <p className="mb-3">
            <strong>Validating file type and size:</strong>
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
<code>{`
const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only images are allowed"), false);
    }
  }
});
`}</code>
          </pre>
        </div>

        <div>
          <p className="mb-3">
            <strong>Saving file reference in MongoDB:</strong>
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
<code>{`
const user = await User.findById(req.user.id);
user.avatar = req.file.path;
await user.save();
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
              src="https://www.youtube.com/embed/9Qzmri1WaaE"
              title="File Uploads with Multer"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              File Uploads with Multer
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how to upload files in Express using Multer.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/ykJjzvR6J9I"
              title="Uploading Images in Node.js"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Image Uploads in Node.js
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Practical guide to handling images securely.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/AfOkqzgl9kI"
              title="File Upload Best Practices"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              File Upload Best Practices
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn secure and scalable file handling techniques.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}
{currentTopic === 3 && (
  <>
    {/* SECTION: EMAIL SERVICES & BACKGROUND TASKS */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Email Services & Background Tasks in Production Backends
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          Modern backend systems are not limited to responding to API requests.
          Many important actions happen <strong>in the background</strong>,
          outside the normal request–response cycle. Examples include sending
          emails, notifications, password reset links, order confirmations,
          and scheduled jobs.
        </p>

        <p>
          Email services are a critical part of most applications. Whenever a
          user signs up, resets a password, verifies an account, or receives an
          alert, the backend is responsible for generating and sending those
          emails reliably.
        </p>

        <p>
          In Node.js applications, email functionality is commonly handled using
          libraries like <strong>Nodemailer</strong>, which allows your backend
          to connect to SMTP services such as Gmail, Outlook, SendGrid, or
          Mailgun.
        </p>

        <p>
          Sending emails directly during a request can slow down your API and
          degrade user experience. For this reason, professional systems often
          move email sending and heavy operations into
          <strong> background tasks</strong>.
        </p>

        <p>
          Background tasks allow the backend to respond immediately to the
          client while long-running work continues asynchronously. This makes
          applications faster, more scalable, and more reliable under load.
        </p>

        <p>
          Common background tasks include:
          sending emails, processing uploads, generating reports, cleaning
          expired data, and syncing external services.
        </p>

        <p>
          Even without advanced job queues, Node.js supports asynchronous
          operations that make background processing possible. Understanding
          this concept is essential for building production-ready backend
          systems.
        </p>

        <p>
          Mastering email services and background processing prepares you for
          real-world backend roles, where reliability and performance matter
          more than simple API responses.
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
            <strong>Installing Nodemailer:</strong>
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
<code>{`
npm install nodemailer
`}</code>
          </pre>
        </div>

        <div>
          <p className="mb-3">
            <strong>Basic email configuration:</strong>
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
<code>{`
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});
`}</code>
          </pre>
        </div>

        <div>
          <p className="mb-3">
            <strong>Sending an email:</strong>
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
<code>{`
const sendWelcomeEmail = async (email) => {
  await transporter.sendMail({
    from: "TechcXel <no-reply@techcxel.com>",
    to: email,
    subject: "Welcome to TechcXel",
    text: "Your account has been created successfully."
  });
};
`}</code>
          </pre>
        </div>

        <div>
          <p className="mb-3">
            <strong>Triggering email in background:</strong>
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
<code>{`
app.post("/api/register", async (req, res) => {
  const user = await User.create(req.body);

  // Background task
  sendWelcomeEmail(user.email);

  res.status(201).json({
    message: "User registered successfully"
  });
});
`}</code>
          </pre>
        </div>

        <div>
          <p className="mb-3">
            <strong>Password reset email example:</strong>
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
<code>{`
const resetLink = \`https://example.com/reset/\${token}\`;

await transporter.sendMail({
  to: user.email,
  subject: "Reset Your Password",
  html: \`<p>Click <a href="\${resetLink}">here</a> to reset your password.</p>\`
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
              src="https://www.youtube.com/embed/nF9g1825mwk"
              title="Sending Emails with Nodemailer"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Sending Emails with Nodemailer
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how to send emails from Node.js.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/teGcF-Lgkxs"
              title="Password Reset Flow in Backend"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Password Reset Flow
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand email-based authentication flows.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/8jLOx1hD3_o"
              title="Background Tasks in Node.js"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Background Tasks Explained
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how async tasks improve backend performance.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}

{currentTopic === 4 && (
  <>
    {/* SECTION: CLEAN ARCHITECTURE & SCALABLE BACKEND STRUCTURE */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Clean Architecture, Folder Structure, and Scalable Backend Design
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

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