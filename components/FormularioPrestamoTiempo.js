import React, { useState } from 'react';

const FormularioPrestamoTiempo = () => {
    const [datosAlumno, setDatosAlumno] = useState({
        folio: '',
        nombre: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        cuatrimestre: '',
        carrera: '',
        numeroControl: ''
    });

    const [datosLibro, setDatosLibro] = useState({
        idLibro: '',
        titulo: '',
        autor: '',
        editorial: ''
    });

    const [datosPrestamo, setDatosPrestamo] = useState({
        fechaPrestamo: '',
        folioPrestamo: '',
        fechaDevolucion: ''
    });

    const [datosEmpleado, setDatosEmpleado] = useState({
        idEmpleado: '',
        usuario: ''
    });

    const handleChangeAlumno = (e) => {
        setDatosAlumno({
            ...datosAlumno,
            [e.target.name]: e.target.value
        });
    };

    const handleChangeLibro = (e) => {
        setDatosLibro({
            ...datosLibro,
            [e.target.name]: e.target.value
        });
    };

    const handleChangePrestamo = (e) => {
        setDatosPrestamo({
            ...datosPrestamo,
            [e.target.name]: e.target.value
        });
    };

    const handleChangeEmpleado = (e) => {
        setDatosEmpleado({
            ...datosEmpleado,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes enviar los datos a la base de datos o realizar cualquier otra acción
        console.log('Datos del alumno:', datosAlumno);
        console.log('Datos del libro:', datosLibro);
        console.log('Datos del préstamo:', datosPrestamo);
        console.log('Datos del empleado:', datosEmpleado);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Prestamo por hora</h2>
            <hr/>
            <h3>Datos del Alumno</h3>
            
            <div className="row">
                <div className="col">
                    <input required type="text" name="folio" className="form-control mb-3" placeholder="Folio" value={datosAlumno.folio} onChange={handleChangeAlumno} />
                    <input required type="text" name="nombre" className="form-control mb-3" placeholder="Nombre" value={datosAlumno.nombre} onChange={handleChangeAlumno} />
                    <input required type="text" name="apellidoPaterno" className="form-control mb-3" placeholder="Apellido Paterno" value={datosAlumno.apellidoPaterno} onChange={handleChangeAlumno} />
                    <input required type="text" name="apellidoMaterno" className="form-control mb-3" placeholder="Apellido Materno" value={datosAlumno.apellidoMaterno} onChange={handleChangeAlumno} />
                </div>
                <div className="col">
                    <input required type="text" name="cuatrimestre" className="form-control mb-3" placeholder="Cuatrimestre" value={datosAlumno.cuatrimestre} onChange={handleChangeAlumno} />
                    <input required type="text" name="carrera" className="form-control mb-3" placeholder="Carrera" value={datosAlumno.carrera} onChange={handleChangeAlumno} />
                    <input required type="text" name="numeroControl" className="form-control mb-3" placeholder="Número de Control" value={datosAlumno.numeroControl} onChange={handleChangeAlumno} />
                </div>
            </div>

            <h2>Datos del Libro</h2>
            <div className="row">
                <div className="col">
                    <input required type="text" name="idLibro" className="form-control mb-3" placeholder="ID del Libro" value={datosLibro.idLibro} onChange={handleChangeLibro} />
                    <input required type="text" name="titulo" className="form-control mb-3" placeholder="Título del Libro" value={datosLibro.titulo} onChange={handleChangeLibro} />
                </div>
                <div className="col">
                    <input required type="text" name="autor" className="form-control mb-3" placeholder="Autor del Libro" value={datosLibro.autor} onChange={handleChangeLibro} />
                    <input required type="text" name="editorial" className="form-control mb-3" placeholder="Editorial" value={datosLibro.editorial} onChange={handleChangeLibro} />
                </div>
            </div>

            <h2>Datos del Préstamo</h2>
            <div className="row">
                <div className="col">
                    <input required type="date" name="fechaPrestamo" className="form-control mb-3" value={datosPrestamo.fechaPrestamo} onChange={handleChangePrestamo} />
                    <input required type="text" name="folioPrestamo" className="form-control mb-3" placeholder="Folio de Préstamo" value={datosPrestamo.folioPrestamo} onChange={handleChangePrestamo} />
                </div>
                <div className="col">
                    <input required type="date" name="fechaDevolucion" className="form-control mb-3" value={datosPrestamo.fechaDevolucion} onChange={handleChangePrestamo} />
                </div>
            </div>

            <h2>Datos del Empleado</h2>
            <div className="row">
                <div className="col">
                    <input required type="text" name="idEmpleado" className="form-control mb-3" placeholder="ID del Empleado" value={datosEmpleado.idEmpleado} onChange={handleChangeEmpleado} />
                </div>
                <div className="col">
                    <input required type="text" name="usuario" className="form-control mb-3" placeholder="Usuario del Empleado" value={datosEmpleado.usuario} onChange={handleChangeEmpleado} />
                </div>
            </div>
            <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">Enviar</button>
            </div>
        </form>
    );
};

export default FormularioPrestamoTiempo;
