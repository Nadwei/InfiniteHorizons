import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Dojo from './pages/Dojo';
import Philosophy from './pages/Philosophy';
import ComplexWorkshop from './pages/ComplexWorkshop';
import Navbar from './components/Navbar';
import Home from './pages/Home';


export default function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/Dojo" element={<Dojo/>}/>
        <Route path="/Philosophy" element={<Philosophy/>}/>
        <Route path="/ComplexWorkshop" element={<ComplexWorkshop/>}/>
      </Routes>
    </Router>
  )
}
