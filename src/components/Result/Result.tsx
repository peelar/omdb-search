import { CardContent, Typography, CardMedia } from "@material-ui/core";
import { SearchEntry } from "../../../types";
import ResultCard from "./Card";

const Result: React.FC<SearchEntry> = (result) => (
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
        <Typography variant="h4">{`${result.Title} [${result.Year}]`}</Typography>
      </CardContent>
    }
  />
);

export default Result;
