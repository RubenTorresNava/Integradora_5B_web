import React from 'react';
import CardLibro from '../../src/components/CardLibro';

const Lista= () => {
    return (
        <div className="contenedor">
            <h2 className="titulo">Lista y Catalogo de libros</h2>
            <hr/>
            <div className="row">
                {/* formato de prueba */}
                <div className="col-md-4">
                    <CardLibro
                        idLibro="1"
                        titulo="El principito"
                        autor="Antoine de Saint-Exupéry"
                        editorial="Salvat"
                        cantidad="10"
                    />
                </div>
                <div className="col-md-4">
                    <CardLibro
                        idLibro="2"
                        titulo="El principito"
                        autor="Antoine de Saint-Exupéry"
                        editorial="Salvat"
                        cantidad="10"
                    />
                </div>
                <div className="col-md-4">
                    <CardLibro
                        idLibro="3"
                        titulo="El principito"
                        autor="Antoine de Saint-Exupéry"
                        editorial="Salvat"
                        cantidad="10"
                    />
                </div>
                <div className="col-md-4">
                    <CardLibro
                        idLibro="3"
                        titulo="El principito"
                        autor="Antoine de Saint-Exupéry"
                        editorial="Salvat"
                        cantidad="10"
                    />
                </div>
                <div className="col-md-4">
                    <CardLibro
                        idLibro="3"
                        titulo="El principito"
                        autor="Antoine de Saint-Exupéry"
                        editorial="Salvat"
                        cantidad="10"
                    />
                </div>
                <div className="col-md-4">
                    <CardLibro
                        idLibro="3"
                        titulo="El principito"
                        autor="Antoine de Saint-Exupéry"
                        editorial="Salvat"
                        cantidad="10"
                    />
                </div>
                <div className="col-md-4">
                    <CardLibro
                        idLibro="3"
                        titulo="El principito"
                        autor="Antoine de Saint-Exupéry"
                        editorial="Salvat"
                        cantidad="10"
                    />
                </div>
                <div className="col-md-4">
                    <CardLibro
                        idLibro="3"
                        titulo="El principito"
                        autor="Antoine de Saint-Exupéry"
                        editorial="Salvat"
                        cantidad="10"
                    />
                </div>
                <div className="col-md-4">
                    <CardLibro
                        idLibro="3"
                        titulo="El principito"
                        autor="Antoine de Saint-Exupéry"
                        editorial="Salvat"
                        cantidad="10"
                    />
                </div>
                <div className="col-md-4">
                    <CardLibro
                        idLibro="3"
                        titulo="El principito"
                        autor="Antoine de Saint-Exupéry"
                        editorial="Salvat"
                        cantidad="10"
                    />
                </div>
                <div className="col-md-4">
                    <CardLibro
                        idLibro="3"
                        titulo="El principito"
                        autor="Antoine de Saint-Exupéry"
                        editorial="Salvat"
                        cantidad="10"
                    />
                </div>
                <div className="col-md-4">
                    <CardLibro
                        idLibro="3"
                        titulo="El principito"
                        autor="Antoine de Saint-Exupéry"
                        editorial="Salvat"
                        cantidad="10"
                    />
                </div>
                <div className="col-md-4">
                    <CardLibro
                        idLibro="3"
                        titulo="El principito"
                        autor="Antoine de Saint-Exupéry"
                        editorial="Salvat"
                        cantidad="10"
                    />
                </div>
            </div>
        </div>   
    )
}

export default Lista;