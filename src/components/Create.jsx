import { useState } from "react";

const Create = ({ setAdd, notes, setNotes }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const noteObj = {
    id: crypto.randomUUID(),
    title: title,
    content: content,
    date : Date.now()
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAdd(false);
    setNotes((prevNote) => [...prevNote, noteObj]);
    console.log(noteObj);
    console.log(notes);
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
        <button type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default Create;
