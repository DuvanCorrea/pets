import "./styles.css";

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="navbar">
			<div className="container">
				<div className="navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto" id="ul-navbar">
						<li className="nav-item col-4 d-none d-md-block" id="li-opciones">
							<a
								className="nav-link fuente-cafe-oscuro"
								href="#seccion-productos"
							>
								Productos
							</a>
							<a
								className="nav-link fuente-cafe-oscuro"
								href="#seccion-nosotros"
							>
								Nosotros
							</a>
							<a className="nav-link fuente-cafe-oscuro" href="#seccion-footer">
								Contacto
							</a>
						</li>
						<li
							className="col-4 d-flex justify-content-center"
							id="li-logo-prin"
						>
							<a className="navbar-brand" href="#">
								<img src="./images/logo-basico.png" alt="Logo" />
							</a>
						</li>
						<li className="col-4 d-none d-md-block"></li>
					</ul>
					<div className="row d-flex justify-content-end d-lg-none">
						<button
							className="hamburger-button" /* Ocultar en dispositivos grandes */
							data-bs-toggle="offcanvas"
							data-bs-target="#offcanvasExample"
							aria-controls="offcanvasExample"
						>
							<span className="hamburger-icon"></span>
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
