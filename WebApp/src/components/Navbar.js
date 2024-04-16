// componente de la barra de navegacion 
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    // hook para navegar entre las rutas
    const navigate = useNavigate();
    const setAuth = useContext(AuthContext).setAuth;
    // funcion para cerrar sesion
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
            // si se confirma la salida, muestra una alerta de exito y redirige a la pagina de inicio
            if (result.isConfirmed) {
                localStorage.removeItem('elToken');
                setAuth(false);
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
        // estructura de la barra de navegacion
        <nav className="navbar navbar-expand-lg navbar-dark bg-light">
            <div className="container">
                {/* 
                Link a la pagina de inicio con el nombre del sistema
                */}
                <Link to="/admin/inicio" className="navbar-brand grow"><b>Sistema de biblioteca</b></Link>
                <div>
                    {/*
                    Boton para cerrar sesion
                    */}
                    <button onClick={handleLogout} className="btn btn-outline-danger">Cerrar sesion</button>
                </div>
                {/* div de solo espaciado no quitar xdxd*/}
                <div></div>
            </div>
        </nav>
    );
}

export default Navbar;