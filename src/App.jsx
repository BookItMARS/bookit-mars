import BurnerComponent from './components/BurnerComponent';
import trainTicket from './assets/trainTicket.png';
import React from "react";
import "./styles/App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layout/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";
import NotFound from "./components/pages/Notfound";
import BookTicket from "./components/ticket/BookTicket";


const App = () => {

  return(
    <main>
      <Router>
      <div className="App">
      <h1>Welcome to BookIt - MARS</h1>
      <p>I'm a really cool Frontend project</p>
      <img src={trainTicket} alt="look, we imported an asset!" />
      <Navbar />
      <BurnerComponent />
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/users/add" element={<BookTicket/>} />      
          
          <Route element={<NotFound/>} />
        </Routes>

      </div>
    </Router>
    </main>
   
    
  );
};

export default App;
