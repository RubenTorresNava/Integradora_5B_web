import CardVisita from "../components/CardVisita";
import BotonSubir from "../components/BotonSubir";
import { obtenerVisitas } from "../api/api";
import { useEffect, useState } from "react";

const Visitas = () => {
  const [visitas, setVisitas] = useState([]);
  useEffect(() => {
    const fetchVisitas = async () => {
      try {
        const visitas = await obtenerVisitas();
        console.log(visitas.data);
        setVisitas(visitas.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVisitas();
  }, []);

  return (
    <div className="contenedor">
      <BotonSubir />
      <h2 className="titulo">
        <b>Visitas</b>
      </h2>
      <div className="row">
        {/* ejemplos, el formato va desde el div y no solo la card */}
        {visitas.map ((visitas) => (
          <div className="col-md-4">
            <CardVisita
              motivo= {visitas.motivo}
              fechaVisita= {visitas.fechaVisita}
              noCtrl= {visitas.noCtrl}
              nombre= {visitas.nombre}
              apellidoP= {visitas.apellidoP}
              apellidoM= {visitas.apellidoM}
              carrera= {visitas.carrera}
              telefono= {visitas.telefono}
            />
          </div>))}
      </div>
    </div>
  );
};

export default Visitas;
