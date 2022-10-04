import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Sidebar from './Sidebar'; 
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Profile from "./Profile";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Sidebar />
          <Routes>
            <Route exact path= {"/"} element= {<Home />} />
            <Route exact path= {"/about"} element= {<About />} />
            <Route exact path= {"/portfolio"} element= {<Portfolio />} />
            <Route exact path= {"/contact"} element= {<Contact />} />
            <Route exact path= {"/profile"} element= {<Profile />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
