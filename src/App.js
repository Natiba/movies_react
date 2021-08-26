import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./components/Home";
import Movies from "./components/Movies";
import TvProgram from "./components/TvProgram";
import People from "./components/People";
import More from "./components/More";
import NotFound from "./components/NotFound";


function App() {
  return (
    <Router>
      
      <Nav />

      <Switch>
      <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/movies">
        <Movies />
        </Route>
        <Route exact path="/programas-tv">
          <TvProgram />
        </Route>
        <Route exact path="/people">
          <People />
        </Route>
        <Route exact path="/more">
          <More />
        </Route>
        <Route exact path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
