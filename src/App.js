import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Nav from './Pages/Components/Navigationbar/Nav'
import './Pages/Components/Navigationbar/Nav.css';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';


function App() {

  
  return (
    <AnimatePresence>
    <Router  >
      <div className = 'appGrid' >
        <Nav/>
        <Switch>
          <Route path = "/" exact component = {Home} />
          <Route path = '/about' component = {About} />
          <Route path = '/contact' component = {Contact} />
        </Switch>
      </div>
    </Router>
    </AnimatePresence> 
  );
}

export default App;
