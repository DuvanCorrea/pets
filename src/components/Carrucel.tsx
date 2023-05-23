import { useEffect, useRef } from "react";

function Carrucel() {
	const pasar = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		setInterval(() => {
			if (pasar.current) {
				pasar.current.click();
			}
		}, 5000);
	});

	return (
		<section>
			<div id="carrucel-seccion" className="carousel carousel-dark slide">
				<div className="carousel-indicators">
					<button
						type="button"
						data-bs-target="#carrucel-seccion"
						data-bs-slide-to="0"
						className="active"
						aria-current="true"
						aria-label="Slide 1"
					></button>
					<button
						type="button"
						data-bs-target="#carrucel-seccion"
						data-bs-slide-to="1"
						aria-label="Slide 2"
					></button>
					<button
						type="button"
						data-bs-target="#carrucel-seccion"
						data-bs-slide-to="2"
						aria-label="Slide 3"
					></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active" data-bs-interval="3000">
						<img
							src="/images/corrucel/c-1.jpg"
							className="d-block w-80 img-fluid"
							alt="imagen promocional"
						/>
						<div className="carousel-caption d-none d-md-block">
							<button
								className="btn-quiero"
								onClick={() => {
									window.open(
										"https://www.instagram.com/lovesandcolombia/",
										"_blank"
									);
								}}
							>
								<strong>¡Lo quiero!</strong>
							</button>
						</div>
					</div>
					<div className="carousel-item" data-bs-interval="3000">
						<img
							src="/images/corrucel/c-2.jpg"
							className="d-block w-80 mx-auto img-fluid"
							alt="imagen promocional"
						/>
						<div className="carousel-caption d-none d-md-block">
							<button
								className="btn-quiero"
								onClick={() => {
									window.open(
										"https://www.instagram.com/lovesandcolombia/",
										"_blank"
									);
								}}
							>
								<strong>¡Lo quiero!</strong>
							</button>
						</div>
					</div>
					<div className="carousel-item" data-bs-interval="3000">
						<img
							src="/images/corrucel/c-3.jpg"
							className="d-block w-80 img-fluid"
							alt="imagen promocional"
						/>
						<div className="carousel-caption d-none d-md-block">
							<button
								className="btn-quiero"
								onClick={() => {
									window.open(
										"https://www.instagram.com/lovesandcolombia/",
										"_blank"
									);
								}}
							>
								<strong>¡Lo quiero!</strong>
							</button>
						</div>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carrucel-seccion"
					data-bs-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					ref={pasar}
					className="carousel-control-next"
					type="button"
					data-bs-target="#carrucel-seccion"
					data-bs-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</section>
	);
}

export default Carrucel;
