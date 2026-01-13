import { useState } from "react";

export default function Weeksix() {
   const [currentTopic, setCurrentTopic] = useState(0);

  return (
    <section className="bg-[#FAF7F2] min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-8">

       {/* HEADER */}
<div className="mb-16">
  <span className="text-sm font-bold uppercase tracking-wide text-red-600">
    Frontend Development · Week 6
  </span>

  <h1 className="text-4xl font-extrabold text-[#0A1F44] mt-4 mb-6">
    JavaScript & the DOM
  </h1>

  <p className="text-gray-700 max-w-3xl leading-relaxed">
    This week focuses on bringing your websites to life using JavaScript and
    the Document Object Model (DOM). You will learn how JavaScript interacts
    with HTML elements, responds to user actions, and dynamically updates
    content on the page.
  </p>
</div>

{/* LEARNING OBJECTIVES */}
<div className="bg-white rounded-3xl border p-8 mb-12">
  <h2 className="text-xl font-bold text-[#0A1F44] mb-6">
    What you will learn
  </h2>

  <ul className="space-y-4 text-gray-700">
    <li>— What the DOM is and how browsers represent web pages</li>
    <li>— Selecting and manipulating HTML elements with JavaScript</li>
    <li>— Handling user events like clicks, input, and form submission</li>
    <li>— Updating content and styles dynamically</li>
    <li>— Building simple interactive features using JavaScript logic</li>
  </ul>
</div>

{currentTopic === 0 && (
  <>
    {/* SECTION: WHAT THE DOM IS & HOW BROWSERS REPRESENT WEB PAGES */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Understanding the DOM and How Browsers Represent Web Pages
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          When a browser loads a website, it does not see the page the way humans
          do. Instead, it converts the HTML document into a structured model
          called the <strong>Document Object Model (DOM)</strong>. The DOM is a
          tree-like representation of the page that allows the browser and
          JavaScript to understand and interact with every element.
        </p>

        <p>
          The DOM represents the web page as a hierarchy of
          <strong> nodes</strong>. Each HTML element becomes an object in this
          tree, including headings, paragraphs, images, buttons, and even text
          itself. This structure shows how elements are related to each other,
          such as parents, children, and siblings.
        </p>

        <p>
          When the browser parses an HTML file, it starts from the
          <strong> document</strong> object, then moves down through the
          <strong> html</strong>, <strong>head</strong>, and
          <strong> body</strong> elements. Everything visible on the page exists
          somewhere inside this DOM tree.
        </p>

        <p>
          JavaScript uses the DOM to read, change, add, or remove content on a
          web page. This is what makes websites interactive. Without the DOM,
          JavaScript would not be able to respond to clicks, update text, or
          dynamically display content.
        </p>

        <p>
          Every time you click a button, submit a form, or see content update
          without reloading the page, JavaScript is interacting with the DOM.
          Modern frameworks like React still work with the DOM, but they manage
          it more efficiently using abstractions like the Virtual DOM.
        </p>

        <p>
          Understanding how browsers represent pages using the DOM is essential
          for learning DOM manipulation, event handling, animations, and building
          dynamic user interfaces.
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
// Accessing the DOM
console.log(document);

// Selecting an element
const heading = document.querySelector("h1");
console.log(heading);
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Changing content using the DOM
const message = document.getElementById("message");
message.textContent = "Welcome to the DOM!";
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Creating and adding elements
const newItem = document.createElement("li");
newItem.textContent = "New DOM Item";

document.querySelector("ul").appendChild(newItem);
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
              src="https://www.youtube.com/embed/0ik6X4DJKCc"
              title="What is the DOM?"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              What Is the DOM?
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how browsers turn HTML into a structured document model.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/y17RuWkWdn8"
              title="DOM Tree Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              The DOM Tree Explained
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand how HTML elements are structured in the DOM.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/eaLKqoB9Fu0"
              title="JavaScript DOM Manipulation"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              JavaScript DOM Manipulation
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how JavaScript interacts with the DOM in real projects.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}

{currentTopic === 1 && (
  <>
    {/* SECTION: SELECTING & MANIPULATING HTML ELEMENTS */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Selecting and Manipulating HTML Elements with JavaScript
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          Once a browser has created the DOM, JavaScript can interact with it by
          <strong> selecting elements</strong> and
          <strong> manipulating them</strong>. This is the foundation of
          interactivity on the web. Every dynamic behavior you see on a website
          starts with selecting an element and changing something about it.
        </p>

        <p>
          Selecting an element means telling JavaScript exactly
          <strong> which part of the page</strong> you want to work with. This
          could be a button, a paragraph, a form input, an image, or an entire
          section. JavaScript provides several built-in methods to find these
          elements inside the DOM.
        </p>

        <p>
          The most commonly used methods are
          <strong> getElementById</strong>,
          <strong> querySelector</strong>, and
          <strong> querySelectorAll</strong>.
          <strong> getElementById</strong> selects a single element using its ID,
          while <strong>querySelector</strong> allows you to use CSS selectors,
          making it extremely flexible and powerful.
        </p>

        <p>
          After selecting an element, you can manipulate it. Manipulation means
          changing its <strong>text</strong>,
          <strong> HTML content</strong>,
          <strong> styles</strong>,
          <strong> attributes</strong>, or even its
          <strong> position in the DOM</strong>. This is how JavaScript updates
          content without reloading the page.
        </p>

        <p>
          For example, JavaScript can change button labels, display error
          messages, show or hide sections, update user profiles, or dynamically
          load content. These actions happen instantly, creating smooth and
          responsive user experiences.
        </p>

        <p>
          Mastering element selection and manipulation is critical before
          learning advanced topics like event handling, animations, and
          frameworks. If you understand this concept well, modern tools like
          React will make much more sense later.
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
// Selecting elements using different methods

const title = document.getElementById("title");

const firstButton = document.querySelector("button");

const allCards = document.querySelectorAll(".card");

console.log(title, firstButton, allCards);
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Changing text and HTML content

const message = document.querySelector("#message");

message.textContent = "Welcome back, user!";
message.innerHTML = "<strong>Login successful!</strong>";
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Manipulating styles dynamically

const box = document.querySelector(".box");

box.style.backgroundColor = "#B11226";
box.style.color = "white";
box.style.padding = "16px";
box.style.borderRadius = "12px";
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Adding and removing classes (best practice)

const card = document.querySelector(".card");

card.classList.add("active");
card.classList.remove("inactive");
card.classList.toggle("highlight");
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Creating, inserting, and removing elements

const list = document.querySelector("ul");

const newItem = document.createElement("li");
newItem.textContent = "New dynamic item";

list.appendChild(newItem);

// Remove element
setTimeout(() => {
  newItem.remove();
}, 3000);
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
              src="https://www.youtube.com/embed/0ik6X4DJKCc"
              title="Selecting DOM Elements in JavaScript"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Selecting DOM Elements
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how to select elements using IDs, classes, and CSS selectors.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/5fb2aPlgoys"
              title="JavaScript DOM Manipulation"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              DOM Manipulation Explained
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how to change content, styles, and structure using JavaScript.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/wiozYyXQEVk"
              title="JavaScript classList and DOM Updates"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              classList & Dynamic Updates
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Best practices for updating styles using classList instead of inline styles.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}
{currentTopic === 2 && (
  <>
    {/* SECTION: HANDLING USER EVENTS */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Handling User Events: Clicks, Input, and Form Submission
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          Modern websites are interactive because they can respond to
          <strong> user actions</strong>. These actions are called
          <strong> events</strong>. An event occurs whenever a user clicks a
          button, types into an input field, submits a form, moves the mouse, or
          presses a key on the keyboard.
        </p>

        <p>
          JavaScript listens for these events using
          <strong> event listeners</strong>. An event listener waits for a
          specific action to happen and then runs a piece of code in response.
          This is how websites react instantly without reloading the page.
        </p>

        <p>
          The most common event you will work with is the
          <strong> click</strong> event. Click events are used for buttons,
          links, menus, modals, and interactive components. Every time a user
          clicks something meaningful, an event is usually involved.
        </p>

        <p>
          Input-related events such as
          <strong> input</strong> and
          <strong> change</strong> allow JavaScript to respond while users type.
          These events are essential for features like live search, form
          validation, character counters, and instant feedback.
        </p>

        <p>
          Form submission is another critical interaction. By handling the
          <strong> submit</strong> event, JavaScript can validate data, display
          errors, send information to a server, or prevent the page from
          refreshing. This is how modern single-page applications work.
        </p>

        <p>
          Understanding events helps you build responsive interfaces that feel
          fast and intuitive. Events connect user actions to application logic,
          making the web feel alive rather than static.
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
// Handling a click event

const button = document.querySelector("#btn");

button.addEventListener("click", () => {
  alert("Button clicked!");
});
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Responding to user input in real-time

const input = document.querySelector("#username");

input.addEventListener("input", (event) => {
  console.log("User typing:", event.target.value);
});
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Simple form submission handling

const form = document.querySelector("#loginForm");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // stop page refresh

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  console.log("Email:", email);
  console.log("Password:", password);
});
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Showing validation feedback

const inputField = document.querySelector("#name");

inputField.addEventListener("blur", () => {
  if (inputField.value === "") {
    inputField.classList.add("error");
  } else {
    inputField.classList.remove("error");
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
              src="https://www.youtube.com/embed/0ik6X4DJKCc"
              title="JavaScript Events Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              JavaScript Events Explained
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand what events are and how JavaScript listens for them.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/XF1_MlZ5l6M"
              title="Handling Click Events"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Handling Click Events
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how click events work in real-world projects.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/fNcJuPIZ2WE"
              title="JavaScript Form Events"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Form Events & Validation
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how to handle form submissions and validate user input.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}
{currentTopic === 3 && (
  <>
    {/* SECTION: UPDATING CONTENT AND STYLES DYNAMICALLY */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Updating Content and Styles Dynamically
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          One of the most powerful features of JavaScript is its ability to
          <strong> change a web page after it has loaded</strong>. Instead of
          showing static content, JavaScript allows your website to respond to
          users by updating text, images, styles, and layout dynamically. This
          is what makes modern websites feel interactive and alive.
        </p>

        <p>
          When JavaScript interacts with the DOM, it can
          <strong> modify existing content</strong>, add new elements, or remove
          elements entirely. For example, a button click can change a heading,
          display a success message, or update a counter without refreshing the
          page.
        </p>

        <p>
          Updating content dynamically is commonly done using properties like
          <strong> textContent</strong>, <strong> innerText</strong>, and
          <strong> innerHTML</strong>. These allow you to replace or inject new
          content into HTML elements in real time.
        </p>

        <p>
          JavaScript can also dynamically change the
          <strong> appearance of elements</strong>. By modifying styles through
          the <strong> style</strong> property or by adding and removing
          <strong> CSS classes</strong>, you can visually respond to user
          actions. This is how dark mode, animations, highlights, and visual
          feedback are implemented.
        </p>

        <p>
          In real-world applications, dynamic updates are used everywhere:
          showing validation errors in forms, displaying loading states,
          updating shopping cart totals, toggling menus, and reacting instantly
          to user input. Mastering dynamic updates is a key step toward building
          professional, interactive web applications.
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
            <strong>Updating text content dynamically:</strong> This example
            shows how JavaScript can instantly change what the user sees on the
            page.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Select an element
const message = document.getElementById("message");

// Update its content
message.textContent = "Welcome! You have successfully logged in.";
            `}</code>
          </pre>
        </div>

        <div>
          <p className="mb-3">
            <strong>Changing styles directly with JavaScript:</strong> This is
            useful for quick visual feedback such as alerts or highlights.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Select an element
const box = document.querySelector(".box");

// Change styles dynamically
box.style.backgroundColor = "#0A1F44";
box.style.color = "white";
box.style.padding = "16px";
            `}</code>
          </pre>
        </div>

        <div>
          <p className="mb-3">
            <strong>Using CSS classes for cleaner dynamic styling:</strong> This
            is the recommended approach for larger applications.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Select an element
const button = document.querySelector("#toggleBtn");

// Add or remove a class
button.classList.add("active");
button.classList.remove("disabled");
button.classList.toggle("highlight");
            `}</code>
          </pre>
        </div>

        <div>
          <p className="mb-3">
            <strong>Updating content based on user interaction:</strong> This
            example shows how JavaScript responds instantly to user actions.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
const counterText = document.getElementById("counter");
let count = 0;

document.getElementById("increaseBtn").addEventListener("click", () => {
  count++;
  counterText.textContent = count;
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
              src="https://www.youtube.com/embed/y17RuWkWdn8"
              title="JavaScript DOM Manipulation"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              DOM Manipulation Basics
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how to update content and structure dynamically using JavaScript.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/mPd2aJXCZ2g"
              title="Changing Styles with JavaScript"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Changing Styles Dynamically
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand how to modify styles and classes the right way.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/wiozYyXQEVk"
              title="ClassList and Dynamic UI"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              ClassList & Dynamic UI
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Build interactive interfaces by toggling classes dynamically.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}

{currentTopic === 4 && (
  <>
    {/* SECTION: BUILDING SIMPLE INTERACTIVE FEATURES */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Building Simple Interactive Features Using JavaScript Logic
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          JavaScript logic is what transforms a webpage from a collection of
          elements into a <strong>thinking, responsive system</strong>.
          Interactive features are built by combining conditions, variables,
          and events to make decisions based on user actions.
        </p>

        <p>
          At the core of interaction is <strong>logic flow</strong>. JavaScript
          evaluates situations using <strong>if / else statements</strong>,
          comparisons, and boolean values to decide what should happen next.
          For example, “If the user clicks this button, show a message. Else,
          hide it.”
        </p>

        <p>
          These logical decisions allow your application to react differently
          based on input, time, or state. This is how features like counters,
          toggles, alerts, validations, and simple games are created.
        </p>

        <p>
          JavaScript logic also helps track <strong>state</strong> — information
          about what is currently happening in the application. State could be
          whether a user is logged in, how many times a button has been clicked,
          or whether a menu is open or closed.
        </p>

        <p>
          When logic is combined with DOM manipulation, your application can
          think, respond, and adapt in real time. This is a foundational skill
          that prepares you for advanced concepts like frameworks, state
          management, and full-scale web applications.
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
            <strong>Toggle feature (ON / OFF):</strong> A common interaction
            where JavaScript logic switches between two states.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
const toggleBtn = document.getElementById("toggleBtn");
let isOn = false;

toggleBtn.addEventListener("click", () => {
  isOn = !isOn;

  toggleBtn.textContent = isOn ? "ON" : "OFF";
});
            `}</code>
          </pre>
        </div>

        <div>
          <p className="mb-3">
            <strong>Simple counter:</strong> JavaScript logic keeps track of a
            value and updates it each time the user interacts.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
let count = 0;
const counter = document.getElementById("counter");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});
            `}</code>
          </pre>
        </div>

        <div>
          <p className="mb-3">
            <strong>Conditional message display:</strong> JavaScript decides
            what message to show based on logic.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
const age = 18;
const message = document.getElementById("message");

if (age >= 18) {
  message.textContent = "You are eligible to continue.";
} else {
  message.textContent = "Access denied. Age requirement not met.";
}
            `}</code>
          </pre>
        </div>

        <div>
          <p className="mb-3">
            <strong>Simple form validation:</strong> Logic prevents invalid
            actions before they happen.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
const form = document.querySelector("form");
const input = document.getElementById("username");

form.addEventListener("submit", (e) => {
  if (input.value === "") {
    e.preventDefault();
    alert("Username is required");
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
              src="https://www.youtube.com/embed/IsG4Xd6LlsM"
              title="JavaScript Logic Basics"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              JavaScript Logic Explained
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how conditions and logic drive interaction.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/W6NZfCO5SIk"
              title="JavaScript If Else Statements"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Conditions & Decisions
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand how JavaScript makes decisions.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/hdI2bqOjy3c"
              title="JavaScript Mini Projects"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Build Small Interactive Projects
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Apply logic to create real interactive features.
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