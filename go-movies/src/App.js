import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom';
import Movies from './components/Movies';
import Home from './components/Home';
import Admin from './components/Admin';
import OneMovie from './components/OneMovie';
import Genres from './components/Genres';
import OneGenre from './components/OneGenre';

export default function App() {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <h1 className="mt-3">Go Watch a Movie!</h1>
          <hr className="mb-3"></hr>
        </div>


        <div className="row">
          <div className="col-md-2">
            <nav>
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/movies">Movies</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/genres">Genres</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/admin">Manage Catalogue</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-10">

            <Switch>
              <Route path="/movies/:id" exact component={OneMovie} />
              <Route exact path="/" component={Home} />
              <Route path="/movies" component={Movies} />
              <Route path="/admin" component={Admin} />
              <Route exact path="/genres" component={Genres} />            

              <Route path="/genre/:id" exact component={OneGenre} />
              

            </Switch>

          </div>
        </div>
      </div>


    </Router>
    
  );
}


function Movie() {
  let { id } = useParams();

  return <h2>Movie id {id}</h2>;
}

