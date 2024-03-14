
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
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/Routes/Private';
import ForgotPassword from './pages/Auth/ForgotPassword';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/careers' element={<Careers/>}/>
      <Route path='/dashboard' element={<PrivateRoute/>}>
        <Route path='' element={<Dashboard/>}/>
      </Route>
      <Route path='/forgot-password' element={<ForgotPassword/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/newarrivals" element={<New/>}/>
      <Route path="/*" element={<PagenotFound/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>

   
    </>
  );
}

export default App;
