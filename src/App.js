import Nav from "./components/nav/Nav";
import Container from "./components/container/Container";
import {
  BrowserRouter,
  // Switch,
  // Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Container />
    </BrowserRouter>
  );
}

export default App;
