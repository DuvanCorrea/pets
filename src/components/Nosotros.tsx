import { useEffect, useRef } from "react";

function Nosotros() {
	const contenedorRef = useRef<HTMLDivElement | null>(null);
	const imagenRef = useRef<HTMLImageElement | null>(null);

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: "0px",
			threshold: 0.5, // Porcentaje de visibilidad del contenedor para activar la animación
		};

		const callback = (entries: any) => {
			entries.forEach((entry: any) => {
				// debugger;
				if (entry.isIntersecting && imagenRef.current) {
					console.log(1);
					imagenRef.current?.classList.add("imagen-principal");
				} else {
					console.log(2);
					imagenRef.current?.classList.remove("imagen-principal");
				}
			});
		};

		const observer = new IntersectionObserver(callback, options);
		if (contenedorRef.current) {
			observer.observe(contenedorRef.current);
		}

		return () => {
			if (contenedorRef.current) {
				observer.unobserve(contenedorRef.current);
			}
		};
	}, []);

	return (
		<section id="seccion-nosotros" ref={contenedorRef}>
			<div className="row">
				<div className="col-md-6" id="contenedor-imagen-principal">
					<img
						src="/images/logo-basico.png"
						className="img-fluid imagen-principal-sin imagen-principal"
						alt="imagen principal"
						ref={imagenRef}
					/>
				</div>
				<div className="col-md-6">
					<h2>LOVE SAND</h2>
					<p>
						Somos una empresa dedicada a la importacion, distribución y venta de
						accesorios y snacks para mascotas mayormente perros y gatos con una
						gran experiencia en el mercado, expandiéndonos durante mas de 14
						años en el valle de aburrá y cada vez haciendo más grande nuestra
						comunidad de clientes y nuestro catálogo de productos.
					</p>
				</div>
			</div>
		</section>
	);
}

export default Nosotros;
