import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Footer from './components/Footer';
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
          <Route render={() => <h1>404! This page doesn't exist</h1>} />
        </Routes>
        </div>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
