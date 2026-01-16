import { useState } from "react";

export default function Weektwo() {
  const [currentTopic, setCurrentTopic] = useState(0);

  return (
    <section className="bg-[#FAF7F2] min-h-screen py-20">
     <div className="max-w-5xl mx-auto px-6 md:px-8">

  {/* HEADER */}
  <div className="mb-20 text-center">

    {/* WEEK LABEL */}
   <div
  className="
    inline-flex items-center
    gap-1 sm:gap-2
    mb-6
    px-3 sm:px-4
    py-1.5
    rounded-full
    bg-[#F6F1E8]
    border border-red-200
    whitespace-nowrap
  "
>

  <span className="text-xs sm:text-sm font-bold uppercase tracking-wide text-red-600">
  Frontend Development
</span>

<span className="text-xs sm:text-sm font-bold text-[#0A1F44]">
  · Week 2
</span>

    </div>
     <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A1F44] mb-5">
      CSS FUNDAMENTAL
    </h1>

          <p className="text-gray-700 max-w-3xl leading-relaxed">
            This week focuses on styling the web with confidence using CSS.
            You’ll learn how to control layout, spacing, colors, and typography,
            turning plain HTML into visually appealing and well-structured
            web pages.
          </p>
        </div>

       {/* LEARNING OBJECTIVES */}
<div className="bg-white rounded-3xl border border-gray-200 p-8 mb-16">

  <h2 className="text-xl font-bold text-[#0A1F44] mb-6">
    What you will learn
  </h2>

  <ul className="space-y-4 text-gray-700 text-base leading-relaxed">
    {[
            "What CSS is and how it works with HTML",
            "CSS syntax, rules, and selectors",
            "The CSS box model (margin, border, padding, content)",
            "Working with colors, fonts, and text styling",
            "Spacing, sizing, and basic layout techniques"
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
    {/* SECTION: WHAT IS CSS */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        What CSS Is and How It Works with HTML
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          CSS stands for <strong>Cascading Style Sheets</strong>. It is the
          language used to control how HTML elements look on a webpage.
          While HTML provides the structure and meaning of content, CSS is
          responsible for presentation — colors, fonts, spacing, layout,
          and overall visual design.
        </p>

        <p>
          Think of HTML as the skeleton of a webpage and CSS as the clothing
          and appearance. Without CSS, websites would appear plain, unstyled,
          and difficult to engage with. CSS allows developers to transform
          simple HTML into visually appealing and user-friendly interfaces.
        </p>

        <p>
          CSS works by selecting HTML elements and applying styles to them.
          For example, CSS can target all paragraphs, headings, buttons, or
          specific elements and change how they appear. These styles include
          things like text color, background color, font size, margins,
          padding, and positioning.
        </p>

        <p>
          HTML and CSS work together through a clear separation of concerns.
          HTML focuses on <strong>what</strong> the content is, while CSS
          focuses on <strong>how</strong> that content should look. This
          separation makes websites easier to maintain, update, and scale
          as they grow.
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
              src="https://www.youtube.com/embed/1PnVor36_40"
              title="What is CSS?"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              What Is CSS?
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              A beginner-friendly introduction to CSS and its role in web design.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/yfoY53QXEnI"
              title="CSS Explained for Beginners"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              CSS Explained for Beginners
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how CSS styles HTML elements step by step.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/wRNinF7YQqQ"
              title="How CSS Works with HTML"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              How CSS Works with HTML
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand how CSS connects to and styles HTML documents.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}

{currentTopic === 1 && (
  <>
    {/* SECTION: CSS SYNTAX, RULES & SELECTORS */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        CSS Syntax, Rules, and Selectors
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          CSS works by following a clear and predictable structure known as
          <strong> CSS syntax</strong>. Every style you apply to a webpage is
          written as a rule that tells the browser exactly which HTML elements
          to style and how they should appear.
        </p>

        <p>
          A basic CSS rule is made up of three main parts: a
          <strong> selector</strong>, a <strong>property</strong>, and a
          <strong> value</strong>. The selector identifies the HTML element you
          want to style, the property defines what aspect of the element you
          want to change, and the value specifies how it should change.
        </p>

        <p>
          For example, in a simple rule that changes text color, the selector
          targets the element, the property might be <code>color</code>, and the
          value could be <code>red</code>. Together, they form a complete
          instruction that the browser can understand and apply.
        </p>

        <p>
          Selectors are a powerful part of CSS because they give you control
          over exactly which elements are affected. You can select elements by
          their tag name, such as paragraphs or headings, by their class, or by
          their unique ID. This allows you to style entire sections of a page or
          specific elements without affecting others.
        </p>

        <p>
          CSS rules are written inside curly braces, and each property-value
          pair ends with a semicolon. This consistent structure helps keep
          styles organized and readable. Writing clean and well-structured CSS
          rules makes your code easier to debug, update, and scale as your
          project grows.
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
              src="https://www.youtube.com/embed/0afZj1G0BIE"
              title="CSS Syntax Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              CSS Syntax Explained
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how CSS rules are written and structured.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/l1mER1bV0N0"
              title="CSS Selectors Tutorial"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              CSS Selectors Tutorial
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand element, class, and ID selectors in CSS.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/3YhJx7nBEcw"
              title="CSS Rules and Selectors"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              CSS Rules and Selectors
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              See how CSS rules target and style HTML elements in practice.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}


{currentTopic === 2 && (
  <>
    {/* SECTION: CSS BOX MODEL */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        The CSS Box Model (Margin, Border, Padding & Content)
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          Every element you see on a webpage is treated by CSS as a rectangular
          box. This concept is known as the <strong>CSS Box Model</strong>. No
          matter how small or large an element appears, CSS calculates its size
          and position using this box structure.
        </p>

        <p>
          At the center of the box model is the <strong>content</strong>. This is
          the actual information inside an element, such as text, images, or
          videos. The width and height you set on an element usually apply to
          this content area by default.
        </p>

        <p>
          Surrounding the content is the <strong>padding</strong>. Padding
          creates space between the content and the element’s border. Increasing
          padding makes the content feel more spacious and improves readability
          without affecting neighboring elements.
        </p>

        <p>
          The <strong>border</strong> wraps around the padding and content. It
          defines the visible edge of an element and can be styled using
          different colors, widths, and styles. Borders help visually separate
          elements and are often used for cards, buttons, and containers.
        </p>

        <p>
          Outside the border is the <strong>margin</strong>. Margin controls the
          space between an element and other elements around it. Unlike padding,
          margin creates external spacing and plays a major role in page layout
          and alignment.
        </p>

        <p>
          Understanding how margin, border, padding, and content work together
          is essential for building clean layouts. Most spacing issues in CSS
          come from misunderstanding the box model, so mastering it will save
          you time and frustration as your projects grow more complex.
        </p>

        <p>
          Once you understand the box model, you gain full control over spacing,
          alignment, and layout. It becomes much easier to design responsive and
          visually balanced interfaces that look consistent across different
          screen sizes.
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
              src="https://www.youtube.com/embed/rIO5326FgPE"
              title="CSS Box Model Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              CSS Box Model Explained
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              A clear visual explanation of margin, border, padding, and content.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/5kOXb4x4f8w"
              title="Padding vs Margin in CSS"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Padding vs Margin
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn the difference between internal and external spacing.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/1J9yTcsG8RY"
              title="CSS Box Model in Practice"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              CSS Box Model in Practice
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Practical examples of spacing and layout using the box model.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}


{currentTopic === 3 && (
  <>
    {/* SECTION: COLORS, FONTS & TYPOGRAPHY */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Colors, Fonts, and Typography
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          Colors and typography play a major role in how users experience a
          website. While HTML structures content, CSS controls how that content
          looks and feels. Good use of colors and fonts improves readability,
          usability, and overall visual appeal.
        </p>

        <p>
          In CSS, colors can be applied to text, backgrounds, borders, and other
          elements. Colors can be defined using names, HEX values, RGB, or HSL.
          These different formats give developers flexibility in choosing and
          controlling visual styles across a website.
        </p>

        <p>
          Consistent color usage helps create visual hierarchy and branding.
          Primary colors are often used for headings and important elements,
          while secondary or neutral colors are used for backgrounds and
          supporting text. Poor color contrast can make content hard to read,
          so accessibility should always be considered.
        </p>

        <p>
          Fonts determine how text appears on the screen. CSS allows you to
          control font family, size, weight, and style. Common font properties
          include <strong>font-family</strong>, <strong>font-size</strong>,
          <strong>font-weight</strong>, and <strong>font-style</strong>.
        </p>

        <p>
          Typography goes beyond choosing a font. It includes spacing, line
          height, letter spacing, and alignment. Proper typography makes text
          easier to scan and read, especially on long pages or mobile devices.
        </p>

        <p>
          Line height controls the vertical spacing between lines of text.
          Increasing line height improves readability, while too little spacing
          can make text feel cramped. Letter spacing can also be adjusted to
          improve clarity, especially for headings and uppercase text.
        </p>

        <p>
          Well-designed typography establishes hierarchy on a page. Headings,
          paragraphs, and links should look distinct but consistent. When colors
          and typography are used thoughtfully, users can easily understand what
          content is most important.
        </p>

        <p>
          Mastering colors and typography helps you create professional and
          visually appealing websites. These skills turn plain layouts into
          engaging interfaces and make your designs more user-friendly and
          accessible.
        </p>

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
              src="https://www.youtube.com/embed/Byln5a8n_XE"
              title="CSS Colors Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              CSS Colors Explained
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how to use colors effectively in CSS.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/7v6r7bD2s0A"
              title="CSS Fonts and Text Styling"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Fonts and Text Styling
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand font properties and text formatting in CSS.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/QrNi9FmdlxY"
              title="Web Typography Basics"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Web Typography Basics
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how typography improves readability and design.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}
{currentTopic === 4 && (
  <>
    {/* SECTION: SPACING & LAYOUT BASICS */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Spacing & Layout Basics (Display, Width, Height, Overflow)
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          Spacing and layout determine how elements are arranged on a webpage.
          Even with good colors and typography, a page can feel cluttered or
          broken if spacing and layout are not handled properly. CSS provides
          powerful tools to control how elements appear, align, and behave in
          relation to one another.
        </p>

        <p>
          One of the most important layout properties in CSS is
          <strong> display</strong>. The display property controls how an
          element behaves in the document flow. Common values include
          <strong> block</strong>, <strong> inline</strong>,
          <strong> inline-block</strong>, and <strong> none</strong>.
        </p>

        <p>
          Block elements, such as <code>&lt;div&gt;</code> and
          <code>&lt;p&gt;</code>, take up the full width available and start on a
          new line. Inline elements, like <code>&lt;span&gt;</code> and
          <code>&lt;a&gt;</code>, only take up as much space as their content and
          stay on the same line as other elements.
        </p>

        <p>
          Width and height control the size of elements. The
          <strong> width</strong> property sets how wide an element is, while
          <strong> height</strong> controls how tall it is. These values can be
          defined using pixels, percentages, or other CSS units depending on the
          layout needs.
        </p>

        <p>
          Using percentages for width allows elements to respond to different
          screen sizes, making layouts more flexible. Fixed widths can be useful
          in specific cases but should be used carefully to avoid breaking
          layouts on smaller devices.
        </p>

        <p>
          The <strong> overflow</strong> property controls what happens when
          content is too large to fit inside its container. Common values
          include <strong> hidden</strong>, <strong> scroll</strong>,
          <strong> auto</strong>, and <strong> visible</strong>.
        </p>

        <p>
          For example, setting overflow to <strong> hidden</strong> will cut off
          extra content, while <strong> scroll</strong> adds scrollbars. Using
          <strong> auto</strong> allows the browser to decide when scrolling is
          necessary, which is often the most practical option.
        </p>

        <p>
          Mastering spacing and layout basics helps you create clean,
          well-structured pages. These concepts are the foundation for more
          advanced layout systems like Flexbox and Grid, which you will learn
          later as you progress.
        </p>

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
              src="https://www.youtube.com/embed/jx5jmI0UlXU"
              title="CSS Display Property Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              CSS Display Property
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand block, inline, and inline-block behavior.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Qhaz36TZG5Y"
              title="CSS Width and Height"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Width & Height in CSS
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how sizing affects layout and responsiveness.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/1Rs2ND1ryYc"
              title="CSS Overflow Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Understanding Overflow
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Control overflowing content and scrolling behavior.
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