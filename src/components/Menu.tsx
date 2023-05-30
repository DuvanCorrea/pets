import { useRef } from "react";

function Menu() {
	const close = useRef<HTMLButtonElement>(null);

	const cerrarMenu = () => {
		if (close.current) {
			close.current.click();
		}
	};

	return (
		<>
			<div
				className="offcanvas offcanvas-start"
				tabIndex={-1}
				id="offcanvasExample"
				aria-labelledby="offcanvasExampleLabel"
			>
				<div className="offcanvas-header">
					<h5 className="offcanvas-title" id="offcanvasExampleLabel">
						Secciones
					</h5>
					<button
						id="btn-close-menu"
						ref={close}
						type="button"
						className="btn-close"
						data-bs-dismiss="offcanvas"
						aria-label="Close"
					></button>
				</div>
				<div className="offcanvas-body lista-menu">
					<a
						onClick={() => {
							cerrarMenu();
						}}
						className="nav-link fuente-cafe-oscuro"
						href="#seccion-productos"
					>
						Productos
					</a>
					<a
						onClick={() => {
							cerrarMenu();
						}}
						className="nav-link fuente-cafe-oscuro"
						href="#seccion-nosotros"
					>
						Nosotros
					</a>
					<a
						onClick={() => {
							cerrarMenu();
						}}
						className="nav-link fuente-cafe-oscuro"
						href="#seccion-footer"
					>
						Contacto
					</a>
					<div>
						<button
							onClick={() => {
								window.open(
									"https://www.instagram.com/lovesandcolombia/",
									"_blank"
								);
							}}
							className="btn-instagram"
						>
							<i className="fab fa-instagram"></i>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Menu;
