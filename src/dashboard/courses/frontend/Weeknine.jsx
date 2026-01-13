import { useState } from "react";

export default function Weekone() {
   const [currentTopic, setCurrentTopic] = useState(0);

  return (
    <section className="bg-[#FAF7F2] min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-8">

       {/* HEADER */}
<div className="mb-16">
  <span className="text-sm font-bold uppercase tracking-wide text-red-600">
    Frontend Development · Week 9
  </span>

  <h1 className="text-4xl font-extrabold text-[#0A1F44] mt-4 mb-6">
    React State & Routing
  </h1>

  <p className="text-gray-700 max-w-3xl leading-relaxed">
    This week dives into managing dynamic data in React applications. You’ll learn how to track and update state, conditionally render components, navigate between pages using React Router, and structure your React apps for scalability and maintainability.
  </p>
</div>

{/* LEARNING OBJECTIVES */}
<div className="bg-white rounded-3xl border p-8 mb-12">
  <h2 className="text-xl font-bold text-[#0A1F44] mb-6">
    What you will learn
  </h2>

  <ul className="space-y-4 text-gray-700">
    <li>— Understanding React state and how to manage dynamic data</li>
    <li>— Conditional rendering of components based on state</li>
    <li>— Handling user input and forms with state</li>
    <li>— Navigating between pages using React Router</li>
    <li>— Structuring React applications for maintainability and scalability</li>
  </ul>
</div>
{currentTopic === 0 && (
  <>
    {/* SECTION: UNDERSTANDING REACT STATE AND DYNAMIC DATA */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Understanding React State and Managing Dynamic Data
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          In React, <strong>state</strong> is a fundamental concept that allows your components
          to be dynamic and interactive. Unlike static content, state represents data that
          can change over time in response to user actions, API responses, or other
          events in your application. Mastering state management is critical for building
          modern, responsive applications.
        </p>

        <p>
          Every functional component in React can maintain its own state using the
          <strong> useState</strong> hook. This hook gives you a pair: the current state value
          and a function to update that state. Whenever the state changes, React automatically
          re-renders the component to reflect the updated data.
        </p>

        <p>
          State is not limited to simple values like numbers or strings. You can store
          complex objects, arrays, or even nested data structures. However, it is important
          to treat state as <strong>immutable</strong>—instead of modifying it directly,
          always use the setter function to update it. This ensures predictable updates
          and triggers React's efficient rendering.
        </p>

        <p>
          Managing state effectively also involves thinking about <strong>component boundaries</strong>.
          Some state is local to a single component, while other state may need to
          be shared with child or sibling components. Advanced patterns, such as
          lifting state up or using context and reducers, allow you to structure
          your applications for clarity, reusability, and scalability.
        </p>

        <p>
          Understanding state deeply means not only being able to track and update
          values but also being able to anticipate the consequences of each change
          on the component tree. This forms the backbone of interactive UI and
          sets the stage for advanced topics like React Router, complex forms,
          and asynchronous data fetching.
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
// Using useState to track a counter
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment} className="mr-2">Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Managing complex state: list of tasks
import { useState } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Build a project", completed: false }
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <input 
            type="checkbox" 
            checked={task.completed} 
            onChange={() => toggleTask(task.id)} 
          />
          {task.title}
        </li>
      ))}
    </ul>
  );
}
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Updating nested state immutably
function Profile() {
  const [user, setUser] = useState({
    name: "Azeez",
    preferences: { theme: "light", notifications: true }
  });

  const toggleTheme = () => {
    setUser(prevUser => ({
      ...prevUser,
      preferences: {
        ...prevUser.preferences,
        theme: prevUser.preferences.theme === "light" ? "dark" : "light"
      }
    }));
  };

  return (
    <div>
      <h2>Current Theme: {user.preferences.theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
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
              src="https://www.youtube.com/embed/5m7V5T0q0EE"
              title="React useState Hook Explained"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              React useState Hook Explained
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how to create and update state in functional components.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/6IedV2Jg6N0"
              title="Managing Complex State in React"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Managing Complex State
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Handle arrays and objects in state with immutability best practices.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/0ZJgIjIuY7U"
              title="Advanced React State Patterns"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Advanced React State Patterns
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Explore advanced state techniques for scalable React apps.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}
{currentTopic === 1 && (
  <>
    {/* SECTION: CONDITIONAL RENDERING OF COMPONENTS */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Conditional Rendering of Components in React
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          In React, components can dynamically decide what to display based on certain conditions. This is called <strong>conditional rendering</strong>. Rather than rendering the same static UI all the time, conditional rendering lets your app respond intelligently to user actions, state changes, or fetched data.
        </p>

        <p>
          Conditional rendering can be done in multiple ways. The most common method is using JavaScript <strong>if-else</strong> statements, ternary operators, or logical <strong>&amp;&amp;</strong> operators inside JSX. This allows your UI to adapt dynamically, showing or hiding elements as needed.
        </p>

        <p>
          Conditional rendering is particularly useful for: authentication flows, showing loading spinners, toggling menus, or displaying error messages. It helps keep your UI intuitive and interactive, ensuring that users see exactly what they need at the right time.
        </p>

        <p>
          Advanced patterns include rendering different components entirely based on conditions, using <strong>switch statements</strong>, or creating <strong>higher-order components</strong> for reusable conditional logic. These techniques make your code cleaner, more maintainable, and scalable as your app grows.
        </p>

        <p>
          Mastering conditional rendering allows you to create truly dynamic React applications where the UI reacts seamlessly to changes in state, props, or external events. It’s a key step toward building responsive and professional user interfaces.
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
// Simple if-else using ternary
import { useState } from "react";

function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h2>
        {isLoggedIn ? "Welcome back, user!" : "Please log in."}
      </h2>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Conditional rendering with && operator
function Notifications({ messages }) {
  return (
    <div>
      <h2>Notifications</h2>
      {messages.length > 0 && (
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      )}
      {messages.length === 0 && <p>No new messages.</p>}
    </div>
  );
}
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Rendering different components conditionally
function Content({ userRole }) {
  if (userRole === "admin") return <AdminDashboard />;
  if (userRole === "editor") return <EditorDashboard />;
  return <GuestDashboard />;
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
              src="https://www.youtube.com/embed/6wHktg1xNms"
              title="React Conditional Rendering Basics"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Conditional Rendering Basics
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn simple techniques to show or hide elements based on conditions.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/EMfFdv1wos4"
              title="Advanced Conditional Rendering in React"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Advanced Conditional Rendering
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Explore if-else, ternaries, and rendering full components conditionally.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/0ZJgIjIuY7U"
              title="React Conditional Rendering Patterns"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Conditional Rendering Patterns
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn patterns for scalable conditional UI in React applications.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}

{currentTopic === 2 && (
  <>
    {/* SECTION: HANDLING USER INPUT AND FORMS WITH STATE */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Handling User Input and Forms with React State
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          In React, forms and user input are not just static—they are dynamic and interactive. Handling forms effectively means capturing user input, storing it in <strong>state</strong>, and responding to changes instantly. React’s <strong>useState</strong> hook allows us to manage form values seamlessly.
        </p>

        <p>
          Each input element in a React form can have a <strong>value</strong> tied to state and an <strong>onChange</strong> event handler. This creates a <strong>controlled component</strong>, where React has full control over the form data. Controlled components provide predictability, easy validation, and enable instant feedback as the user types.
        </p>

        <p>
          Advanced forms often include multiple input fields, checkboxes, radio buttons, select dropdowns, and textareas. By using a single state object or multiple states, you can efficiently manage complex forms. The key is to ensure each input field updates the correct part of state without unnecessary re-renders.
        </p>

        <p>
          Beyond capturing data, handling forms also involves validation, error messages, and conditional rendering of UI elements. For instance, you can disable a submit button until all required fields are filled, or display live validation messages as the user types. This improves usability and creates professional, user-friendly forms.
        </p>

        <p>
          Mastering user input and forms is crucial for building interactive applications. From login forms to complex surveys, React state management ensures that your app responds instantly and accurately to user actions.
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
// Controlled input example
import { useState } from "react";

function NameForm() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded"
      />
      <p>Hello, {name || "Guest"}!</p>
    </div>
  );
}
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Form with multiple inputs
function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Register</button>
    </form>
  );
}
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Conditional feedback example
function FeedbackForm() {
  const [feedback, setFeedback] = useState("");

  return (
    <div>
      <textarea
        placeholder="Your feedback..."
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      />
      {feedback.length > 0 && (
        <p>Thank you for your input! You typed {feedback.length} characters.</p>
      )}
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
              src="https://www.youtube.com/embed/1vXf8BJLmVQ"
              title="React Controlled Components"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Controlled Components in React
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how to bind form input to state for dynamic interactivity.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/7CqJlxBYj-M"
              title="Handling Forms in React"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Handling Forms in React
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Advanced form handling with multiple inputs and state management.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/w7ejDZ8SWv8"
              title="React Form Validation and Feedback"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Form Validation & Feedback
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how to validate input and provide user feedback in real time.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}

{currentTopic === 3 && (
  <>
    {/* SECTION: REACT ROUTER – MANAGING MULTIPLE PAGES */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        React Router: Navigating and Managing Multiple Pages
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          Modern web applications are rarely just a single page. Users expect to navigate between sections seamlessly—like visiting a homepage, dashboard, or profile page—without the browser reloading. <strong>React Router</strong> makes this possible by enabling client-side routing, which means navigation is handled entirely in React.
        </p>

        <p>
          React Router works by mapping <strong>URLs (paths)</strong> to specific React components. Each route represents a “page” in your application. Instead of the browser requesting a new HTML file, React Router renders the component for the requested path while keeping the application running smoothly in the background. This creates a fast, seamless user experience.
        </p>

        <p>
          Using React Router, you can handle <strong>dynamic routes</strong>, nested routes, and protected routes. Dynamic routes allow you to pass parameters in the URL, like a user ID or article slug, making pages highly customizable. Nested routes let you create layouts where some components (like sidebars or headers) persist while others change. Protected routes are essential for handling authentication and restricting access to certain pages.
        </p>

        <p>
          Another powerful feature is <strong>navigation without reloads</strong>. With the <code>&lt;Link&gt;</code> component, users can click buttons or links and move between views instantly. This is far superior to traditional HTML anchor tags that trigger full-page reloads, ensuring a smooth, app-like experience.
        </p>

        <p>
          Mastering React Router is crucial for building modern, multi-page single-page applications (SPAs). By combining React state, props, and routing, you can create complex applications with multiple views, dynamic data, and persistent layouts that feel fast, responsive, and highly interactive.
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
// Setting up basic routes
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile/123">Profile</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:userId" element={<Profile />} />
      </Routes>
    </Router>
  );
}
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Accessing dynamic route params
import { useParams } from "react-router-dom";

function Profile() {
  const { userId } = useParams();

  return (
    <div>
      <h2>User Profile</h2>
      <p>Profile ID: {userId}</p>
    </div>
  );
}
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Nested routes example
import { Outlet, Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <Link to="stats">Stats</Link>
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet /> {/* Renders nested route component */}
    </div>
  );
}

// In Routes:
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="stats" element={<Stats />} />
  <Route path="settings" element={<Settings />} />
</Route>
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
              src="https://www.youtube.com/embed/Law7wfdg_ls"
              title="React Router Basics"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              React Router Basics
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how to set up routes and navigate between pages seamlessly.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/mY2Lzch4A0o"
              title="Dynamic Routes in React Router"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Dynamic Routes
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn to pass and use URL parameters for dynamic page content.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/GExL4NE6tFs"
              title="Nested Routes & Layouts in React"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Nested Routes & Layouts
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Understand how to persist layouts and render nested components.
            </p>
          </div>
        </div>

      </div>
    </div>
  </>
)}
{currentTopic === 4 && (
  <>
    {/* SECTION: CONDITIONAL RENDERING & APPLICATION STRUCTURE */}
    <div className="mb-16">

      <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
        Conditional Rendering & Application Structure in React
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          As applications grow, not all UI elements are always visible. Maybe you want to show a welcome message only when the user is logged in, or display a loading spinner while fetching data. <strong>Conditional rendering</strong> allows React to render components, elements, or messages based on state, props, or computed conditions. This creates dynamic, intelligent UIs that adapt to user interactions.
        </p>

        <p>
          React provides multiple ways to handle conditional rendering. You can use JavaScript <code>if/else</code> statements, the <code>ternary operator</code>, logical <code>&amp;&amp;</code> operators, or even functions that return components conditionally. This flexibility lets you choose the approach that keeps your code clean, readable, and maintainable.
        </p>

        <p>
          Beyond rendering logic, structuring a React application properly is crucial for scalability. Splitting your app into smaller, reusable components, organizing folders for pages, components, hooks, and assets, and keeping a consistent naming convention improves maintainability and teamwork efficiency. A well-structured app is easier to debug, expand, and integrate with APIs or state management solutions.
        </p>

        <p>
          By combining conditional rendering with a solid application structure, your React apps become intuitive and responsive. Components can react instantly to changes in state, props, or user interactions, while your code remains organized and scalable for future growth.
        </p>

        <p>
          Mastering these concepts ensures you can build professional-grade React applications where UI logic is clear, predictable, and maintainable.
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
// Using ternary operator for conditional rendering
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h2>Welcome Back!</h2> : <h2>Please Sign In</h2>}
    </div>
  );
}
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Using logical && operator for simple conditions
function Notification({ messages }) {
  return (
    <div>
      {messages.length > 0 && <p>You have {messages.length} new messages!</p>}
    </div>
  );
}
            `}</code>
          </pre>
        </div>

        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>{`
// Structuring a small React app with conditional views
import Header from "./Header";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

function App({ user }) {
  return (
    <div>
      <Header />
      {user ? (
        <div className="flex">
          <Sidebar />
          <Dashboard user={user} />
        </div>
      ) : (
        <p>Please log in to access the dashboard.</p>
      )}
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
              src="https://www.youtube.com/embed/2d7s3spWAzo"
              title="React Conditional Rendering Basics"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Conditional Rendering in React
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Learn how to dynamically display content based on state or props.
            </p>
          </div>
        </div>

        {/* VIDEO 2 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/mE2MQZkPAsA"
              title="React App Structure & Component Organization"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              App Structure & Component Organization
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Tips on organizing React projects for scalability and readability.
            </p>
          </div>
        </div>

        {/* VIDEO 3 */}
        <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/O6P86uwfdR0"
              title="React Conditional Rendering Advanced"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-[#0A1F44]">
              Advanced Conditional Rendering
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Explore advanced patterns and best practices for rendering logic.
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