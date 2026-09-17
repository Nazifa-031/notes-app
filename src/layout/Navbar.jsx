import Search from "../components/Search";
const Navbar = ({ setAdd, setSearchbtn }) => {
 
  
  return (
    <div>
      <button
        onClick={() => {
          setAdd((prev) => !prev);
          setSearchbtn(false);
        }}
      >
        Add Note
      </button>

      <button
        onClick={() => {
          setSearchbtn((prev) => !prev);
          setAdd(false);
        }}
      >
        Search Note
      </button>
    </div>
  );
};

export default Navbar;
