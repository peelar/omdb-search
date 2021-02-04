import { SearchEntry } from "../../../types";

const Results: React.FC<{ results: SearchEntry[] }> = ({ results }) => {
  // to-do: pimp up Results
  return (
    <ul>
      {results.map((result, index) => (
        <li key={`result-${index}`}>{result.Title}</li>
      ))}
    </ul>
  );
};

export default Results;
