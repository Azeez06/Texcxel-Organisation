import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import api from "../api/axios"; // ✅ adjust path if your folder differs

export default function Auth() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const course = searchParams.get("course"); // frontend | backend | fullstack

  const [isLogin, setIsLogin] = useState(true);

  // ✅ form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ UX state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const goToCourse = () => {
    if (course === "frontend") return navigate("/courses/frontend");
    if (course === "backend") return navigate("/courses/backend");
    if (course === "fullstack") return navigate("/courses/fullstack");
    // fallback if no course query param
    return navigate("/dashboard");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (isLogin) {
        const res = await api.post("/auth/login", { email, password });
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user)); // optional
        goToCourse();
      } else {
        const res = await api.post("/auth/register", { name, email, password });
        // After register, you can auto-login OR just switch to login:
        setIsLogin(true);
        setError("Account created. Please log in.");
        // Optional: auto-login immediately (uncomment below if you want)
        // const loginRes = await api.post("/auth/login", { email, password });
        // localStorage.setItem("token", loginRes.data.token);
        // localStorage.setItem("user", JSON.stringify(loginRes.data.user));
        // goToCourse();
      }
    } catch (err) {
      const msg =
        err?.response?.data?.message ||
        err?.message ||
        "Something went wrong";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-6">
      <div className="bg-white w-full max-w-md rounded-xl shadow-md p-8">
        {/* HEADER */}
        <h2 className="text-2xl font-bold text-[#0B1C2D] mb-2">
          {isLogin ? "Welcome Back" : "Create an Account"}
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          {isLogin
            ? "Log in to continue your application"
            : "Register to apply for our internship programmes"}
        </p>

        {/* ERROR / INFO */}
        {error && (
          <div className="mb-5 text-sm border border-red-200 bg-red-50 text-red-700 px-4 py-2 rounded-md">
            {error}
          </div>
        )}

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#0B1C2D]"
              required
            />
          )}

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#0B1C2D]"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#0B1C2D]"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0B1C2D] text-white py-2 rounded-md text-sm hover:bg-[#142B44] transition disabled:opacity-60"
          >
            {loading ? "Please wait..." : isLogin ? "Log In" : "Create Account"}
          </button>
        </form>

        {/* TOGGLE */}
        <div className="mt-6 text-center text-sm text-gray-600">
          {isLogin ? (
            <>
              New here?{" "}
              <span
                className="text-[#B11226] font-medium cursor-pointer hover:underline"
                onClick={() => {
                  setError("");
                  setIsLogin(false);
                }}
              >
                Create an account
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                className="text-[#B11226] font-medium cursor-pointer hover:underline"
                onClick={() => {
                  setError("");
                  setIsLogin(true);
                }}
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
