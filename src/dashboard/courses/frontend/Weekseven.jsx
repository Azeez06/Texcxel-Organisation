import { useState } from "react";

export default function Weekseven() {
   const [currentTopic, setCurrentTopic] = useState(0);

  return (
    <section className="bg-[#FAF7F2] min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-8">

     {/* HEADER */}
<div className="mb-16">
  <span className="text-sm font-bold uppercase tracking-wide text-red-600">
    Frontend Development · Week 7
  </span>

  <h1 className="text-4xl font-extrabold text-[#0A1F44] mt-4 mb-6">
    Modern JavaScript (ES6+)
  </h1>

  <p className="text-gray-700 max-w-3xl leading-relaxed">
    This week focuses on writing cleaner, more powerful, and more maintainable
    JavaScript using modern ES6+ features. You will learn how to simplify
    functions, work efficiently with arrays and objects, organize code using
    modules, and follow clean coding practices used in real-world projects.
  </p>
</div>

{/* LEARNING OBJECTIVES */}
<div className="bg-white rounded-3xl border p-8 mb-12">
  <h2 className="text-xl font-bold text-[#0A1F44] mb-6">
    What you will learn
  </h2>

  <ul className="space-y-4 text-gray-700">
    <li>— Writing concise functions using arrow function syntax</li>
    <li>— Working with modern array methods like map, filter, and reduce</li>
    <li>— Using destructuring and spread operators for cleaner data handling</li>
    <li>— Organizing JavaScript code using ES6 modules (import / export)</li>
    <li>— Writing clean, readable, and maintainable JavaScript code</li>
  </ul>
</div>

{/* WEEK FOCUS TOPICS */}
<div className="bg-white rounded-3xl border p-8 mb-12">
  <h2 className="text-xl font-bold text-[#0A1F44] mb-6">
    Core Topics for This Week
  </h2>

  <ul className="space-y-4 text-gray-700">
    <li>
      — <strong>Arrow Functions:</strong> Shorter function syntax, implicit
      returns, and how arrow functions handle <code>this</code>
    </li>

    <li>
      — <strong>Modern Array Methods:</strong> Using
      <code> map</code>, <code>filter</code>, <code>find</code>, and
      <code>reduce</code> to process data efficiently
    </li>

    <li>
      — <strong>Destructuring & Spread Operator:</strong> Extracting values
      from arrays and objects and copying or merging data cleanly
    </li>

    <li>
      — <strong>JavaScript Modules:</strong> Splitting code into reusable
      files using <code>import</code> and <code>export</code>
    </li>

    <li>
      — <strong>Clean Code Practices:</strong> Naming conventions, avoiding
      repetition, and writing readable logic
    </li>
  </ul>
</div>

{/* WEEK PROJECT */}
<div className="bg-white rounded-3xl border p-8 mb-20">
  <h2 className="text-xl font-bold text-[#0A1F44] mb-6">
    Week 7 Project
  </h2>

  <p className="text-gray-700 leading-relaxed mb-6">
    Build a <strong>Modern JavaScript Task Manager</strong> that demonstrates
    ES6+ features. The project should allow users to add, remove, and filter
    tasks while keeping the code clean and modular.
  </p>

  <ul className="space-y-4 text-gray-700">
    <li>— Use arrow functions throughout the project</li>
    <li>— Manage tasks using array methods like map and filter</li>
    <li>— Use destructuring to work with task data</li>
    <li>— Split logic into separate module files</li>
    <li>— Follow clean code principles for readability</li>
  </ul>
</div>

{currentTopic === 0 && (
  <>
    {/* SECTION: ARROW FUNCTIONS IN MODERN JAVASCRIPT */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Writing Concise Functions Using Arrow Function Syntax
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
          As JavaScript applications grow, functions become one of the most
          frequently written parts of your code. Modern JavaScript (ES6+)
          introduced <strong>arrow functions</strong> to make writing functions
          shorter, cleaner, and easier to read, especially when working with
          callbacks and functional logic.
        </p>

        <p>
          Arrow functions provide a more concise syntax compared to traditional
          function declarations. Instead of using the <strong>function</strong>
          keyword, arrow functions use the <strong>=&gt;</strong> arrow, which
          visually represents the flow from parameters to returned values.
        </p>

        <p>
          One major advantage of arrow functions is how they handle
          <strong> this</strong>. Unlike regular functions, arrow functions do
          not create their own <strong>this</strong> context. Instead, they
          inherit <strong>this</strong> from the surrounding scope, which helps
          prevent common bugs when working with objects and event handlers.
        </p>

        <p>
          Arrow functions are especially useful when working with
          <strong> array methods</strong> like
          <strong> map</strong>, <strong>filter</strong>, and
          <strong> reduce</strong>. They allow you to express logic clearly in
          fewer lines, making your code more readable and expressive.
        </p>

        <p>
          When an arrow function contains only one expression, it can return the
          result implicitly without using the <strong>return</strong> keyword.
          This encourages clean and declarative coding styles that are widely
          used in modern frameworks like React.
        </p>

        <p>
          Mastering arrow functions is an important step toward writing
          professional-level JavaScript. They are not just shorter—they help
          structure logic in a way that is easier to reason about and maintain.
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
// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Arrow function with one parameter
const greet = name => {
  return "Hello, " + name;
};

// Implicit return
const greetShort = name => "Hello, " + name;
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Using arrow functions with array methods
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(doubled);
console.log(evenNumbers);
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
              src="https://www.youtube.com/embed/h33Srr5J9nY"
              title="Arrow Functions Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Arrow Functions Explained
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how arrow functions work and why they are useful.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/6sQDTgOqh-I"
              title="Arrow Functions vs Regular Functions"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Arrow vs Regular Functions
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand syntax differences and how this behaves.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/NIq3qLaHCIs"
              title="Arrow Functions with Array Methods"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Arrow Functions in Practice
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              See arrow functions used with map, filter, and reduce.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}

{currentTopic === 1 && (
  <>
    {/* SECTION: MODERN ARRAY METHODS */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Modern Array Methods: Processing Data with map, filter, find, and reduce
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
          Modern JavaScript applications work heavily with data—lists of users,
          products, messages, transactions, and more. To handle this data
          efficiently and cleanly, JavaScript provides powerful
          <strong> array methods</strong> such as
          <strong> map</strong>, <strong>filter</strong>,
          <strong> find</strong>, and <strong> reduce</strong>.
        </p>

        <p>
          These methods allow you to <strong>transform</strong>,
          <strong> select</strong>, and <strong> summarize</strong> data without
          writing complex loops. Instead of manually iterating with
          <strong> for</strong> loops, you can describe what you want to do in a
          more readable and expressive way.
        </p>

        <p>
          The <strong>map</strong> method is used when you want to transform each
          item in an array into something else. It returns a new array of the
          same length, making it perfect for formatting data, calculating
          values, or preparing data for display in the UI.
        </p>

        <p>
          The <strong>filter</strong> method allows you to extract only the items
          that meet certain conditions. It is commonly used for search,
          category filtering, permissions, and visibility logic in real-world
          applications.
        </p>

        <p>
          The <strong>find</strong> method returns the first item that matches a
          condition. This is useful when you need a single object, such as
          finding a user by ID or selecting a specific product from a list.
        </p>

        <p>
          The <strong>reduce</strong> method is the most powerful and flexible.
          It allows you to combine all values in an array into a single result,
          such as totals, averages, grouped data, or complex calculations.
        </p>

        <p>
          Mastering these array methods is a major step toward writing
          professional, functional-style JavaScript that is easier to read,
          debug, and maintain—especially in frameworks like React.
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
// Using map to transform data
const prices = [100, 200, 300];

const formattedPrices = prices.map(price => {
  return "$" + price;
});

console.log(formattedPrices);
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Using filter to select data
const users = [
  { name: "Azeez", active: true },
  { name: "John", active: false },
  { name: "Sarah", active: true }
];

const activeUsers = users.filter(user => user.active);
console.log(activeUsers);
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Using find to get a single item
const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" }
];

const product = products.find(item => item.id === 2);
console.log(product);
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Using reduce to calculate totals
const cart = [
  { item: "Book", price: 300 },
  { item: "Pen", price: 100 }
];

const total = cart.reduce((sum, current) => {
  return sum + current.price;
}, 0);

console.log(total);
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
              src="https://www.youtube.com/embed/G3BS3sh3D8Q"
              title="JavaScript Array Methods Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              JavaScript Array Methods
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn map, filter, find, and reduce with clear examples.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/4FvJfH7NwOE"
              title="JavaScript Reduce Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Mastering Reduce
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand how reduce works through real-world examples.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/HK4oW1sYq0A"
              title="Array Methods in Real Projects"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Array Methods in Practice
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              See how modern array methods are used in real applications.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}
{currentTopic === 2 && (
  <>
    {/* SECTION: DESTRUCTURING & SPREAD OPERATOR */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Destructuring & Spread Operator: Cleaner Data Handling in Modern JavaScript
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
          As JavaScript applications grow, you often work with complex data
          structures like arrays and objects. Writing repetitive code to access
          values can quickly become messy and hard to maintain. Modern
          JavaScript solves this with <strong>destructuring</strong> and the
          <strong> spread operator</strong>.
        </p>

        <p>
          <strong>Destructuring</strong> allows you to extract values from arrays
          or properties from objects and store them directly in variables. This
          makes your code more readable and eliminates repetitive access
          patterns like <strong>object.property</strong> or
          <strong>array[index]</strong>.
        </p>

        <p>
          Array destructuring works by position, while object destructuring
          works by matching property names. This means you can quickly pull out
          only the data you need, rename variables, and even assign default
          values—all in a single line of code.
        </p>

        <p>
          The <strong>spread operator (...)</strong> is used to copy, merge, or
          expand arrays and objects. Instead of mutating existing data, spread
          helps you create <strong>new copies</strong>, which is essential for
          predictable behavior in modern applications, especially when working
          with state in frameworks like React.
        </p>

        <p>
          Together, destructuring and spread promote
          <strong> immutability</strong>, cleaner logic, and fewer bugs. They are
          heavily used in modern JavaScript, APIs, component props, and state
          management patterns.
        </p>

        <p>
          Mastering these features makes your code more expressive and prepares
          you for advanced concepts like functional programming and modern
          frontend frameworks.
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
// Array destructuring
const skills = ["HTML", "CSS", "JavaScript"];

const [firstSkill, secondSkill] = skills;

console.log(firstSkill);
console.log(secondSkill);
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Object destructuring
const user = {
  name: "Azeez",
  role: "Frontend Developer",
  active: true
};

const { name, role } = user;
console.log(name, role);
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Renaming and default values
const product = {
  title: "Laptop",
  price: 250000
};

const { title: productName, discount = 0 } = product;
console.log(productName, discount);
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Spread operator with arrays
const frontend = ["HTML", "CSS"];
const backend = ["Node.js", "MongoDB"];

const fullstack = [...frontend, "JavaScript", ...backend];
console.log(fullstack);
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Spread operator with objects
const settings = {
  theme: "dark",
  language: "en"
};

const updatedSettings = {
  ...settings,
  theme: "light"
};

console.log(updatedSettings);
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
              src="https://www.youtube.com/embed/NIq3qLaHCIs"
              title="JavaScript Destructuring Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              JavaScript Destructuring
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how to extract values from arrays and objects cleanly.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/iLx4ma8ZqvQ"
              title="Spread Operator Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Spread Operator Explained
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand how spread works for copying and merging data.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/7RkX7wUO6FI"
              title="Destructuring & Spread in Real Projects"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Destructuring in Practice
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              See how destructuring and spread are used in modern applications.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}
{currentTopic === 3 && (
  <>
    {/* SECTION: JAVASCRIPT MODULES */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        JavaScript Modules: Splitting Code into Reusable Files
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
          As your JavaScript applications grow, keeping all code in a single
          file quickly becomes messy, hard to debug, and difficult to maintain.
          ES6 introduced <strong>modules</strong>, a powerful way to split your
          code into separate files that can be imported and exported as needed.
        </p>

        <p>
          A <strong>module</strong> is simply a JavaScript file that can
          <strong> export</strong> variables, functions, or classes so other
          files can <strong>import</strong> and use them. This makes your code
          modular, reusable, and easier to test.
        </p>

        <p>
          Using modules promotes <strong>clean architecture</strong> by separating
          concerns. For example, you can have a module for handling API calls,
          another for utility functions, and another for UI logic. This keeps
          each part of your app focused, readable, and maintainable.
        </p>

        <p>
          Modules can export multiple things using named exports, or a single
          default export. Named exports allow you to selectively import only
          what you need, while default exports provide a convenient single
          entry point. Combined with import statements, this makes code sharing
          across projects straightforward.
        </p>

        <p>
          Modern frameworks like React, Vue, and Angular heavily rely on modules.
          Even Node.js projects now support ES6 modules. Understanding how to
          split, import, and export code is essential for professional JavaScript
          development.
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
// utils.js
export function greet(name) {
  return "Hello, " + name + "!";
}

export const PI = 3.14159;
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// main.js
import { greet, PI } from "./utils.js";

console.log(greet("Azeez"));
console.log("Value of PI:", PI);
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// default export
// math.js
export default function square(x) {
  return x * x;
}

// usage
import square from "./math.js";
console.log(square(5)); // 25
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Combining named and default exports
// shapes.js
export const circle = (r) => 3.14 * r * r;
export default function rectangle(l, w) {
  return l * w;
}

// usage
import rectangle, { circle } from "./shapes.js";
console.log(rectangle(5, 10));
console.log(circle(7));
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
              src="https://www.youtube.com/embed/cRHQNNcYf6s"
              title="JavaScript Modules Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              JavaScript Modules
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn the basics of import and export in modern JavaScript.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/4uG1NMKNWCU"
              title="Named vs Default Exports"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Named vs Default Exports
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand the difference between default and named exports.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/PfYPi-J_1Ng"
              title="Modular JavaScript Projects"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Modular JavaScript Projects
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              See how modules help organize real-world JavaScript applications.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}
{currentTopic === 4 && (
  <>
    {/* SECTION: CLEAN CODE PRACTICES */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Writing Clean, Readable, and Maintainable JavaScript
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
          As your projects grow, writing JavaScript that is messy, inconsistent,
          or full of repetition can quickly lead to bugs and frustration. Clean
          code is not just about making your programs work—it’s about making them
          understandable, maintainable, and scalable.
        </p>

        <p>
          One of the key principles is using <strong>descriptive naming conventions</strong>.
          Variables, functions, and classes should clearly describe what they
          represent or do. Avoid vague names like <strong>x</strong> or <strong>data</strong>
          when <strong>userCount</strong> or <strong>calculateTotal</strong> communicates much more.
        </p>

        <p>
          Another critical aspect is <strong>avoiding repetition</strong>. Repeated
          code not only makes files longer but also increases the chances of
          mistakes. Using functions, modules, and reusable components ensures
          that changes only need to happen in one place.
        </p>

        <p>
          Structuring your code in logical, modular chunks improves readability.
          This means grouping related functions together, keeping functions small
          and focused, and using ES6 modules to separate concerns. Consistent
          indentation, spacing, and commenting also help others—and your future
          self—understand the logic quickly.
        </p>

        <p>
          Finally, modern JavaScript features like arrow functions, template literals,
          destructuring, and the spread operator are not just convenient—they can
          make code more expressive and readable when used appropriately.
        </p>

        <p>
          Following clean code practices reduces technical debt, eases collaboration,
          and ensures your projects remain maintainable even as they scale.
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
// Descriptive variable names
const userCount = 5;
const totalPrice = 2500;

// Instead of vague names
// let x = 5;
// let y = 2500;
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Avoiding repetition with functions
function calculateArea(width, height) {
  return width * height;
}

const rectangleArea = calculateArea(5, 10);
const squareArea = calculateArea(8, 8);
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Using ES6 features for cleaner code
const user = { name: "Azeez", role: "Frontend Developer" };
const { name, role } = user; // Destructuring
console.log(\`Name: \${name}, Role: \${role}\`);
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Arrow functions for concise logic
const greet = (name) => \`Hello, \${name}!\`;
console.log(greet("Azeez"));
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
              src="https://www.youtube.com/embed/Pf-X35lsjDc"
              title="Clean JavaScript Code Practices"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Clean JavaScript Code
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn principles for writing readable and maintainable JavaScript.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/4dFSSaYlrxk"
              title="Writing Readable JS Code"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Writing Readable JS Code
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Tips for naming conventions, modularity, and avoiding repetition.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/eLnxP4Q3Cj0"
              title="Modern JS Best Practices"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Modern JS Best Practices
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              How to write maintainable, modular, and professional JavaScript.
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