const Display = ({ filterNsort, deleteNote, edit }) => {
  return (
    <div>
      <div>
        {filterNsort.map((n) => (
          <div key={n.id}>
            <h3>Title : {n.title}</h3>
            <p>Content : {n.content}</p>
            <button onClick={() => deleteNote(n.id)}>delete</button>
            <button onClick={() => edit(n.id)}>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Display;
