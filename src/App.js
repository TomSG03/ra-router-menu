import React from 'react'
import { HashRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Menu from './Menu/Menu';
import HomePage from './Menu/HomePage';
import DriftPage from './Menu/DriftPage';
import TimeAttackPage from './Menu/TimeAttackPage';
import ForzaPage from './Menu/ForzaPage';

export default function App() {
  return (
    <HashRouter>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}
