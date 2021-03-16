import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Nav from './Pages/Components/Nav';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    
    <Router  >
      <div className = 'appGrid' >
        <Nav/>
        <Switch>
          <Route path = "/" exact component = {Home} />
          <Route path = '/projects' component = {Projects} />
          <Route path = '/contact' component = {Contact} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
