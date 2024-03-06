import React from 'react';
import CardObjetos from '../../src/components/CardObjetos';
import { FaBook, FaCalendarAlt, FaUsers } from 'react-icons/fa';

const Inicio = () => {
    return (
        <div className="container">
            <h2>Vista General</h2>
            <hr/>
            <div className="row">
                {/* formato de prueba */}
                <div className="col-md-4">
                    <CardObjetos
                        icono={<FaBook size={50} />}
                        nombre="Lista y Catalogo"
                        cantidad="10"
                        ruta="/lista"
                    />
                </div>
                <div className="col-md-4">
                    <CardObjetos
                        icono={<FaCalendarAlt size={50} />}
                        nombre="Prestamos"
                        cantidad="10"
                        ruta="/prestamos"
                    />
                </div>
                <div className="col-md-4">
                    <CardObjetos
                        icono={<FaUsers size={50} />}
                        nombre="Alumnos"
                        cantidad="10"
                        ruta="/alumnos"
                    />
                </div>
            </div>
        </div>
    );
};

export default Inicio;
