import React, { useState, useEffect } from 'react';
import { obtenerAlumnos } from '../api/api';
import CardAlumno from '../../src/components/CardAlumno';

const Alumnos = () => {
    const [alumnos, setAlumnos] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAlumnos = async () => {
            try {
                const response = await obtenerAlumnos();
                setAlumnos(response.data);
                setLoading(false);
            } catch (error) {
                setError('Error al obtener los alumnos. Inténtalo de nuevo más tarde.');
                setLoading(false);
            }
        };

        fetchAlumnos();
    }, []);

    return (
        <div className="contenedor">
            <h2 className="titulo">Alumnos</h2>
            <hr/>
            {loading ? (
                <p>Cargando alumnos...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <div>
                    <p>Numero total de alumnos registrados: <strong>{alumnos && alumnos.length}</strong></p>
                    <hr/>
                    <div className="row">
                    {alumnos && alumnos.length > 0 && (
    <div className="row">
        {alumnos.map(alumno => (
            <div className="col-md-4" /* key={alumno._id} */>
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
)}

                    </div>
                </div>
            )}
        </div>
    );
};

export default Alumnos;
