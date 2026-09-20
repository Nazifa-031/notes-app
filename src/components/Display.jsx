import { FaTrash, FaEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const Display = ({ notes, deleteNote, edit, view }) => {
  // empty state: shown when search/filter leaves nothing to display, or when there are simply no notes yet
  if (notes.length === 0) {
    return (
      <p className="text-center text-(--secondary-text-color) mt-16">
        No notes found.
      </p>
    );
  }

  return (
    <>
      <div className="h-full mt-4 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6">
        {notes.map((n) => (
          <div
            key={n.id}
            className="flex flex-col gap-0.5 h-80 rounded-3xl bg-(--surface-color)
                     px-6 py-2 mt-4 shadow-sm hover:shadow-lg hover:-translate-y-1
                     transition-all duration-200"
          >
            <div className="flex flex-col flex-1 min-h-0 mb-1">
              <h3 className="text-2xl first-letter:uppercase lowercase font-bold overflow-x-auto scrollbar-hide truncate">
                {n.title}
              </h3>
              <p className="text-base text-(--secondary-text-color) overflow-y-auto scrollbar-none flex-1 leading-relaxed">
                {n.content}
              </p>
            </div>

            <div className="flex gap-4 justify-evenly text-2xl text-(--brand-color) shrink-0">
              <button
                type="button"
                className="p-1 pl-0 cursor-pointer hover:opacity-70 transition-opacity"
                onClick={() => deleteNote(n.id)}
              >
                <FaTrash />
              </button>
              <button
                type="button"
                className="p-1 pl-0 cursor-pointer hover:opacity-70 transition-opacity"
                onClick={() => {
                  return view(n.id) && <Link to="/view" />;
                }}
              >
                <FaEye />
              </button>
              <button
                type="button"
                className="p-1 pr-0 cursor-pointer hover:opacity-70 transition-opacity"
                onClick={() => edit(n.id)}
              >
                <FaEdit />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Display;
