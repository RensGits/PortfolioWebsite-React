import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Nav from './Pages/Components/Navigationbar/Nav';
import Virus from './Pages/Virus';
import WeedDoctor from './Pages/WeedDoctor';
import Naturalis from './Pages/Naturalis';
import Somzoa from './Pages/Somzoa';
import GameOfLife from './Pages/GameOfLife'
import Playground from './Pages/Playground';
import {Route, Switch, useLocation} from 'react-router-dom';
import { AnimatePresence} from 'framer-motion';
import ParticlesBg from 'particles-bg';
import React from 'react';
import './Pages/Components/Navigationbar/Nav.css';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';


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
    
    
      <div className = 'appGrid' >
        <CssBaseline />
      <ParticlesBg type= 'custom' config = {config} bg={true} />
        
       
        <AnimatePresence >
        <Nav/>
        <Switch location = {location} key = {location.key}>
       
          <Route path = "/" exact component = {Home} />
          <Route path = '/about' component = {About} />
          <Route path = '/contact' component = {Contact} />
          <Route path = '/virus' component = {Virus} />
          <Route path = '/weeddoctor' component = {WeedDoctor} />
          <Route path = '/naturalis' component = {Naturalis} />
          <Route path = '/somzoa' component = {Somzoa} />
          <Route path = '/gameoflife' component = {GameOfLife} />
          <Route path = '/playground' component = {Playground} />
          
        </Switch>
        
        </AnimatePresence>
        
      </div>
      
   
  );
}

export default App;
