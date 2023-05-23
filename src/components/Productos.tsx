import "./styles.css";

type Producto = {
	nombre: string;
	caracteristicas: Array<string>;
	imagen: string;
	descripccion: string;
};

function Productos() {
	const productos: Array<Producto> = [
		{
			nombre: "Arenero luxury",
			imagen: "arenero-luxory.jpg",
			caracteristicas: [
				"Alto: 11.8 cmtrs (adelante) 21.5 cmtrs(atras).",
				"Ancho: 36 cmtrs",
				"Fondo: 52 cmtrs.",
				"Ideal para gatos grandes y medianos.",
				"Incluye pala.",
				"Con rejilla limpia patas y pestaña anti derrame.",
				"Fácil de limpiar.",
				"Hermoso diseño para tu hogar.",
			],
			descripccion:
				"Arenero ideal para gatos grandes y medianos con rejilla limpia patas y pestaña anti derrame.",
		},
		{
			nombre: "Arena Love Sand",
			imagen: "arena.jpg",
			caracteristicas: [
				"Incluye virutas de cedro real para un control natural de olores.",
				"Todas las arenas para gatos Love sand incluyen SANEL un atrayente natural para gatos hecho de una resina de árbol.",
				"Sanel ayuda a entrenar a los gatitos y gatos mayores a usar la caja arenera.",
			],
			descripccion:
				"Nuestra arena aglomerante súper premium LOVE SAND para gatos Ahora hecha con bentonita de Wyoming 100% natural para obtener mejor aglomeraciones más fuertes.",
		},
		{
			nombre: "Iglu luxury",
			imagen: "arenero-iglu.jpg",
			caracteristicas: [
				"Alto: 39,6 cmtrs",
				"Ancho: 41,3 cmtrs",
				"Fondo: 47 cmtrs",
				"Ideal para gatos grandes medianos.",
				"Hermoso diseño para tu hogar.",
				"Faciles de limpiar y armar.",
				"A través de su puerta abatible, el gato tiene su privacidad.",
				"Incluye pala.",
			],
			descripccion:
				"Nuestra arena aglomerante súper premium LOVE SAND para gatos Ahora hecha con bentonita de Wyoming 100% natural para obtener mejor aglomeraciones más fuertes.",
		},
	];

	return (
		<section>
			<div id="seccion-productos" className="">
				<div className="row text-center mb-5">
					<div className="col">
						<h2>¿Qué necesita tu 🐾 hoy?</h2>
					</div>
				</div>
				<div className="row d-flex justify-content-around">
					{productos.map((producto: Producto) => {
						return (
							<div className="producto-item col-md-3 imagen-producto-contenedro">
								<div className="d-flex justify-content-center">
									<img
										src={`/images/productos/${producto.imagen}`}
										className="img-fluid imagen-producto"
										alt="imagen producto"
									/>
								</div>
								<div>
									<h4>{producto.nombre.toUpperCase()}</h4>
								</div>
								<div>
									<div>{producto.descripccion}</div>
									<br></br>
									<h5>Características</h5>
									<div>
										{producto.caracteristicas.map((caracteristica: string) => {
											return <li>{caracteristica}</li>;
										})}
									</div>
								</div>
							</div>
						);
					})}
				</div>
				<div className="row text-center mb-5 mt-5">
					<div className="col">
						<button
							className="btn-quiero"
							onClick={() => {
								window.open(
									"https://www.instagram.com/lovesandcolombia/",
									"_blank"
								);
							}}
						>
							<strong>¡Quiero ver más!</strong>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Productos;
