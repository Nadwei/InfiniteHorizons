import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import PersonalEnlightenment from './pages/PersonalEnlightenment';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Alternative from './pages/Alternative';
import HolisticWellness from './pages/HolisticWellness';


export default function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/Alternative" element={<Alternative/>}/>
        <Route path="/PersonalEnlightenment" element={<PersonalEnlightenment/>}/>
        <Route path="/HolisticWellness" element={<HolisticWellness/>}/>
      </Routes>
    </Router>
  )
}
