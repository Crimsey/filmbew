import logo from './logo.svg';
import './App.css';
//import Home from "./Home";
import Filmy from "./Filmy";
import Rankingi from "./Rankingi";
import DodajFilm from "./DodajFilm";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/filmy" render={props => <Filmy {...props} />} />
        <Route exact path="/rankingi" render={props => <Rankingi {...props} />} />
        <Route exact path="/dodajfilm" render={props => <DodajFilm {...props} />} />
      </Switch>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
