const Navbar = ({setAdd}) => {
  return (
    <div>
        <button onClick={() => setAdd((prev) => !prev)}  >Add Note</button>
    </div>
  )
}

export default Navbar