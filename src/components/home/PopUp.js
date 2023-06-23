import React from "react";
import "./PopUp.css";

function PopUp({ onCancel, onConfirm }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Confirm Deletion?</h2>
        <div className="popupButtons">
          <button className="cancel-button" onClick={onCancel}>
            Cancel
          </button>
          <button className="confirm-button" onClick={onConfirm}>
            Delete
          </button>
        </div>

      </div>
    </div>
  );
}

export default PopUp;
