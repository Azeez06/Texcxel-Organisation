import { useState } from "react";

export default function Weekone() {
   const [currentTopic, setCurrentTopic] = useState(0);

  return (
    <section className="bg-[#FAF7F2] min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-8">

        {/* HEADER */}
<div className="mb-16">
  <span className="text-sm font-bold uppercase tracking-wide text-red-600">
    Frontend Development · Week 4
  </span>

  <h1 className="text-4xl font-extrabold text-[#0A1F44] mt-4 mb-6">
    Advanced CSS & Mini Project
  </h1>

  <p className="text-gray-700 max-w-3xl leading-relaxed">
    This week takes your CSS skills to the next level. You’ll learn how to
    create smooth animations and transitions, write clean and scalable CSS,
    and apply best practices while building a complete responsive mini
    project from scratch.
  </p>
</div>

{/* LEARNING OBJECTIVES */}
<div className="bg-white rounded-3xl border p-8 mb-12">
  <h2 className="text-xl font-bold text-[#0A1F44] mb-6">
    What you will learn
  </h2>

  <ul className="space-y-4 text-gray-700">
    <li>— CSS transitions and animations for interactive user experiences</li>
    <li>— Advanced styling techniques and CSS best practices</li>
    <li>— Writing clean, maintainable, and scalable CSS code</li>
    <li>— Structuring and styling a real-world responsive layout</li>
    <li>— Building and completing a responsive mini project</li>
  </ul>
</div>

{currentTopic === 0 && (
  <>
    {/* SECTION: CSS TRANSITIONS & ANIMATIONS */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        CSS Transitions & Animations
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          CSS transitions and animations are what bring websites to life. They
          control how elements change from one state to another, making user
          interactions feel smooth, natural, and professional instead of
          sudden and harsh.
        </p>

        <p>
          A <strong>CSS transition</strong> allows you to smoothly change a
          property’s value over a specified period of time. For example, when
          a user hovers over a button, instead of the color changing instantly,
          a transition makes the change gradual and visually pleasing.
        </p>

        <p>
          Transitions are triggered by user actions such as hover, focus, or
          click. They are commonly used for button effects, card hover states,
          dropdown menus, and simple UI feedback that improves user experience.
        </p>

        <p>
          The most common properties used with transitions include
          <strong> color</strong>, <strong>background-color</strong>,
          <strong> width</strong>, <strong>height</strong>,
          <strong> opacity</strong>, and <strong>transform</strong>. Not all CSS
          properties can be animated, but many visual ones can.
        </p>

        <p>
          A transition is made up of four main parts:
          <strong> property</strong>, <strong>duration</strong>,
          <strong> timing function</strong>, and <strong>delay</strong>.
          Understanding these parts gives you full control over how animations
          behave.
        </p>

        <p>
          CSS <strong>animations</strong> go a step further. Instead of reacting
          only to user interaction, animations can run automatically using
          <strong> keyframes</strong>. This allows you to create loading
          indicators, continuous motion, attention-grabbing effects, and more
          complex visual behavior.
        </p>

        <p>
          In professional development, animations should be subtle and
          meaningful. The goal is not to distract users, but to guide attention,
          provide feedback, and make interfaces feel responsive and intuitive.
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
button {
  background-color: #B11226;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
  background-color: #8e0f1f;
  transform: translateY(-2px);
}
  `}</code>
</pre>

    </div>

    <div>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
  <code>{`
.card {
  opacity: 0.8;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.card:hover {
  opacity: 1;
  transform: scale(1.03);
}
  `}</code>
</pre>

    </div>

    <div>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
  <code>{`
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.box {
  animation: fadeIn 0.8s ease forwards;
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
          src="https://www.youtube.com/embed/zHUpx90NerM"
          title="CSS Transitions Explained"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-5">
        <h4 className="font-semibold text-[#0A1F44]">
          CSS Transitions Explained
        </h4>
        <p className="text-sm text-gray-600 mt-2">
          Learn how transitions work and how to apply them correctly.
        </p>
      </div>
    </div>

    {/* VIDEO 2 */}
    <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
      <div className="aspect-video">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/YszONjKpgg4"
          title="CSS Animations & Keyframes"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-5">
        <h4 className="font-semibold text-[#0A1F44]">
          CSS Animations & Keyframes
        </h4>
        <p className="text-sm text-gray-600 mt-2">
          Understand keyframes and how animations run automatically.
        </p>
      </div>
    </div>

    {/* VIDEO 3 */}
    <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
      <div className="aspect-video">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/8kK-cA99SA0"
          title="Practical CSS Hover Effects"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-5">
        <h4 className="font-semibold text-[#0A1F44]">
          Practical CSS Hover Effects
        </h4>
        <p className="text-sm text-gray-600 mt-2">
          Real-world hover animations used in modern websites.
        </p>
      </div>
    </div>

  </div>
</div>
    </> 
)}

{currentTopic === 1 && (
  <>
    {/* SECTION: CSS BEST PRACTICES & MAINTAINABLE STYLING */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        CSS Best Practices & Maintainable Styling
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          As projects grow, CSS can quickly become difficult to manage if it is
          not written properly. CSS best practices focus on writing styles that
          are clean, readable, reusable, and easy to maintain over time.
        </p>

        <p>
          One of the most important best practices is using
          <strong> clear and meaningful class names</strong>. Class names should
          describe what an element represents, not how it looks. This makes
          your code easier to understand and reuse.
        </p>

        <p>
          Reusability is another key principle. Instead of writing the same
          styles multiple times, you should create base styles that can be
          reused across different components. This reduces duplication and
          makes global changes much easier.
        </p>

        <p>
          Consistency in spacing, colors, fonts, and sizing helps your website
          look professional and cohesive. From a development perspective,
          consistency also helps teams work together without confusion.
        </p>

        <p>
          Separating layout styles from visual styles is also a best practice.
          Properties like <strong>display</strong>, <strong>flex</strong>,
          <strong>grid</strong>, and <strong>width</strong> define structure,
          while colors, shadows, and borders define appearance.
        </p>

        <p>
          Avoid overly complex selectors and deep nesting. Simple selectors are
          easier to override, easier to debug, and perform better in the
          browser.
        </p>

        <p>
          In professional development, clean CSS improves performance, speeds
          up development, and makes collaboration easier. Writing good CSS is
          not just about making things look good—it’s about building systems
          that scale.
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
/* Reusable button style */
.button {
  background-color: #B11226;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #8e0f1f;
}
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
/* Layout styles separated from visuals */
.card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
/* Consistent typography */
.text-title {
  font-size: 24px;
  font-weight: 700;
  color: #0A1F44;
}

.text-body {
  font-size: 16px;
  line-height: 1.6;
  color: #444;
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
              src="https://www.youtube.com/embed/Qhaz36TZG5Y"
              title="CSS Best Practices"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              CSS Best Practices
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how professionals organize and write clean CSS.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/1Rs2ND1ryYc"
              title="Writing Maintainable CSS"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Writing Maintainable CSS
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand how to scale CSS in real projects.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Zz6eOVaaelI"
              title="CSS Organization Tips"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              CSS Organization Tips
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Practical tips for structuring CSS files effectively.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}
{currentTopic === 2 && (
  <>
    {/* SECTION: CLEAN, MAINTAINABLE & SCALABLE CSS */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Writing Clean, Maintainable, and Scalable CSS Code
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          Writing CSS is not just about making a page look good; it is about
          creating styles that can grow with your project. Clean, maintainable,
          and scalable CSS ensures that your code remains easy to understand,
          update, and extend as your website becomes more complex.
        </p>

        <p>
          <strong>Clean CSS</strong> focuses on readability. This means using
          clear class names, proper indentation, consistent formatting, and
          logical spacing. When your CSS is clean, you (and others) can quickly
          understand what each rule does without confusion.
        </p>

        <p>
          <strong>Maintainable CSS</strong> is easy to modify without breaking
          other parts of the website. This is achieved by avoiding repetition,
          keeping styles modular, and not tightly coupling styles to specific
          page structures.
        </p>

        <p>
          <strong>Scalable CSS</strong> means your styles can support new
          components, pages, and features without becoming messy. Instead of
          writing one-off styles, you build reusable patterns that work across
          the entire project.
        </p>

        <p>
          One key principle is separating concerns. Layout styles (such as
          flexbox or grid) should be separated from visual styles like colors,
          fonts, and shadows. This makes it easier to update design decisions
          without rewriting layout logic.
        </p>

        <p>
          Another important practice is consistency. Using consistent spacing,
          font sizes, color variables, and naming conventions creates a visual
          rhythm and reduces mental effort when working on the codebase.
        </p>

        <p>
          In real-world projects, clean CSS saves time, reduces bugs, and allows
          teams to collaborate effectively. Poorly written CSS, on the other
          hand, quickly becomes difficult to manage and slows development.
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
/* Clear and meaningful class names */
.primary-button {
  background-color: #B11226;
  color: #ffffff;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
}
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
/* Reusable utility classes */
.mt-lg {
  margin-top: 32px;
}

.text-center {
  text-align: center;
}
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
/* Layout separated from visuals */
.card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 16px;
}
            `}</code>
          </pre>
        </div>

      </div>
    </div>
  </>
)}
{currentTopic === 3 && (
  <>
    {/* SECTION: MINI PROJECT */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Mini Project — Build a Responsive Landing Page
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          This mini project brings together everything you have learned so far
          in CSS. You will design and build a fully responsive landing page that
          looks clean, modern, and professional across different screen sizes.
          The focus is not just on appearance, but on structure, scalability,
          and best practices.
        </p>

        <p>
          The goal of this project is to help you think like a frontend
          developer. You will plan your layout, structure your styles, apply
          transitions and animations, and ensure your design adapts smoothly to
          mobile, tablet, and desktop screens.
        </p>

        <p>
          By the end of this project, you should be confident in turning a
          static design idea into a responsive, interactive webpage using only
          HTML and CSS.
        </p>

      </div>
    </div>

    {/* PROJECT REQUIREMENTS */}
    <div className="bg-white rounded-3xl border p-8 mb-16">

      <h3 className="text-xl font-bold text-[#0A1F44] mb-6">
        Project Requirements
      </h3>

      <ul className="space-y-4 text-gray-700">
        <li>— A hero section with a heading, short description, and call-to-action button</li>
        <li>— A features section using Flexbox or CSS Grid</li>
        <li>— A card-based section with hover effects</li>
        <li>— At least one CSS transition and one animation</li>
        <li>— Fully responsive layout (mobile, tablet, desktop)</li>
        <li>— Clean, readable, and well-structured CSS</li>
      </ul>

    </div>

    {/* SUGGESTED STRUCTURE */}
    <div className="mb-16">

      <h3 className="text-xl font-bold text-[#0A1F44] mb-6">
        Suggested Page Structure
      </h3>

      <div className="space-y-6 text-gray-700">

        <p>
          You are free to design the page creatively, but a good structure
          might include:
        </p>

        <ul className="space-y-3">
          <li>— Header with logo and navigation</li>
          <li>— Hero section with headline and button</li>
          <li>— Features or services section</li>
          <li>— Testimonials or cards section</li>
          <li>— Footer with simple links</li>
        </ul>

      </div>
    </div>

    {/* STARTER CODE */}
    <div className="mb-20">

      <h3 className="text-xl font-bold text-[#0A1F44] mb-6">
        Starter CSS Example
      </h3>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
        <code>{`
body {
  font-family: system-ui, sans-serif;
  margin: 0;
  background-color: #FAF7F2;
  color: #0A1F44;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 32px;
}

.hero {
  display: grid;
  gap: 24px;
  padding: 80px 32px;
  text-align: center;
}

.hero button {
  background-color: #B11226;
  color: white;
  padding: 14px 28px;
  border-radius: 10px;
  border: none;
  transition: transform 0.3s ease;
}

.hero button:hover {
  transform: translateY(-3px);
}
        `}</code>
      </pre>

    </div>

    {/* SUCCESS CRITERIA */}
    <div className="bg-white rounded-3xl border p-8 mb-20">

      <h3 className="text-xl font-bold text-[#0A1F44] mb-6">
        How Success Is Measured
      </h3>

      <ul className="space-y-4 text-gray-700">
        <li>— Layout adapts smoothly across screen sizes</li>
        <li>— Transitions and animations feel natural and purposeful</li>
        <li>— CSS is well-organized and easy to read</li>
        <li>— No broken layouts on mobile devices</li>
        <li>— Code follows best practices learned in this course</li>
      </ul>

    </div>

    {/* NEXT STEP */}
    <div className="text-center">

      <p className="text-gray-700 max-w-2xl mx-auto">
        Completing this project means you are now ready to move beyond styling
        and start bringing websites to life with JavaScript in the next week.
        Take your time, experiment, and focus on quality over speed.
      </p>

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