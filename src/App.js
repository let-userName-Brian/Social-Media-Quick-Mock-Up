import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Home from "./componets/Home";
import Profiles from "./componets/Profiles";
import About from "./componets/About";
import { AppBar } from "@mui/material";
import "./App.css"


export default function App() {
  return (
    <Router>
        <AppBar className='Nav'>
            <ButtonGroup variant="text" aria-label="text button group" >
              <Button variant="text">
                <Link to="/">Home</Link>
              </Button>
              <Button variant="text">
                <Link to="/profiles">Profiles</Link>
              </Button>
              <Button variant="text">
                <Link to="/about">About</Link>
              </Button>
            </ButtonGroup>
        </AppBar>
        <Switch>
          <Route path="/profiles" component={Profiles}>
            <Profiles />
          </Route>
          <Route path="/About" exact component={About}>
            <About />
          </Route>
          <Route path="/" exact component={Home}>
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}