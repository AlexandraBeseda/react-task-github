import React from 'react';
import './App.css';
import { NavBar } from './pages/components/navigation/NavBar/NavBar';
import { PageRoutes } from './pages/components/navigation/PageRoutes/PageRoutes';

function App() {
  return (
    <div className='.app'>
      <NavBar />
      <PageRoutes />
    </div>
  );
}

export default App;
