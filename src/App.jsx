import BurnerComponent from './components/BurnerComponent';
import trainTicket from './assets/trainTicket.png';
import { Navbar } from 'react-bootstrap';
import Navigationbar from './components/Navigationbar';
import NewTicket from './components/NewTicket';
import ContactUs from './components/ContactUs';
import SearchTicket from './components/SearchTicket';
import { BrowserRouter } from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';

const App = () => {

  return(
    <main>
       <Navigationbar/>
      <h1>Welcome to BookIt - MARS</h1>
      <p>I'm a really cool Frontend project</p>
      <img src={trainTicket} alt="look, we imported an asset!" />
     
      <BurnerComponent />
      <BrowserRouter>
      <Routes>
        <Route path="/NewTicket" element={<NewTicket/>}/>
        <Route path="/SearchTicket" element={<SearchTicket/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
      </Routes>
      </BrowserRouter>
     
      
     
    </main>
  );
};

export default App;
