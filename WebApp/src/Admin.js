//eslint-disable-next-line
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// componentes
import Navbarnav from "../src/components/Navbar";
import Sidebar from "../src/components/Sidebar";
// paginas
import Inicio from "../src/pages/Inicio";
import Lista from "../src/pages/Lista";
import Prestamos from "../src/pages/Prestamos";
import Alumnos from "../src/pages/Alumnos";
import Visitas from "../src/pages/Visitas";

import AlumnoAgregar from "../src/pages/AlumnoAgregar";
// estilos
import "./App.scss";

function Admin() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="content w-100">
        <Navbarnav />
        <Routes>
          <Route path="/inicio" element={<Inicio />} />{" "}
          {/* Cambia la ruta aquí */}
          <Route path="/lista" element={<Lista />} />
          <Route path="/prestamos" element={<Prestamos />} />
          <Route path="/alumnos" element={<Alumnos />} />
          <Route path="/agregar-alumno" element={<AlumnoAgregar />} />
          <Route path="/visitas" element={<Visitas />} />
        </Routes>
      </div>
    </div>
  );
}

export default Admin;
