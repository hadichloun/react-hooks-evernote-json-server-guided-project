  
import React from "react";
import NoteList from "./NoteList";

function Sidebar({ notesAll, onClickSidebar, setnotesAll }) {
  
  const handleNewNote = () => {
    let newNote = {
      userId: 1,
      title: "default",
      body: "placeholder"
    }
    setnotesAll([...notesAll, newNote])
    fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(newNote),
    })
  }

  return (
    <div className="master-detail-element sidebar">
      <NoteList notesAll={notesAll} onClickSidebar={onClickSidebar} />
      <button onClick={handleNewNote}>New</button>
    </div>
  );
}

export default Sidebar;