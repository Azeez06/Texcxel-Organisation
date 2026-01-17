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
    · Week 4
  </span>
</div>

     <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A1F44] mb-5">
    Node.js Fundamental
    </h1>


  <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed text-base sm:text-lg">
    This week introduces you to Node.js and the fundamentals of running
    JavaScript on the server. You will learn how Node.js works as a runtime,
    how backend applications are structured, and how servers handle files,
    configurations, and requests. By the end of this week, you will be able
    to build simple backend servers and understand the core concepts that
    power modern JavaScript backends.
  </p>
</div>
{/* LEARNING OBJECTIVES */}
<div className="bg-white rounded-3xl border border-gray-200 p-8 mb-16">

  <h2 className="text-xl font-bold text-[#0A1F44] mb-6">
    What you will learn
  </h2>

  <ul className="space-y-4 text-gray-700 text-base leading-relaxed">
    {[
      "What Node.js is and how it differs from browser-based JavaScript",
      "Understanding the Node.js runtime and event-driven architecture",  
      "Working with modules (CommonJS and ES modules)",
      "Using the file system to read and write data",
      "Managing environment variables and application configuration",
      "Creating simple HTTP servers using Node.js",
    
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
    {/* SECTION: WHAT NODE.JS IS */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        What Node.js Is and How It Differs from Browser-Based JavaScript
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
          JavaScript was originally created to run inside web browsers. Its main
          job was to make websites interactive by responding to user actions
          such as clicks, form submissions, and page interactions. For many
          years, JavaScript could only run in the browser and had no access to
          the computer’s file system, operating system, or server resources.
        </p>

        <p>
          <strong>Node.js</strong> changed this completely. Node.js is a runtime
          environment that allows JavaScript to run outside the browser, directly
          on a server or computer. This means JavaScript can now be used to build
          backend applications, servers, APIs, and command-line tools.
        </p>

        <p>
          In a browser environment, JavaScript is controlled by the browser for
          security reasons. For example, browser JavaScript cannot read files
          from your computer or listen for network requests directly. These
          restrictions protect users from malicious scripts.
        </p>

        <p>
          Node.js removes these limitations because it is designed for backend
          development. With Node.js, JavaScript can read and write files, connect
          to databases, handle network requests, manage environment variables,
          and communicate with other servers. This makes it suitable for building
          real-world backend systems.
        </p>

        <p>
          Another key difference is the environment itself. Browser JavaScript
          interacts with the <strong>DOM</strong> (Document Object Model) to
          update HTML and CSS on the page. Node.js does not have access to the
          DOM. Instead, Node.js focuses on server-side tasks such as handling
          requests, processing data, and returning responses.
        </p>

        <p>
          Node.js uses an <strong>event-driven, non-blocking architecture</strong>.
          This means it can handle many requests at the same time without waiting
          for one task to finish before starting another. This design makes
          Node.js fast, efficient, and well-suited for scalable applications.
        </p>

        <p>
          In real-world applications, Node.js is commonly used to build APIs,
          authentication systems, backend services, real-time applications, and
          microservices. It allows developers to use one language—JavaScript—for
          both frontend and backend development.
        </p>

        <p>
          Understanding the difference between browser JavaScript and Node.js is
          critical. While the language syntax is the same, the environment,
          capabilities, and responsibilities are very different.
        </p>

      </div>
    </div>

    {/* PRACTICAL COMPARISON */}
    <div className="mb-20">

      <h3 className="text-xl font-bold text-[#0A1F44] mb-6">
        Practical Comparison
      </h3>

      <div className="space-y-8 text-gray-700">

        <div>
          <p className="mb-3 font-semibold text-[#0A1F44]">
            Browser JavaScript Example
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Runs in the browser
document.querySelector("button").addEventListener("click", () => {
  alert("Button clicked!");
});
            `}</code>
          </pre>

          <p className="text-sm text-gray-600 mt-3">
            This code interacts with the DOM and responds to user interaction
            inside a web page.
          </p>
        </div>

        <div>
          <p className="mb-3 font-semibold text-[#0A1F44]">
            Node.js JavaScript Example
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Runs in Node.js
const fs = require("fs");

fs.writeFileSync("message.txt", "Hello from Node.js");
console.log("File created successfully");
            `}</code>
          </pre>

          <p className="text-sm text-gray-600 mt-3">
            This code runs on the server and writes a file to the file system —
            something browser JavaScript cannot do.
          </p>
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
              src="https://www.youtube.com/embed/TlB_eWDSMt4"
              title="What is Node.js?"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              What is Node.js?
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Clear explanation of Node.js and how it works.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/RLtyhwFtXQA"
              title="Node.js vs Browser JavaScript"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Node.js vs Browser JavaScript
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand the key differences between the two environments.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/ENrzD9HAZK4"
              title="Why Use Node.js?"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Why Use Node.js?
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn where Node.js fits in modern backend development.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}
{currentTopic === 1 && (
  <>
    {/* SECTION: NODE.JS RUNTIME & EVENT LOOP */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Understanding the Node.js Runtime, Event Loop, and Non-Blocking I/O
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
          To truly understand Node.js, you must understand what happens when
          JavaScript runs outside the browser. Unlike browsers, Node.js does not
          exist to render web pages. Its main job is to execute JavaScript code
          efficiently on a server, handle requests, work with files, and manage
          data operations.
        </p>

        <p>
          The <strong>Node.js runtime</strong> is the environment that makes this
          possible. It combines the JavaScript engine (V8), system-level APIs,
          and Node-specific features into one platform. This runtime allows
          JavaScript to interact with the operating system, network, and file
          system—capabilities that browser JavaScript does not have.
        </p>

        <p>
          One of the most important ideas behind Node.js is that it runs on a
          <strong> single-threaded model</strong>. This means Node.js uses one
          main thread to execute JavaScript code. At first, this may sound like a
          limitation, but Node.js is designed to handle thousands of operations
          efficiently through smart task management.
        </p>

        <p>
          This is where the <strong>event loop</strong> comes in. The event loop
          is the heart of Node.js. It constantly checks whether there are tasks
          waiting to be executed and decides what should run next. Instead of
          waiting for long tasks (like reading files or querying databases),
          Node.js delegates them and continues running other code.
        </p>

        <p>
          When Node.js encounters an operation that takes time—such as reading a
          file, making a database request, or calling an external API—it does
          not block the main thread. Instead, it sends that task to the system
          or background threads and moves on. Once the task finishes, the result
          is placed back into the event loop to be processed later.
        </p>

        <p>
          This behavior is called <strong>non-blocking I/O</strong>. It allows
          Node.js to handle many users at the same time without freezing or
          slowing down. While one request is waiting for data, Node.js can
          process dozens or hundreds of others.
        </p>

        <p>
          In real-world backend systems, this architecture is extremely
          powerful. Applications such as chat systems, APIs, dashboards, and
          streaming services rely on Node.js because it can handle concurrent
          users efficiently without consuming excessive resources.
        </p>

        <p>
          Understanding the event loop and non-blocking behavior is critical.
          It explains why Node.js scales well and why developers must write
          asynchronous code correctly using callbacks, promises, or async/await.
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
          <p className="mb-3 font-semibold text-[#0A1F44]">
            Blocking Code Example (What to Avoid)
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
const fs = require("fs");

// Blocking operation
const data = fs.readFileSync("data.txt", "utf8");

console.log(data);
console.log("This runs AFTER file is read");
            `}</code>
          </pre>

          <p className="text-sm text-gray-600 mt-3">
            Here, Node.js waits for the file to finish reading before moving to
            the next line. This blocks the event loop and slows down performance.
          </p>
        </div>

        <div>
          <p className="mb-3 font-semibold text-[#0A1F44]">
            Non-Blocking Code Example (Recommended)
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
const fs = require("fs");

// Non-blocking operation
fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

console.log("This runs BEFORE file is read");
            `}</code>
          </pre>

          <p className="text-sm text-gray-600 mt-3">
            Node.js continues executing code while the file is being read. When
            the file is ready, the callback is added back to the event loop.
          </p>
        </div>

        <div>
          <p className="mb-3 font-semibold text-[#0A1F44]">
            Using Async/Await (Modern Approach)
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
const fs = require("fs/promises");

async function readFileAsync() {
  const data = await fs.readFile("data.txt", "utf8");
  console.log(data);
}

readFileAsync();
console.log("This still runs immediately");
            `}</code>
          </pre>

          <p className="text-sm text-gray-600 mt-3">
            Async/await makes non-blocking code easier to read while keeping the
            performance benefits of Node.js.
          </p>
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
              src="https://www.youtube.com/embed/PNa9OMajw9w"
              title="Node.js Event Loop Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Node.js Event Loop Explained
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              A clear breakdown of how the event loop works internally.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/8aGhZQkoFbQ"
              title="What the Event Loop Really Does"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              What the Event Loop Really Does
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Deep conceptual explanation with visuals.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/_cFvL4U3zgk"
              title="Blocking vs Non Blocking I/O"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Blocking vs Non-Blocking I/O
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand why Node.js scales so well.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}
{currentTopic === 2 && (
  <>
    {/* SECTION: NODE.JS MODULES & PROJECT STRUCTURE */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Node.js Modules, CommonJS vs ES Modules, and Project Structure
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
          As backend applications grow, writing all your code inside a single
          file quickly becomes unmanageable. Real-world Node.js applications
          are built by breaking functionality into smaller, reusable pieces.
          This is where <strong>modules</strong> come in.
        </p>

        <p>
          A <strong>module</strong> in Node.js is simply a file that contains
          related code. Each module has its own scope, meaning variables and
          functions inside one module do not automatically affect others.
          This separation helps prevent bugs, improves readability, and makes
          large applications easier to maintain.
        </p>

        <p>
          Node.js uses a module system to control how code is shared between
          files. By explicitly exporting and importing functionality, you
          decide what parts of your code are accessible to other modules.
          This creates clear boundaries and encourages clean architecture.
        </p>

        <p>
          Traditionally, Node.js used the <strong>CommonJS</strong> module
          system. In CommonJS, modules are exported using
          <strong> module.exports</strong> and imported using
          <strong> require()</strong>. This system is still widely used and
          supported across many existing Node.js projects.
        </p>

        <p>
          Modern JavaScript introduced <strong>ES Modules (ESM)</strong>, which
          use the <strong>export</strong> and <strong>import</strong> syntax.
          ES Modules are now supported in Node.js and align closely with how
          frontend JavaScript works, making full-stack development more
          consistent.
        </p>

        <p>
          Choosing between CommonJS and ES Modules depends on project setup,
          compatibility, and team preference. However, ES Modules are becoming
          the standard for modern applications due to their clarity and static
          structure.
        </p>

        <p>
          Beyond modules, professional Node.js applications follow clear
          <strong>project structures</strong>. Files are grouped by purpose
          such as routes, controllers, services, and utilities. This makes
          applications scalable and easier for teams to collaborate on.
        </p>

        <p>
          Understanding modules and structure early will save you from messy
          codebases later. It is one of the most important skills for writing
          maintainable backend systems.
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
          <p className="mb-3 font-semibold text-[#0A1F44]">
            CommonJS Module Example
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// math.js
function add(a, b) {
  return a + b;
}

module.exports = add;
            `}</code>
          </pre>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm mt-4">
            <code>{`
// app.js
const add = require("./math");

console.log(add(2, 3));
            `}</code>
          </pre>
        </div>

        <div>
          <p className="mb-3 font-semibold text-[#0A1F44]">
            ES Module Example
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// math.js
export function add(a, b) {
  return a + b;
}
            `}</code>
          </pre>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm mt-4">
            <code>{`
// app.js
import { add } from "./math.js";

console.log(add(5, 7));
            `}</code>
          </pre>

          <p className="text-sm text-gray-600 mt-3">
            To use ES Modules in Node.js, you must add
            <strong> "type": "module"</strong> in your package.json file.
          </p>
        </div>

        <div>
          <p className="mb-3 font-semibold text-[#0A1F44]">
            Basic Node.js Project Structure
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
project/
│── src/
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   ├── utils/
│   └── app.js
│── package.json
│── server.js
            `}</code>
          </pre>

          <p className="text-sm text-gray-600 mt-3">
            This structure separates responsibilities and makes scaling your
            backend application much easier.
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
              src="https://www.youtube.com/embed/cRHQNNcYf6s"
              title="Node.js Modules Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Node.js Modules Explained
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how modules work in Node.js.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/0aKZvNNf8BA"
              title="CommonJS vs ES Modules"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              CommonJS vs ES Modules
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand the differences and when to use each.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/ENrzD9HAZK4"
              title="Node.js Project Structure Best Practices"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Node.js Project Structure
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how professionals organize backend projects.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}
{currentTopic === 3 && (
  <>
    {/* SECTION: FILE SYSTEM, PATHS & ENVIRONMENT VARIABLES */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Working with the File System, Paths, and Environment Variables in Node.js
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
          One of the biggest differences between Node.js and browser-based
          JavaScript is access to the computer’s file system. In the browser,
          JavaScript is sandboxed for security reasons, meaning it cannot freely
          read or write files on a user’s machine. Node.js, however, is designed
          to run on servers and has full access to the file system.
        </p>

        <p>
          This ability allows Node.js applications to read files, write data to
          disk, store logs, upload files, generate reports, and manage
          configuration files. Almost every real backend application interacts
          with the file system in some way, making this a critical skill.
        </p>

        <p>
          Node.js provides the <strong>fs (File System)</strong> module for
          interacting with files and directories. With it, you can create
          files, read content, update data, delete files, and work with folders.
          These operations can be done synchronously or asynchronously.
        </p>

        <p>
          In real-world backend systems, asynchronous file operations are
          preferred because they prevent the server from blocking other
          requests. Blocking the event loop with slow file operations can cause
          performance issues, especially under heavy traffic.
        </p>

        <p>
          Another important concept is handling file paths correctly.
          Hardcoding file paths can break your application across different
          operating systems. Node.js solves this with the
          <strong> path</strong> module, which helps generate safe and portable
          file paths.
        </p>

        <p>
          Environment variables are another essential part of backend
          development. They allow you to store sensitive or environment-specific
          values such as database URLs, API keys, and server ports without
          hardcoding them into your source code.
        </p>

        <p>
          Using environment variables improves security, flexibility, and
          deployment workflows. The same codebase can run in development,
          testing, and production simply by changing environment variables.
        </p>

        <p>
          Mastering the file system, paths, and environment variables prepares
          you for building scalable, secure, and production-ready Node.js
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
          <p className="font-semibold mb-3 text-[#0A1F44]">
            Reading and Writing Files with fs
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
const fs = require("fs");

// Write to a file
fs.writeFile("example.txt", "Hello from Node.js!", (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }
  console.log("File written successfully");
});

// Read from a file
fs.readFile("example.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data);
});
            `}</code>
          </pre>
        </div>

        <div>
          <p className="font-semibold mb-3 text-[#0A1F44]">
            Using the Path Module Safely
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
const path = require("path");

const filePath = path.join(__dirname, "data", "users.json");
console.log(filePath);
            `}</code>
          </pre>

          <p className="text-sm text-gray-600 mt-2">
            This ensures paths work correctly on Windows, macOS, and Linux.
          </p>
        </div>

        <div>
          <p className="font-semibold mb-3 text-[#0A1F44]">
            Working with Environment Variables
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// .env file
PORT=5000
DATABASE_URL=mongodb://localhost:27017/appdb
            `}</code>
          </pre>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm mt-4">
            <code>{`
require("dotenv").config();

const port = process.env.PORT;
console.log("Server running on port:", port);
            `}</code>
          </pre>

          <p className="text-sm text-gray-600 mt-2">
            Environment variables keep sensitive information out of your code.
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
              src="https://www.youtube.com/embed/U57kU311-nE"
              title="Node.js File System Module"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Node.js File System
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how to read and write files in Node.js.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/j95Lwxvi9JY"
              title="Node.js Path Module"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Node.js Path Module
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand how to handle file paths safely.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/17UVejOw3zA"
              title="Environment Variables in Node.js"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Environment Variables
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how to manage configuration securely.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}
{currentTopic === 4 && (
  <>
    {/* SECTION: ENVIRONMENT VARIABLES & APP CONFIGURATION */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Managing Environment Variables and Application Configuration
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
          As backend applications grow, they need different settings depending
          on where they are running. A server running on your local computer
          does not need the same configuration as one running in production.
          Hardcoding these values directly into your code quickly becomes
          dangerous and unmanageable.
        </p>

        <p>
          <strong>Environment variables</strong> solve this problem by allowing
          you to store configuration values outside your application code.
          These values can include database connection strings, server ports,
          API keys, authentication secrets, and feature flags.
        </p>

        <p>
          One of the biggest reasons environment variables are important is
          <strong> security</strong>. Sensitive data such as database passwords
          or secret keys should never be committed to source control. Instead,
          they are stored in environment variables that only exist on the
          server where the application runs.
        </p>

        <p>
          Environment variables also make applications more
          <strong> flexible</strong>. The same codebase can run in development,
          staging, and production without modification—only the environment
          variables change. This is how professional backend systems are
          deployed at scale.
        </p>

        <p>
          Node.js provides access to environment variables through
          <strong> process.env</strong>. Each variable is read as a string,
          allowing your application to dynamically adapt its behavior based on
          the environment.
        </p>

        <p>
          In real-world Node.js projects, developers use a configuration layer
          that centralizes all environment-based settings. This keeps the code
          clean, reduces duplication, and makes configuration easy to manage
          and debug.
        </p>

        <p>
          Managing environment variables correctly is a core backend skill.
          It directly affects security, scalability, deployment workflows,
          and long-term maintainability of applications.
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
          <p className="font-semibold mb-3 text-[#0A1F44]">
            Defining Environment Variables Using a .env File
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
PORT=4000
DATABASE_URL=mongodb://localhost:27017/appdb
JWT_SECRET=superSecretKey
NODE_ENV=development
            `}</code>
          </pre>

          <p className="text-sm text-gray-600 mt-2">
            The <strong>.env</strong> file is used only during development and
            should never be pushed to GitHub.
          </p>
        </div>

        <div>
          <p className="font-semibold mb-3 text-[#0A1F44]">
            Loading Environment Variables in Node.js
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
require("dotenv").config();

const port = process.env.PORT;
const dbUrl = process.env.DATABASE_URL;

console.log("Server running on port:", port);
console.log("Database:", dbUrl);
            `}</code>
          </pre>
        </div>

        <div>
          <p className="font-semibold mb-3 text-[#0A1F44]">
            Centralized Application Configuration
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// config.js
module.exports = {
  port: process.env.PORT || 3000,
  databaseUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET,
  isProduction: process.env.NODE_ENV === "production",
};
            `}</code>
          </pre>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm mt-4">
            <code>{`
// server.js
const config = require("./config");

app.listen(config.port, () => {
  console.log("Server running on port", config.port);
});
            `}</code>
          </pre>

          <p className="text-sm text-gray-600 mt-2">
            Centralizing configuration avoids duplication and keeps the codebase
            clean and scalable.
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
              src="https://www.youtube.com/embed/17UVejOw3zA"
              title="Environment Variables in Node.js"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Environment Variables in Node.js
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how to securely manage environment variables.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/9aNQGGM2y0Q"
              title="dotenv Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              dotenv Explained
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              How dotenv works and why it is essential in Node.js projects.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Vp0zN6W6M3M"
              title="Node.js App Configuration Best Practices"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Configuration Best Practices
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how professionals manage config in backend systems.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}
{currentTopic === 5 && (
  <>
    {/* SECTION: SIMPLE HTTP SERVER & REQUEST–RESPONSE FLOW */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Creating a Simple HTTP Server and Understanding the Request–Response Flow
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
          At the heart of backend development is one fundamental responsibility:
          <strong> receiving requests from clients and sending back responses</strong>.
          Every backend application—no matter how complex—ultimately performs
          this basic task.
        </p>

        <p>
          A client can be a web browser, a mobile app, another server, or even a
          command-line tool. When a client wants data or wants to perform an
          action, it sends an <strong>HTTP request</strong> to a server. The
          server processes that request and returns an
          <strong> HTTP response</strong>.
        </p>

        <p>
          Node.js allows you to create servers using JavaScript. Unlike browsers,
          which focus on displaying content, Node.js focuses on handling
          network requests, managing data, and controlling application logic.
          This is what makes Node.js ideal for backend development.
        </p>

        <p>
          The request–response cycle starts when a client sends a request to a
          specific URL. That request contains important information such as the
          HTTP method (GET, POST, PUT, DELETE), headers, and sometimes a body
          with data.
        </p>

        <p>
          The server receives the request, examines it, performs some logic
          (such as fetching data, saving information, or validating input),
          and then sends a response back. The response includes a status code,
          headers, and usually some data like JSON or text.
        </p>

        <p>
          Understanding this flow is critical because every backend framework
          (Express, NestJS, Fastify) is built on top of this same concept.
          Once you understand the basics, learning advanced tools becomes
          much easier.
        </p>

        <p>
          In real-world applications, servers handle thousands of requests
          simultaneously. Node.js uses an event-driven, non-blocking model,
          allowing it to efficiently handle many connections at once.
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
          <p className="font-semibold mb-3 text-[#0A1F44]">
            Creating a Basic HTTP Server with Node.js
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello from the server!");
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
            `}</code>
          </pre>

          <p className="text-sm text-gray-600 mt-2">
            This server listens for incoming requests and sends a simple text
            response back to the client.
          </p>
        </div>

        <div>
          <p className="font-semibold mb-3 text-[#0A1F44]">
            Inspecting the Request Object
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);

  res.end("Request received");
});
            `}</code>
          </pre>

          <p className="text-sm text-gray-600 mt-2">
            The <strong>req</strong> object contains information about what the
            client is asking for.
          </p>
        </div>

        <div>
          <p className="font-semibold mb-3 text-[#0A1F44]">
            Sending Different Responses Based on the URL
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home page");
  } else if (req.url === "/about") {
    res.end("About page");
  } else {
    res.statusCode = 404;
    res.end("Page not found");
  }
});
            `}</code>
          </pre>

          <p className="text-sm text-gray-600 mt-2">
            This demonstrates basic routing and how servers decide what response
            to send.
          </p>
        </div>

        <div>
          <p className="font-semibold mb-3 text-[#0A1F44]">
            Understanding HTTP Status Codes
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
res.statusCode = 201; // Created
res.end("Resource created successfully");
            `}</code>
          </pre>

          <p className="text-sm text-gray-600 mt-2">
            Status codes tell the client whether a request succeeded, failed,
            or needs attention.
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
              src="https://www.youtube.com/embed/qZc4k6j5pFY"
              title="Node.js HTTP Server Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Node.js HTTP Server Explained
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how Node.js handles HTTP requests and responses.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/iYM2zFP3Zn0"
              title="HTTP Request & Response Cycle"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              HTTP Request–Response Cycle
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand how clients and servers communicate over HTTP.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/TlB_eWDSMt4"
              title="Node.js Server Basics"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Node.js Server Basics
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Build and understand your first backend server.
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