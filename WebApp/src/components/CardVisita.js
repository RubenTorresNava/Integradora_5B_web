// componente card para mostrar la informacion de las visitas
// recibira (motivo, fechaVisita, noCtrl, nombre, apellidoP, apellidoM, carrera, telefono )
const CardVisita = ({
  motivo,
  fechaVisita,
  noCtrl,
  nombre,
  apellidoP,
  apellidoM,
  carrera,
  telefono,
}) => {
  return (
    // estructura de la card
    <div className="card">
      <div className="card-body">
        {/*
                    Titulo y contenido de la card
                    */}
        <h5 className="card-title titulo">
          <b>{motivo}</b>
        </h5>
        <p className="card-text">
          Fecha de visita: <b>{fechaVisita}</b>
        </p>
        <p className="card-text">
          No. Control: <b>{noCtrl}</b>
        </p>
        <p className="card-text">
          Nombre: <b>{nombre}</b>
        </p>
        <p className="card-text">
          Apellido Paterno: <b>{apellidoP}</b>
        </p>
        <p className="card-text">
          Apellido Materno: <b>{apellidoM}</b>
        </p>
        <p className="card-text">
          Carrera: <b>{carrera}</b>
        </p>
        <p className="card-text">
          Telefono: <b>{telefono}</b>
        </p>
      </div>
    </div>
  );
};

export default CardVisita;
