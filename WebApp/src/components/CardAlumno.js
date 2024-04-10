const CardAlumno = ({ _id, noCtrl, nombre, apellidoP, apellidoM, carrera }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title titulo"><b>{nombre} {apellidoP} {apellidoM}</b></h5>
                <p className="card-text">No. Control: <b>{noCtrl}</b></p>
                <p className="card-text">Carrera: <b>{carrera}</b></p>
                <input type="hidden" value={_id} />
            </div>
        </div>
    );
}

export default CardAlumno;