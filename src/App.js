import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Nav from './Pages/Components/Navigationbar/Nav';
import Virus from './Pages/Virus';
import './Pages/Components/Navigationbar/Nav.css';
import './App.css';
import {Route, Switch, useLocation} from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';


function App() {

  const location = useLocation();
  
  return (
    
    
      <div className = 'appGrid' >
        <Nav/>
        <AnimatePresence >
        <Switch location = {location} key = {location.key}>
          
          <Route path = "/" exact component = {Home} />
          <Route path = '/about' component = {About} />
          <Route path = '/contact' component = {Contact} />
          <Route path = '/virus' component = {Virus} />
          
        </Switch>
        </AnimatePresence>
      </div>
    
   
  );
}

export default App;
