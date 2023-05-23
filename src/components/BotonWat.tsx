import "./styles.css";

const BotonWat = () => {
	return (
		<button
			className="btn-contactar floating-button"
			onClick={() => {
				window.open("https://wa.link/pl4kxp", "_blank");
			}}
		>
			<i className="fab fa-whatsapp"></i> Contactar
		</button>
	);
};

export default BotonWat;
