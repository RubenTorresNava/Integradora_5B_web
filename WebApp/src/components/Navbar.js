import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Navbar = () => {
    // logica local para cerrar sesion. se debe adaptar a cuando realmente se cierre sesion
    const navigate = useNavigate();
    const handleLogout = () => {
        Swal.fire({
            title: "Estas segur@?",
            text: "Se cerrará sesión del sistema.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, salir."
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Sesión cerrada",
                    text: "Has cerrado sesión exitosamente.",
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false
                }).then(() => {
                    navigate('/');
                });
            }
        });
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-light">
            <div className="container">
                <Link to="/admin/inicio" className="navbar-brand grow"><b>Sistema de bibloteca</b></Link>
                {/* <div className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Buscar</button>
                </div> */}
                <div>
                    <button onClick={handleLogout} className="btn btn-outline-danger">Cerrar sesion</button>
                </div>
                {/* div de solo espaciado no quitar xdxd*/}
                <div></div>
            </div>
        </nav>
    );
}

export default Navbar;