import ResultCard from "./Card";
import { Skeleton } from "@material-ui/lab";
import { CardContent } from "@material-ui/core";

const SkeletonCard: React.FC = () => (
  <ResultCard
    media={<Skeleton variant="rect" height="200px" />}
    content={
      <CardContent>
        <Skeleton height="40px" />
      </CardContent>
    }
  />
);

export default SkeletonCard;
