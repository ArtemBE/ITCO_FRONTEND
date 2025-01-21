import CreateProject from './Components/CreateProject';
import Navlinks from './Components/Navlinks';
import Project from './Components/Project';
import Projects from './Components/Projects';
import logo from './logo.svg';
/*import './App.css';*/
import './style.css';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/createProject/*" element={<CreateProject />} />
      </Routes>
    </Router>
  );
}

export default App;
