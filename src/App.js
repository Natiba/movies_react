import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./views/Home";
import Movies from "./views/Movies";
import MovieDetails from "./components/MovieDetails";
import TvProgram from "./views/TvProgram";
import People from "./views/People";
import More from "./views/More";
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
        <Route exact path="/movies/:id">
        <MovieDetails />
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
