import './App.css';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import Careers from './Careers';
import Home from './Home';
import Services from './Services';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Careers' element={<Careers/>}/>
      <Route path='/Services' element={<Services/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
