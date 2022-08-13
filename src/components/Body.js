import React from "react";
import Create from "./Create";
import NoteList from "./NoteList";

export default function Body({ addNote, notes, onDelete, onArchive }) {
  return (
    <div className="note-app__body">
      <h2><em className="material-icons">add_circle</em>Create Note</h2>
      <Create addNote={addNote} />
      <h2><em className="material-icons">wysiwyg</em>Note</h2>
      <NoteList notes={notes.filter((note) => note.archived === false)} onDelete={onDelete} onArchive={onArchive} />
      <h2><em className="material-icons">archive</em>Note Archive</h2>
      <NoteList notes={notes.filter((note) => note.archived === true)} onDelete={onDelete} onArchive={onArchive} />
    </div>
  );
}
