import React from 'react';
import CardObjetos from '../../src/components/CardObjetos';
import CardObjetos1 from '../../src/components/CardObjetos1';
import * as FaIcons from 'react-icons/fa';

const Inicio = () => {
    return (
        <div className="contenedor">
            <h2 className="titulo">Vista General</h2>
            <hr/>
            <div className="row">
                <div className="col-md-4 mb-4">
                    <CardObjetos
                        icono={<FaIcons.FaBook size={50} />}
                        nombre="Lista y Catalogo"
                        cantidad="10"
                        ruta="/lista"
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <CardObjetos
                        icono={<FaIcons.FaCalendarAlt size={50} />}
                        nombre="Prestamos"
                        cantidad="10"
                        ruta="/prestamos"
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <CardObjetos
                        icono={<FaIcons.FaUsers size={50} />}
                        nombre="Alumnos"
                        cantidad="10"
                        ruta="/alumnos"
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <CardObjetos1
                        icono={<FaIcons.FaCalendarPlus size={50} />}
                        nombre="Nuevo Prestamo"
                        ruta="/prestamo-alumno"
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <CardObjetos1
                        icono={<FaIcons.FaCalendarDay size={50} />}
                        nombre="Prestamo por Tiempo"
                        ruta="/prestamo-tiempo"
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <CardObjetos1
                        icono={<FaIcons.FaUserPlus size={50} />}
                        nombre="Agregar Alumno"
                        ruta="/agregar-alumno"
                    />
                </div>
            </div>
        </div>
    );
};

export default Inicio;
