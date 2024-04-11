// componente que contiene el menu lateral de la aplicacion
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

const Sidebar = () => {
    // estado para saber si el catalogo esta abierto
    const [isCatalogoOpen, setIsCatalogoOpen] = useState(false);
    const [isPrestamosOpen, setIsPrestamosOpen] = useState(false);
    const [isAlumnsoOpen, setAlumnsoOpen] = useState(false);
    // funcion para abrir y cerrar el catalogo
    const handleCatalogoClick = (event) => {
        event.preventDefault();
        setIsCatalogoOpen(!isCatalogoOpen);
    };
    // funcion para abrir y cerrar los prestamos
    const handlePrestamosClick = (event) => {
        event.preventDefault();
        setIsPrestamosOpen(!isPrestamosOpen);
    };
    // funcion para abrir y cerrar los alumnos
    const handleAlumnosClick = (event) => {
        event.preventDefault();
        setAlumnsoOpen(!isAlumnsoOpen);
    }

    return (
        // estructura del menu lateral
        <div className="sidebar">
            {/* 
            Lista de opciones del menu lateral
            */}
            <ul>
                 <li>
                    {/* 
                    Imagen del logo del sistema
                    */}
                     <div className="text-center sidebarImg grow">
                         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyWhythVZp0TMHYz3yUUxnwy4-b435Hphl28hQbVwKvUdQ-nPxZyRvmYJDYDkqUT83rAQ&usqp=CAU" alt="logo"  />
                     </div>
                 </li>
                {/*
                Opcion de inicio
                */}
                <li className="opc grow">
                    <NavLink to="/admin/inicio" exact className="text-dark rounded py-2 w-100 d-inline-block px-3" activeClassName="active"><FaIcons.FaHome className="me-2" />Inicio</NavLink>
                </li>
                {/* 
                Opciones del menu lateral
                */}
                <div class="opciones">
                    {/* 
                    Opcion de catalogo
                    */}
                    <li>
                        {/* 
                        ruta hacia la pagina de catalogo                         
                        */}
                        <NavLink to="/admin/lista" exact className="text-dark rounded py-2 w-100 d-inline-block px-3" activeClassName="active"><FaIcons.FaList className="me-2" /> Catalogo</NavLink>
                    </li>
                    <li>
                        {/*
                        Opcion de prestamos
                        */}
                        <NavLink to="/admin/prestamos" exact className="text-dark rounded py-2 w-100 d-inline-block px-3" activeClassName="active"><FaIcons.FaCalendarAlt className="me-2" /> Prestamos</NavLink>
                    </li>
                    <li>
                        {/*
                        Opcion de alumnos
                        */}
                        <NavLink to="/admin/alumnos" exact className="text-dark rounded py-2 w-100 d-inline-block px-3" activeClassName="active"><FaIcons.FaUsers className="me-2" /> Alumnos</NavLink>
                    </li>
                </div>
            </ul>
        </div>
    )
}

export default Sidebar;