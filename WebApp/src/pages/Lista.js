import React, { useState, useEffect } from 'react';
import { obtenerLibro } from '../api/api'; 
import CardLibro from '../components/CardLibro';
const Libros = () => {
    const [libros, setLibros] = useState([]); 
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLibros = async () => {
            try {
                const response = await obtenerLibro(); 
                setLibros(response.data); 
                setLoading(false); 
            } catch (error) {
                setError('Error al obtener los libros. Inténtalo de nuevo más tarde.'); 
                setLoading(false); 
            }
        };

        fetchLibros(); 
    }, []); 

    return (
        <div className="contenedor">
            <h2 className="titulo">Libros</h2>
            <hr/>
            {loading ? (
                <p>Cargando libros...</p>
            ) : error ? ( 
                <p>{error}</p>
            ) : ( 
                <div>
                    <p>Número total de libros registrados: <strong>{libros.length}</strong></p>
                    <hr/>
                    <div className="row">
                        {libros.map(libro => (
                            <div className="col-md-4" /* key={libro._id} */>
                                <CardLibro
                                    idLibro={libro._id}
                                    titulo={libro.titulo}
                                    autor={libro.autor}
                                    editorial={libro.editorial}
                                    cantidad={libro.cantidad}
                                    clasificacion={libro.clasificacion}
                                    apartado={libro.apartado}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Libros;
