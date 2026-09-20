import Navbar from "./layout/Navbar";
import Create from "./components/Create";
import Display from "./components/Display";
import Edit from "./components/Edit";
import Search from "./components/Search";
import View from "./components/View";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const App = () => {
  const [add, setAdd] = useState(false); // add btn is closed
  const [searchbtn, setSearchbtn] = useState(false);

  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });

  const [editingNote, setEditingNote] = useState(null);

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    if (notes.length === 0) {
      setAdd(true);
    }
  }, []); // runs once when the component mounts

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]); // runs every time a notes changes

  const filterNsort = notes
    .filter((n) => n.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === "latest") {
        return new Date(b.date) - new Date(a.date); // a is the first note and b is the second note. So if b is greater than a, it will return a positive value, which means b will be placed before a in the sorted array. This results in the latest notes appearing first.eg. if b is 2023 and a is 2022, then b-a = 1, which means b will be placed before a in the sorted array. This results in the latest notes appearing first.
      } else if (sort === "oldest") {
        return new Date(a.date) - new Date(b.date);
      } else {
        return 0; // No sorting if sort is not specified
      }
    });

  const deleteNote = (cardId) => {
    const filter = notes.filter((note) => note.id !== cardId);
    setNotes(filter);
    navigate("/");
  };

  const edit = (cardId) => {
    // edit is a function used to find which note is to be edited using button
    const edit = notes.find((note) => note.id === cardId);
    setEditingNote(edit); // so editing note is set to -  found the note to be edited
    navigate("/");
  };

  const navigate = useNavigate();

  const view = (cardId) => {
    navigate(`/view/${cardId}`);
  };

  return (
    <>
      <Navbar setAdd={setAdd} setSearchbtn={setSearchbtn} />
      <Routes>
        <Route
          path="/view/:id"
          element={<View notes={notes} deleteNote={deleteNote} edit={edit} />}
        />

        <Route
          path="/"
          element={
            editingNote ? (
              <Edit
                notes={notes}
                setNotes={setNotes}
                editingNote={editingNote}
                setEditingNote={setEditingNote}
              />
            ) : add ? (
              <Create notes={notes} setNotes={setNotes} setAdd={setAdd} />
            ) : (
              <>
                {/* Search appears above Display */}
                {searchbtn && (
                  <Search
                    search={search}
                    setSearch={setSearch}
                    setSearchbtn={setSearchbtn}
                    sort={sort}
                    setSort={setSort}
                  />
                )}
                {/* Display stays visible */}
                <Display
                  notes={filterNsort} // instead of just note.. because ?? we could have kept the notes and added filter instead of always giving filtered results ? ans
                  deleteNote={deleteNote}
                  edit={edit}
                  view={view}
                />
              </>
            )
          }
        />
      </Routes>
    </>
  );
};

export default App;
