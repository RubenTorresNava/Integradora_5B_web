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
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label titulo">Nombre</label>
                            <input required type="text" className="form-control" id="nombre" name="nombre" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="apellidoPaterno" className="form-label titulo">Apellido Paterno</label>
                            <input required type="text" className="form-control" id="apellidoPaterno" name="apellidoPaterno" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="apellidoMaterno" className="form-label titulo">Apellido Materno</label>
                            <input required type="text" className="form-control" id="apellidoMaterno" name="apellidoMaterno" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="numeroControl" className="form-label titulo">Numero de Control</label>
                            <input required type="text" className="form-control" id="numeroControl" name="numeroControl" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="carrera" className="form-label titulo">Carrera</label>
                            <input required type="text" className="form-control" id="carrera" name="carrera" onChange={handleChange} />
                        </div>
                        {/* centrar boton */}
                        <div className="d-grid">
                            <button type="submit" className="btn btn-success">Agregar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default FormularioAlumnoAgregar;
