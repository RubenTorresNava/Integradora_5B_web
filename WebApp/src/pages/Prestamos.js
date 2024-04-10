import React, { useEffect, useState } from 'react';
import CardPrestamo from '../../src/components/CardPrestamo';
import { obtenerPrestamos } from '../api/api';
import BotonModal1 from '../../src/components/BotonModal1';

const Prestamos = () => {
    const [prestamos, setPrestamos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPrestamos = async () => {
            try {
                const response = await obtenerPrestamos();
                const data = response.data;
                console.log(data);
                setPrestamos(data);
            } catch (error) {
                console.error('Error al obtener los prestamos. Inténtalo de nuevo más tarde.');
                setError('Error al obtener los prestamos. Inténtalo de nuevo más tarde.');
            }
        };

        fetchPrestamos();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="contenedor">
            <BotonModal1 />
            <h2 className="titulo">Lista General De Prestamos</h2>
            <hr />
            <div className="row">
            {prestamos.prestamos && prestamos.prestamos.map((prestamo) => (
    <div className="col-md-4" key={prestamo.idPrestamo}>
        <CardPrestamo
            idPrestamo={prestamo.idPrestamo}
            idLibro={prestamo.libro}
            fechaPrestamo={prestamo.fechaPrestamo}
            fechaEntrega={prestamo.fechaEntrega}
            estado={prestamo.estado}
        />
    </div>
))}

            </div>
        </div>
    )
}

export default Prestamos;