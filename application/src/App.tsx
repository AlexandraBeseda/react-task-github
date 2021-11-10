import React from 'react';
import './App.css';
import { NavBar } from './navigation/NavBar/NavBar';
import { PageRoutes } from './navigation/PageRoutes/PageRoutes';

function App() {
  return (
    <div>
      <NavBar />
      <PageRoutes />
    </div>
  );
}

export default App;
