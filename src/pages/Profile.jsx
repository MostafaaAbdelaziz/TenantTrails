import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { reviews, apartments } from "../data/mockdata";
import NavBar from "../components/NavBar";
import StarRating from "../components/StarRating";
import ReviewDialog from "../components/ReviewDialog";
import "../index.css";

function Profile() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [showEditDialog, setShowEditDialog] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);

  const myReviews = reviews.filter((r) => r.user === user.name);

  const initials = user.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  function getApartmentName(apartmentId) {
    return apartments.find((a) => a.id === apartmentId)?.name || "Apartment";
  }

  function truncateText(text, maxLength = 95) {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  }

  function handleDelete(reviewId) {
    console.log("delete review", reviewId);
  }

  function handleEdit(review) {
    setSelectedReview(review);
    setShowEditDialog(true);
  }

  function handleUpdateReview(updatedReview) {
    const index = reviews.findIndex((r) => r.id === updatedReview.id);

    if (index !== -1) {
      reviews[index] = {
        ...reviews[index],
        rating: updatedReview.rating,
        text: updatedReview.text,
      };
    }

    setShowEditDialog(false);
    setSelectedReview(null);
  }

  function handleView(apartmentId) {
    navigate(`/apartment/${apartmentId}`);
  }

  return (
    <div className="profile-page">
      <NavBar />

      <main className="profile-shell">
        <button className="back-link" onClick={() => navigate("/dashboard")}>
          ← Back to apartments
        </button>

        <section className="profile-summary-card">
          <div className="profile-summary-left">
            <div className="profile-summary-avatar">{initials}</div>

            <div>
              <h1 className="profile-summary-name">{user.name}</h1>
              <p className="profile-summary-email">{user.email}</p>
            </div>
          </div>

          <div className="profile-summary-stats">
            <div className="profile-stat">
              <span className="profile-stat-number">{myReviews.length}</span>
              <span className="profile-stat-label">Reviews</span>
            </div>

            <div className="profile-stat">
              <span className="profile-stat-number">0</span>
              <span className="profile-stat-label">Comments</span>
            </div>
          </div>
        </section>

        <section className="profile-reviews-section">
          <h2 className="profile-reviews-title">Your Reviews</h2>

          <div className="profile-reviews-list">
            {myReviews.map((review) => (
              <div className="profile-review-card" key={review.id}>
                <div className="profile-review-content">
                  <h3 className="profile-review-apartment">
                    {getApartmentName(review.apartmentId)}
                  </h3>

                  <div className="profile-review-stars">
                    <StarRating rating={review.rating} />
                  </div>

                  <p className="profile-review-text">
                    {truncateText(review.text)}
                  </p>
                </div>

                <div className="profile-review-actions">
                  <button
                    className="profile-action view"
                    onClick={() => handleView(review.apartmentId)}
                  >
                    View
                  </button>

                  <button
                    className="profile-action edit"
                    onClick={() => handleEdit(review)}
                  >
                    Edit
                  </button>

                  <button
                    className="profile-action delete"
                    onClick={() => handleDelete(review.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {showEditDialog && (
        <ReviewDialog
          initialReview={selectedReview}
          onClose={() => {
            setShowEditDialog(false);
            setSelectedReview(null);
          }}
          onSubmit={handleUpdateReview}
        />
      )}
    </div>
  );
}

export default Profile;
