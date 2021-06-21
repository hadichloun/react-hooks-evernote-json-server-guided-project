import React from "react";
import NoteItem from "./NoteItem";

function NoteList( {notesAll, onClickSidebar} ) {
  return (
    <ul>
      {notesAll.map(note => <NoteItem key={note.id} note={note} onClickSidebar={onClickSidebar}/>)}
      
    </ul>
  );
}

export default NoteList;