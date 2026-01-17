import { useState } from "react";

export default function Weekeight() {
   const [currentTopic, setCurrentTopic] = useState(0);

  return (
    <section className="bg-[#FAF7F2] min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-8">

       {/* HEADER */}
<div className="mb-16">
  <span className="text-sm font-bold uppercase tracking-wide text-red-600">
    Frontend Development · Week 8
  </span>

  <h1 className="text-4xl font-extrabold text-[#0A1F44] mt-4 mb-6">
    React Fundamentals
  </h1>

  <p className="text-gray-700 max-w-3xl leading-relaxed">
    This week introduces you to React, one of the most popular JavaScript
    libraries for building dynamic user interfaces. You’ll learn how to use
    JSX to write HTML-like syntax in JavaScript, create reusable components,
    pass data with props, and structure applications efficiently using
    modern React patterns.
  </p>
</div>

{/* LEARNING OBJECTIVES */}
<div className="bg-white rounded-3xl border p-8 mb-12">
  <h2 className="text-xl font-bold text-[#0A1F44] mb-6">
    What you will learn
  </h2>

  <ul className="space-y-4 text-gray-700">
    <li>— Understanding JSX and how it combines HTML with JavaScript logic</li>
    <li>— Creating and using functional React components</li>
    <li>— Passing and managing data using props</li>
    <li>— Building reusable UI blocks and component hierarchies</li>
    <li>— Structuring a simple React app with clean and maintainable code</li>
  </ul>
</div>
{currentTopic === 0 && (
  <>
    {/* SECTION: UNDERSTANDING JSX */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Understanding JSX and How It Combines HTML with JavaScript Logic
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
          JSX (JavaScript XML) is a syntax extension for JavaScript that allows you
          to write HTML-like code directly within your JavaScript files. It is the
          heart of React because it makes building UI intuitive and visually clear.
        </p>

        <p>
          Unlike plain HTML, JSX lets you embed JavaScript expressions inside curly
          braces <strong>{'{}'}</strong>. This means you can dynamically display values,
          compute expressions, or call functions directly where your UI is rendered.
        </p>

        <p>
          For example, instead of manually updating the DOM using
          <strong>document.createElement</strong> or <strong>innerHTML</strong>,
          JSX lets you declaratively describe your interface in a way that React can
          efficiently update when data changes.
        </p>

        <p>
          JSX is not HTML—it is transpiled into JavaScript by tools like Babel.
          Behind the scenes, every JSX element becomes a <strong>React.createElement</strong>
          call, which produces lightweight JavaScript objects representing the UI.
          This is what makes React fast, dynamic, and easy to maintain.
        </p>

        <p>
          Learning JSX early is essential because it forms the foundation for creating
          components, passing props, handling events, and ultimately building
          reusable and interactive user interfaces in React.
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
// Basic JSX element
const heading = <h1>Welcome to React!</h1>;

// Embedding JavaScript expressions
const name = "Azeez";
const greeting = <p>Hello, {name}!</p>;
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// JSX inside a functional component
function Welcome(props) {
  return <h2>Welcome, {props.name}!</h2>;
}

// Usage
<Welcome name="Azeez" />
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Using expressions inside JSX
const items = ["HTML", "CSS", "JavaScript"];
const list = (
  <ul>
    {items.map(item => <li key={item}>{item}</li>)}
  </ul>
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

        {/* VIDEO 1 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Ke90Tje7VS0"
              title="React JSX Introduction"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              React JSX Introduction
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn the basics of JSX and how it merges HTML with JavaScript.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Dorf8i6lCuk"
              title="JSX Expressions in React"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              JSX Expressions in React
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand how to embed JavaScript expressions directly in JSX.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/yc9AqVTCr_E"
              title="React JSX Best Practices"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              React JSX Best Practices
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Tips for writing clean and efficient JSX in real projects.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}

{currentTopic === 1 && (
  <>
    {/* SECTION: CREATING AND USING FUNCTIONAL REACT COMPONENTS */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Creating and Using Functional React Components
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
          Functional components are the backbone of modern React development. They are
          simple JavaScript functions that return JSX to describe what should appear on
          the screen. Unlike class components, functional components are lightweight,
          easier to read, and allow you to leverage modern React features like hooks.
        </p>

        <p>
          Every component encapsulates a piece of the user interface. This makes your
          UI modular, reusable, and easier to maintain. You can think of each component
          as a building block — like LEGO pieces — that you can combine to build complex
          interfaces without repeating code.
        </p>

        <p>
          Functional components can accept <strong>props</strong>, which are inputs
          passed from parent components. Props allow you to make components dynamic,
          configurable, and reusable across different parts of your application. They
          are read-only, which ensures that components remain predictable and easy to debug.
        </p>

        <p>
          You can also use internal <strong>state</strong> inside functional components
          with the <strong>useState</strong> hook. This allows components to remember
          information, like user input or toggle states, making your UI interactive
          without relying on external variables.
        </p>

        <p>
          Using functional components consistently leads to cleaner, more readable code.
          Each component has a single responsibility, follows a predictable structure,
          and can be tested independently. This is a cornerstone of writing scalable
          React applications.
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
// Basic functional component
function Greeting() {
  return <h1>Hello, welcome to React!</h1>;
}

// Usage
<Greeting />
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Component with props
function Welcome(props) {
  return <p>Hello, {props.name}! Nice to see you.</p>;
}

// Usage
<Welcome name="Azeez" />
<Welcome name="Sara" />
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Using state in functional components
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// Usage
<Counter />
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
              src="https://www.youtube.com/embed/Ke90Tje7VS0"
              title="React Functional Components Basics"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              React Functional Components Basics
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how to define and render functional components in React.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Dorf8i6lCuk"
              title="Passing Props to Components"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Passing Props to Components
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand how to make components reusable and dynamic using props.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/4UZrsTqkcW4"
              title="Using useState in Functional Components"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Using useState in Functional Components
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how to manage component state and make interactive UIs.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}
{currentTopic === 2 && (
  <>
    {/* SECTION: PASSING AND MANAGING DATA USING PROPS */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Passing and Managing Data Using Props
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
          Props, short for properties, are the primary way to pass data from a parent
          component to its child components in React. They allow components to be
          dynamic, flexible, and reusable, so the same component can display different
          content depending on what data is passed to it.
        </p>

        <p>
          Think of props as function parameters. Just like a function takes arguments
          to customize its behavior, a React component receives props to customize
          what it renders. This allows you to build a single component that adapts
          to different situations instead of writing separate components for each case.
        </p>

        <p>
          Props are read-only, meaning a child component cannot modify the data it
          receives directly. This ensures predictable and stable data flow, making
          debugging and reasoning about your UI much easier. If a child needs to
          change data, it should communicate events back to the parent, which can
          then update state and pass new props down.
        </p>

        <p>
          Using props effectively lets you build **component hierarchies** where
          data flows from top to bottom. This is a core concept in React that forms
          the foundation for building interactive applications with clean, maintainable code.
        </p>

        <p>
          Mastering props also prepares you for advanced topics like lifting state
          up, context, and state management libraries. But before diving into those,
          you need to be comfortable passing and using props to render dynamic content.
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
// Passing simple props
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Usage
<Welcome name="Azeez" />
<Welcome name="Sara" />
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Passing multiple props
function ProfileCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Role: {props.role}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

// Usage
<ProfileCard name="Azeez" role="Frontend Developer" age={25} />
<ProfileCard name="Sara" role="Designer" age={28} />
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Passing functions as props
function Button(props) {
  return <button onClick={props.handleClick}>{props.label}</button>;
}

function App() {
  const sayHello = () => alert("Hello from props!");
  
  return <Button label="Click Me" handleClick={sayHello} />;
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
              src="https://www.youtube.com/embed/Dorf8i6lCuk"
              title="React Props Introduction"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              React Props Introduction
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn the fundamentals of passing data to React components using props.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Ke90Tje7VS0"
              title="Using Props in React Components"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Using Props in React Components
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Step-by-step guide on sending data to child components dynamically.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/4UZrsTqkcW4"
              title="React Props and Event Handling"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              React Props and Event Handling
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how to pass functions through props to handle user actions.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}
{currentTopic === 3 && (
  <>
    {/* SECTION: BUILDING REUSABLE UI BLOCKS AND COMPONENT HIERARCHIES */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Building Reusable UI Blocks and Component Hierarchies
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
          One of the most powerful features of React is its ability to create modular,
          reusable components. Instead of writing the same UI elements repeatedly,
          you can build small, self-contained blocks that can be reused across
          your application. This makes your code more maintainable, readable, and
          scalable.
        </p>

        <p>
          Components can be combined to form a <strong>component hierarchy</strong>,
          where parent components hold child components. This allows for structured
          and organized code. Each component focuses on a single responsibility, 
          making it easier to understand, debug, and update without breaking
          other parts of the application.
        </p>

        <p>
          Reusable UI blocks can range from simple elements like buttons and
          input fields to complex cards, lists, and entire sections of a page.
          When building these blocks, it’s important to design them to accept
          props for dynamic content, making them flexible for different contexts.
        </p>

        <p>
          Organizing components hierarchically also promotes <strong>clean
          separation of concerns</strong>. Parent components manage data and logic,
          while child components focus solely on rendering UI. This pattern
          helps you build scalable applications with predictable behavior.
        </p>

        <p>
          Mastering reusable components and hierarchies sets the stage for
          more advanced React topics, like context, hooks, and state management.
          It also ensures that your application is maintainable as it grows.
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
// Simple reusable button component
function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
    >
      {label}
    </button>
  );
}

// Usage
<Button label="Click Me" onClick={() => alert("Button clicked!")} />
<Button label="Submit" onClick={() => console.log("Form submitted!")} />
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Composing components: Card with reusable Button
function Card({ title, description }) {
  return (
    <div className="border rounded-xl p-4 shadow-md">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-gray-700 mt-2">{description}</p>
      <Button label="Learn More" onClick={() => alert(title)} />
    </div>
  );
}

// Usage
<Card title="React Basics" description="Learn the fundamentals of React." />
<Card title="Advanced React" description="Dive deeper into React patterns." />
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Component hierarchy example
function App() {
  const courses = [
    { title: "React Fundamentals", description: "Start learning React!" },
    { title: "React Hooks", description: "State and effects made easy." },
    { title: "Component Patterns", description: "Organize UI effectively." }
  ];

  return (
    <div className="space-y-4">
      {courses.map((course, index) => (
        <Card key={index} title={course.title} description={course.description} />
      ))}
    </div>
  );
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
              src="https://www.youtube.com/embed/Tn6-PIqc4UM"
              title="React Component Composition"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              React Component Composition
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how to build small reusable components and compose them into larger UI.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/4UZrsTqkcW4"
              title="Reusable Components in React"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Reusable Components in React
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Step-by-step guide to designing flexible and reusable UI components.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Ke90Tje7VS0"
              title="React Component Hierarchies"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              React Component Hierarchies
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand parent-child component relationships for structured UI.
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