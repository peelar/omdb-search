import { SearchEntry } from "../../../types";

const Results: React.FC<{ results: SearchEntry[] }> = ({ results }) => {
  return (
    <ul>
      {results.map((result, index) => (
        <li key={`result-${index}`}>{result.Title}</li>
      ))}
    </ul>
  );
};

export default Results;
