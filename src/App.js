import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Menu from './Menu/Menu';
import HomePage from './Menu/HomePage';
import DriftPage from './Menu/DriftPage';
import TimeAttackPage from './Menu/TimeAttackPage';
import ForzaPage from './Menu/ForzaPage';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Menu />
        <div className="page">
          <Route path="/" exact component={HomePage} />
          <Route path="/drift" component={DriftPage} />
          <Route path="/timeattack" component={TimeAttackPage} />
          <Route path="/forza" component={ForzaPage} />
        </div>
      </div>
    </BrowserRouter>
  );
}