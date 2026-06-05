import React from "react";
import { apartments } from "../data/mockdata";
import { useNavigate } from "react-router-dom";
import StarRating from "../components/StarRating";
import NavBar from "../components/NavBar";
import "../index.css";


function Dashboard() {

  const navigate = useNavigate();

  return (
    <div className="dashboard-page">
      <NavBar />

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
                  <StarRating rating={apartment.rating} />
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