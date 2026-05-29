import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "../index.css";

function SignInPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleDashboard(e) {
    e.preventDefault();
    login(email);
    navigate("/dashboard");
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">TenantTrails</h2>
        <p className="auth-subtitle">
          See what past tenants had to say before you sign.
        </p>

        <form onSubmit={handleDashboard}>
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
            placeholder=""
            className="auth-input"
          />

          <button type="submit" className="auth-button">
            Sign In
          </button>
        </form>

        <p className="auth-footer">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="auth-link"
          >
            Create one
          </span>
        </p>
        <div className= "auth-demo">
        <h3 className="demo-title">Demo: alex@dal.ca / password123</h3>
      </div>

      </div>

      
    </div>
  );
}

export default SignInPage;