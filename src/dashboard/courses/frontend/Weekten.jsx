import { useState } from "react";

export default function Weekten() {
   const [currentTopic, setCurrentTopic] = useState(0);

  return (
    <section className="bg-[#FAF7F2] min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-8">

      {/* HEADER */}
<div className="mb-16">
  <span className="text-sm font-bold uppercase tracking-wide text-red-600">
    Frontend Development · Week 10
  </span>

  <h1 className="text-4xl font-extrabold text-[#0A1F44] mt-4 mb-6">
    Tailwind CSS & UI Systems
  </h1>

  <p className="text-gray-700 max-w-3xl leading-relaxed">
    This week focuses on building fast, responsive, and visually appealing interfaces using Tailwind CSS. You’ll explore modern UI patterns, utility-first styling, and component-based layouts to create professional-grade web pages quickly and efficiently.
  </p>
</div>

{/* LEARNING OBJECTIVES */}
<div className="bg-white rounded-3xl border p-8 mb-12">
  <h2 className="text-xl font-bold text-[#0A1F44] mb-6">
    What you will learn
  </h2>

  <ul className="space-y-4 text-gray-700">
    <li>— Using Tailwind CSS utility classes for rapid and responsive styling</li>
    <li>— Designing modern UI components like cards, buttons, modals, and forms</li>
    <li>— Implementing layout patterns with Flexbox and CSS Grid in Tailwind</li>
    <li>— Creating scalable and reusable UI blocks for consistency across pages</li>
    <li>— Applying modern design principles and best practices to build professional interfaces</li>
  </ul>
</div>
{currentTopic === 0 && (
  <>
    {/* SECTION: USING TAILWIND CSS UTILITY CLASSES */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Using Tailwind CSS Utility Classes for Rapid and Responsive Styling
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          Tailwind CSS revolutionizes how we style websites. Instead of writing long, repetitive CSS rules, you apply <strong>utility classes</strong> directly to HTML elements. Each utility class represents a single styling property, like margin, padding, color, or typography. This approach allows developers to quickly prototype and build complex layouts without leaving the HTML.
        </p>

        <p>
          One of Tailwind’s most powerful features is its <strong>responsive design utilities</strong>. By adding prefixes like <code>sm:</code>, <code>md:</code>, <code>lg:</code>, and <code>xl:</code>, you can control how elements behave at different screen sizes. This makes building mobile-first, fully responsive interfaces incredibly fast and intuitive.
        </p>

        <p>
          Tailwind also encourages <strong>consistency</strong> across your projects. By using utility classes from the configuration file, colors, spacing, and fonts remain standardized, reducing the risk of inconsistent design. Additionally, it encourages clean HTML structure without bloated CSS files, improving maintainability and performance.
        </p>

        <p>
          Mastering Tailwind utilities means you can rapidly iterate on designs, implement modern UI patterns, and maintain responsive layouts effortlessly. The more you practice, the more intuitive it becomes to combine utilities for complex designs.
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
// A responsive button
<button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
  Click Me
</button>
            `}</code>
          </pre>
          <p className="mt-2 text-sm">
            This button uses Tailwind utilities for background color, hover effects, padding, rounded corners, and smooth transitions—all inline without writing separate CSS.
          </p>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// A responsive card layout
<div className="bg-white shadow-lg rounded-2xl p-6 max-w-sm mx-auto sm:max-w-md lg:max-w-lg">
  <h3 className="text-xl font-bold text-gray-800 mb-4">Card Title</h3>
  <p className="text-gray-600">This is a responsive card using Tailwind utilities for padding, shadow, typography, and width.</p>
</div>
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Responsive grid layout
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  <div className="bg-blue-100 p-4 rounded-lg">Item 1</div>
  <div className="bg-blue-200 p-4 rounded-lg">Item 2</div>
  <div className="bg-blue-300 p-4 rounded-lg">Item 3</div>
</div>
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
              src="https://www.youtube.com/embed/dFgzHOX84xQ"
              title="Tailwind CSS Crash Course"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Tailwind CSS Crash Course
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn Tailwind basics, utility classes, and responsive styling.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/pfaSUYaSgRo"
              title="Responsive Design with Tailwind CSS"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Responsive Design with Tailwind
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how to make layouts adapt to all screen sizes using Tailwind.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/UBOj6rqRUME"
              title="Tailwind CSS Utility-First Approach"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Tailwind Utility-First Approach
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand how utility-first CSS lets you rapidly style and iterate.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}
{currentTopic === 1 && (
  <>
    {/* SECTION: DESIGNING MODERN UI COMPONENTS */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Designing Modern UI Components: Cards, Buttons, Modals, and Forms
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          Modern web interfaces rely on reusable, visually appealing UI components. Components such as <strong>cards, buttons, modals, and forms</strong> provide structure, consistency, and interactivity across applications. Tailwind CSS makes designing these components fast, flexible, and maintainable by using utility classes.
        </p>

        <p>
          <strong>Cards</strong> are versatile containers for content like images, text, and actions. Tailwind lets you control spacing, borders, shadows, and typography directly in the HTML. You can easily create responsive cards that adapt to any screen size without writing additional CSS.
        </p>

        <p>
          <strong>Buttons</strong> are essential for interactions. With Tailwind, you can create hover effects, focus states, rounded corners, and transitions—all inline. This allows you to build consistent and interactive buttons that align with your design system.
        </p>

        <p>
          <strong>Modals</strong> provide a way to display content overlays, alerts, or forms without navigating away from the page. Tailwind utilities make positioning, background overlays, and animations simple, letting you focus on functionality rather than CSS complexities.
        </p>

        <p>
          <strong>Forms</strong> are key to collecting user input. Tailwind allows you to style inputs, selects, checkboxes, and buttons consistently. You can easily apply spacing, typography, and focus effects to create clean, modern forms that are user-friendly and accessible.
        </p>

        <p>
          Learning to design these components with Tailwind empowers you to build professional-grade, reusable UI blocks quickly, improving both development speed and user experience.
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
// Card component
<div className="bg-white shadow-lg rounded-2xl p-6 max-w-sm mx-auto hover:shadow-xl transition">
  <img src="https://via.placeholder.com/300x150" alt="Card image" className="rounded-xl mb-4" />
  <h3 className="text-xl font-bold mb-2">Card Title</h3>
  <p className="text-gray-600 mb-4">This is a modern card component styled using Tailwind utilities.</p>
  <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition">Action</button>
</div>
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Modal component
<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
  <div className="bg-white p-6 rounded-2xl max-w-md w-full shadow-lg">
    <h3 className="text-xl font-bold mb-4">Modal Title</h3>
    <p className="text-gray-600 mb-6">This modal is centered and styled with Tailwind utilities for spacing, shadows, and rounded corners.</p>
    <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition">Close</button>
  </div>
</div>
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Form component
<form className="bg-white shadow-md rounded-2xl p-6 max-w-md mx-auto space-y-4">
  <input type="text" placeholder="Name" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
  <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
  <textarea placeholder="Message" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"></textarea>
  <button className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg w-full transition">Submit</button>
</form>
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
              src="https://www.youtube.com/embed/m5bwq7-OXco"
              title="Tailwind UI Components"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Tailwind UI Components
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how to build cards, buttons, modals, and forms efficiently with Tailwind.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/qw1d1s2WzKM"
              title="Modern UI Patterns in Tailwind"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Modern UI Patterns in Tailwind
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Explore reusable UI blocks and design patterns using Tailwind utilities.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/UBOj6rqRUME"
              title="Tailwind Components Tutorial"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Tailwind Components Tutorial
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Step-by-step guide to creating modern UI components quickly.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}
{currentTopic === 2 && (
  <>
    {/* SECTION: LAYOUT PATTERNS WITH FLEXBOX & CSS GRID */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Implementing Layout Patterns with Flexbox & CSS Grid in Tailwind
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          Modern web design requires flexible and responsive layouts that adapt to different screen sizes. Tailwind CSS provides utility classes for <strong>Flexbox</strong> and <strong>CSS Grid</strong>, allowing you to create complex layouts without writing custom CSS. Understanding these tools is key to building clean, efficient UI systems.
        </p>

        <p>
          <strong>Flexbox</strong> is ideal for one-dimensional layouts, either in a row or column. Tailwind makes it easy to align items, distribute space, wrap elements, and create responsive arrangements. With utilities like <code>flex</code>, <code>justify-between</code>, <code>items-center</code>, and <code>flex-wrap</code>, you can build dynamic layouts that adapt automatically.
        </p>

        <p>
          <strong>CSS Grid</strong> is perfect for two-dimensional layouts, controlling both rows and columns simultaneously. Tailwind provides utilities like <code>grid</code>, <code>grid-cols-3</code>, <code>gap-4</code>, and <code>col-span-2</code> to quickly structure your page. You can create card grids, feature sections, or dashboards without writing a single custom CSS rule.
        </p>

        <p>
          By combining Flexbox and Grid utilities, you can build responsive, well-structured interfaces with minimal effort. These tools let you focus on the design and user experience rather than repetitive CSS syntax.
        </p>

        <p>
          Mastering layout patterns with Tailwind ensures your websites look professional, scale easily, and maintain consistent spacing, alignment, and responsiveness across all devices.
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
// Flexbox example: Navigation bar
<nav className="flex justify-between items-center p-6 bg-gray-100">
  <div className="text-xl font-bold">Brand</div>
  <ul className="flex space-x-6">
    <li>Home</li>
    <li>About</li>
    <li>Services</li>
    <li>Contact</li>
  </ul>
</nav>
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// CSS Grid example: Card layout
<div className="grid grid-cols-3 gap-6 p-6">
  <div className="bg-white p-4 rounded-xl shadow">Card 1</div>
  <div className="bg-white p-4 rounded-xl shadow">Card 2</div>
  <div className="bg-white p-4 rounded-xl shadow">Card 3</div>
  <div className="bg-white p-4 rounded-xl shadow">Card 4</div>
  <div className="bg-white p-4 rounded-xl shadow">Card 5</div>
</div>
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Combining Flexbox & Grid: Feature section
<section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
  <div className="flex flex-col justify-center">
    <h2 className="text-2xl font-bold mb-4">Feature Title</h2>
    <p className="text-gray-600">Detailed description of the feature using flex layout for content alignment.</p>
  </div>
  <div className="grid grid-cols-2 gap-4">
    <div className="bg-red-100 p-4 rounded">Item 1</div>
    <div className="bg-red-100 p-4 rounded">Item 2</div>
    <div className="bg-red-100 p-4 rounded">Item 3</div>
    <div className="bg-red-100 p-4 rounded">Item 4</div>
  </div>
</section>
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
              src="https://www.youtube.com/embed/JJSoEo8JSnc"
              title="Flexbox in Tailwind CSS"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Flexbox in Tailwind CSS
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn to align and distribute elements efficiently using Tailwind flex utilities.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/gbvVZKc6dHg"
              title="CSS Grid in Tailwind"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              CSS Grid in Tailwind
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Master 2D layouts, columns, rows, and responsive grids using Tailwind.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/5W2j41ayY1Y"
              title="Tailwind Layout Patterns"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Tailwind Layout Patterns
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn practical layout patterns combining Flexbox and Grid for responsive UI.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}

{currentTopic === 3 && (
  <>
    {/* SECTION: SPACING, ALIGNMENT, AND RESPONSIVE DESIGN */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Applying Spacing, Alignment, and Responsive Design Techniques
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          Designing a polished interface isn’t just about colors or typography—spacing and alignment are critical for readability and user experience. Tailwind CSS provides a rich set of utilities for <strong>margin</strong>, <strong>padding</strong>, <strong>gap</strong>, and <strong>alignment</strong> so you can precisely control how elements are positioned on the page.
        </p>

        <p>
          <strong>Spacing</strong> in Tailwind is handled via utilities like <code>m-4</code> for margin, <code>p-6</code> for padding, and <code>gap-4</code> for spacing between flex or grid items. By using these consistently, you maintain a clean visual rhythm across the page. Tailwind’s responsive prefixes (<code>sm:</code>, <code>md:</code>, <code>lg:</code>) make it easy to adjust spacing for different screen sizes.
        </p>

        <p>
          <strong>Alignment</strong> ensures elements appear where users expect. Flexbox and Grid alignment classes like <code>justify-center</code>, <code>items-start</code>, <code>self-end</code>, or <code>place-items-center</code> let you position items precisely without writing custom CSS. Proper alignment improves visual hierarchy and guides user attention.
        </p>

        <p>
          Tailwind also empowers <strong>responsive design</strong>. By combining spacing, alignment, and responsive prefixes, you can make sure your layout looks great on mobile, tablet, and desktop. For example, a card grid might stack vertically on mobile (<code>grid-cols-1</code>) and form multiple columns on larger screens (<code>md:grid-cols-3</code>), all with proper gaps and padding.
        </p>

        <p>
          Mastering spacing, alignment, and responsive utilities in Tailwind allows you to create interfaces that are visually balanced, readable, and intuitive across all devices—an essential skill for professional UI development.
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
// Responsive card grid with spacing and alignment
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
  <div className="bg-white p-4 rounded-xl shadow text-center">Card 1</div>
  <div className="bg-white p-4 rounded-xl shadow text-center">Card 2</div>
  <div className="bg-white p-4 rounded-xl shadow text-center">Card 3</div>
  <div className="bg-white p-4 rounded-xl shadow text-center">Card 4</div>
</div>
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Flexbox alignment example: Centering content
<div className="flex justify-center items-center h-64 bg-gray-100">
  <button className="bg-red-600 text-white px-6 py-3 rounded-lg">
    Click Me
  </button>
</div>
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Responsive navigation with spacing
<nav className="flex flex-col sm:flex-row justify-between items-center p-6 bg-gray-50 gap-4">
  <div className="text-xl font-bold">Brand</div>
  <ul className="flex flex-col sm:flex-row gap-4">
    <li>Home</li>
    <li>About</li>
    <li>Services</li>
    <li>Contact</li>
  </ul>
</nav>
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
              src="https://www.youtube.com/embed/dGcsHMXbSOA"
              title="Tailwind CSS Spacing & Alignment"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Tailwind CSS Spacing & Alignment
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how to use Tailwind spacing and alignment utilities effectively.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/F4m1wntUEbA"
              title="Responsive Design with Tailwind CSS"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Responsive Design with Tailwind CSS
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Make your layouts adapt seamlessly across devices using Tailwind.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/KF1u8Pyn5KY"
              title="Tailwind Flexbox & Grid Alignment"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Tailwind Flexbox & Grid Alignment
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Practical examples of spacing, alignment, and responsive layout techniques.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}

{currentTopic === 4 && (
  <>
    {/* SECTION: COMPONENT-BASED UI SYSTEMS */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Building Component-Based UI Systems with Tailwind CSS
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          Modern web applications are built using reusable <strong>UI components</strong>. Tailwind CSS allows you to design these components with utility classes, ensuring consistent styling while keeping your code DRY (Don't Repeat Yourself). Components can range from buttons and cards to navigation bars and modals.
        </p>

        <p>
          By building a component-based system, you can assemble complex interfaces from smaller, modular pieces. Each component encapsulates styling and behavior, making maintenance easier and collaboration smoother. For example, a <code>Card</code> component can be reused across product listings, blog posts, or feature highlights with minimal adjustments.
        </p>

        <p>
          Tailwind’s utility-first approach makes it effortless to create <strong>design systems</strong>. You can define spacing, typography, colors, and hover effects consistently across all components. When combined with responsive prefixes and pseudo-class variants, your components remain adaptable and interactive on all screen sizes.
        </p>

        <p>
          Creating reusable UI patterns also improves scalability. Instead of manually duplicating styles across multiple pages, you can abstract a component and reuse it wherever needed. This ensures that updates to a single component propagate throughout your app automatically, reducing errors and improving efficiency.
        </p>

        <p>
          Mastering component-based UI systems in Tailwind equips you with the ability to build maintainable, professional, and visually consistent interfaces—skills that are essential for modern frontend development.
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
// Reusable Button Component
const Button = ({ label, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
    >
      {label}
    </button>
  );
};

// Usage
<Button label="Submit" onClick={() => alert("Clicked!")} />
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Reusable Card Component
const Card = ({ title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
    <h3 className="font-bold text-lg mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// Usage
<Card title="Product 1" description="This is an amazing product!" />
<Card title="Product 2" description="Another great product!" />
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Responsive Card Grid Using Reusable Components
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  <Card title="Card 1" description="First card content" />
  <Card title="Card 2" description="Second card content" />
  <Card title="Card 3" description="Third card content" />
</div>
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
              src="https://www.youtube.com/embed/fm7zjZQK2f4"
              title="Tailwind CSS Component Design"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Tailwind CSS Component Design
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how to build reusable UI components with Tailwind CSS.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/6zIuAyLZPH0"
              title="Building Responsive UI Systems"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Building Responsive UI Systems
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Create scalable and responsive component-based layouts.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Ty3_Vy5wXVE"
              title="Tailwind CSS Design Patterns"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Tailwind CSS Design Patterns
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn best practices for reusable UI patterns in Tailwind CSS.
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