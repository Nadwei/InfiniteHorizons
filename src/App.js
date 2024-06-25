import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import PhiloSpirit from './pages/PhiloSpirit';
import MindBody from './pages/MindBody';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Alternative from './pages/Alternative';


export default function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/Alternative" element={<Alternative/>}/>
        <Route path="/PhiloSpirit" element={<PhiloSpirit/>}/>
        <Route path="/MindBody" element={<MindBody/>}/>
      </Routes>
    </Router>
  )
}
