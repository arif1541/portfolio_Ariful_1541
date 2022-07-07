import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './Component/Footer';
import NavMenu from './Component/NavMenu';
import SmoothScrollbar from './Component/SmoothScrollbar';
// import About from './Pages/About';
// import Contact from './Pages/Contact';
import Home from './Pages/Home';
// import Project from './Pages/Project';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <SmoothScrollbar>
          <Switch>
            {/* <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Project />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route> */}
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </SmoothScrollbar>
      </Router>
    </>
  );
}
