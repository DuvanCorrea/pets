import "./styles.css";

const BotonWat = () => {
  return (
    <button
      className="btn-contactar floating-button"
      onClick={() => {
        window.open("https://wa.link/pl4kxp", "_blank");
      }}
      title="¡Hola! ¿Cómo te podemos ayudar?" // Contenido del tooltip
    >
      <i className="fab fa-whatsapp"></i>
    </button>
  );
};

export default BotonWat;
