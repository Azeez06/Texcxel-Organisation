import { useState } from "react";

export default function Weekone() {
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
    Frontend Development
  </span>

  <span className="text-sm sm:text-sm font-bold text-[#0A1F44]">
    · Week 1
  </span>
</div>

     <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A1F44] mb-5">
      WEB & HTML BASICS
    </h1>

    {/* DESCRIPTION */}
    <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed text-base sm:text-lg">
      This week introduces you to how the web works and the role of HTML in
      structuring content. You’ll learn how websites are built from the ground
      up and begin writing clean, meaningful HTML.
    </p>

  </div>
{/* LEARNING OBJECTIVES */}
<div className="bg-white rounded-3xl border border-gray-200 p-8 mb-16">

  <h2 className="text-xl font-bold text-[#0A1F44] mb-6">
    What you will learn
  </h2>

  <ul className="space-y-4 text-gray-700 text-base leading-relaxed">
    {[
      "How the web works (browser, server, URLs)",
      "Basic structure of an HTML document",
      "Common HTML tags and elements",
      "Semantic HTML and why it matters",
      "Accessibility and best practices",
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
      {/* SECTION: HOW THE WEB WORKS */}
<div className="mb-20 max-w-4xl">

  <h2 className="text-2xl font-bold text-[#0A1F44] mb-8">
    How the Web Works
    <span className="block text-base font-medium text-gray-500 mt-1">
      Browser, Server & URLs
    </span>
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
      When you open a website, a lot happens behind the scenes in just a
      fraction of a second. The web works on a simple request-and-response
      system involving three key players: your browser, a server, and a URL.
      Understanding how these work together is the foundation of web
      development.
    </p>

    <p>
      A <strong>browser</strong> (such as Chrome, Firefox, or Safari) is the
      application you use to access the web. When you type a website address,
      the browser sends a request asking for the content. Its job is to
      receive that data and display it in a way humans can easily understand.
    </p>

    <p>
      A <strong>server</strong> is a powerful computer that stores website
      files like HTML, CSS, JavaScript, images, and videos. When it receives
      a request, it responds by sending back the required files, which the
      browser then renders into a webpage.
    </p>

    <p>
      A <strong>URL (Uniform Resource Locator)</strong> is the unique address
      of a resource on the web. It tells the browser exactly where to go and
      what to request, acting as the bridge between your browser and the
      correct server.
    </p>

  </div>
</div>


{/* VIDEO RESOURCES */}
<div className="mb-24">

  <h3 className="text-xl font-bold text-[#0A1F44] mb-10">
    Watch & Understand
  </h3>

  <div className="grid md:grid-cols-3 gap-8">
    {/* cards stay the same */}

    {/* VIDEO 1 */}
    <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
      <div className="aspect-video">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/7_LPdttKXPc"
          title="How the Internet Works"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-5">
        <h4 className="font-semibold text-[#0A1F44]">
          How the Internet Works
        </h4>
        <p className="text-sm text-gray-600 mt-2">
          A beginner-friendly overview of how browsers and servers communicate.
        </p>
      </div>
    </div>

    {/* VIDEO 2 */}
    <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
      <div className="aspect-video">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/D8c4bqJt1dI"
          title="What is a Server?"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-5">
        <h4 className="font-semibold text-[#0A1F44]">
          What is a Server?
        </h4>
        <p className="text-sm text-gray-600 mt-2">
          Learn what servers are and how they deliver websites to users.
        </p>
      </div>
    </div>

    {/* VIDEO 3 */}
    <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
      <div className="aspect-video">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/AYdF7b3nMto"
          title="Understanding URLs"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-5">
        <h4 className="font-semibold text-[#0A1F44]">
          Understanding URLs
        </h4>
        <p className="text-sm text-gray-600 mt-2">
          Breaks down URLs and how browsers locate web resources.
        </p>
      </div>
    </div>

  </div>
</div>
 </>
)}


{currentTopic === 1 && (
  <>
{/* SECTION: BASIC STRUCTURE OF HTML */}
<div className="mb-20 max-w-4xl">

  <h2 className="text-2xl font-bold text-[#0A1F44] mb-8">
    Basic Structure of an HTML Document
  </h2>

  <div    className="
      space-y-7
      text-gray-700
      text-base sm:text-lg
      leading-[1.8]
      text-left md:text-justify
      hyphens-auto
    ">

    <p>
      Every website you see on the internet is built on HTML. At the heart of
      every HTML page is a basic structure that tells the browser what kind of
      document it is and how the content should be organized. Without this
      structure, the browser would not know how to correctly display a webpage.
    </p>

    <p>
      An HTML document always begins with a special declaration called
      <strong> <code>&lt;!DOCTYPE html&gt;</code></strong>. This line tells the
      browser that the document is written in HTML5, which is the modern
      standard for building websites today. It helps ensure that the browser
      renders the page correctly and consistently.
    </p>

    <p>
      The entire content of an HTML page is wrapped inside the
      <strong> <code>&lt;html&gt;</code></strong> tag. Inside this tag, there are
      two main sections: the <strong>head</strong> and the <strong>body</strong>.
      These sections serve different purposes but work together to form a
      complete webpage.
    </p>

    <p>
      The <strong> <code>&lt;head&gt;</code></strong> section contains information
      about the page rather than visible content. This includes the page title,
      meta information, links to stylesheets, and other settings the browser
      needs. Content inside the head does not appear directly on the page.
    </p>

    <p>
      The <strong> <code>&lt;body&gt;</code></strong> section contains everything
      the user can see on the webpage. This includes headings, paragraphs,
      images, links, buttons, and other elements. When you build websites, most
      of your work will happen inside the body tag because it controls what the
      user interacts with.
    </p>

  </div>
</div>
{/* VIDEO RESOURCES: HTML STRUCTURE */}
<div className="mb-24">

  <h3 className="text-xl font-bold text-[#0A1F44] mb-8">
    Watch & Practice
  </h3>

  <div className="grid md:grid-cols-3 gap-8">

    {/* VIDEO 1 */}
    <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
      <div className="aspect-video">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/UB1O30fR-EE"
          title="HTML Document Structure"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-5">
        <h4 className="font-semibold text-[#0A1F44]">
          HTML Document Structure Explained
        </h4>
        <p className="text-sm text-gray-600 mt-2">
          Learn how HTML pages are structured from top to bottom.
        </p>
      </div>
    </div>

    {/* VIDEO 2 */}
    <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
      <div className="aspect-video">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/DPnqb74Smug"
          title="HTML Head and Body Tags"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-5">
        <h4 className="font-semibold text-[#0A1F44]">
          Understanding Head & Body
        </h4>
        <p className="text-sm text-gray-600 mt-2">
          Clear explanation of what goes into the head and body tags.
        </p>
      </div>
    </div>

    {/* VIDEO 3 */}
    <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
      <div className="aspect-video">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/it1rTvBcfRg"
          title="HTML Boilerplate Explained"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <div className="p-5">
        <h4 className="font-semibold text-[#0A1F44]">
          HTML Boilerplate Explained
        </h4>
        <p className="text-sm text-gray-600 mt-2">
          Understand the standard HTML boilerplate used by developers.
        </p>
          </div>
    </div>

  </div>
</div>
 </>
)}
{currentTopic === 2 && (
  <>

{/* SECTION: COMMON HTML TAGS & ELEMENTS */}
<div className="mb-20">

  <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
    Common HTML Tags and Elements
  </h2>

   <div    className="
      space-y-7
      text-gray-700
      text-base sm:text-lg
      leading-[1.8]
      text-left md:text-justify
      hyphens-auto
    ">

    <p>
      HTML works by using <strong>tags</strong> to define different types of
      content on a webpage. These tags act as labels that tell the browser what
      each piece of content represents, such as a heading, a paragraph, an
      image, or a link. Without tags, the browser would not understand how to
      display information correctly.
    </p>

    <p>
      Most HTML tags come in pairs: an opening tag and a closing tag. For
      example, a paragraph is written using
      <strong> <code>&lt;p&gt;</code></strong> to open and
      <strong> <code>&lt;/p&gt;</code></strong> to close. The text placed between
      these tags is what appears on the page as a paragraph.
    </p>

    <p>
      Some tags define the structure and importance of content. Headings, such
      as <strong><code>&lt;h1&gt;</code></strong> to
      <strong> <code>&lt;h6&gt;</code></strong>, are used to organize information
      from most important to least important. A well-structured page uses
      headings to guide users and make content easier to read.
    </p>

    <p>
      Other commonly used tags include
      <strong> <code>&lt;a&gt;</code></strong> for links,
      <strong> <code>&lt;img&gt;</code></strong> for images, and
      <strong> <code>&lt;p&gt;</code></strong> for text content. These elements
      form the core building blocks of most webpages and are used repeatedly
      across almost every site on the internet.
    </p>

    <p>
      HTML also includes elements that do not wrap content. These are called
      <strong> self-closing tags</strong>. Examples include
      <strong> <code>&lt;img /&gt;</code></strong> for images and
      <strong> <code>&lt;br /&gt;</code></strong> for line breaks. They perform
      specific tasks without needing a closing tag.
    </p>

    <p>
      Understanding common HTML tags and elements is essential for building
      clear and meaningful webpages. Once you know what each tag does, you can
      structure content properly, making your websites easier to style, easier
      to maintain, and easier for users to understand.
    </p>

  </div>

  {/* VIDEOS */}
  <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
    <iframe
      className="w-full h-56 rounded-2xl border"
      src="https://www.youtube.com/embed/UB1O30fR-EE"
      title="HTML Tags Explained"
      frameBorder="0"
      allowFullScreen
    ></iframe>

    <iframe
      className="w-full h-56 rounded-2xl border"
      src="https://www.youtube.com/embed/pQN-pnXPaVg"
      title="HTML Elements for Beginners"
      frameBorder="0"
      allowFullScreen
    ></iframe>

    <iframe
      className="w-full h-56 rounded-2xl border"
      src="https://www.youtube.com/embed/ok-plXXHlWw"
      title="Common HTML Tags Tutorial"
      frameBorder="0"
      allowFullScreen
    ></iframe>
   </div>

</div>
</>
)}

{currentTopic === 3 && (
  <>
<div className="mb-20">

  <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
    Semantic HTML and Why It Matters
  </h2>

    <div    className="
      space-y-7
      text-gray-700
      text-base sm:text-lg
      leading-[1.8]
      text-left md:text-justify
      hyphens-auto
    ">

    <p>
      Semantic HTML refers to the use of HTML tags that clearly describe the
      meaning of the content they contain. Instead of using generic tags like
      <strong> <code>&lt;div&gt;</code></strong> and
      <strong> <code>&lt;span&gt;</code></strong> everywhere, semantic HTML uses
      tags that explain what the content is meant to represent.
    </p>

    <p>
      Examples of semantic tags include
      <strong> <code>&lt;header&gt;</code></strong>,
      <strong> <code>&lt;nav&gt;</code></strong>,
      <strong> <code>&lt;main&gt;</code></strong>,
      <strong> <code>&lt;section&gt;</code></strong>,
      <strong> <code>&lt;article&gt;</code></strong>, and
      <strong> <code>&lt;footer&gt;</code></strong>. When someone reads your
      code, these tags immediately explain the role each part of the page plays.
    </p>

    <p>
      One key reason semantic HTML matters is readability. A semantic structure
      makes your code easier to understand, especially when projects grow larger
      or when multiple developers are working on the same website. You can
      quickly identify navigation areas, content sections, and page layout
      without guessing.
    </p>

    <p>
      Semantic HTML is also very important for accessibility. Screen readers and
      assistive technologies depend on semantic elements to understand the
      structure of a webpage. When semantic tags are used correctly, users who
      rely on these tools can navigate content more easily and efficiently.
    </p>

    <p>
      Search engines also benefit from semantic HTML. Tags like
      <strong> <code>&lt;article&gt;</code></strong> and
      <strong> <code>&lt;main&gt;</code></strong> help search engines understand
      what content is most important on a page. This improves how pages are
      indexed and can positively affect search engine rankings.
    </p>

    <p>
      Another advantage of semantic HTML is better structure and consistency
      across different devices and browsers. Browsers apply default behaviors to
      semantic elements, which helps ensure that pages display correctly on
      desktops, tablets, and mobile phones.
    </p>

    <p>
      In real-world development, semantic HTML encourages clean separation
      between structure and design. HTML focuses on meaning and layout, while
      CSS handles styling. This leads to cleaner code, easier debugging, and more
      maintainable projects.
    </p>

    <p>
      Overall, using semantic HTML is a best practice that makes websites more
      accessible, more professional, and easier to maintain. It helps developers,
      users, search engines, and assistive technologies understand content the
      right way.
    </p>

  </div>

  {/* VIDEOS */}
  <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
    <iframe
      className="w-full h-56 rounded-2xl border"
      src="https://www.youtube.com/embed/kGW8Al_cga4"
      title="Semantic HTML Explained"
      frameBorder="0"
      allowFullScreen
    ></iframe>

    <iframe
      className="w-full h-56 rounded-2xl border"
      src="https://www.youtube.com/embed/ZThq93Yuwd0"
      title="Why Semantic HTML Matters"
      frameBorder="0"
      allowFullScreen
    ></iframe>

    <iframe
      className="w-full h-56 rounded-2xl border"
      src="https://www.youtube.com/embed/GDzzIlRhEzM"
      title="Semantic HTML for Accessibility and SEO"
      frameBorder="0"
      allowFullScreen
    ></iframe>
   </div>

</div>
</>
)}
{currentTopic === 4 && (
  <>

<div className="mb-20">

  <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
    Accessibility and Best Practices
  </h2>

    <div    className="
      space-y-7
      text-gray-700
      text-base sm:text-lg
      leading-[1.8]
      text-left md:text-justify
      hyphens-auto
    ">

    <p>
      Web accessibility means building websites that can be used by everyone,
      including people with disabilities. This includes users who rely on screen
      readers, keyboard navigation, voice commands, or other assistive
      technologies to interact with the web.
    </p>

    <p>
      One of the most important accessibility practices is using proper HTML
      structure. Semantic elements like
      <strong> <code>&lt;header&gt;</code></strong>,
      <strong> <code>&lt;nav&gt;</code></strong>,
      <strong> <code>&lt;main&gt;</code></strong>, and
      <strong> <code>&lt;footer&gt;</code></strong> help assistive tools
      understand the layout and purpose of a webpage.
    </p>

    <p>
      Images should always include descriptive
      <strong> <code>alt</code></strong> text. The alt text explains what an image
      represents for users who cannot see it. If an image is purely decorative,
      the alt attribute should still be present but left empty to avoid confusion.
    </p>

    <p>
      Accessibility also involves making sure websites can be navigated using
      only a keyboard. Interactive elements like links, buttons, and form inputs
      should be reachable using the Tab key and should have visible focus states
      so users know where they are on the page.
    </p>

    <p>
      Using clear and meaningful text is another best practice. Link text such as
      “Click here” does not explain anything to screen readers. Instead, links
      should clearly describe their destination, making content easier to
      understand for all users.
    </p>

    <p>
      Proper heading order is also essential. Headings should follow a logical
      hierarchy from
      <strong> <code>&lt;h1&gt;</code></strong> to
      <strong> <code>&lt;h6&gt;</code></strong>. Skipping heading levels or using
      headings purely for styling can confuse assistive technologies.
    </p>

    <p>
      Best practices in HTML also include writing clean, readable, and
      maintainable code. This means using meaningful tag names, avoiding
      unnecessary nesting, and keeping structure simple and consistent across
      pages.
    </p>

    <p>
      When accessibility and best practices are followed, websites become more
      usable, more inclusive, and more professional. These practices improve
      user experience, help meet global web standards, and ensure your websites
      work well for everyone.
    </p>

  </div>

  {/* VIDEOS */}
  <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
    <iframe
      className="w-full h-56 rounded-2xl border"
      src="https://www.youtube.com/embed/20SHvU2PKsM"
      title="Web Accessibility Explained"
      frameBorder="0"
      allowFullScreen
    ></iframe>

    <iframe
      className="w-full h-56 rounded-2xl border"
      src="https://www.youtube.com/embed/Okz8Fqg6u7Y"
      title="HTML Accessibility Best Practices"
      frameBorder="0"
      allowFullScreen
    ></iframe>

    <iframe
      className="w-full h-56 rounded-2xl border"
      src="https://www.youtube.com/embed/0hqhAIjE_8I"
      title="Accessible Web Design Basics"
      frameBorder="0"
      allowFullScreen
    ></iframe>
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