import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-light">
            <div className="container">
                <Link to="/" className="navbar-brand grow">Sistema de bibloteca</Link>
                <div className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Buscar</button>
                </div>
                <div>
                    {/* quiza agregar la logica de cierre de sesion??? */}
                    <Link to="/login" className="btn btn-outline-danger">Cerrar sesion</Link>
                </div>
                {/* div de solo espaciado */}
                <div></div>
            </div>
        </nav>
    );
}

export default Navbar;