import React from 'react';
import ProductosContext from '../context/productos.context';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import SeleccionarProducto from '../components/SeleccionarProducto.component';

function InformacionPage() {
	const { productos, setProductos, setMarcas } = React.useContext(ProductosContext);
	const [producto, setProducto] = React.useState({});
	const [marca, setMarca] = React.useState({});

	React.useEffect(() => {
		getProductos();
		getMarcas();
	}, []);

	async function getProductos() {
		const products = await axios({
			methods: 'get',
			url: `${process.env.REACT_APP_SERVER}/productos`,
		});
		setProductos(products.data);
	}

	async function getMarcas() {
		const brands = await axios({
			method: 'get',
			url: `${process.env.REACT_APP_SERVER}/marcas/`,
		});
		setMarcas(brands.data);
	}

	function handleReferencia(event) {
		const productId = event.target.value;
		const productoSeleccionado = productos.filter((producto) => {
			return producto._id === productId;
		});
		setProducto(productoSeleccionado[0]);
		setMarca(productoSeleccionado[0].marca);
	}

	return (
		<div className='home'>
			<div className='titulo'>
				<h1>Información</h1>
			</div>
			<Form>
				<SeleccionarProducto onChange={handleReferencia} />
				<Form.Group controlId='text' className='informacion'>
					<Form.Label>Talla</Form.Label>
					<Form.Control plaintext readOnly defaultValue={producto.talla} />
				</Form.Group>
				<Form.Group controlId='text' className='informacion'>
					<Form.Label>Observaciones</Form.Label>
					<Form.Control plaintext readOnly defaultValue={producto.observaciones} />
				</Form.Group>
				<Form.Group controlId='text' className='informacion'>
					<Form.Label>Marca</Form.Label>
					<Form.Control plaintext readOnly defaultValue={marca.marca} />
				</Form.Group>
				<Form.Group controlId='text' className='informacion'>
					<Form.Label>Inventario</Form.Label>
					<Form.Control plaintext readOnly defaultValue={producto.inventario} />
				</Form.Group>
				<Form.Group controlId='text' className='informacion'>
					<Form.Label>Fecha embarque</Form.Label>
					<Form.Control plaintext readOnly defaultValue={producto.fechaEmbarque} />
				</Form.Group>
			</Form>
		</div>
	);
}

export default InformacionPage;
