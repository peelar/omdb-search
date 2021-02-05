import {
  CardContent,
  Typography,
  CardMedia,
  Link,
  Box,
} from "@material-ui/core";
import { SearchEntry } from "../../../types";
import ResultCard from "./Card";

const Result: React.FC<SearchEntry> = (result) => (
  <Link href={`https://www.imdb.com/title/${result.imdbID}`} color="inherit">
    <ResultCard
      media={
        <CardMedia
          component="img"
          height="200px"
          src={result.Poster}
          title={result.Title}
        />
      }
      content={
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-around"
            flexDirection="column"
          >
            <Typography variant="h5">{`${result.Title} [${result.Year}]`}</Typography>
          </Box>
        </CardContent>
      }
    />
  </Link>
);

export default Result;
