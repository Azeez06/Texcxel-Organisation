import { useState } from "react";

export default function Weekthree() {
   const [currentTopic, setCurrentTopic] = useState(0);

  return (
    <section className="bg-[#FAF7F2] min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-8">
{/* HEADER */}
<div className="mb-16">
  <span className="text-sm font-bold uppercase tracking-wide text-red-600">
    Frontend Development · Week 3
  </span>

  <h1 className="text-4xl font-extrabold text-[#0A1F44] mt-4 mb-6">
    Layouts & Responsive Design
  </h1>

  <p className="text-gray-700 max-w-3xl leading-relaxed">
    This week focuses on how to properly structure and arrange elements on a
    webpage. You’ll learn how to build layouts that adapt smoothly across
    different screen sizes, ensuring your designs look good on mobile,
    tablet, and desktop devices.
  </p>
</div>

{/* LEARNING OBJECTIVES */}
<div className="bg-white rounded-3xl border p-8 mb-12">
  <h2 className="text-xl font-bold text-[#0A1F44] mb-6">
    What you will learn
  </h2>

  <ul className="space-y-4 text-gray-700">
    <li>— Understanding layout problems and how CSS solves them</li>
    <li>— Building layouts using Flexbox (rows, columns, alignment)</li>
    <li>— Creating complex page structures with CSS Grid</li>
    <li>— Responsive design principles and mobile-first workflow</li>
    <li>— Using media queries to adapt layouts for different screen sizes</li>
  </ul>
</div>
{currentTopic === 0 && (
  <>
    {/* SECTION: UNDERSTANDING LAYOUT PROBLEMS */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Understanding Layout Problems and How CSS Solves Them
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          One of the most common challenges in web development is controlling
          how elements are arranged on a page. Beginners often struggle with
          issues like elements stacking incorrectly, content overflowing its
          container, or layouts breaking on smaller screens. These are known
          as <strong>layout problems</strong>.
        </p>

        <p>
          By default, HTML places elements on a page in a simple vertical flow.
          While this works for basic documents, it quickly becomes limiting
          when building real websites such as dashboards, landing pages, or
          blogs. This is where <strong>CSS (Cascading Style Sheets)</strong>
          becomes essential.
        </p>

        <p>
          CSS gives you control over how elements are sized, positioned, and
          aligned. Using CSS, you can decide whether elements should sit next
          to each other, stretch to fill available space, remain fixed, or
          adapt to different screen sizes. Instead of fighting the browser’s
          default behavior, CSS allows you to shape layouts intentionally.
        </p>

        <p>
          In this topic, you’ll begin to understand why layout issues happen
          and how CSS layout tools like <strong>display properties</strong>,
          <strong>Flexbox</strong>, and <strong>Grid</strong> are designed to
          solve these problems cleanly and predictably.
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
              src="https://www.youtube.com/embed/yfoY53QXEnI"
              title="CSS Layout Basics"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              CSS Layout Basics
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Explains common layout issues and introduces how CSS handles page
              structure.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/jx5jmI0UlXU"
              title="Why CSS Layouts Break"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Why CSS Layouts Break
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Shows common beginner mistakes and why layouts behave unexpectedly.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/3elGSZSWTbM"
              title="Introduction to CSS Flexbox"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Introduction to CSS Flexbox
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Demonstrates how Flexbox solves alignment and spacing problems.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}

{currentTopic === 1 && (
  <>
    {/* SECTION: FLEXBOX LAYOUTS */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Building Layouts Using Flexbox (Rows, Columns & Alignment)
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          Flexbox is a CSS layout system designed to make arranging elements
          easier and more predictable. Instead of struggling with floats or
          complex positioning, Flexbox allows you to place elements in rows
          or columns and control how they align and space themselves within
          a container.
        </p>

        <p>
          To use Flexbox, you first define a container by setting
          <strong> display: flex</strong>. Once an element becomes a flex
          container, all its direct children become flex items. These items
          can then be arranged horizontally (row) or vertically (column)
          using the <strong>flex-direction</strong> property.
        </p>

        <p>
          One of Flexbox’s biggest strengths is alignment. Properties like
          <strong> justify-content</strong> and <strong>align-items</strong>
          allow you to center content, spread items evenly, or push elements
          to the edges of a container — tasks that were once very difficult
          with traditional CSS.
        </p>

        <p>
          Flexbox is especially useful for building navigation bars, card
          layouts, form sections, and responsive components. It adapts
          naturally to different screen sizes, making layouts flexible
          without needing excessive media queries.
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
              src="https://www.youtube.com/embed/JJSoEo8JSnc"
              title="CSS Flexbox in 15 Minutes"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Flexbox in 15 Minutes
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              A fast and clear introduction to Flexbox layout concepts.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/0eZb5i5ZP9E"
              title="Flexbox Alignment Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Flexbox Alignment Explained
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Explains justify-content, align-items, and common layout patterns.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/fYq5PXgSsbE"
              title="Flexbox Practical Examples"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Flexbox Practical Examples
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Shows real-world Flexbox layouts used in modern websites.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}


{currentTopic === 2 && (
  <>
    {/* SECTION: CSS GRID */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Creating Complex Page Structures with CSS Grid
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          CSS Grid is a powerful layout system built specifically for creating
          complex, two-dimensional layouts. While Flexbox focuses on arranging
          items in a single direction (either row or column), Grid allows you
          to control both rows and columns at the same time. This makes it ideal
          for full-page layouts, dashboards, galleries, and structured content
          areas.
        </p>

        <p>
          To use CSS Grid, you start by defining a container with
          <strong> display: grid</strong>. This immediately turns the container
          into a grid context where you can define rows and columns using
          properties like <strong>grid-template-columns</strong> and
          <strong>grid-template-rows</strong>. These properties allow you to
          decide how many columns or rows you want and how wide or tall they
          should be.
        </p>

        <p>
          One of the most important ideas in CSS Grid is the concept of
          <strong> grid tracks</strong>. Grid tracks are the rows and columns
          that form the structure of your layout. You can size them using fixed
          units like pixels, flexible units like percentages, or powerful
          functions like <strong>fr</strong>, which automatically distributes
          available space.
        </p>

        <p>
          Grid also allows items to span across multiple rows or columns. Using
          properties such as <strong>grid-column</strong> and
          <strong>grid-row</strong>, you can make elements stretch across
          different parts of the layout. This is especially useful for layouts
          where certain sections, like headers or sidebars, need more space
          than others.
        </p>

        <p>
          Another major advantage of CSS Grid is layout clarity. Instead of
          relying on nested divs and complex calculations, Grid lets you define
          the entire layout structure in one place. This makes your code easier
          to read, maintain, and adjust as designs evolve.
        </p>

        <p>
          CSS Grid works extremely well with responsive design. By adjusting
          grid definitions using media queries or auto-placement features,
          you can rearrange content for different screen sizes without
          rewriting your entire layout. This makes Grid a perfect tool for
          modern, responsive websites.
        </p>

        <p>
          In real-world projects, Grid is commonly used for page layouts that
          include headers, footers, sidebars, and main content areas. When
          combined with Flexbox for smaller components inside grid sections,
          it creates a powerful and flexible layout system.
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
              src="https://www.youtube.com/embed/EFafSYg-PkI"
              title="CSS Grid Crash Course"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              CSS Grid Crash Course
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              A clear and practical introduction to CSS Grid fundamentals.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/jV8B24rSN5o"
              title="CSS Grid Layout Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              CSS Grid Layout Explained
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Explains grid rows, columns, and item placement with examples.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/t6CBKf8K_Ac"
              title="Build a Page Layout with CSS Grid"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Build a Page Layout with CSS Grid
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Walks through creating a complete page layout using CSS Grid.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}
{currentTopic === 3 && (
  <>
    {/* SECTION: RESPONSIVE DESIGN */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Responsive Design Principles and Mobile-First Workflow
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          Responsive design is the practice of building websites that adapt
          smoothly to different screen sizes and devices. Instead of designing
          separate websites for phones, tablets, and desktops, responsive
          design uses flexible layouts and rules that adjust automatically
          based on the user’s screen.
        </p>

        <p>
          <strong>Principle 1: Fluid layouts.</strong>  
          Responsive websites rely on flexible units such as percentages,
          viewport units, and the <strong>fr</strong> unit instead of fixed
          pixel values. This allows content to resize naturally as the screen
          width changes, preventing layouts from breaking on smaller or larger
          devices.
        </p>

        <p>
          <strong>Principle 2: Flexible images and media.</strong>  
          Images and videos must scale within their containers to avoid
          overflowing the layout. This is commonly achieved using rules like
          <strong> max-width: 100%</strong>. Flexible media ensures visual
          content remains readable and visually balanced on all screens.
        </p>

        <p>
          <strong>Principle 3: Media queries.</strong>  
          Media queries allow you to apply different CSS rules based on screen
          size, orientation, or resolution. They act as checkpoints where the
          layout can adapt, such as changing the number of columns, adjusting
          font sizes, or rearranging navigation for smaller devices.
        </p>

        <p>
          <strong>Principle 4: Content-first thinking.</strong>  
          Responsive design prioritizes content over decoration. Important
          information should always remain visible and accessible, regardless
          of screen size. This principle helps avoid clutter and ensures users
          get what they need quickly.
        </p>

        <p>
          <strong>Principle 5: Touch-friendly interactions.</strong>  
          On mobile devices, users interact using touch rather than a mouse.
          Buttons, links, and interactive elements must be large enough and
          spaced properly to avoid accidental taps and improve usability.
        </p>

        <p>
          The <strong>mobile-first workflow</strong> complements these
          principles by reversing the traditional design process. Instead of
          designing for large screens first, you begin with the smallest
          screens and gradually enhance the layout for larger devices using
          media queries. This approach encourages simplicity, performance, and
          better user experience.
        </p>

        <p>
          By combining responsive design principles with a mobile-first
          workflow, developers create websites that are faster, easier to
          maintain, and accessible to a wider range of users across devices.
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
              src="https://www.youtube.com/embed/srvUrASNj0s"
              title="Responsive Web Design Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Responsive Web Design Explained
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Explains the core ideas behind responsive design in simple terms.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/ZYV6dYtz4HA"
              title="Mobile First Design"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Mobile-First Design
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Shows how to design websites starting from small screens.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/2KL-z9A56SQ"
              title="CSS Media Queries Tutorial"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              CSS Media Queries Tutorial
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Practical guide to using media queries for responsive layouts.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}
{currentTopic === 4 && (
  <>
    {/* SECTION: MEDIA QUERIES */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Using Media Queries to Adapt Layouts for Different Screen Sizes
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          Media queries are a core tool in responsive web design. They allow
          you to apply different CSS rules depending on the size and
          characteristics of the user’s screen. With media queries, a single
          website can look and behave differently on phones, tablets, laptops,
          and large desktop screens.
        </p>

        <p>
          At its simplest, a media query checks the width of the screen and
          decides whether certain styles should apply. For example, you might
          display content in one column on mobile devices and switch to
          multiple columns on larger screens. This ensures layouts remain
          readable and well-structured at all sizes.
        </p>

        <p>
          Media queries are usually written using <strong>min-width</strong>
          or <strong>max-width</strong>. A <strong>mobile-first</strong>
          approach uses <strong>min-width</strong>, meaning styles are written
          for small screens first and enhanced as the screen gets wider. This
          approach improves performance and keeps designs focused.
        </p>

        <p>
          A common real-world example is navigation. On small screens, menus
          may stack vertically or be hidden behind a button, while on larger
          screens the same menu can be displayed horizontally across the page.
          Media queries make these adjustments possible without changing the
          HTML structure.
        </p>

        <p>
          Media queries can also adjust spacing, font sizes, layout direction,
          and visibility of elements. For instance, you may increase padding
          on larger screens, enlarge text for readability, or reveal extra
          content that would feel crowded on mobile devices.
        </p>

        <p>
          By combining media queries with Flexbox and Grid, developers gain
          full control over layout behavior across devices. This ensures that
          users always get a smooth, intuitive experience, no matter how they
          access the website.
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
              src="https://www.youtube.com/embed/5xzaGSYd7jM"
              title="CSS Media Queries Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              CSS Media Queries Explained
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              A clear explanation of how media queries work in real layouts.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Wm6CUkswsNw"
              title="Responsive Design with Media Queries"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Responsive Design with Media Queries
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Demonstrates adapting layouts across multiple screen sizes.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/0ohtVzCSHqs"
              title="Mobile First Media Queries"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Mobile-First Media Queries
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Shows how to write media queries using a mobile-first approach.
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