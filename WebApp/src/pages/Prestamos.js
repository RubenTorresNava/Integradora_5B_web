import React from 'react';
import CardPrestamo from '../../src/components/CardPrestamo';

const Prestamos= () => {
    return (
        <div className="contenedor">
            <h2 className="titulo">Lista General De Prestamos</h2>
            <hr/>
            <div className="row">
                <div className="col-md-4">
                    {/* formato de prueba */}
                    <CardPrestamo
                        idPrestamo="1"
                        idLibro="1"
                        fechaPrestamo="2021-08-01"
                        fechaDevolucion="2021-08-15"
                        estado="Prestado"
                        titulo="El principito"
                    />
                </div>
                <div className="col-md-4">
                    <CardPrestamo
                        idPrestamo="2"
                        idLibro="2"
                        fechaPrestamo="2021-08-01"
                        fechaDevolucion="2021-08-15"
                        estado="Prestado"
                        titulo="El principito"
                    />
                </div>
                <div className="col-md-4">
                    <CardPrestamo
                        idPrestamo="3"
                        idLibro="3"
                        fechaPrestamo="2021-08-01"
                        fechaDevolucion="2021-08-15"
                        estado="Prestado"
                        titulo="El principito"
                    />
                </div>
            </div>
        </div>
    )
}

export default Prestamos;