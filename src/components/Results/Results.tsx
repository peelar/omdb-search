import { Grid, Box } from "@material-ui/core";
import { SearchEntry } from "../../../types";
import Result from "../Result/Result";
import SkeletonCard from "../Result/Skeleton";

const SKELETON_CARDS_NUMBER = 5;

const Results: React.FC<{
  results: SearchEntry[] | undefined;
  isLoading: boolean;
}> = ({ results, isLoading }) => (
  <Box my={2} width="100%">
    <Grid container spacing={1}>
      {results &&
        results.map((result, index) => (
          <Grid item xs={12} key={`result-${index}`}>
            <Result {...result} />
          </Grid>
        ))}
      {isLoading &&
        Array(SKELETON_CARDS_NUMBER)
          .fill(0)
          .map((_, index) => (
            <Grid item xs={12} key={`result-${index}`}>
              <SkeletonCard />
            </Grid>
          ))}
    </Grid>
  </Box>
);

export default Results;
