const CardAlumno = ({ _id, noCtrl, nombre, apellidoP, apellidoM, carrera }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title titulo">{nombre} {apellidoP} {apellidoM}</h5>
                <p className="card-text">No. Control: {noCtrl}</p>
                <p className="card-text">Carrera: {carrera}</p>
                <input type="hidden" value={_id} />
            </div>
        </div>
    );
}

export default CardAlumno;