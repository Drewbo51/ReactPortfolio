import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Bio from './components/Bio';
import Contact from './components/Contact';
import Projects from './components/Projects';
import "./App.css";

function App() {
  return (
    <Router>
        <div>
          <Header />
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/bio" component={Bio} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={Projects} />
        </div>
    </Router>
    
  );
}

export default App;

