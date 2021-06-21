import React from "react";

function NoteItem({ note, onClickSidebar }) {
  

  const handleSidebarClick = () => {
    onClickSidebar(note)
  }
  
  return (
    <li onClick={handleSidebarClick}>
      <h2>{note.title}</h2>
      <p>{note.body}...</p>
    </li>
  );
}

export default NoteItem;