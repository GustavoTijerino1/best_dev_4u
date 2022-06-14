import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Contact from "./pages/contact/Contact";
import './App.css';
import Homepage from './pages/homepage/Homepage'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
