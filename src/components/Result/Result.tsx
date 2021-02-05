import {
  Card,
  CardContent,
  Grid,
  Typography,
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

export default Result;
