import React from 'react';
import FormularioPrestamoTiempo from '../../src/components/FormularioPrestamoTiempo';

const PrestamoAlumnoTiempo= ()=>{
    return(
        <div className="contenedor">
            <h2 className="titulo">Préstamo de libro</h2>
            <hr/>
            <FormularioPrestamoTiempo/>
        </div>
    )
}

export default PrestamoAlumnoTiempo;