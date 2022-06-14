import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Contact from "./pages/contact/Contact";
import './App.css';
import Homepage from './pages/homepage/Homepage'
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Resume from "./pages/resume/Resume";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
