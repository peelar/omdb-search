import { useState } from "react";
import { useDebounce, useSearch } from "../../hooks";
import Results from "../Results/Results";
import Pagination from "../Pagination/Pagination";
import { Button, Grid, TextField, Box } from "@material-ui/core";
import ErrorBox from "../ErrorBox/ErrorBox";

const Search: React.FC = () => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 1000);
  const [page, setPage] = useState(1);
  const { results, error, isLoading } = useSearch(debouncedValue, page);

  const isResponseEmpty =
    debouncedValue !== "" && results?.Response === "False";

  const clear = () => {
    setValue("");
    setPage(1);
  };

  return (
    <Box component="section" my={2}>
      <form onSubmit={(e) => e.preventDefault()}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={10}>
            <TextField
              type="text"
              onChange={(e) => setValue(e.target.value)}
              value={value}
              placeholder="Search for a film"
              fullWidth
            />
          </Grid>
          <Grid item xs={4} md={2}>
            <Button
              variant="contained"
              color="primary"
              type="button"
              onClick={clear}
            >
              Clear [X]
            </Button>
          </Grid>
        </Grid>
      </form>
      {error && <ErrorBox error={error} />}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="40vh"
      >
        {isResponseEmpty && <h2>No data :(</h2>}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          flexDirection="column"
          width="100%"
          my={2}
        >
          {results?.Search && (
            <Pagination
              page={page}
              setPage={setPage}
              total={parseInt(results.totalResults)}
            />
          )}
          <Results results={results?.Search} isLoading={isLoading} />
          {results?.Search && (
            <Pagination
              page={page}
              setPage={setPage}
              total={parseInt(results.totalResults)}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Search;
