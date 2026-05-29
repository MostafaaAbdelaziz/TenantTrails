import React from 'react';
import { useNavigate } from "react-router-dom";
function HomePage() {

    const navigate = useNavigate();

    function handleSignIn() {
        navigate("/signin");
    }

    function handleSignUp() {
        navigate("/signup");
    }

return (
    <div className="app">
      <nav className="header">
        <div className="logo">TenantTrails</div>
        <div className="header-buttons">
          <button className="signin-btn" onClick={handleSignIn}>
            Sign in
          </button>
          <button className="create-account-btn" onClick={handleSignUp}>
            Get Started
          </button>
        </div>
      </nav>

      <section className="middle-section">
        <div className="launching-text">
          Launching in Halifax, Nova Scotia
        </div>
        <h1>
          Know what <br />
          you’re signing <br />
          before you <br />
          sign it.
        </h1>
        <p> Read honest reviews from past tenants. See AI-generated summaries. Make informed decisions about where you live</p>
        <div className="middle-section-buttons">
          <button className="create-account-btn large" onClick={handleSignUp}>
            Create Free Account
          </button>
          <button className="signin-btn large" onClick={handleSignIn}>
            Sign In
          </button>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <div className="feature-icon">⭐</div>
          <h3>Verified Reviews</h3>
          <p>
            Real ratings with photos and videos from past tenants
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🤖</div>
          <h3>AI Summaries</h3>
          <p>Key issues and sentiment extracted from every review.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💬</div>
          <h3>Ask Questions</h3>
          <p>Comment on reviews and get answers from past tenants</p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;

