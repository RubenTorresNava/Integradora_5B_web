import React from 'react';
import CardAlumno from '../../src/components/CardAlumno';

const Alumnos= () => {
    return (
        <div className="container">
            <h2>Alumnos</h2>
            <hr/>
            <div className="row">
                <div className="col-md-12">
                    <p>Numero total de alumnos registrados: <strong> 10</strong></p>
                </div>
            </div>
            <hr/>
            <div className="row">
            {/* formato de prueba */}
                <div className="col-md-4">
                    <CardAlumno
                        _id="1"
                        noCtrl="1234567890"
                        nombre="Juan"
                        apellidoP="Perez"
                        apellidoM="Gonzalez"
                        carrera="Sistemas"
                        curp="PERJ890101HDFRNS09"
                    />
                </div>
            </div>
        </div>
    )
}

export default Alumnos;