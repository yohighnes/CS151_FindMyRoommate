import './App.css';
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';
import {
  BrowserRouter as Router, Routes,
  Route
} from "react-router-dom";
import SignupPage from './pages/SignupPage';
import ContactUsPage from './pages/ContactUsPage';
import ProfilePage from './pages/ProfilePage';
import Chat from './components/chat/Chat';
import RoommatesPage from './pages/RoommatesPage';
import Roommates from './components/roommates/Roommates';
import RoommateProfile from './components/roommateProfile/RoommateProfile';


function App() {


  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={LandingPage} />
        <Route exact path='/login' Component={LoginPage} />
        <Route exact path='/signup' Component={SignupPage} />
        <Route exact path='/contactUs' Component={ContactUsPage} />
        <Route exact path='/profile' Component={ProfilePage} />
        {/* <Route exact path='/message' Component={Chat} /> */}
        <Route exact path='/roommates' Component={RoommatesPage} />
        <Route path="/users/:id" Component={RoommateProfile} />

      </Routes>

    </Router>
  );
}

export default App;
