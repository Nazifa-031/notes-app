const Search = ({ search, setSearch, setSearchbtn, sort, setSort }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch("");
    setSearchbtn(false);
  };

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 px-6 py-3 bg-(--surface-color) border-b border-(--secondary-text-color)/15">
      <form onSubmit={handleSubmit} className="flex-1">
        <label htmlFor="search" className="sr-only"> // sr-only is a utility class that visually hides the label but keeps it accessible to screen readers
          Search notes by title
        </label>
        <input
          type="text"
          id="search"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          // w-full: fills its flex slot instead of shrinking to content size (default <input> behavior)
          //focus means when the input is active and ready for typing, it will have a colored border and a subtle glow effect
          className="w-full bg-(--base-color) text-(--text-color)
                     placeholder:text-(--secondary-text-color)
                     border border-(--secondary-text-color)/25
                     rounded-full px-4 py-2 text-sm outline-none
                     focus:border-(--brand-color) focus:ring-2 focus:ring-(--brand-color)/20 
                     transition-colors duration-150" // transition-colors: smooth color transitions for focus state
        />
      </form>

      {/* min-w-fit: keeps the select from getting squeezed too narrow when it wraps under the input */}
   {/* focus:ring-2: When focused, it adds a 2-pixel-wide outline ring around the element.focus:ring-(--brand-color)/20: This sets the color of that ring to the same --brand-color, but applies a 20% opacity to make it look like a soft, subtle glow.Context: The Tailwind CSS v4.0+ SyntaxIf you are used to older versions of Tailwind, this syntax looks a bit different because it utilizes Tailwind v4's native support for CSS variables and modern color opacity modifiers.(--brand-color): The parenthesis syntax tells Tailwind to look for a raw CSS variable (var(--brand-color)) defined in your global stylesheet, rather than a hardcoded color from tailwind.config.js./20: This is the modern slash-opacity syntax. It allows you to dynamically adjust the transparency of any color on the fly without needing separate opacity classes (like focus:ring-opacity-20).To help me explain further, are you troubleshooting a layout bug with this focus ring, or are you looking to customize these theme colors in your global CSS file?     */}
      {/* /20: This is the modern slash-opacity syntax. It allows you to dynamically adjust the transparency of any color on the fly without needing separate opacity classes (like focus:ring-opacity-20). */}
      <select
        name="sort"
        id="sort"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="min-w-fit bg-(--base-color) text-(--text-color)
                   border border-(--secondary-text-color)/25
                   rounded-full px-4 py-2 text-sm outline-none cursor-pointer
                   focus:border-(--brand-color) focus:ring-2 focus:ring-(--brand-color)/20 
                   transition-colors duration-150"
      >
        <option value="">Sort by</option>
        <option value="latest">Latest</option>
        <option value="oldest">Oldest</option>
      </select>
    </div>
  );
};

export default Search;