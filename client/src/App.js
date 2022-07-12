import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Footer from './components/Footer';
import About from './pages/About';
import AppNavbar from './components/NavBar.js';

function App() {
  return (
    <Router>
        <div>
          <AppNavbar/>
          <div>

          <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/signup' element={<Signup/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/profile' element={<Profile/>} />
          <Route render={() => <h1>404! This page doesn't exist</h1>} />
        </Routes>
        </div>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
