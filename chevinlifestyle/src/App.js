
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PagenotFound from './pages/PagenotFound';
import New from './pages/New';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Careers from './pages/Careers';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      {/* <Route path="/about" element={<About/>}/> */}
      <Route path="/about" element={<About/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/careers' element={<Careers/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/newarrivals" element={<New/>}/>
      <Route path="/*" element={<PagenotFound/>}/>
     
    </Routes>

   
    </>
  );
}

export default App;
