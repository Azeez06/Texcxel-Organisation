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
    · Week 7
  </span>
</div>

     <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A1F44] mb-5">
    Authentication & Authorisation
    </h1>


  <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed text-base sm:text-lg">
    This week focuses on securing backend applications by implementing proper
    authentication and authorization systems. You will learn how users are
    identified, how access is controlled, and how modern APIs protect sensitive
    routes using tokens, roles, and permissions.
  </p>
</div>

{/* LEARNING OBJECTIVES */}
<div className="bg-white rounded-3xl border border-gray-200 p-8 mb-16">

  <h2 className="text-xl font-bold text-[#0A1F44] mb-6">
    What you will learn
  </h2>

  <ul className="space-y-4 text-gray-700 text-base leading-relaxed">
    {[
      "Understanding authentication vs authorization in backend systems",
      "Password hashing and secure credential storage",
      "Implementing JWT-based authentication",
      "Protecting routes using middleware",
      "Role-based access control (users, admins, permissions)"
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
    {/* SECTION: AUTHENTICATION VS AUTHORIZATION */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Authentication vs Authorization: Understanding Access Control
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
          In backend development, security starts with understanding two very
          important concepts: <strong>authentication</strong> and
          <strong> authorization</strong>. Although they are closely related,
          they solve different problems and play different roles in protecting
          applications.
        </p>

        <p>
          <strong>Authentication</strong> answers the question:
          <em> “Who are you?”</em>. It is the process of verifying a user’s
          identity. When a user logs in using an email and password, the backend
          checks the provided credentials against stored records to confirm
          that the user is who they claim to be.
        </p>

        <p>
          In real life, authentication is like showing your ID card at the
          entrance of a building. The security guard checks your ID to confirm
          your identity before letting you in. Without authentication, the
          system has no way to know who is making a request.
        </p>

        <p>
          <strong>Authorization</strong> answers a different question:
          <em> “What are you allowed to do?”</em>. After a user is authenticated,
          authorization determines what actions they can perform and which
          resources they can access inside the system.
        </p>

        <p>
          Using the same real-life example, authorization is like deciding
          which rooms you are allowed to enter after you are inside the
          building. An employee may access office areas, while an admin may
          access secure rooms. Both users are authenticated, but their
          permissions are different.
        </p>

        <p>
          In backend applications, authentication usually happens first. Once
          a user is authenticated, the backend attaches an identity (often via
          a token) to each request. Authorization logic then checks that
          identity against rules, roles, or permissions before allowing access
          to protected routes.
        </p>

        <p>
          Separating authentication from authorization makes backend systems
          more secure, flexible, and scalable. It allows developers to change
          access rules without changing how users log in, which is critical
          for real-world applications with multiple user roles.
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
// Authentication example (login)
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({ message: "User authenticated successfully" });
});
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Authorization example (role-based access)
function authorizeAdmin(req, res, next) {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Access denied" });
  }
  next();
}

app.get("/admin/dashboard", authorizeAdmin, (req, res) => {
  res.json({ message: "Welcome, admin" });
});
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Authentication happens first, authorization follows
app.get("/profile", authenticateUser, (req, res) => {
  res.json({ profile: req.user });
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
              src="https://www.youtube.com/embed/4YOpILi9Oxs"
              title="Authentication vs Authorization Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Authentication vs Authorization
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Clear explanation with real-world examples.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/j8Yxff6L_po"
              title="Backend Authentication Basics"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Backend Authentication Basics
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how servers identify users.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/2PPSXonhIck"
              title="Authorization & Roles Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Authorization & Roles
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              How permissions and roles control access.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}

{currentTopic === 1 && (
  <>
    {/* SECTION: PASSWORD HASHING & SECURE CREDENTIAL STORAGE */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Password Hashing & Secure Credential Storage
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
          One of the most critical responsibilities of a backend developer is
          protecting user credentials. Storing passwords in plain text is one
          of the most dangerous mistakes an application can make. If a database
          is compromised, plain text passwords immediately expose users to
          identity theft and account hijacking.
        </p>

        <p>
          To prevent this, modern backend systems use
          <strong> password hashing</strong>. Hashing converts a password into
          a long, irreversible string of characters. Once hashed, the original
          password cannot be reconstructed, even by the developers who built
          the system.
        </p>

        <p>
          A key concept in secure password storage is
          <strong> salting</strong>. A salt is a random value added to a password
          before hashing. Salting ensures that even if two users choose the same
          password, their hashed values will be completely different in the
          database.
        </p>

        <p>
          In real-world applications, hashing algorithms like
          <strong> bcrypt</strong> are preferred because they are intentionally
          slow. This makes brute-force attacks extremely expensive and time-
          consuming for attackers, even if they gain access to hashed passwords.
        </p>

        <p>
          During login, the backend never decrypts a password. Instead, it
          hashes the password provided by the user and compares it to the
          stored hash. If the hashes match, authentication succeeds.
        </p>

        <p>
          Secure credential storage is not just a best practice—it is a legal
          and ethical requirement. Many data protection regulations assume
          passwords are hashed and salted. Failing to do so can lead to severe
          consequences for both users and organizations.
        </p>

        <p>
          Understanding and correctly implementing password hashing is a
          foundational skill for backend developers. It protects users, builds
          trust, and forms the backbone of secure authentication systems.
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
// Hashing a password during registration
import bcrypt from "bcrypt";

const hashedPassword = await bcrypt.hash(password, 10);

const user = new User({
  email,
  password: hashedPassword
});

await user.save();
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Comparing passwords during login
const user = await User.findOne({ email });

if (!user) {
  return res.status(401).json({ message: "Invalid credentials" });
}

const isValid = await bcrypt.compare(password, user.password);

if (!isValid) {
  return res.status(401).json({ message: "Invalid credentials" });
}

res.json({ message: "Login successful" });
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Never store passwords like this ❌
const user = {
  email: "user@example.com",
  password: "mypassword123"
};

// Always hash passwords ✅
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
              src="https://www.youtube.com/embed/2jqok-WgelI"
              title="Password Hashing Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Password Hashing Explained
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Why hashing is essential for security.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/8ZtInClXe1Q"
              title="bcrypt Tutorial for Node.js"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              bcrypt in Node.js
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how to hash and compare passwords using bcrypt.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/X4nN7fZLqkI"
              title="How Passwords Are Stored Securely"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Secure Password Storage
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Best practices used in real systems.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}

{currentTopic === 2 && (
  <>
    {/* SECTION: JWT AUTHENTICATION & STATELESS SESSIONS */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        JWT Authentication: Tokens, Signing, Verification & Stateless Sessions
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
          Once a user’s identity has been verified using a username and password,
          the backend needs a secure way to remember that user across multiple
          requests. This is where <strong>JSON Web Tokens (JWT)</strong> come in.
          JWTs allow applications to authenticate users without storing session
          data on the server.
        </p>

        <p>
          A JWT is a compact, self-contained token that represents a user’s
          identity. Instead of saving session information in memory or a
          database, the server issues a token to the client after login. The
          client then sends this token with every subsequent request.
        </p>

        <p>
          A JWT is made up of three parts:
          <strong> the header</strong>,
          <strong> the payload</strong>, and
          <strong> the signature</strong>. The payload contains user-related
          data (such as user ID or role), while the signature ensures the token
          has not been altered.
        </p>

        <p>
          The most important concept behind JWT is
          <strong> stateless authentication</strong>. This means the server does
          not store any session data. Every request is authenticated solely
          based on the token provided, making systems faster, more scalable,
          and easier to distribute across multiple servers.
        </p>

        <p>
          When a user logs in, the backend signs a token using a secret key.
          When the client sends the token back, the server verifies the
          signature. If the token is valid and not expired, the request is
          allowed to continue.
        </p>

        <p>
          JWTs are widely used in modern applications such as mobile apps,
          single-page applications, and microservices. They allow frontend and
          backend systems to remain loosely coupled while maintaining strong
          security.
        </p>

        <p>
          Understanding JWTs is a major milestone in backend development. It
          moves you from basic login systems to professional, scalable
          authentication architectures used in production systems.
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
// Generating a JWT after successful login
import jwt from "jsonwebtoken";

const token = jwt.sign(
  { userId: user._id, role: user.role },
  process.env.JWT_SECRET,
  { expiresIn: "1h" }
);

res.json({ token });
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Sending JWT from frontend (example)
fetch("/api/profile", {
  headers: {
    Authorization: "Bearer " + token
  }
});
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Middleware to verify JWT
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Protecting a route with JWT middleware
app.get("/api/profile", authMiddleware, (req, res) => {
  res.json({ message: "Welcome user", user: req.user });
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

        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/mbsmsi7l3r4"
              title="JWT Explained Simply"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              JWT Explained Simply
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand how JSON Web Tokens work conceptually.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/7Q17ubqLfaM"
              title="JWT Authentication in Node.js"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              JWT in Node.js
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Practical JWT authentication with Express.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/UBUNrFtufWo"
              title="Stateless Authentication Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Stateless Authentication
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Why JWT is used instead of traditional sessions.
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
    {/* SECTION: PROTECTING ROUTES & ROLE-BASED ACCESS CONTROL */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Protecting Routes, Middleware, Roles & Access Control
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
          Authentication answers the question <strong>“Who are you?”</strong>,
          but authorization answers a different and equally important question:
          <strong> “What are you allowed to do?”</strong>. In real-world backend
          systems, not every authenticated user should have access to every
          resource.
        </p>

        <p>
          For example, in an internship platform, all users may be able to log
          in, but only administrators should be allowed to create courses,
          approve certificates, or manage other users. This is where
          <strong> protected routes</strong> and
          <strong> role-based access control (RBAC)</strong> come into play.
        </p>

        <p>
          A <strong>protected route</strong> is an API endpoint that can only be
          accessed if the request passes through authentication checks. In
          Express, this is usually done using
          <strong> middleware functions</strong> that run before the controller
          logic.
        </p>

        <p>
          Middleware acts like a security gate. Before a request reaches the
          actual route handler, middleware can inspect the request, verify the
          JWT token, extract user data, and decide whether the request should
          proceed or be blocked.
        </p>

        <p>
          Once a user is authenticated, authorization logic checks the
          <strong> user’s role</strong> (such as admin, instructor, or student)
          to determine access. Roles are typically stored in the JWT payload or
          retrieved from the database.
        </p>

        <p>
          This layered approach—authentication first, authorization second—is
          considered a best practice in backend architecture. It keeps systems
          secure, predictable, and easy to scale as new roles and permissions
          are introduced.
        </p>

        <p>
          Proper access control prevents accidental data leaks, protects
          sensitive operations, and ensures your backend behaves correctly
          even as the number of users grows.
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
// Authentication middleware (JWT verification)
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Authentication required" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Role-based authorization middleware
const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        message: "You do not have permission to access this resource"
      });
    }
    next();
  };
};
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Protected admin-only route
app.post(
  "/api/admin/create-course",
  authenticate,
  authorizeRoles("admin"),
  (req, res) => {
    res.json({ message: "Course created successfully" });
  }
);
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Protected student route
app.get(
  "/api/student/dashboard",
  authenticate,
  authorizeRoles("student"),
  (req, res) => {
    res.json({ message: "Welcome to your dashboard" });
  }
);
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
              src="https://www.youtube.com/embed/2jqok-WgelI"
              title="Protected Routes Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Protected Routes Explained
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how route protection works in backend applications.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Ud5xKCYQTjM"
              title="Role Based Access Control"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Role-Based Access Control
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand how roles and permissions work in APIs.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/9JmQ8K6G5fA"
              title="Express Middleware Deep Dive"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Express Middleware Deep Dive
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how middleware controls request flow in Express.
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