import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Website from "./pages/Website";
import InternshipHub from "./pages/InternshipHub";
import Auth from "./pages/Auth";

import Frontend from "./pages/courses/Frontend";
import Backend from "./pages/courses/Backend";
import Fullstack from "./pages/courses/Fullstack";

import AIIntegration from "./pages/AIIntegration";
import PublicPlatforms from "./pages/PublicPlatforms";

import DashboardLayout from "./dashboard/DashboardLayout";
import DashboardHome from "./dashboard/DashboardHome";
import SideBar from "./dashboard/SideBar";
import TopBar from "./dashboard/TopBar";
import FrontendModule from "./dashboard/courses/frontend/FrontendModule";
import BackendModule from "./dashboard/courses/backend/BackendModule";
import Weekone from "./dashboard/courses/frontend/Weekone";
import Weektwo from "./dashboard/courses/frontend/Weektwo";
import Weekthree from "./dashboard/courses/frontend/Weekthree";
import Weekfour from "./dashboard/courses/frontend/Weekfour";
import Weekfive from "./dashboard/courses/frontend/Weekfive";
import Weeksix from "./dashboard/courses/frontend/Weeksix";
import Weekseven from "./dashboard/courses/frontend/Weekseven";
import Weekeight from "./dashboard/courses/frontend/Weekeight";
import Weeknine from "./dashboard/courses/frontend/Weeknine";
import Weekten from "./dashboard/courses/frontend/Weekten";
import Weekoneback from "./dashboard/courses/backend/Weekoneback";
import Weektwoback from "./dashboard/courses/backend/Weektwoback";
import Weekthreeback from "./dashboard/courses/backend/Weekthreeback";
import Weekfourback from "./dashboard/courses/backend/Weekfourback";
import Weekfiveback from "./dashboard/courses/backend/Weekfiveback";
import Weeksixback from "./dashboard/courses/backend/Weeksixback";
import Weeksevenback from "./dashboard/courses/backend/Weeksevenback";
import Weekeightback from "./dashboard/courses/backend/Weekeightback";
import Weeknineback from "./dashboard/courses/backend/Weeknineback";
import Weektenback from "./dashboard/courses/backend/Weektenback";
import BookUs from "./pages/BookUs";
import YourQuote from "./pages/YourQuote";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Newsletter from "./components/Newsletter";
import NewsletterModal from "./components/NewsletterModal";


function App() {
  return (
    <Router>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
          <Route path="/book-us" element={<BookUs />} />
          <Route path="/your-quote" element={<YourQuote />} />
          <Route path="/contact" element={<Contact />} />
        <Route path="/website" element={<Website />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/internship" element={<InternshipHub />} />
        <Route path="/about" element={<About />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/newsletter-modal" element={<NewsletterModal />} />

        <Route path="/courses/frontend" element={<Frontend />} />
        <Route path="/courses/backend" element={<Backend />} />
        <Route path="/courses/fullstack" element={<Fullstack />} />

        <Route path="/ai-integration" element={<AIIntegration />} />
        <Route path="/public-platforms" element={<PublicPlatforms />} />

       {/* DASHBOARD ROUTES */}
<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <DashboardLayout />
    </ProtectedRoute>
  }
>


  {/* Dashboard home with track */}
  <Route path=":track" element={<DashboardHome />} />

  {/* Default dashboard (optional) */}
  <Route index element={<DashboardHome />} />
        <Route path ="sidebar" element={<SideBar />} />
        <Route path ="topbar" element={<TopBar />} />
        <Route path ="courses/frontend" element={<FrontendModule />} />
        <Route path ="courses/backend" element={<BackendModule />} />
        <Route path ="courses/frontend/weekone" element={<Weekone />} />
        <Route path ="courses/frontend/weektwo" element={<Weektwo />} />
        <Route path ="courses/frontend/weekthree" element={<Weekthree />} />
        <Route path ="courses/frontend/weekfour" element={<Weekfour />} />
        <Route path = "courses/frontend/Weekfive" element={<Weekfive />} />
        <Route path = "courses/frontend/Weeksix" element={<Weeksix />} />
        <Route path = "courses/frontend/Weekseven" element={<Weekseven />} />
        <Route path = "courses/frontend/Weekeight" element = {<Weekeight/>} />
        <Route path = "courses/frontend/Weeknine" element = {<Weeknine/>} />
        <Route path = "courses/frontend/Weekten" element = {<Weekten/>} />
        <Route path = "courses/backend/Weekoneback" element = {<Weekoneback/>} />
        <Route path = "courses/backend/Weektwoback" element = {<Weektwoback/>} />
        <Route path = "courses/backend/Weekthreeback" element = {<Weekthreeback/>} />
        <Route path = "courses/backend/Weekfourback" element = {<Weekfourback/>} />
        <Route path = "courses/backend/Weekfiveback" element = {<Weekfiveback/>} />
        <Route path = "courses/backend/Weeksixback" element = {<Weeksixback/>} />
        <Route path = "courses/backend/Weeksevenback" element = {<Weeksevenback/>} />
        <Route path = "courses/backend/Weekeightback" element = {<Weekeightback/>} />
        <Route path = "courses/backend/Weeknineback" element = {<Weeknineback/>} />
        <Route path = "courses/backend/Weektenback" element = {<Weektenback/>} />
    

          {/* later */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
