import React, { useState, useEffect } from "react";
import { obtenerLibro } from "../api/api";
import CardLibro from "../../src/components/CardLibro";
import swal from "sweetalert2";
import BotonSubir from "../components/BotonSubir";

const Lista = () => {
  const [librosOriginales, setLibrosOriginales] = useState([]);
  const [libros, setLibros] = useState([]);
  const [totalLibros, setTotalLibros] = useState(0);
  const [coincidenciasBusqueda, setCoincidenciasBusqueda] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [busqueda, setBusqueda] = useState("");
  const [tipoBusqueda, setTipoBusqueda] = useState("titulo");
  const [paginaActual, setPaginaActual] = useState(1);
  const librosPorPagina = 50;

  useEffect(() => {
    const fetchLibros = async () => {
      try {
        const response = await obtenerLibro();
        const data = response.data;
        setLibrosOriginales(data);
        setLibros(data);
        setTotalLibros(data.length);
        setLoading(false);
      } catch (error) {
        setError("Error al obtener los libros. Inténtalo de nuevo más tarde.");
        setLoading(false);
        swal.fire({
          icon: "error",
          title: "Error al obtener los libros",
          text: "Inténtalo de nuevo más tarde.",
          showConfirmButton: false,
          timer: 1900,
        });
      }
    };

    fetchLibros();
  }, []);

  useEffect(() => {
    const librosFiltrados = librosOriginales.filter((libro) =>
      libro[tipoBusqueda].toLowerCase().includes(busqueda.toLowerCase())
    );
    setLibros(librosFiltrados);
    setCoincidenciasBusqueda(librosFiltrados.length);
  }, [busqueda, tipoBusqueda, librosOriginales]);

  const indiceUltimoLibro = paginaActual * librosPorPagina;
  const indicePrimerLibro = indiceUltimoLibro - librosPorPagina;
  const librosActuales = libros.slice(indicePrimerLibro, indiceUltimoLibro);

  const paginar = (numeroPagina) => setPaginaActual(numeroPagina);

  return (
    <div className="contenedor">
      <BotonSubir />
      <h2 className="titulo">
        <b>Lista de Libros</b>
      </h2>
      <div className="d-flex justify-content-center mb-3">
        <div className="col-md-5">
          <div className="input-group">
            <input
              type="text"
              placeholder="Buscar libro..."
              className="form-control"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
            <div className="input-group-append">
              <select
                className="form-select"
                value={tipoBusqueda}
                onChange={(e) => setTipoBusqueda(e.target.value)}
              >
                <option value="titulo">Título</option>
                <option value="editorial">Editorial</option>
                <option value="clasificacion">Clasificación</option>
                <option value="apartado">Apartado</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <p>
        Total de libros registrados:<b> {totalLibros}</b>
      </p>
      <div className="d-flex justify-content-center">
        <Pagination
          elementosPorPagina={librosPorPagina}
          totalElementos={libros.length}
          paginar={paginar}
        />
      </div>
      {busqueda && (
        <p>
          Coincidencias de búsqueda:{" "}
          <b>
            {coincidenciasBusqueda
              ? coincidenciasBusqueda
              : "No hay coincidencias"}
          </b>
        </p>
      )}
      {loading ? (
        <p>Cargando libros...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          {librosActuales.map((libro) => (
            <CardLibro
              titulo={libro.titulo}
              autor={libro.autor}
              editorial={libro.editorial}
              isbn={libro.isbn}
              key={libro.id}
              cantidad={libro.cantidad}
              clasificacion={libro.clasificacion}
              apartado={libro.apartado}
            />
          ))}
          <div className="d-flex justify-content-center">
            <Pagination
              elementosPorPagina={librosPorPagina}
              totalElementos={libros.length}
              paginar={paginar}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Lista;

const Pagination = ({ elementosPorPagina, totalElementos, paginar }) => {
  const numeroPaginas = Math.ceil(totalElementos / elementosPorPagina);

  return (
    <nav>
      <ul className="pagination">
        {Array.from({ length: numeroPaginas }).map((_, index) => (
          <li key={index} className="page-item">
            <button className="page-link" onClick={() => paginar(index + 1)}>
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
