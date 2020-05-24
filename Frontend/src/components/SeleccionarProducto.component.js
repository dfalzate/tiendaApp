import React from 'react';
import ProductosContext from '../context/productos.context';
import { Form } from 'react-bootstrap';
import axios from 'axios';

function SeleccionarProductoComponent(props) {
	const { productos, setProductos, setMarcas } = React.useContext(ProductosContext);

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

	return (
		<div className='form-group'>
			<label className='form-label'>Producto</label>
			<select
				id='select'
				className='form-control'
				defaultValue=''
				required
				onChange={props.onChange}
			>
				<option value='' disabled>
					Seleccione una producto
				</option>
				{productos.length > 0 &&
					productos.map((producto) => {
						return (
							<option key={producto._id} value={producto._id}>
								{producto.nombre}
							</option>
						);
					})}
			</select>
		</div>
		// <Form.Group controlId="controlInformacion" className="informacion">
		//   <Form.Label>Producto</Form.Label>
		//   <Form.Control
		//     as="select"
		//     defaultValue=""
		//     onChange={props.onChange}
		//   >
		//     <option value="" disabled>
		//       Selecciona un producto
		//     </option>
		//     {productos.length > 0 &&
		//       productos.map((producto) => {
		//         return (
		//           <option
		//             key={producto._id}
		//             value={producto._id}
		//           >
		//             {producto.nombre}
		//           </option>
		//         );
		//       })}
		//   </Form.Control>
		// </Form.Group>
	);
}

export default SeleccionarProductoComponent;
