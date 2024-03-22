import React from 'react';
import FormularioPrestamoAlumno from '../../src/components/FormularioPrestamoAlumno';

const PrestamoAlumno= ()=>{
    return(
        <div className="contenedor">
            <h2 className="titulo">Préstamo de libro</h2>
            <hr/>
            <FormularioPrestamoAlumno/>
        </div>
    )
}

export default PrestamoAlumno;