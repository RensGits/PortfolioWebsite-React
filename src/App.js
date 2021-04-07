import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Nav from './Pages/Components/Navigationbar/Nav';
import Virus from './Pages/Virus';
import WeedDoctor from './Pages/WeedDoctor';
import Naturalis from './Pages/Naturalis';
import Somzoa from './Pages/Somzoa';

import './Pages/Components/Navigationbar/Nav.css';
import './App.css';
import {Route, Switch, useLocation} from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import ParticlesBg from 'particles-bg';
import ScrollToTop from './Pages/ScrollToTop';
import React from 'react';

function App() {

  const location = useLocation();
  let config = {
    num: [1, 1],
    rps: 1,
    radius: [5, 40],
    life: [3, 3],
    v: [3, 0.1],
    tha: [-40, 40],
    alpha: [0.6, 0],
    scale: [0.1, 0.4],
    position: "pointer",
    color: ["#ff0000"],
    cross: "dead",
    emitter: "follow",
    random: 15
  };

  return (
    <div>
    
      <div className = 'appGrid' >
      <ParticlesBg type= 'custom' config = {config} bg={true} />
        <Nav/>
       
        <AnimatePresence >
        
        <Switch location = {location} key = {location.key}>
       
          <Route path = "/" exact component = {Home} />
          <Route path = '/about' component = {About} />
          <Route path = '/contact' component = {Contact} />
          <Route path = '/virus' component = {Virus} />
          <Route path = '/weeddoctor' component = {WeedDoctor} />
          <Route path = '/naturalis' component = {Naturalis} />
          <Route path = '/somzoa' component = {Somzoa} />
          
          
        </Switch>
        
        </AnimatePresence>
        
      </div>
      </div>
   
  );
}

export default App;
