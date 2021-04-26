import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HashRouter, Route, Switch } from "react-router-dom";
import NavbarAppComponent from "./components/NavbarAppComponent/NavbarAppComponent";
import HomePage from "./pages/HomePage/HomePage";
import ActorsPage from "./pages/ActorsPage/ActorsPage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {


  return (
    <div className="App">
      <NavbarAppComponent />
      <HashRouter>
        <Switch>
          <Route exact path="/actors">
            <ActorsPage />
          </Route>
          <Route exact path="/movies">
            <MoviesPage />
          </Route>
          <Route exact path="/actor/:actorId/movies">
            <MoviesPage />
          </Route>
          <Route exact path="/home">
            <HomePage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/">
            <NotFoundPage />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}
export default App;