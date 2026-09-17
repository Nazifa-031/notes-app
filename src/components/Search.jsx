// search : to get the notes display based on title
// and add filter like latest or oldest note based on date and time
const Search = ({ search, setSearch , setSearchbtn,  sort, setSort}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch("");
    setSearchbtn(false)
  };


  return (

    <div>
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search"></label>
        <input
          type="text"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </form>
    </div>

       <div>
        <select name="sort" id="sort" value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort By</option>
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
        </select>
    </div>
    </div>
  )
};

export default Search;
