// pagina de donde se puede mostrar el contenido de los alumnos asi como agregar
import React, { useState, useEffect } from "react";
import { obtenerAlumnos } from "../api/api";
import CardAlumno from "../../src/components/CardAlumno";
import BotonModal from "../../src/components/BotonModal";
import swal from "sweetalert2";
import BotonSubir from "../components/BotonSubir";

const Alumnos = () => {
  // estados para guardar los alumnos y mostrar mensajes de error y carga
  const [alumnosOriginales, setAlumnosOriginales] = useState([]);
  // estado para guardar los alumnos
  const [alumnos, setAlumnos] = useState([]);
  // estado para guardar mensajes de error
  const [error, setError] = useState(null);
  // estado para mostrar un mensaje de carga
  const [loading, setLoading] = useState(true);
  // estado para guardar la busqueda
  const [busqueda, setBusqueda] = useState("");
  // estado para guardar el tipo de busqueda
  const [tipoBusqueda, setTipoBusqueda] = useState("nombre");
  // estado para guardar la pagina actual
  const [paginaActual, setPaginaActual] = useState(1);
  // estado para guardar el total de alumnos
  const [alumnosTotal, setAlumnosTotal] = useState(0);
  // estado para guardar el total de coincidencias de la busqueda
  const [coincidenciasBusqueda, setCoincidenciasBusqueda] = useState(0);
  // numero de alumnos por pagina
  const alumnosPorPagina = 20;
  // efecto para obtener los alumnos
  useEffect(() => {
    // funcion asincrona para obtener los alumnos
    const fetchAlumnos = async () => {
      // intenta obtener los alumnos
      try {
        // obtiene los alumnos del servidor
        const response = await obtenerAlumnos();
        // guarda los datos de los alumnos
        const data = response.data;
        // guarda los datos de los alumnos en los estados
        setAlumnosOriginales(data);
        // guarda los datos de los alumnos en los estados
        setAlumnos(data);
        // guarda el total de alumnos
        setAlumnosTotal(data.length);
        // quita el mensaje de carga
        setLoading(false);
      } catch (error) {
        // si hay un error, muestra un mensaje de error
        setError("Error al obtener los alumnos. Inténtalo de nuevo más tarde.");
        setLoading(false);
        // muestra un mensaje de error
        swal.fire({
          icon: "error",
          title: "Error al obtener los alumnos",
          text: "Inténtalo de nuevo más tarde.",
          showConfirmButton: false,
          timer: 1900,
        });
      }
    };
    // llama a la funcion para obtener los alumnos
    fetchAlumnos();
  }, []);
  // efecto para filtrar los alumnos
  useEffect(() => {
    // filtra los alumnos segun la busqueda
    const alumnosFiltrados = alumnosOriginales.filter((alumno) =>
      // filtra los alumnos segun el tipo de busqueda
      alumno[tipoBusqueda]
        .toString()
        .toLowerCase()
        .includes(busqueda.toLowerCase())
    );
    // guarda los alumnos filtrados
    setAlumnos(alumnosFiltrados);
    // guarda el total de coincidencias de la busqueda
    setCoincidenciasBusqueda(alumnosFiltrados.length);
    // reinicia la pagina actual
  }, [busqueda, tipoBusqueda, alumnosOriginales]);
  // calcula los alumnos actuales
  const indiceUltimoAlumno = paginaActual * alumnosPorPagina;
  // calcula los alumnos actuales
  const indicePrimerAlumno = indiceUltimoAlumno - alumnosPorPagina;
  // calcula los alumnos actuales
  const alumnosActuales = alumnos.slice(indicePrimerAlumno, indiceUltimoAlumno);
  // funcion para paginar
  const paginar = (numeroPagina) => setPaginaActual(numeroPagina);

  return (
    // estructura de la pagina de alumnos
    <div className="contenedor">
      <BotonSubir />
      {/*
            Boton para agregar un alumno
            */}
      <BotonModal />
      {/*
            Titulo de la pagina
            */}
      <h2 className="titulo">
        <b>Alumnos</b>
      </h2>
      <div className="d-flex justify-content-center mb-3">
        {/*
                Input para buscar alumnos
                */}
        <div className="col-md-5">
          <div className="input-group">
            <input
              // Input para buscar alumnos
              type="text"
              placeholder="Buscar alumno..."
              className="form-control"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
            <div className="input-group-append">
              {/*
                            Select para seleccionar el tipo de busqueda
                            */}

              <select
                className="form-select"
                value={tipoBusqueda}
                onChange={(e) => setTipoBusqueda(e.target.value)}
              >
                {/* 
                                Opciones para el select
                                */}
                <option value="nombre">Nombre</option>
                <option value="noCtrl">Número de control</option>
                <option value="carrera">Carrera</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/*
            Mensaje de carga
            */}
      {loading ? (
        <p>Cargando alumnos...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        // estructura de los alumnos
        <div>
          {/* 
                    Total de alumnos
                    */}
          <p>
            Total de alumnos: <strong>{alumnosTotal}</strong>
          </p>
          {/*
                    Mensaje de busqueda
                    */}
          {busqueda && (
            <p>
              Resultados de la búsqueda:{" "}
              <strong>{coincidenciasBusqueda}</strong>
            </p>
          )}
          {coincidenciasBusqueda === 0 && (
            <p>
              <b>Sin coincidencias.</b>
            </p>
          )}
          <hr />
          {/*
                    Paginacion
                    */}
          <div className="d-flex justify-content-center">
            <Pagination
              alumnosPorPagina={alumnosPorPagina}
              totalAlumnos={alumnos.length}
              paginar={paginar}
            />
          </div>
          {/*
                    Estructura de los alumnos
                    */}
          <div className="row">
            {alumnosActuales.map((alumno) => (
              <div className="col-md-4" key={alumno._id}>
                <CardAlumno
                  noCtrl={alumno.noCtrl}
                  nombre={alumno.nombre}
                  apellidoP={alumno.apellidoP}
                  apellidoM={alumno.apellidoM}
                  carrera={alumno.carrera}
                  telefono={alumno.telefono}
                  correo={alumno.correo}
                />
              </div>
            ))}
          </div>
          {/*
                    Paginacion
                    */}
          <div className="d-flex justify-content-center mt-3">
            <Pagination
              alumnosPorPagina={alumnosPorPagina}
              totalAlumnos={alumnos.length}
              paginar={paginar}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Alumnos;
// paginacion en funcion
const Pagination = ({ alumnosPorPagina, totalAlumnos, paginar }) => {
  // calcula el numero de paginas
  const numerosPagina = [];
  // calcula el numero de paginas
  for (let i = 1; i <= Math.ceil(totalAlumnos / alumnosPorPagina); i++) {
    // calcula el numero de paginas
    numerosPagina.push(i);
  }

  return (
    // estructura de la paginacion
    <nav>
      <ul className="pagination">
        {/*
                Numeros de pagina
                */}
        {numerosPagina.map((numero) => (
          // Numeros de pagina
          <li key={numero} className="page-item">
            <a onClick={() => paginar(numero)} className="page-link">
              {numero}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
