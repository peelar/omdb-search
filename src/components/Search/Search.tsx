const Search = () => (
  <form>
    <input
      type="text"
      onClick={() => console.log("click")}
      value=""
      placeholder="Enter text"
    />
    <button type="submit">Submit</button>
  </form>
);

export default Search;
