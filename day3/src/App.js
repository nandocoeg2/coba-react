import './App.css';
import Home from './Pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './Pages/About';
import Jadwal from './Pages/Imsakiyah';
import Market from './Pages/Coin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/imsak" element={<Jadwal/>} />
        <Route path="/coin" element={<Coin/>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
