import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// componentes
import Navbarnav from '../src/components/Navbar';
import Sidebar from '../src/components/Sidebar';
// paginas
import Inicio from '../src/pages/Inicio';
import Lista from '../src/pages/Lista';
import Prestamos from '../src/pages/Prestamos';
import Alumnos from '../src/pages/Alumnos';
import PrestamoAlumno from '../src/pages/PrestamoAlumno';
import PrestamoAlumnoTiempo from '../src/pages/PrestamoAlumnoTiempo';
import AlumnoAgregar from '../src/pages/AlumnoAgregar';
import { useEffect, useState } from 'react';
// estilos
import './App.scss';

function App() {

  return (
    <Router>
      
      <div className="flex">
        <Sidebar />
        <div className="content w-100">
        <Navbarnav /> 
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/lista" element={<Lista />} />
            <Route path="/prestamos" element={<Prestamos />} />
            <Route path="/alumnos" element={<Alumnos />} />
            <Route path="/prestamo-alumno" element={<PrestamoAlumno />} />
            <Route path="/prestamo-tiempo" element={<PrestamoAlumnoTiempo />} />
            <Route path="/agregar-alumno" element={<AlumnoAgregar />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
