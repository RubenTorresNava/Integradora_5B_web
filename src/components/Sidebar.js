import {NavLink} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'

const Sidebar =() =>{
    return (
        <div className="sidebar bg-light">
            <ul>
                <li>
                    <div className="text-center">
                        <img src="https://i0.wp.com/utd.edu.mx/wp-content/uploads/2022/07/LOGO-UTD-NUEVO-2022_solo-01.png?fit=1024%2C387&ssl=1" alt="logo" className="img-fluid" style={{width: '100px'}}/>
                    </div>
                </li>

                <li>
                    <NavLink to="/" exact className="text-dark rounded py-2 w-100 d-inline-block px-3" activeClassname="active"><FaIcons.FaHome className="me-2"/>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/lista" exact className="text-dark rounded py-2 w-100 d-inline-block px-3" activeClassname="active"><FaIcons.FaList className="me-2"/>Lista y Catalogo</NavLink>
                </li>
                <li>
                    <NavLink to="/prestamos" exact className="text-dark rounded py-2 w-100 d-inline-block px-3" activeClassname="active"><FaIcons.FaCalendarAlt className="me-2"/>Prestamos</NavLink>
                </li>
                <li>
                    <NavLink to="/alumnos" exact className="text-dark rounded py-2 w-100 d-inline-block px-3" activeClassname="active"><FaIcons.FaUsers className="me-2"/>Alumnos</NavLink>
                </li>
            </ul>
        </div>
    )
}
export default Sidebar;