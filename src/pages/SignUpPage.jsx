import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "../index.css";

function SignUpPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { signUp } = useAuth();

  function handleDashboard(e) {
    e.preventDefault();
    signUp(name, email, password);
    navigate("/signin");
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">TenantTrails</h2>
        <p className="auth-subtitle">
         Create your account to submit reviews and comments.
        </p>

        <form onSubmit={handleDashboard}>

          <label className="auth-label">Full Name</label>
          <input
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            className="auth-input"
          />
          <label className="auth-label">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="auth-input"
          />
          <label className="auth-label">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            className="auth-input"
          />
          <label className="auth-label">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="********"
            className="auth-input"
          />

          <button type="submit" className="auth-button">
            Sign Up
          </button>
        </form>

        <p className="auth-footer">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/signin")}
            className="auth-link"
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignUpPage;