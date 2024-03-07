import React from 'react';
import { NavLink } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <div className="text-center sidebarImg grow">
                        <img src="https://i0.wp.com/utd.edu.mx/wp-content/uploads/2022/07/LOGO-UTD-NUEVO-2022_solo-01.png?fit=1024%2C387&ssl=1" alt="logo" className="img-fluid" style={{ width: '100px' }} />
                    </div>
                </li>
                <li className="opc grow">
                    <NavLink to="/" exact className="text-dark rounded py-2 w-100 d-inline-block px-3" activeClassName="active"><FaIcons.FaHome className="me-2" />Inicio</NavLink>
                </li>
                <li>
                    <div className="dropdown">
                        <button className="grow btn btn-light dropdown-toggle w-100 text-dark rounded py-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <FaIcons.FaList className="me-2" /> Catalogo
                        </button>
                        <ul className="grow dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><NavLink to="/lista" exact className="dropdown-item" activeClassName="active"><FaIcons.FaListAlt className="me-2" />Lista de Libros</NavLink></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="dropdown">
                        <button className="grow btn btn-light dropdown-toggle w-100 text-dark rounded py-2" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                            <FaIcons.FaCalendarAlt className="me-2" /> Prestamos
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                            <li><NavLink to="/prestamos" exact className="grow dropdown-item" activeClassName="active"><FaIcons.FaListAlt className="me-2" />Lista</NavLink></li>
                            <li><NavLink to="/prestamo-alumno" exact className="grow dropdown-item" activeClassName="active"><FaIcons.FaCalendarPlus className="me-2"/>Nuevo Prestamo</NavLink></li>
                            <li><NavLink to="/prestamo-tiempo" exact className="grow dropdown-item" activeClassName="active"><FaIcons.FaCalendarDay className="me-2"/>Por Tiempo</NavLink></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="dropdown">
                        <button className="grow btn btn-light dropdown-toggle w-100 text-dark rounded py-2" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
                            <FaIcons.FaUsers className="me-2" /> Alumnos
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                            <li><NavLink to="/alumnos" exact className="grow dropdown-item" activeClassName="active"><FaIcons.FaListAlt className="me-2" />Lista de Alumnos</NavLink></li>
                            <li><NavLink to="/agregar-alumno" exact className="grow dropdown-item" activeClassName="active"><FaIcons.FaUserPlus className="me-2" />Agregar Alumno</NavLink></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;
