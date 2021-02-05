import { Grid, Box } from "@material-ui/core";
import { SearchEntry } from "../../../types";
import Result from "../Result/Result";

const Results: React.FC<{ results: SearchEntry[] }> = ({ results }) => (
  <Box my={2}>
    <Grid container spacing={1}>
      {results.map((result, index) => (
        <Grid item xs={12} key={`result-${index}`}>
          <Result {...result} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Results;
