import React from "react";
import { reviews } from "../data/mockdata";

function RatingBreakdown({ apartmentId }) {
  const apartmentReviews = reviews.filter(
    (review) => review.apartmentId === apartmentId
  );

  const totalReviews = apartmentReviews.length;

  return (
    <div className="sidebar-card">
      {[5, 4, 3, 2, 1].map((stars) => {
        const count = apartmentReviews.filter(
          (review) => review.rating === stars
        ).length;

        const width = totalReviews ? `${(count / totalReviews) * 100}%` : "0%";

        return (
          <div className="breakdown-row" key={stars}>
            <span>{stars} ★</span>
            <div className="bar">
              <div className="fill" style={{ width }}></div>
            </div>
            <span>{count}</span>
          </div>
        );
      })}
    </div>
  );
}

export default RatingBreakdown;