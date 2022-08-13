import React from "react";

export default function ArchiveButton({ id, onArchive, archived }) {
  return (
    <button className="note-item__archive-button" onClick={() => onArchive(id)}>
      <p>{archived ? <em className="material-icons">outbound</em> : <em className="material-icons">save_alt</em>}</p>
    </button>
  );
}
