const Navbar = ({ setAdd, setSearchbtn }) => {
  return (
    // sticky: stays pinned to top while scrolling long note lists
    // backdrop-blur + translucent bg: subtle "frosted glass" bar over content
    <div className="sticky top-0 z-10 flex items-center justify-between gap-4 px-6 py-4 bg-(--surface-color)/80 backdrop-blur-md border-b border-(--secondary-text-color)/15">
      <h1 className="text-xl font-bold text-(--text-color) tracking-tight">
        Notes{" "}
      </h1>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => {
            setAdd((prev) => !prev);
            setSearchbtn(false);
          }}
          // hover:-translate-y-0.5  // subtle lift effect on hover
          //  active:translate-y-0 active:shadow-sm // subtle press effect on click
          //  transition-all duration-200 //smooth transition for hover and active states
          className="bg-(--brand-color) text-(--base-color) font-semibold text-sm
                     px-4 py-2 rounded-full shadow-sm
                     hover:shadow-md hover:-translate-y-0.5  
                     active:translate-y-0 active:shadow-sm 
                     transition-all duration-200 
                      cursor-pointer"
        >
          Add Note
        </button>

        <button
          type="button"
          onClick={() => {
            setSearchbtn((prev) => !prev);
            setAdd(false);
          }}
          // scale-095 for subtle press effect on click
          className="bg-transparent text-(--brand-color) font-semibold text-sm
                     px-4 py-2 rounded-full border border-(--brand-color)
                     hover:bg-(--brand-color)/10
                     active:scale-95 
                     transition-all duration-200 cursor-pointer"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Navbar;
