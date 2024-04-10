import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { crearAlumno } from '../api/api';

const FormularioAlumnoAgregar = () => {
    const [datosAlumno, setDatosAlumno] = useState({
        nombre: '',
        apellidoP: '',
        apellidoM: '',
        noCtrl: '',
        carrera: ''
    });

    const handleChange = (e) => {
        setDatosAlumno({
            ...datosAlumno,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
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
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6">
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
                            <input required type="text" className="form-control" id="carrera" name="carrera" onChange={handleChange} />
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-success" disabled={!Object.values(datosAlumno).every(Boolean)}>Agregar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    );
};

export default FormularioAlumnoAgregar;
