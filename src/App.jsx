import Navbar from "./layout/Navbar";
import Create from "./components/Create";
import Notes from "./components/Notes";
import React, { useState } from "react";

const App = () => {
  const [add, setAdd] = useState(false); // add btn is closed
  const [note, setNote] = useState([]);

  console.log(note);
  return (
    <>
      <Navbar setAdd={setAdd} />
      {add ? (
        <Create
          note={note}
          setNote={setNote}
          setAdd={setAdd}
        />
      ) : (
        <Notes />
      )}
    </>
  );
};

export default App;
