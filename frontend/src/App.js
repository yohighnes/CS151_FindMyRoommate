import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';
import {
  BrowserRouter as Router, Routes,
  Route, Navigate
} from "react-router-dom";
import SignupPage from './pages/SignupPage';
import ContactUsPage from './pages/ContactUsPage';
import ProfilePage from './pages/ProfilePage';


function App() {
  

  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={LandingPage} />
        <Route exact path='/login' Component={LoginPage} />
        <Route exact path='/signup' Component={SignupPage} />
        <Route exact path='/contactUs' Component={ContactUsPage} />
        <Route exact path='/profile' Component={ProfilePage} />

      </Routes>

    </Router>
  );
}

export default App;
