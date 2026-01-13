import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
export default function DashboardHome() {
  const { track } = useParams();
    const weeks = Array.from({ length: 11 }, (_, i) => ({
  id: i + 1,
  title: `Week ${i + 1}`,
  description: `Learning materials, videos, and assignments for week ${i + 1}`,
}));
  return (
    <div className="space-y-10">

      {/* HERO CARD */}
      <div className="bg-gradient-to-r from-[#0B132B] to-[#1E293B] rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-3">
          Web Development Internship
        </h2>
        <p className="text-sm max-w-2xl text-gray-200">
          This programme is designed to train aspiring developers with
          real-world skills in frontend, backend, and full-stack development.
        </p>
      </div>

      {/* OVERVIEW */}
      <section>
        <h3 className="text-lg font-semibold mb-6 text-[#0F172A]">
          Overview
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <StatCard
            title="Enrolled Programs"
            value="1"
          />
          <StatCard
            title="Total Modules"
            value="10"
          />
          <StatCard
            title="Completed Modules"
            value="1"
          />
          <StatCard
            title="Points Earned"
            value="20"
          />

        </div>
      </section>

      {/* ENROLLED COURSES */}
 <section>
  <h3 className="text-lg font-semibold mb-6 text-[#0F172A]">
    Enrolled Courses
  </h3>

  <div className="grid md:grid-cols-3 gap-6">

    <CourseCard
      title="Frontend Development"
      duration="4 Weeks"
      status="In Progress"
      link="/dashboard/courses/frontend"
      disabled={track !== "frontend"}
    />

    <CourseCard
      title="Backend Development"
      duration="10 Weeks"
      status="In Progress"
      link="/dashboard/courses/backend"
      disabled={track !== "backend"}
    />

    <CourseCard
      title="Full-Stack Development"
      duration="Coming Soon"
      link="/dashboard/courses/fullstack"
      disabled={track !== "fullstack"}
    />

  </div>
</section>



    </div>
  );
}

/* SMALL COMPONENTS */

function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border">
      <p className="text-sm text-gray-500 mb-2">{title}</p>
      <h4 className="text-2xl font-bold text-[#0B132B]">{value}</h4>
    </div>
  );
}

function CourseCard({ title, duration, status, disabled, link }) {
  const Wrapper = disabled ? "div" : Link;

  return (
    <Wrapper
      to={link}
      className={`rounded-xl p-6 border bg-white ${
        disabled ? "opacity-50" : "hover:shadow-md cursor-pointer"
      } transition block`}
    >
      <h4 className="font-semibold text-[#0B132B] mb-2">
        {title}
      </h4>

      <p className="text-sm text-gray-600 mb-4">
        {duration}
      </p>

      {!disabled ? (
        <span className="text-sm font-medium text-[#B11226]">
          {status}
        </span>
      ) : (
        <span className="text-sm text-gray-400">
          Not available yet
        </span>
      )}
    </Wrapper>
  );
}

