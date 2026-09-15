import { useState } from "react";

const Edit = ({ editingNote, setEditingNote , setNotes }) => {
  const [title, setTitle] = useState(editingNote.title);
  const [content, setContent] = useState(editingNote.content);
  const updateObj = {
    id: editingNote.id,
    title: title,
    content: content,
  };
  // in create: setNotes((prevNote) => [...prevNote, noteObj]);
  const update = (prevNote) =>
    prevNote.map((note) => (note.id === editingNote.id ? updateObj : note));

  const handleSubmit = (e) => {
    e.preventDefault();
    setNotes(update);
    setEditingNote(null);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title"> Title </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="content"> Content </label>
        <input
          type="text"
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Edit;
