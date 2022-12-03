import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Body from './components/Body';

function App() {
  return (
    <Router>
      <Navbar /> 
      <Body />
    </Router>
  );
}

export default App;
