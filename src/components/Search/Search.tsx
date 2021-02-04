import { useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import useSearch from "../../hooks/useSearch";
import Results from "../Results/Results";

const Search: React.FC = () => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 1000);
  const { results, isError, isLoading } = useSearch(debouncedValue);

  const isResponseEmpty =
    debouncedValue !== "" && results?.Response === "False";

  const clear = () => {
    setValue("");
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          placeholder="Enter text"
        />
        <button type="button" onClick={clear}>
          Clear [X]
        </button>
      </form>
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>Woops!</h2>}
      {isResponseEmpty && <h2>No data :(</h2>}
      {results?.Search && <Results results={results.Search} />}
    </div>
  );
};

export default Search;
