import {useEffect, useState} from 'react';
import CardObjetos from '../../src/components/CardObjetos';
import CardObjetos1 from '../../src/components/CardObjetos1';
import * as FaIcons from 'react-icons/fa';
import { contarLibros, contarAlumnos, contarPrestamos } from '../api/api';



const Inicio = () => {
    const [totalLibros, setTotalLibros] = useState(0);
    const [totalAlumnos, setTotalAlumnos] = useState(0);
    const [totalPrestamos, setTotalPrestamos] = useState(0);

    useEffect(() => {
        const fetchTotalLibros = async () => {
            try {
                const response = await contarLibros();
                setTotalLibros(response.data.total);
            } catch (error) {
                console.error('Error al obtener el total de libros:', error);
            }
        };

        const fetchTotalAlumnos = async () => {
            try {
                const response = await contarAlumnos();
                setTotalAlumnos(response.data.total);
            } catch (error) {
                console.error('Error al obtener el total de alumnos:', error);
            }
        };
        const fetchTotalPrestamos = async () => {
            try {
                const response = await contarPrestamos();
                setTotalPrestamos(response.data.total);
            }
            catch (error) {
                console.error('Error al obtener el total de prestamos:', error);
            }
        };
        fetchTotalPrestamos();
        fetchTotalLibros();
        fetchTotalAlumnos();
    }, []);
    return (
        <div className="contenedor">
            <h2 className="titulo"><b>Vista General</b></h2>
            <hr/>
            <div className="row">
                <div className="col-md-4 mb-4">
                    <CardObjetos
                        icono={<FaIcons.FaBook size={50} />}
                        nombre="Lista y Catalogo"
                        cantidad={totalLibros}
                        ruta="/admin/lista"
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <CardObjetos
                        icono={<FaIcons.FaCalendarAlt size={50} />}
                        nombre="Prestamos"
                        cantidad={totalPrestamos}
                        ruta="/admin/prestamos"
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <CardObjetos
                        icono={<FaIcons.FaUsers size={50} />}
                        nombre="Alumnos"
                        cantidad={totalAlumnos}
                        ruta="/admin/alumnos"
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <CardObjetos1
                        icono={<FaIcons.FaCalendarPlus size={50} />}
                        nombre="Nuevo Prestamo"
                        ruta="/admin/prestamo-alumno"
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <CardObjetos1
                        icono={<FaIcons.FaUserPlus size={50} />}
                        nombre="Agregar Alumno"
                        ruta="/admin/agregar-alumno"
                    />
                </div>
            </div>
        </div>
    );
};

export default Inicio;
