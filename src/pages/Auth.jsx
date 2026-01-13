import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Auth() {
    const navigate = useNavigate();
const [searchParams] = useSearchParams();
const course = searchParams.get("course");

const handleSubmit = (e) => {
  e.preventDefault();

  if (course === "frontend") navigate("/courses/frontend");
  if (course === "backend") navigate("/courses/backend");
  if (course === "fullstack") navigate("/courses/fullstack");
};

  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-6">
      <div className="bg-white w-full max-w-md rounded-xl shadow-md p-8">

        {/* HEADER */}
        <h2 className="text-2xl font-bold text-[#0B1C2D] mb-2">
          {isLogin ? "Welcome Back" : "Create an Account"}
        </h2>
        <p className="text-sm text-gray-600 mb-8">
          {isLogin
            ? "Log in to continue your application"
            : "Register to apply for our internship programmes"}
        </p>

        {/* FORM */}
   <form onSubmit={handleSubmit} className="space-y-5">


          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#0B1C2D]"
            />
          )}

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#0B1C2D]"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#0B1C2D]"
          />

          <button
            type="submit"
            className="w-full bg-[#0B1C2D] text-white py-2 rounded-md text-sm hover:bg-[#142B44] transition"
          >
            {isLogin ? "Log In" : "Create Account"}
          </button>
        </form>

        {/* TOGGLE */}
        <div className="mt-6 text-center text-sm text-gray-600">
          {isLogin ? (
            <>
              New here?{" "}
              <span
                className="text-[#B11226] font-medium cursor-pointer hover:underline"
                onClick={() => setIsLogin(false)}
              >
                Create an account
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                className="text-[#B11226] font-medium cursor-pointer hover:underline"
                onClick={() => setIsLogin(true)}
              >
                Log in
              </span>
            </>
          )}
        </div>

      </div>
    </section>
  );
}
