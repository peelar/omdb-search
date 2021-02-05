import { AppBar, Container, Toolbar } from "@material-ui/core";
import Search from "./components/Search/Search";

const App: React.FC = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>OMDB Search</Toolbar>
      </AppBar>
      <Container maxWidth="xl" component="main">
        <Search />
      </Container>
    </>
  );
};

export default App;
