import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import FlexLayout from "./pages/flex-layout";
import Portfolio from "./pages/portfolio";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Navbar from "./components/navbar";
import CssGrid from "./pages/cssGrid";
import GridLayout1 from "./pages/grid/gridLayout1";
import GridLayout2 from "./pages/grid/gridLayout2";
import GridLayout3 from "./pages/grid/gridLayout3";

function App() {
  return (
      <Router>
        {/*<Navbar classname={`d-none`} />*/}
        <Switch>
          <Route exact path ="/">
            {/*<FlexLayout />*/}
            <GridLayout1 />
          </Route>
          <Route exact path ="/portfolio">
            <Portfolio/>
          </Route>
            <Route exact path ="/css-grid">
               <CssGrid />
            </Route>
          <Route exact path ="/blog">
            <Blog/>
          </Route>
          <Route exact path ="/contact">
            <Contact />
          </Route>
        {/*    Grid Routes */}
        <Route exact path="/grid-layout-1">
            <GridLayout1 />
        </Route>
        <Route exact path="/grid-layout-2">
            <GridLayout2 />
        </Route>
            <Route exact path="/grid-layout-3">
                <GridLayout3 />
            </Route>
        </Switch>
      </Router>
  );
}

export default App;
