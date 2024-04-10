import React from 'react';
import FormularioPrestamoAlumno from '../../src/components/FormularioPrestamoAlumno';

const PrestamoAlumno= ()=>{
    return(
        <div className="contenedor">
            <h2 className="titulo"><b>Préstamo de libro</b></h2>
            <hr/>
            <FormularioPrestamoAlumno/>
        </div>
    )
}

export default PrestamoAlumno;