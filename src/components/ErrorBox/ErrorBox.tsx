import { Box } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { AxiosError } from "axios";

const ErrorBox: React.FC<{ error: AxiosError }> = ({ error }) => (
  <Box
    width="100%"
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="40vh"
  >
    <Alert severity="error" style={{ width: "30%" }}>
      <AlertTitle>Error</AlertTitle>
      {error.message}
    </Alert>
  </Box>
);

export default ErrorBox;
