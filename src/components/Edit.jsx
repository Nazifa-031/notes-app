import { useState } from "react";

const Edit = ({ editingNote, setEditingNote, setNotes }) => {
  const [title, setTitle] = useState(editingNote.title);
  const [content, setContent] = useState(editingNote.content);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedNote = {
      id: editingNote.id,
      title: title,
      content: content,
      date: editingNote.date, // keep original creation date, don't overwrite on edit
    };

    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === editingNote.id ? updatedNote : note))
    );
    setEditingNote(null);
  };

  return (
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

        
        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={() => setEditingNote(null) }
            className="text-(--secondary-text-color) text-sm font-semibold
                       hover:text-(--text-color) transition-colors duration-150 cursor-pointer"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="bg-(--brand-color) text-(--base-color) font-semibold text-sm
                       px-5 py-2 rounded-full shadow-sm
                       hover:shadow-md hover:-translate-y-0.5
                       active:translate-y-0 active:shadow-sm
                       transition-all duration-200 cursor-pointer"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;