import React from "react";
import { apartments } from "../data/mockdata";
import { useNavigate } from "react-router-dom";
import "../index.css";


function Dashboard() {

  const navigate = useNavigate();

  function handleSignOut() {
  navigate("/signin");
}

  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <div className="dashboard-left">
          <div className="dashboard-brand">TenantTrails</div>

          <div className="dashboard-searchbar">
            <input
              type="text"
              placeholder="🔍 Search apartments by address or neighbourhood..."
            />
          </div>
        </div>

        <div className="dashboard-profile">
          <div className="profile-avatar">AM</div>
          <span className="profile-name">Alex</span>
          <button className="profile-signout" onClick={handleSignOut}>
            Sign out
          </button>
        </div>
      </header>

      <main className="dashboard-main">
        <section className="dashboard-intro">
          <h1>Apartments in Halifax</h1>
          <p>Honest reviews from real tenants. Read before you rent.</p>

          <div className="dashboard-stats">
            <span>5 apartments</span>
            <span>13 reviews</span>
            <span>4 neighbourhoods</span>
          </div>

          <div className="dashboard-controls">
            <button className="drop-down">All Neighbourhoods   v</button>
            <button className="drop-down">Highest Rated   v</button>
          </div>
        </section>

        <section className="apartments-grid">
          {apartments.map((apartment) => (
            <div className="apartment-card" key={apartment.id} onClick={() => navigate(`/apartment/${apartment.id}`)}>
              <div className="apartment-image-wrap">
                <img
                  src={apartment.image}
                  alt={apartment.name}
                  className="apartment-image"
                />
                <div className="rating">⭐ {apartment.rating}</div>
              </div>

              <div className="apartment-content">
                <h3>{apartment.name}</h3>
                <p className="apartment-address">
                  📍 {apartment.address} · {apartment.neighbourhood}
                </p>

                <div className="apartment-tags">
                  {apartment.tags?.length ? (
                    apartment.tags.map((tag, index) => (
                      <span key={index} className="tag">
                        {tag}
                      </span>
                    ))
                  ) : (
                    <span className="tag">No AI summary yet</span>
                  )}
                </div>

                <div className="apartment-footer">
                  <span>{apartment.reviewCount} reviews</span>
                  <span className="footer-stars">★★★★★</span>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default Dashboard;