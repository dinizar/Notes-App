import React from "react";

export default function DeleteButton({ id, onDelete }) {
  return (
    <button className="note-item__delete-button" onClick={() => onDelete(id)}>
      <p><em className="material-icons">remove_circle_outline</em></p>
    </button>
  );
}
