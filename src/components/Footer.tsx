function Footer() {
	return (
		<section id="seccion-footer">
			<footer className="text-center text-lg-start bg-white text-muted mt-5">
				<section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
					<div className="me-5 d-none d-lg-block">
						<span>Nuestras redes sociales:</span>
					</div>
					<div>
						{/* <a href="" className="me-4 link-secondary">
							<i className="fab fa-facebook-f"></i>
						</a> */}
						<a href="https://www.instagram.com/lovesandcolombia/" target="_blank" className="me-4 link-secondary">
							<i className="fab fa-instagram"></i>
						</a>
					</div>
				</section>
				<section className="">
					<div className="container text-center text-md-start mt-5">
						<div className="row mt-3">
							<div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
								<h6 className="text-uppercase fw-bold mb-4">
									<i className="fas fa-gem me-3 text-secondary"></i>LOVE SAND
								</h6>
								<p>
									Somos una empresa dedicada a la importacion, distribución y
									venta de accesorios y snacks para mascotas mayormente perros y
									gatos con una gran experiencia en el mercado, expandiéndonos
									durante mas de 14 años en el valle de aburrá y cada vez
									haciendo más grande nuestra comunidad de clientes y nuestro
									catálogo de productos.
								</p>
							</div>
							<div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
								<h6 className="text-uppercase fw-bold mb-4">Productos</h6>
								<p>
									<a href="#!" className="text-reset">
										Arenero luxury
									</a>
								</p>
								<p>
									<a href="#!" className="text-reset">
										Arena Love Sand
									</a>
								</p>
								<p>
									<a href="#!" className="text-reset">
										Iglu luxury
									</a>
								</p>
							</div>

							<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
								<h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
								<p>
									<i className="fas fa-home me-3 text-secondary"></i>
									Medellin - Barrio Guayabal - Direccion: CRA 51b # 12sur - 07
								</p>
								<p>
									<i className="fas fa-phone me-3 text-secondary"></i> +57
									3006576490
								</p>
							</div>
						</div>
					</div>
				</section>

				<div
					className="text-center p-4"
					style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}
				>
					© {new Date().getFullYear()} Copyright
				</div>
			</footer>
		</section>
	);
}

export default Footer;
