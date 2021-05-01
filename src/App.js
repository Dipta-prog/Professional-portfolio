import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Projects from './Components/Projects/Projects';
import AboutMe from './Components/AboutMe/AboutMe';
import Skills from './Components/Skills/Skills';
import Banner from './Components/Banner/Banner';
import Home from './Components/Home/Home';

function App() {
  return (
    // <div>
    //   <Navbar></Navbar>
    //   <Header></Header>
    //   <Projects></Projects>
    //   <AboutMe></AboutMe>
    //   <Skills></Skills>
    // </div>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="*">
          {/* <NoMatch /> */}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
