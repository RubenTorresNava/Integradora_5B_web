import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

const Sidebar = () => {
    const [isCatalogoOpen, setIsCatalogoOpen] = useState(false);
    const [isPrestamosOpen, setIsPrestamosOpen] = useState(false);
    const [isAlumnsoOpen, setAlumnsoOpen] = useState(false);

    const handleCatalogoClick = (event) => {
        event.preventDefault();
        setIsCatalogoOpen(!isCatalogoOpen);
    };

    const handlePrestamosClick = (event) => {
        event.preventDefault();
        setIsPrestamosOpen(!isPrestamosOpen);
    };

    const handleAlumnosClick = (event) => {
        event.preventDefault();
        setAlumnsoOpen(!isAlumnsoOpen);
    }

    return (
        <div className="sidebar">
            <ul>
                 <li>
                     <div className="text-center sidebarImg grow">
                         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyWhythVZp0TMHYz3yUUxnwy4-b435Hphl28hQbVwKvUdQ-nPxZyRvmYJDYDkqUT83rAQ&usqp=CAU" alt="logo"  />
                     </div>
                 </li>
                <li className="opc grow">
                    <NavLink to="/admin/inicio" exact className="text-dark rounded py-2 w-100 d-inline-block px-3" activeClassName="active"><FaIcons.FaHome className="me-2" />Inicio</NavLink>
                </li>

                <li>
                    <div className="dropdown">
                        <NavLink to="#" onClick={handleCatalogoClick} className="text-dark rounded py-2 w-100 d-inline-block px-3"><FaIcons.FaList className="me-2" /> Catalogo</NavLink>
                        <ul className={isCatalogoOpen ? 'open' : ''}>
                            <li><NavLink to="/admin/lista" exact className="dropdown-item" activeClassName="active"><FaIcons.FaListAlt className="me-2" />Lista de Libros</NavLink></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="dropdown">
                        <NavLink to="#" onClick={handlePrestamosClick} className="text-dark rounded py-2 w-100 d-inline-block px-3"><FaIcons.FaCalendarAlt className="me-2" /> Prestamos</NavLink>
                        <ul className={isPrestamosOpen ? 'open' : ''}>
                            <li><NavLink to="/admin/prestamos" exact className="dropdown-item" activeClassName="active"><FaIcons.FaListAlt className="me-2" />Lista</NavLink></li>
                            <li><NavLink to="/admin/prestamo-alumno" exact className="dropdown-item" activeClassName="active"><FaIcons.FaCalendarPlus className="me-2"/>Nuevo Prestamo</NavLink></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="dropdown">
                        <NavLink to="#" onClick={handleAlumnosClick} className="text-dark rounded py-2 w-100 d-inline-block px-3"><FaIcons.FaUsers className="me-2" /> Alumnos</NavLink>
                        <ul className={isAlumnsoOpen ? 'open' : ''}>
                            <li><NavLink to="/admin/alumnos" exact className="dropdown-item" activeClassName="active"><FaIcons.FaListAlt className="me-2" />Lista de Alumnos</NavLink></li>
                            <li><NavLink to="/admin/agregar-alumno" exact className="dropdown-item" activeClassName="active"><FaIcons.FaUserPlus className="me-2" />Agregar Alumno</NavLink></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;