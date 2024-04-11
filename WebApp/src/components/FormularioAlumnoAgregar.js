// componente formulario para poder hacer la agregacion de un alumno nuevo
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { crearAlumno } from '../api/api';

const FormularioAlumnoAgregar = () => {
    // estado para guardar los datos del alumno
    const [datosAlumno, setDatosAlumno] = useState({
        nombre: '',
        apellidoP: '',
        apellidoM: '',
        noCtrl: '',
        carrera: ''
    });
    // funcion para cambiar los valores de los campos
    const handleChange = (e) => {
        setDatosAlumno({
            ...datosAlumno,
            [e.target.name]: e.target.value
        });
    };
    // funcion para enviar los datos del alumno
    const handleSubmit = async (e) => {
        // evita que se recargue la pagina
        e.preventDefault();

        try {
            // Crear un nuevo objeto con los nombres de campos esperados por el backend
            const alumnoParaEnviar = {
                noCtrl: datosAlumno.noCtrl,
                apellidoP: datosAlumno.apellidoP,
                apellidoM: datosAlumno.apellidoM,
                nombre: datosAlumno.nombre,
                carrera: datosAlumno.carrera
            };

            // Envía los datos del nuevo alumno al servidor
            await crearAlumno(alumnoParaEnviar);

            // Muestra una alerta de éxito
            Swal.fire({
                icon: 'success',
                title: 'Alumno agregado',
                showConfirmButton: false,
                timer: 1000
            });
            // Limpia los campos del formulario
            setDatosAlumno({
                nombre: '',
                apellidoP: '',
                apellidoM: '',
                noCtrl: '',
                carrera: ''
            });
            //actuaiza la pagina despues de 2 segundos
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } catch (error) {
            // Si hay un error, muestra una alerta de error
            console.error('Error al agregar alumno:', error);
            Swal.fire("Error", "Error al agregar alumno", "error");
        }
    };

    return (
        // estructura del formulario
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6">
                    {/* 
                    Titulo del formulario
                    */}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="numeroControl" className="form-label titulo">Numero de Control</label>
                            <input required type="number" className="form-control" id="noCrtl" name="noCtrl" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label titulo">Nombre</label>
                            <input required type="text" className="form-control" id="nombre" name="nombre" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="apellidoPaterno" className="form-label titulo">Apellido Paterno</label>
                            <input required type="text" className="form-control" id="apellidoPaterno" name="apellidoP" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="apellidoMaterno" className="form-label titulo">Apellido Materno</label>
                            <input required type="text" className="form-control" id="apellidoMaterno" name="apellidoM" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="carrera" className="form-label titulo">Carrera</label>
                            <select required className="form-select" id="carrera" name="carrera" onChange={handleChange}>
                                <option value="">Selecciona una carrera</option>
                                <option value="Desarrollo de Negocios Área Mercadotecnia">Desarrollo de Negocios Área Mercadotecnia</option>
                                <option value="Diseño Digital Área Animación">Diseño Digital Área Animación</option>
                                <option value="Energías Renovables Área Calidad y Ahorro De Energía">Energías Renovables Área Calidad y Ahorro De Energía</option>
                                <option value="Lengua Inglesa">Lengua Inglesa</option>
                                <option value="Mantenimiento Área Industrial">Mantenimiento Área Industrial</option>
                                <option value="Mecatrónica Area Sistemas de Manufactura Flexible">Mecatrónica Area Sistemas de Manufactura Flexible</option>
                                <option value="Operaciones Comerciales Internacionales Área Clasificación Arancelaria y Despacho Aduanero">Operaciones Comerciales Internacionales Área Clasificación Arancelaria y Despacho Aduanero</option>
                                <option value="Procesos Industriales Área Manufactura">Procesos Industriales Área Manufactura</option>
                                <option value="Tecnologías de la Información">Tecnologías de la Información</option>
                                <option value="Ing en desarrollo y gestión de software">Ing en desarrollo y gestión de software</option>                               
                                <option value="Ing en energías renovables">Ing en energías renovables</option>
                                <option value="Ing en logística internacional">Ing en logística internacional</option>
                                <option value="Ing en mantenimiento industrial">Ing en mantenimiento industrial</option>
                                <option value="Ing en mecatrónica">Ing en mecatrónica</option>
                                <option value="Lic en gestión institucional, educativa y curricular">Lic en gestión institucional, educativa y curricular</option>
                                <option value="Lic en innovación de negocios y mercadotecnia">Lic en innovación de negocios y mercadotecnia</option>
                            </select>
                        </div>
                        <div className="d-grid">
                            {/* 
                            Boton para enviar los datos del formulario
                            */}
                            <button type="submit" className="btn btn-success" disabled={!Object.values(datosAlumno).every(Boolean)}>Agregar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    );
};

export default FormularioAlumnoAgregar;
