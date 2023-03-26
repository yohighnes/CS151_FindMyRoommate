import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';
import { BrowserRouter as Router, Switch, 
  Route, Redirect,} from "react-router-dom";
  
function App() {


  return (
    <div className="App">
      <LandingPage/>
    </div>
  );
}

export default App;
