import React from 'react';
import { NavLink } from 'react-router-dom';

const CardObjetos = ({ icono, nombre, cantidad, ruta }) => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="d-flex align-items-center">
                    <div className="me-3">
                        <span>{icono}</span>
                    </div>
                    <div>
                        <h5 className="card-title">{nombre}</h5>
                        <p className="card-text">Cantidad: {cantidad}</p>
                        <NavLink to={ruta} className="btn btn-primary">
                            Ir a {nombre}
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardObjetos;
