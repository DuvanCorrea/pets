import BotonWat from "./BotonWat";
import Carrucel from "./Carrucel";
import Footer from "./Footer";
import Menu from "./Menu";
import Navbar from "./Navbar";
import Nosotros from "./Nosotros";
import Productos from "./Productos";

function Principal() {
	return (
		<>
			<Navbar />
			<Menu />
			<div className="container" id="container-general">
				<div className="row">
					<Carrucel />
					<div className="mt-3">
						<Productos />
					</div>
				</div>
			</div>
			<div id="pre-container-nosotros" className="mt-5">
				<div className="container" id="container-nosotros">
					<Nosotros />
				</div>
			</div>

			<div>
				<Footer />
			</div>
			<BotonWat/>
		</>
	);
}

export default Principal;
