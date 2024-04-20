import BotonEditarAlumnoModal from "./BotonEditarAlumnoModal";

const CardAlumno = ({
  _id,
  noCtrl,
  nombre,
  apellidoP,
  apellidoM,
  carrera,
  telefono,
  correo,
}) => {
  return (
    // estructura de la card
    <div className="card">
      {/* 
            Imagen de la card
            */}
      <div className="card-body">
        {/* 
                Titulo y contenido de la card
                */}
        <h5 className="card-title titulo">
          <b>
            {nombre} {apellidoP} {apellidoM}
          </b>
        </h5>
        <p className="card-text">
          No. Control: <b>{noCtrl}</b>
        </p>
        <p className="card-text">
          Carrera: <b>{carrera}</b>
        </p>
        <p className="card-text">
          Telefono: <b>{telefono}</b>
        </p>
        <p className="card-text">
          Correo: <b>{correo}</b>
        </p>
        <div className="d-flex justify-content-between">
          <BotonEditarAlumnoModal
            noCtrl={noCtrl}
            nombre={nombre}
            apellidoP={apellidoP}
            apellidoM={apellidoM}
            carrera={carrera}
            telefono={telefono}
            correo={correo}
            idAlumno={_id}
          />
        </div>
        <input type="hidden" value={_id} />
      </div>
    </div>
  );
};

export default CardAlumno;
