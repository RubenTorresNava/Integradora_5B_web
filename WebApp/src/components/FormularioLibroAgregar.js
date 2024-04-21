// con los siguientes datos: clasificacion, cantidad, titulo, autor, editorial, apartado, idLibro(solo perimitir 14 caracteres)
import React, { useState } from "react";
import Swal from "sweetalert2";
import { crearLibro } from "../api/api";

const FormularioLibroAgregar = () => {
  // estado para guardar los datos del libro
  const [datosLibro, setDatosLibro] = useState({
    clasificacion: "",
    cantidad: "",
    titulo: "",
    autor: "",
    editorial: "",
    apartado: "",
    idLibro: "",
  });
  // funcion para cambiar los valores de los campos
  const handleChange = (e) => {
    setDatosLibro({
      ...datosLibro,
      [e.target.name]: e.target.value,
    });
  };
  //agregar un libro
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // se envia la informacion del libro para agregarlo
      const response = await crearLibro(datosLibro);
      const data = response.data;
      console.log(data);
      // se muestra un mensaje de exito
      Swal.fire({
        icon: "success",
        title: "Libro agregado con exito",
        showConfirmButton: false,
        timer: 1500,
      });
      // se limpian los campos
      setDatosLibro({
        clasificacion: "",
        cantidad: "",
        titulo: "",
        autor: "",
        editorial: "",
        apartado: "",
        idLibro: "",
      });
    } catch (error) {
      // se muestra un mensaje de error
      console.error("Error al agregar el libro. Inténtalo de nuevo más tarde.");
      Swal.fire({
        icon: "error",
        title: "Error al agregar el libro. Inténtalo de nuevo más tarde.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Clasificación</label>
        <input
          type="text"
          name="clasificacion"
          className="form-control"
          value={datosLibro.clasificacion}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Cantidad</label>
        <input
          type="number"
          name="cantidad"
          className="form-control"
          value={datosLibro.cantidad}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Título</label>
        <input
          type="text"
          name="titulo"
          className="form-control"
          value={datosLibro.titulo}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Autor</label>
        <input
          type="text"
          name="autor"
          className="form-control"
          value={datosLibro.autor}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Editorial</label>
        <input
          type="text"
          name="editorial"
          className="form-control"
          value={datosLibro.editorial}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Apartado</label>
        <input
          type="text"
          name="apartado"
          className="form-control"
          value={datosLibro.apartado}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Id Libro</label>
        <input
          type="text"
          name="idLibro"
          maxLength="14"
          className="form-control"
          value={datosLibro.idLibro}
          onChange={handleChange}
          required
        />
      </div>
      <br />
      <div className="d-flex justify-content-between">
        {/* <button type="submit" className="btn btn-primary">
          Agregar
        </button> */}
        {/* habilitar solo hast que los campos esten llenos */}
        <button
          type="submit"
          className="btn btn-success"
          disabled={
            !datosLibro.clasificacion ||
            !datosLibro.cantidad ||
            !datosLibro.titulo ||
            !datosLibro.autor ||
            !datosLibro.editorial ||
            !datosLibro.apartado ||
            !datosLibro.idLibro
          }
        >
          Agregar
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() =>
            setDatosLibro({
              clasificacion: "",
              cantidad: "",
              titulo: "",
              autor: "",
              editorial: "",
              apartado: "",
              idLibro: "",
            })
          }
        >
          Limpiar
        </button>
      </div>
    </form>
  );
};

export default FormularioLibroAgregar;
