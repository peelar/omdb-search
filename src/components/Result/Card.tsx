import { Card, Grid, CardActionArea } from "@material-ui/core";

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

export default ResultCard;
