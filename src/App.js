import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';

import PersonalEnlightenment from './pages/PersonalEnlightenmentPage';
import Navbar from './components/Navbar';
import Home from './pages/HomePage';
import Tech_Alternative from './pages/TechAlternativePage';
import HolisticWellness from './pages/HolisticWellnessPage';


export default function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/Tech_Alternative" element={<Tech_Alternative/>}/>
        <Route path="/PersonalEnlightenment" element={<PersonalEnlightenment/>}/>
        <Route path="/HolisticWellness" element={<HolisticWellness/>}/>
      </Routes>
    </Router>
  )
}
