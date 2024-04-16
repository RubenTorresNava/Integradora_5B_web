import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import Login from './pages/Login';
import Admin from './Admin';
import RutaProtegida from './components/Verifier';

function App() {
  const [auth, setAuth] = useState(!!localStorage.getItem('elToken'));
  
  

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin/*" element={
            <RutaProtegida>
              <Admin />
            </RutaProtegida>
          } />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;