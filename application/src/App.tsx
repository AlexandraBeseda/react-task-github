import React from 'react';
import './App.css';
import { NavBar } from './pages/NavBar/NavBar';
import { PageRoutes } from './pages/PageRoutes/PageRoutes';

function App() {
  return (
    <div className="app">
      <NavBar />
      <PageRoutes />
    </div>
  );
}

export default App;
