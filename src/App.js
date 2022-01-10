import logo from './logo.svg';
import './App.css';
//import Home from "./Home";
import Filmy from "./Filmy";
import Rankingi from "./Rankingi";
import DodajFilm from "./DodajFilm";
import Samuraj from "./Samuraj";
import { Route, Switch } from "react-router-dom";
import Nietykalni from "./Nietykalni";
import { makeStyles } from "@material-ui/core/styles";


function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/filmy/samuraj" render={props => <Samuraj {...props} />} />
      <Route exact path="/filmy/nietykalni" render={props => <Nietykalni {...props} />} />
        <Route exact path="/filmy" render={props => <Filmy {...props} />} />
        <Route exact path="/rankingi" render={props => <Rankingi {...props} />} />
        <Route exact path="/dodajfilm" render={props => <DodajFilm {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
