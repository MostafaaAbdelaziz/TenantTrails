import { useState, React } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apartments, reviews } from "../data/mockdata";
import StarRating from "../components/StarRating";
import NavBar from "../components/NavBar";
import RatingBreakdown from "../components/RatingBreakdown";
import ReviewDialog from "../components/ReviewDialog";
import "../index.css";


function ApartmentDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  //Review dialog state and handler to pop up the review form when "Write a Review" is clicked
  const [showReviewDialog, setShowReviewDialog] = useState(false);

  function handleReviewSubmit(newReview) {
    console.log("submitted review:", newReview);
  }

  //Find the apartment based on the ID in the URL params
  const apartment = apartments.find((apt) => apt.id === Number(id));

  //using the apartment ID, filter the reviews to only those that belong to this apartment
  const apartmentReviews = reviews.filter(
    (review) => review.apartmentId === apartment.id
  );

  //helper function to split the reviewers first name and last name and return their initials for the avatar circle in the review list
  const getInitials = (name) =>
    name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase();

  return (
    <div className="detail-page">
        <NavBar />
      <main className="detail-shell">
        <button className="back-link" onClick={() => navigate("/dashboard")}>
          ← Back to all apartments
        </button>

        <section className="hero-card">
          <div className="hero-left">
            <h1>{apartment.name}</h1>
            <p className="hero-address">
              📍 {apartment.address} · {apartment.neighbourhood}
            </p>
            <p className="hero-description">{apartment.description}</p>
          </div>

          <div className="hero-rating">
            <div className="rating-number">{apartment.rating.toFixed(1)}</div>
            <div className="rating-stars">
              <StarRating rating={apartment.rating} />
            </div>
            <div className="rating-count">{apartment.reviewCount} reviews</div>
          </div>
        </section>

        <section className="detail-grid">
          <div className="detail-main">
            <div className="summary-card">
              <p className="section-label">AI-generated summary</p>
              <p>
                {apartment.summary && apartment.summary !== "No AI summary yet"
                  ? apartment.summary
                  : "No AI summary yet for this property."}
              </p>
            </div>

            <div className="issues-section">
              <h3>Key Issues</h3>
              <div className="tag-list">
                {apartment.tags.length > 0 ? (
                  apartment.tags.map((tag, index) => (
                    <span className="tag-pill" key={index}>
                      {tag}
                    </span>
                  ))
                ) : (
                  <span className="tag-pill muted">No tags yet</span>
                )}
              </div>
            </div>

        <section className="detail-grid">
          <div className="detail-main">
            <div className="reviews-card">
              <div className="reviews-header">
                <h3>Reviews ({apartmentReviews.length})</h3>
                <button
                  className="write-review-outline"
                  onClick={() => setShowReviewDialog(true)}
                >
                  + Write a Review
                </button>               
              </div>

              {apartmentReviews.length > 0 ? (
                apartmentReviews.map((review) => (
                  <div className="review-item" key={review.id}>
                    <div className="review-top">
                      <div className="review-user">
                        <div className="review-avatar">
                          {getInitials(review.user)}
                        </div>

                        <div>
                          <p className="review-name">{review.user}</p>
                          <p className="review-date">{review.date}</p>
                        </div>
                      </div>

                      <div className="review-stars">
                        <StarRating rating={review.rating} />                      
                        </div>
                    </div>
                    <p className="review-text">{review.text}</p>
                  </div>
                ))
              ) : (
                <p className="no-reviews">No reviews yet for this apartment.</p>
              )}
            </div>
          </div>
        </section>
        </div>
          <aside className="detail-sidebar">
            <div className="sidebar-card">
              <h3>Property Info: </h3>
              <div className="info-row">
                <span>Landlord: </span>
                <strong>{apartment.landlord}</strong>
              </div>
              <div className="info-row">
                <span>Year built: </span>
                <strong>{apartment.yearBuilt}</strong>
              </div>
              <div className="info-row">
                <span>Neighbourhood: </span>
                <strong>{apartment.neighbourhood}</strong>
              </div>
            </div>
            <div className="sidebar-card">
                <h3>Rating Breakdown</h3>
                <RatingBreakdown apartmentId={apartment.id} />
            </div>
            <button
              className="write-review-btn"
              onClick={() => setShowReviewDialog(true)}
            >
              Write a Review
            </button>

          </aside>
        </section>
      </main>

      {showReviewDialog && (
        <ReviewDialog
          apartmentId={apartment.id}
          onClose={() => setShowReviewDialog(false)}
          onSubmit={handleReviewSubmit}
        />
      )}

    </div>
  );
}
export default ApartmentDetail;