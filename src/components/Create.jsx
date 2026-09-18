import { useState } from "react";
 
const Create = ({ setAdd, notes, setNotes }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();
 
    const noteObj = {
      id: crypto.randomUUID(),
      title: title,
      content: content,
      date: Date.now(),
    };
 
    setAdd(false);
    setNotes((prevNote) => [...prevNote, noteObj]);
  };
 
  return (
    // max-w-lg + mx-auto: caps the form's width on big screens and centers it,
    // instead of a text input stretching edge-to-edge on a wide monitor
    <div className="max-w-lg mx-auto mt-8 px-6">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-(--surface-color) rounded-3xl p-6 shadow-sm"
      >
        <div className="flex flex-col gap-1">
          <label
            htmlFor="title"
            className="text-xs font-semibold text-(--secondary-text-color) uppercase tracking-wide"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-(--base-color) text-(--text-color)
                       border border-(--secondary-text-color)/25 rounded-xl
                       px-4 py-2 text-lg font-semibold outline-none
                       focus:border-(--brand-color) focus:ring-2 focus:ring-(--brand-color)/20
                       transition-colors duration-150"
          />
        </div>
 
        <div className="flex flex-col gap-1">
          <label
            htmlFor="content"
            className="text-xs font-semibold text-(--secondary-text-color) uppercase tracking-wide"
          >
            Content
          </label>
          {/* textarea instead of input: lets note content wrap over multiple lines.
              resize-none stops the user dragging it huge; min-h/max-h keeps it from
              collapsing too short or growing past the card comfortably */}
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={6}
            className="bg-(--base-color) text-(--secondary-text-color)
                       border border-(--secondary-text-color)/25 rounded-xl
                       px-4 py-2 text-base leading-relaxed outline-none resize-none
                       min-h-32 max-h-64 overflow-y-auto
                       focus:border-(--brand-color) focus:ring-2 focus:ring-(--brand-color)/20
                       transition-colors duration-150"
          />
        </div>
 
        <button
          type="submit"
          className="self-end bg-(--brand-color) text-(--base-color) font-semibold text-sm
                     px-5 py-2 rounded-full shadow-sm
                     hover:shadow-md hover:-translate-y-0.5
                     active:translate-y-0 active:shadow-sm
                     transition-all duration-200 cursor-pointer"
        >
          Create
        </button>
      </form>
    </div>
  );
};
 
export default Create;
 
