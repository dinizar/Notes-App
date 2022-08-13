import React from "react";
import Search from "./Search";

export default function Header({ onSearch }) {
  return (
    <div className="note-app__header">
      <h1><em className="material-icons">collections_bookmark</em>Noted! :)</h1>
      <Search onSearch={onSearch} />
    </div>
  );
}
