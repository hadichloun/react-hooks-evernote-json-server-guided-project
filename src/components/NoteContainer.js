import React, { useState, useEffect } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {
  const [notesAll, setnotesAll] = useState([])

  const [presentNote, selectNote] = useState("")

  const [isEditMode, toggleEditMode] = useState(false)

  const [isPresentationMode, toggleMode] = useState(false)

  const [searchNote, setSearch] = useState("")




  useEffect(() => {
    fetch("http://localhost:3000/notes")
    .then(response => response.json())
    .then(notesData => setnotesAll(notesData))
  }, [])

  const onClickSidebar = (note) => {
    selectNote(note)
    toggleMode(true)
    toggleEditMode(false)
  }

  const displayNote = notesAll.filter((note) => {
    if (searchNote === "") return true;
    return note.title.toUpperCase().includes(searchNote.toUpperCase()) //set uppercase and includes
  })

  

  return (
    <>
      <Search setSearch={setSearch} searchNote={searchNote} />
      <div className="container">
        <Sidebar notesAll={displayNote} onClickSidebar={onClickSidebar} setnotesAll={setnotesAll}/>
        <Content isEditMode={isEditMode} toggleEditMode={toggleEditMode} presentNote={presentNote} isPresentationMode={isPresentationMode}/>
      </div>
    </>
  );
}

export default NoteContainer;