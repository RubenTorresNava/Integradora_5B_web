import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'; 
import Admin from './Admin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;