import Nav from "./components/nav/Nav";
import Container from "./components/container/Container";
import {
  BrowserRouter,
} from "react-router-dom";
import UsersContext from "./components/contexts/UsersContext";

function App() {
  return (
    <UsersContext>
      <BrowserRouter>
        <Nav />
        <Container />
      </BrowserRouter>
    </UsersContext>
  );
}

export default App;
