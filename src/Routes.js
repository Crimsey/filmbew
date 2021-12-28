import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Routes extends Component {
    
    render() {
    
        const routes = [{
            path: '/',
            component: App,
          }, {
            path: '/Movie',
            component: MoviePage,
          },/* {
            path: '/Edit',
            component: EditPage,
          }, {
            path: '/AddMovie',
            component: AddMoviePage,
          }*/];

        const routeComponents = routes.map(({path, component}, key) => 
        <Route exact path={path} component={component} key={key} />);
      return (
        <BrowserRouter>
          {routeComponents}
        </BrowserRouter>
      );
    }
  }