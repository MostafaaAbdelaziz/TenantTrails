import React, { useEffect, useState } from "react";

function ReviewDialog({ onClose, onSubmit, initialReview = null }) {
  const [rating, setRating] = useState(initialReview?.rating || 0);
  const [body, setBody] = useState(initialReview?.text || "");

  useEffect(() => {
    setRating(initialReview?.rating || 0);
    setBody(initialReview?.text || "");
  }, [initialReview]);

  function handleSubmit() {
    if (rating === 0 || !body.trim()) return;

    onSubmit({
      ...initialReview,
      rating,
      text: body,
    });
    onClose();
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="review-dialog" onClick={(e) => e.stopPropagation()}>
        <h2>{initialReview ? "Edit Review" : "Write a Review"}</h2>

        <div className="star-input">
          {[1, 2, 3, 4, 5].map((n) => (
            <span
              key={n}
              onClick={() => setRating(n)}
              className={n <= rating ? "filled" : ""}
            >
              {n <= rating ? "★" : "☆"}
            </span>
          ))}
        </div>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Share your experience..."
        />

        <div className="review-dialog-actions">
          <button onClick={handleSubmit}>
            {initialReview ? "Save Changes" : "Submit"}
          </button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default ReviewDialog;