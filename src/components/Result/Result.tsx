import {
  Card,
  CardContent,
  Grid,
  Typography,
  CardMedia,
  CardActionArea,
} from "@material-ui/core";
import { SearchEntry } from "../../../types";

const ResultCard: React.FC<{
  media: React.ReactNode;
  content: React.ReactNode;
}> = ({ media, content }) => (
  <Card>
    <CardActionArea>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          {media}
        </Grid>
        <Grid item xs={12} md={8}>
          {content}
        </Grid>
      </Grid>
    </CardActionArea>
  </Card>
);

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
