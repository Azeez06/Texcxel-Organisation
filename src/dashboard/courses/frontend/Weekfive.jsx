import { useState } from "react";

export default function Weekfive() {
   const [currentTopic, setCurrentTopic] = useState(0);

  return (
    <section className="bg-[#FAF7F2] min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-8">
{/* HEADER */}
<div className="mb-16">
  <span className="text-sm font-bold uppercase tracking-wide text-red-600">
    Frontend Development · Week 5
  </span>

  <h1 className="text-4xl font-extrabold text-[#0A1F44] mt-4 mb-6">
    JavaScript Fundamentals
  </h1>

  <p className="text-gray-700 max-w-3xl leading-relaxed">
    This week marks your transition from building static interfaces to
    creating dynamic, interactive experiences. You’ll learn the core
    principles of JavaScript — the language that gives websites logic,
    behavior, and intelligence.
  </p>
</div>

{/* LEARNING OBJECTIVES */}
<div className="bg-white rounded-3xl border p-8 mb-12">
  <h2 className="text-xl font-bold text-[#0A1F44] mb-6">
    What you will learn
  </h2>

  <ul className="space-y-4 text-gray-700">
    <li>— What JavaScript is and how it runs in the browser</li>
    <li>— Variables, data types, and storing information</li>
    <li>— Making decisions with conditions (if, else, switch)</li>
    <li>— Repeating tasks using loops</li>
    <li>— Writing reusable code with functions</li>
    <li>— Thinking logically to solve programming problems</li>
  </ul>
</div>
{currentTopic === 0 && (
  <>
    {/* SECTION: WHAT JAVASCRIPT IS & HOW IT WORKS */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        What JavaScript Is and How It Works with HTML
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
          JavaScript is the programming language that brings life and behavior
          to websites. While HTML structures content and CSS styles it,
          JavaScript controls how a webpage behaves, reacts, and responds to
          user actions. Without JavaScript, websites would be static and
          unresponsive.
        </p>

        <p>
          When a webpage loads in the browser, the browser reads the HTML first
          to understand the structure of the page. It then applies CSS to style
          the content. Finally, JavaScript runs to add logic and interactivity,
          such as responding to button clicks, validating forms, or updating
          content without reloading the page.
        </p>

        <p>
          JavaScript works closely with HTML through the
          <strong> Document Object Model (DOM)</strong>. The DOM is a
          representation of the webpage that JavaScript can read and modify.
          This means JavaScript can change text, hide or show elements, update
          styles, and even create new elements dynamically.
        </p>

        <p>
          JavaScript runs directly in the browser using a built-in JavaScript
          engine. This allows code to execute instantly as users interact with
          the page. Modern browsers like Chrome, Firefox, and Edge all support
          JavaScript natively, making it a universal language for web
          development.
        </p>

        <p>
          In real-world applications, JavaScript is used for tasks such as form
          validation, interactive menus, sliders, popups, calculators, and
          fetching data from servers. As you progress, JavaScript becomes the
          foundation for building fully interactive web applications.
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
              src="https://www.youtube.com/embed/W6NZfCO5SIk"
              title="JavaScript in 5 Minutes"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              JavaScript Explained Simply
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              A quick and clear introduction to what JavaScript is and why it
              matters.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/hdI2bqOjy3c"
              title="JavaScript for Beginners"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              JavaScript for Beginners
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand how JavaScript fits into HTML and CSS.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/lkIFF4maKMU"
              title="How JavaScript Works with HTML"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              JavaScript & the DOM
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how JavaScript interacts with HTML elements on a page.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}

{currentTopic === 1 && (
  <>
    {/* SECTION: VARIABLES, DATA TYPES & STORING INFORMATION */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Variables, Data Types, and Storing Information
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
          In programming, information needs to be stored so it can be used,
          updated, and reused. JavaScript does this using
          <strong> variables</strong>. A variable is like a labeled container
          that holds a value, such as a name, number, or result of a calculation.
        </p>

        <p>
          JavaScript provides three main ways to create variables:
          <strong> let</strong>, <strong> const</strong>, and
          <strong> var</strong>. In modern JavaScript, <strong>let</strong> and
          <strong>const</strong> are preferred because they are safer and more
          predictable. You will mostly use these two.
        </p>

        <p>
          <strong>let</strong> is used when the value stored in a variable may
          change over time. For example, a user’s score, age, or number of
          clicks can change while the program is running.
        </p>

        <p>
          <strong>const</strong> is used when the value should never change.
          Examples include fixed settings, configuration values, or constants
          like a website name or maximum allowed value.
        </p>

        <p>
          Every variable stores a specific type of data. These are called
          <strong> data types</strong>. Understanding data types helps you avoid
          errors and write logic that behaves correctly.
        </p>

        <p>
          Common JavaScript data types include
          <strong> strings</strong> (text),
          <strong> numbers</strong> (numeric values),
          <strong> booleans</strong> (true or false),
          <strong> arrays</strong> (lists of values), and
          <strong> objects</strong> (collections of related data).
        </p>

        <p>
          In real applications, variables store user input, track application
          state, calculate values, and control decision-making. Mastering
          variables and data types is essential before moving into conditions,
          loops, and functions.
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
// Using let (value can change)
let score = 10;
score = 15;

// Using const (value cannot change)
const siteName = "TechcXel";
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Common data types
let userName = "Azeez";     // String
let age = 25;              // Number
let isLoggedIn = true;     // Boolean
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Arrays and objects
let skills = ["HTML", "CSS", "JavaScript"];

let user = {
  name: "Azeez",
  role: "Frontend Developer",
  active: true
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
              src="https://www.youtube.com/embed/9emXNzqCKyg"
              title="JavaScript Variables Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              JavaScript Variables Explained
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how variables work and when to use let or const.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/ysEN5RaKOlA"
              title="JavaScript Data Types"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              JavaScript Data Types
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand strings, numbers, booleans, arrays, and objects.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/4W6VwVhJpXw"
              title="Let vs Const in JavaScript"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              let vs const
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn the difference and best practices for modern JavaScript.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}
{currentTopic === 2 && (
  <>
    {/* SECTION: CONDITIONS & CONTROL FLOW */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Conditions & Control Flow
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
          In real life, decisions are made based on conditions. For example,
          <em> if it rains, you take an umbrella</em>. JavaScript works the same
          way. Conditional statements allow your program to make decisions and
          execute different actions based on different situations.
        </p>

        <p>
          <strong>Control flow</strong> refers to the order in which code runs.
          Without conditions, JavaScript would execute every line from top to
          bottom without thinking. Conditions introduce logic and intelligence
          into your programs.
        </p>

        <p>
          The most common conditional statement is <strong>if</strong>. It checks
          whether a condition is true. If it is, the code inside the block runs.
          If it is not, JavaScript skips it.
        </p>

        <p>
          When there are multiple possible outcomes, we use
          <strong> else if</strong> and <strong>else</strong>. This allows us to
          test several conditions and run the correct block of code.
        </p>

        <p>
          For situations where one value can have many fixed options (like days
          of the week or user roles), the <strong>switch</strong> statement is
          cleaner and easier to read than many <strong>if...else</strong>
          statements.
        </p>

        <p>
          Conditions are essential in form validation, authentication, game
          logic, dashboards, e-commerce pricing, and almost every interactive
          website or application.
        </p>

      </div>
    </div>

    {/* PRACTICAL EXAMPLES */}
    <div className="mb-20">

      <h3 className="text-xl font-bold text-[#0A1F44] mb-6">
        Practical Examples
      </h3>

      <div className="space-y-8 text-gray-700">

        {/* IF STATEMENT */}
        <div>
          <p className="mb-3">
            <strong>Basic if statement:</strong> Check if a user is old enough.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
let age = 20;

if (age >= 18) {
  console.log("Access granted");
}
            `}</code>
          </pre>
        </div>

        {/* IF ELSE */}
        <div>
          <p className="mb-3">
            <strong>if...else:</strong> Decide between two outcomes.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
let balance = 500;

if (balance > 1000) {
  console.log("You can make a large purchase");
} else {
  console.log("Insufficient balance");
}
            `}</code>
          </pre>
        </div>

        {/* ELSE IF */}
        <div>
          <p className="mb-3">
            <strong>else if:</strong> Handle multiple conditions.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
let score = 75;

if (score >= 70) {
  console.log("Excellent");
} else if (score >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}
            `}</code>
          </pre>
        </div>

        {/* SWITCH */}
        <div>
          <p className="mb-3">
            <strong>switch statement:</strong> Best for fixed values.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("Weekend is near");
    break;
  default:
    console.log("Regular day");
}
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
              title="JavaScript If Else Statements"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              JavaScript if & else
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how JavaScript makes decisions using conditions.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/0xKq8rGqG4A"
              title="JavaScript Conditional Statements"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Conditional Logic Explained
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand how logic flows in JavaScript programs.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/ti8v4hZ6A2I"
              title="JavaScript Switch Statement"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Switch Statements
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn when and how to use switch instead of if-else.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}
{currentTopic === 3 && (
  <>
    {/* SECTION: REPEATING TASKS USING LOOPS */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Repeating Tasks Using Loops
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
          In programming, repetition is unavoidable. Imagine having to display
          100 student names, calculate results for 1,000 users, or check items
          in a shopping cart one by one. Writing the same code repeatedly would
          be inefficient, error-prone, and unprofessional.
        </p>

        <p>
          <strong>Loops</strong> allow JavaScript to repeat a block of code
          automatically until a condition is met. Instead of writing the same
          instruction many times, you tell JavaScript <em>how many times</em>
          or <em>under what condition</em> the task should repeat.
        </p>

        <p>
          Every loop follows three core ideas:
          <strong> a starting point</strong>,
          <strong> a condition</strong>, and
          <strong> an update</strong>. Together, these control when the loop
          starts, when it continues, and when it stops.
        </p>

        <p>
          JavaScript provides different types of loops because repetition can
          happen in different ways. Some loops run a fixed number of times,
          while others run until a condition becomes false.
        </p>

        <p>
          Loops are heavily used in real applications for rendering lists,
          processing data, validating inputs, animations, game logic, and
          handling API responses.
        </p>

      </div>
    </div>

    {/* PRACTICAL EXAMPLES */}
    <div className="mb-20">

      <h3 className="text-xl font-bold text-[#0A1F44] mb-6">
        Practical Examples
      </h3>

      <div className="space-y-10 text-gray-700">

        {/* FOR LOOP */}
        <div>
          <p className="mb-3">
            <strong>for loop:</strong> Best when you know how many times to
            repeat a task.
          </p>

          <p className="mb-4">
            Example: Display numbers from 1 to 5.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
for (let i = 1; i <= 5; i++) {
  console.log("Number:", i);
}
            `}</code>
          </pre>

          <p className="mt-3 text-sm text-gray-600">
            JavaScript starts at 1, checks the condition, runs the code, then
            increases the value until the condition fails.
          </p>
        </div>

        {/* REAL-LIFE FOR LOOP */}
        <div>
          <p className="mb-3">
            <strong>Real-life use:</strong> Calculating student scores.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
let scores = [60, 75, 90, 45];

for (let i = 0; i < scores.length; i++) {
  console.log("Score:", scores[i]);
}
            `}</code>
          </pre>
        </div>

        {/* WHILE LOOP */}
        <div>
          <p className="mb-3">
            <strong>while loop:</strong> Runs as long as a condition remains
            true.
          </p>

          <p className="mb-4">
            Example: Countdown timer.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
let countdown = 5;

while (countdown > 0) {
  console.log("Countdown:", countdown);
  countdown--;
}
            `}</code>
          </pre>

          <p className="mt-3 text-sm text-gray-600">
            The loop stops automatically once the condition becomes false.
          </p>
        </div>

        {/* DO WHILE */}
        <div>
          <p className="mb-3">
            <strong>do...while loop:</strong> Runs at least once, no matter what.
          </p>

          <p className="mb-4">
            Example: Asking a user to try again.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
let attempts = 1;

do {
  console.log("Attempt number:", attempts);
  attempts++;
} while (attempts <= 3);
            `}</code>
          </pre>

          <p className="mt-3 text-sm text-gray-600">
            The code runs first, then the condition is checked.
          </p>
        </div>

        {/* BREAK & CONTINUE */}
        <div>
          <p className="mb-3">
            <strong>break & continue:</strong> Control loop behavior.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // skip number 3
  }

  if (i === 5) {
    break; // stop the loop completely
  }

  console.log(i);
}
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
              src="https://www.youtube.com/embed/s9wW2PpJsmQ"
              title="JavaScript Loops Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              JavaScript Loops Explained
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand how loops work with real examples.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Kn06785pkJg"
              title="For and While Loops"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              For & While Loops
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn when to use different loop types.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/7Tztr5F9W3E"
              title="JavaScript Loop Control"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Loop Control (break & continue)
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how to control loop flow effectively.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}
{currentTopic === 4 && (
  <>
    {/* SECTION: WRITING REUSABLE CODE WITH FUNCTIONS */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Writing Reusable Code with Functions
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
          As applications grow, repeating the same logic in multiple places
          quickly becomes a problem. If you ever find yourself copying and
          pasting the same code again and again, that is a strong signal that
          you need a function.
        </p>

        <p>
          A <strong>function</strong> is a reusable block of code designed to
          perform a specific task. Instead of rewriting instructions, you give
          them a name and reuse them whenever needed. This makes your code
          cleaner, shorter, and easier to maintain.
        </p>

        <p>
          Functions help organize your code into logical units. Each function
          should ideally do one thing and do it well. This separation of
          concerns makes debugging, testing, and collaboration much easier.
        </p>

        <p>
          In real-world projects, functions power almost everything: handling
          user actions, validating forms, processing data, fetching API
          responses, and updating the UI.
        </p>

        <p>
          JavaScript offers multiple ways to create functions, but the goal is
          always the same: write logic once and reuse it everywhere.
        </p>

      </div>
    </div>

    {/* PRACTICAL EXAMPLES */}
    <div className="mb-20">

      <h3 className="text-xl font-bold text-[#0A1F44] mb-6">
        Practical Examples
      </h3>

      <div className="space-y-10 text-gray-700">

        {/* BASIC FUNCTION */}
        <div>
          <p className="mb-3">
            <strong>Basic function:</strong> A simple reusable task.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
function greetUser(name) {
  console.log("Hello, " + name + "!");
}

greetUser("Azeez");
greetUser("Fatima");
            `}</code>
          </pre>

          <p className="mt-3 text-sm text-gray-600">
            The function is written once and reused with different values.
          </p>
        </div>

        {/* FUNCTION WITH RETURN */}
        <div>
          <p className="mb-3">
            <strong>Returning values:</strong> Functions can send results back.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
function addNumbers(a, b) {
  return a + b;
}

let total = addNumbers(5, 10);
console.log(total);
            `}</code>
          </pre>

          <p className="mt-3 text-sm text-gray-600">
            The <strong>return</strong> keyword sends the result back to where
            the function was called.
          </p>
        </div>

        {/* REAL-WORLD EXAMPLE */}
        <div>
          <p className="mb-3">
            <strong>Real-world example:</strong> Calculating student grades.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
function calculateGrade(score) {
  if (score >= 70) {
    return "A";
  } else if (score >= 60) {
    return "B";
  } else if (score >= 50) {
    return "C";
  } else {
    return "F";
  }
}

console.log(calculateGrade(85));
console.log(calculateGrade(62));
console.log(calculateGrade(40));
            `}</code>
          </pre>
        </div>

        {/* FUNCTION EXPRESSIONS */}
        <div>
          <p className="mb-3">
            <strong>Function expressions:</strong> Functions stored in variables.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
const multiply = function (x, y) {
  return x * y;
};

console.log(multiply(4, 5));
            `}</code>
          </pre>
        </div>

        {/* ARROW FUNCTIONS */}
        <div>
          <p className="mb-3">
            <strong>Arrow functions:</strong> Modern and concise syntax.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
const subtract = (a, b) => a - b;

console.log(subtract(10, 3));
            `}</code>
          </pre>

          <p className="mt-3 text-sm text-gray-600">
            Arrow functions are widely used in modern JavaScript and frameworks
            like React.
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
              src="https://www.youtube.com/embed/N8ap4k_1QEQ"
              title="JavaScript Functions Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              JavaScript Functions Explained
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how functions work with clear examples.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/4lPjMwK4bJk"
              title="Arrow Functions in JavaScript"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Arrow Functions
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Master modern function syntax.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/xUI5Tsl2JpY"
              title="Why Functions Matter"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Why Functions Matter
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand how functions scale real applications.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}
 {currentTopic === 5 && (
  <>
    {/* SECTION: BASIC JAVASCRIPT LOGIC */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Basic JavaScript Logic (Conditions + Functions Together)
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
          Logic is the heart of programming. While variables store information
          and functions organize code, logic is what allows your program to
          <strong> think, decide, and respond</strong>. In JavaScript, logic is
          built by combining <strong>conditions</strong> with
          <strong> functions</strong>.
        </p>

        <p>
          Conditions allow your program to make decisions based on certain
          rules. Functions then wrap those decisions into reusable blocks. When
          combined, they allow you to build intelligent behavior such as
          validating inputs, controlling access, reacting to user actions, and
          updating interfaces dynamically.
        </p>

        <p>
          In real-world applications, almost every feature relies on logic.
          Whether it is checking if a user is logged in, calculating a price,
          or displaying an error message, conditions and functions work
          together behind the scenes.
        </p>

        <p>
          The most common conditional structure in JavaScript is the
          <strong> if / else</strong> statement. It evaluates a condition and
          executes code based on whether that condition is true or false.
        </p>

        <p>
          When conditions are placed inside functions, your logic becomes
          reusable, readable, and scalable. This approach is how professional
          developers structure application behavior.
        </p>

      </div>
    </div>

    {/* PRACTICAL EXAMPLES */}
    <div className="mb-20">

      <h3 className="text-xl font-bold text-[#0A1F44] mb-6">
        Practical Examples
      </h3>

      <div className="space-y-10 text-gray-700">

        {/* SIMPLE CONDITIONAL FUNCTION */}
        <div>
          <p className="mb-3">
            <strong>Example 1:</strong> Checking if a user is allowed access.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
function checkAccess(age) {
  if (age >= 18) {
    return "Access granted";
  } else {
    return "Access denied";
  }
}

console.log(checkAccess(20));
console.log(checkAccess(15));
            `}</code>
          </pre>

          <p className="mt-3 text-sm text-gray-600">
            The function decides what message to return based on the condition.
          </p>
        </div>

        {/* MULTIPLE CONDITIONS */}
        <div>
          <p className="mb-3">
            <strong>Example 2:</strong> Evaluating exam results.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
function evaluateResult(score) {
  if (score >= 70) {
    return "Excellent";
  } else if (score >= 50) {
    return "Pass";
  } else {
    return "Fail";
  }
}

console.log(evaluateResult(85));
console.log(evaluateResult(60));
console.log(evaluateResult(42));
            `}</code>
          </pre>
        </div>

        {/* BOOLEAN LOGIC */}
        <div>
          <p className="mb-3">
            <strong>Example 3:</strong> Using logical operators.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
function canVote(age, isCitizen) {
  if (age >= 18 && isCitizen) {
    return "Eligible to vote";
  } else {
    return "Not eligible to vote";
  }
}

console.log(canVote(22, true));
console.log(canVote(22, false));
            `}</code>
          </pre>
        </div>

        {/* REAL UI LOGIC */}
        <div>
          <p className="mb-3">
            <strong>Example 4:</strong> UI-related logic.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
function getButtonText(isLoggedIn) {
  if (isLoggedIn) {
    return "Logout";
  } else {
    return "Login";
  }
}

console.log(getButtonText(true));
console.log(getButtonText(false));
            `}</code>
          </pre>

          <p className="mt-3 text-sm text-gray-600">
            This type of logic is commonly used in frontend frameworks like
            React.
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
              src="https://www.youtube.com/embed/IsG4Xd6LlsM"
              title="JavaScript If Else Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              JavaScript If / Else Logic
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how JavaScript makes decisions.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/W6NZfCO5SIk"
              title="Functions and Conditions"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Functions + Conditions
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              See how logic is structured in real programs.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/8aGhZQkoFbQ"
              title="Thinking Like a Programmer"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Thinking Like a Programmer
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how developers combine logic to solve problems.
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