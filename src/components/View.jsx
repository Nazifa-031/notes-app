import { FaTrash, FaEdit } from "react-icons/fa";
import { useParams } from "react-router-dom";

const View = ({ notes, deleteNote, edit }) => {
  const { id } = useParams();
  const note = notes.find((note) => note.id === id);

  if (!note) {
    return <p>Note not found.</p>;
  }

  return (
    <>
      <div className="max-h-screen w-full mt-4 gap-5  px-6">
        <div
          key={note.id}
          className="flex flex-col gap-0.5 rounded-3xl bg-(--surface-color)
                     px-6 py-2 mt-4 shadow-sm hover:shadow-lg hover:-translate-y-1
                     transition-all duration-200"
        >
          <div className="flex flex-col flex-1 ">
           <h3 className="text-3xl mb-3 py-1 first-letter:uppercase lowercase font-bold overflow-x-auto scrollbar-hide">
  {note.title}
</h3>
            <p className="text-base mb-2 text-(--secondary-text-color)  min-h-[70vh] overflow-y-auto scrollbar-hide leading-relaxed">
              {note.content}
            </p>
          </div>

          <div className="flex justify-between text-(--brand-color) rounded-lg p-2">
            <button
              type="button"
              className="flex items-center gap-2 bg-transparent
               font-semibold text-sm px-4 py-2 rounded-full
               border border-(--brand-color)
               hover:bg-(--brand-color)/10
               active:scale-95 transition-all duration-200 cursor-pointer"
              onClick={() => deleteNote(note.id)}
            >
              <FaTrash />
              <span>Delete</span>
            </button>

            <button
              type="button"
              className="flex items-center gap-2 bg-transparent
               font-semibold text-sm px-4 py-2 rounded-full
               border border-(--brand-color)
               hover:bg-(--brand-color)/10
               active:scale-95 transition-all duration-200 cursor-pointer"
              onClick={() => edit(note.id)}
            >
              <FaEdit />
              <span>Edit</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
