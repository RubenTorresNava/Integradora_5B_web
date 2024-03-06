import React, { useState } from 'react';

const FormularioAlumnoAgregar = () => {
    const [datosAlumno, setDatosAlumno] = useState({
        nombre: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        numeroControl: '',
        carrera: ''
    });

    const handleChange = (e) => {
        setDatosAlumno({
            ...datosAlumno,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(datosAlumno);
        // Aqui puedes enviar los datos a la base de datos o realizar cualquier otra accion

    };

    return (
        // primero un contenedor que tenga todo centrado
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input required type="text" className="form-control" id="nombre" name="nombre" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="apellidoPaterno" className="form-label">Apellido Paterno</label>
                            <input required type="text" className="form-control" id="apellidoPaterno" name="apellidoPaterno" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="apellidoMaterno" className="form-label">Apellido Materno</label>
                            <input required type="text" className="form-control" id="apellidoMaterno" name="apellidoMaterno" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="numeroControl" className="form-label">Numero de Control</label>
                            <input required type="text" className="form-control" id="numeroControl" name="numeroControl" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="carrera" className="form-label">Carrera</label>
                            <input required type="text" className="form-control" id="carrera" name="carrera" onChange={handleChange} />
                        </div>
                        {/* centrar boton */}
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary">Agregar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default FormularioAlumnoAgregar;
