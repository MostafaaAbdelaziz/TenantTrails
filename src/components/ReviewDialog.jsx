import React, { useState } from "react";

function ReviewDialog({ onClose, onSubmit }) {
  const [rating, setRating] = useState(0);
  const [body, setBody] = useState("");

  function handleSubmit() {
    if (rating === 0 || !body.trim()) return;

    onSubmit({ rating, body });
    onClose();
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="review-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Write a Review</h2>

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
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default ReviewDialog;