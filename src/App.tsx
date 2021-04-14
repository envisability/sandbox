import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import FlexLayout from "./pages/flex-layout";
import Portfolio from "./pages/portfolio";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Navbar from "./components/navbar";
import Company from "./pages/company";

function App() {
  return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path ="/">
            <FlexLayout />
          </Route>
          <Route exact path ="/portfolio">
            <Portfolio/>
          </Route>
            <Route exact path ="/company">
               <Company />
            </Route>
          <Route exact path ="/blog">
            <Blog/>
          </Route>
          <Route exact path ="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
