import React, { useState, useEffect } from 'react';
import { obtenerAlumnos } from '../api/api';
import CardAlumno from '../../src/components/CardAlumno';
import BotonModal from '../../src/components/BotonModal';

const Alumnos = () => {
    const [alumnosOriginales, setAlumnosOriginales] = useState([]);
    const [alumnos, setAlumnos] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [busqueda, setBusqueda] = useState('');
    const [tipoBusqueda, setTipoBusqueda] = useState('nombre');
    const [paginaActual, setPaginaActual] = useState(1);
    const [alumnosTotal, setAlumnosTotal] = useState(0);
    const [coincidenciasBusqueda, setCoincidenciasBusqueda] = useState(0);
    const alumnosPorPagina = 20;
    
    useEffect(() => {
        const fetchAlumnos = async () => {
            try {
                const response = await obtenerAlumnos();
                const data = response.data;
                setAlumnosOriginales(data);
                setAlumnos(data);
                setAlumnosTotal(data.length);
                setLoading(false);
            } catch (error) {
                setError('Error al obtener los alumnos. Inténtalo de nuevo más tarde.');
                setLoading(false);
            }
        };

        fetchAlumnos();
    }, []);

    useEffect(() => {
        const alumnosFiltrados = alumnosOriginales.filter(alumno =>
            alumno[tipoBusqueda].toString().toLowerCase().includes(busqueda.toLowerCase())
        );
        setAlumnos(alumnosFiltrados);
        setCoincidenciasBusqueda(alumnosFiltrados.length);
    }, [busqueda, tipoBusqueda, alumnosOriginales]);

    const indiceUltimoAlumno = paginaActual * alumnosPorPagina;
    const indicePrimerAlumno = indiceUltimoAlumno - alumnosPorPagina;
    const alumnosActuales = alumnos.slice(indicePrimerAlumno, indiceUltimoAlumno);

    const paginar = numeroPagina => setPaginaActual(numeroPagina);

    return (
        <div className="contenedor">
            <BotonModal />
            <h2 className="titulo"><b>Alumnos</b></h2>
            <div className="d-flex justify-content-center mb-3">
                <div className="col-md-5">
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Buscar alumno..."
                            className="form-control"
                            value={busqueda}
                            onChange={e => setBusqueda(e.target.value)}
                        />
                        <div className="input-group-append">
                            <select
                                className="form-select"
                                value={tipoBusqueda}
                                onChange={e => setTipoBusqueda(e.target.value)}
                            >
                                <option value="nombre">Nombre</option>
                                <option value="noCtrl">Número de control</option>
                                <option value="carrera">Carrera</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
                
            {loading ? (
                <p>Cargando alumnos...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <div>
                    <p>Total de alumnos: <strong>{alumnosTotal}</strong></p>
                    {busqueda && (
                        <p>Resultados de la búsqueda: <strong>{coincidenciasBusqueda}</strong></p>
                    )}
                    {coincidenciasBusqueda === 0 && <p><b>Sin coincidencias.</b></p>}
                    <hr/>
                    <div className="d-flex justify-content-center">
                        <Pagination
                            alumnosPorPagina={alumnosPorPagina}
                            totalAlumnos={alumnos.length}
                            paginar={paginar}
                        />
                    </div>
                    <div className="row">
                        {alumnosActuales.map(alumno => (
                            <div className="col-md-4" key={alumno._id}>
                                <CardAlumno
                                    noCtrl={alumno.noCtrl}
                                    nombre={alumno.nombre}
                                    apellidoP={alumno.apellidoP}
                                    apellidoM={alumno.apellidoM}
                                    carrera={alumno.carrera}
                                />
                            </div>
                        ))}
                    </div>
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

const Pagination = ({ alumnosPorPagina, totalAlumnos, paginar }) => {
    const numerosPagina = [];

    for (let i = 1; i <= Math.ceil(totalAlumnos / alumnosPorPagina); i++) {
        numerosPagina.push(i);
    }

    return (
        <nav>
            <ul className='pagination'>
                {numerosPagina.map(numero => (
                    <li key={numero} className='page-item'>
                        <a onClick={() => paginar(numero)} className='page-link'>
                            {numero}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
