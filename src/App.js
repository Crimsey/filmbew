import logo from './logo.svg';
import './App.css';
//import Home from "./Home";
import Contact from "./Contact";
//import About from "./About";
//import Header from "./Header";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/contact" render={props => <Contact {...props} />} />
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
