import {
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
  CardMedia,
  CardActionArea,
} from "@material-ui/core";
import { SearchEntry } from "../../../types";

const Result: React.FC<SearchEntry> = (result) => {
  return (
    <Card>
      <CardActionArea>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <CardMedia
              component="img"
              height="200px"
              src={result.Poster}
              title={result.Title}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <CardContent>
              <Typography variant="h4">{`${result.Title} [${result.Year}]`}</Typography>
            </CardContent>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
};

const Results: React.FC<{ results: SearchEntry[] }> = ({ results }) => {
  // to-do: pimp up Results
  return (
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
};

export default Results;
