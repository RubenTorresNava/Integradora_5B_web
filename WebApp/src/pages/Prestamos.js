import React, { useEffect, useState } from "react";
import CardPrestamo from "../../src/components/CardPrestamo";
import { obtenerPrestamos } from "../api/api";
import BotonModal1 from "../../src/components/BotonModal1";

const Prestamos = () => {
  const [prestamos, setPrestamos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrestamos = async () => {
      try {
        const response = await obtenerPrestamos();
        const data = response.data;
        // Ordenar los préstamos según su estado (Terminado al final)
        const prestamosOrdenados = data.prestamos.sort((a, b) => {
          if (a.estado === "Devuelto" && b.estado !== "Devuelto") {
            return 1;
          }
          if (a.estado !== "Devuelto" && b.estado === "Devuelto") {
            return -1;
          }
          return 0;
        });
        setPrestamos(prestamosOrdenados);
      } catch (error) {
        console.error(
          "Error al obtener los préstamos. Inténtalo de nuevo más tarde."
        );
        setError(
          "Error al obtener los préstamos. Inténtalo de nuevo más tarde."
        );
      }
    };

    fetchPrestamos();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="contenedor">
      <BotonModal1 />
      <h2 className="titulo">
        <b>Lista General De Prestamos</b>
      </h2>
      <hr />
      <div className="row">
        {prestamos.map((prestamo) => (
          <div className="col-md-4" key={prestamo.idPrestamo}>
            <CardPrestamo
              idPrestamo={prestamo.idPrestamo}
              idLibro={prestamo.libro}
              fechaPrestamo={prestamo.fechaPrestamo}
              fechaEntrega={prestamo.fechaEntrega}
              estado={prestamo.estado}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prestamos;
