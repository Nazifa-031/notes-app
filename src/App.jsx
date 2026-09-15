import Navbar from "./layout/Navbar";
import Create from "./components/Create";
import Display from "./components/Display";
import Edit from "./components/Edit";
import React, { useState, useEffect } from "react";

const App = () => {
  const [add, setAdd] = useState(false); // add btn is closed
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });
  const [editingNote, setEditingNote] = useState(null);

  useEffect(() => {if (notes.length === 0) {setAdd(true);}}, []); // runs once when the component mounts

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const deleteNote = (cardId) => {
    const filter = notes.filter((note) => note.id !== cardId);
    setNotes(filter);
  };

  const edit = (cardId) => {
    // edit is a function used to find which note is to be edited using button
    const edit = notes.find((note) => note.id === cardId);
    setEditingNote(edit); // so editing note is set to found the note to be edited
  };

  return (
    <>
      <Navbar setAdd={setAdd} />

      {editingNote ? (
        <Edit
          notes={notes}
          setNotes={setNotes}
          editingNote={editingNote}
          setEditingNote={setEditingNote}
        />
      ) : add ? (
        <Create notes={notes} setNotes={setNotes} setAdd={setAdd} />
      ) : (
        <Display notes={notes} deleteNote={deleteNote} edit={edit} />
      )}
    </>
  );
};

export default App;
