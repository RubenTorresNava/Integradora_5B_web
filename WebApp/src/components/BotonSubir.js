// crea un boton que al hacer click sube al inicio de la pagina hasta "titulo"
import react from "react";
import { FaArrowUp } from "react-icons/fa";

const BotonSubir = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button onClick={handleClick} style={styles.boton}>
      <FaArrowUp />
    </button>
  );
};

const styles = {
  boton: {
    position: "fixed",
    bottom: "0%",
    right: "20px",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    fontSize: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    color: "green",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    border: "2px solid green",
  },
};

export default BotonSubir;
