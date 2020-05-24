import React from "react";
import ProductosContext from "../context/productos.context";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";

let date = new Date();

let initialState = {
  referencia: "",
  ID: "",
  nombreProducto: "",
  precio: 0,
  peso: 0,
  categoria: "",
  stock: 1,
  fechaCreacion: date.toUTCString(),
};

function EliminarProductoPage() {
  const { productos, setProductos } = React.useContext(ProductosContext);
  const [producto, setProducto] = React.useState({});

  let history = useHistory();

  function handle(e) {
    const { name, value } = e.target;
    initialState[name] = value;
  }

  function handleReferencia(event) {
    const productId = event.target.value;
    const productoSeleccionado = productos.filter((producto) => {
      return producto._id === productId;
    });
    setProducto(productoSeleccionado[0]);
    initialState = productoSeleccionado[0];
    console.log(initialState);
  }

  async function handleButton(event) {
    event.preventDefault();
    if (initialState.referencia === "") {
      alert("Debe agregar una referencia");
    } else if (initialState.ID === "") {
      alert("Debe agregar un ID");
    } else if (initialState.nombreProducto === "") {
      alert("Debe agregar un nombre de producto");
    } else if (initialState.categoria === "") {
      alert("Debe agregar una cateoria");
    }
    const data = initialState;
    const response = await axios({
      method: "put",
      url:
        `${process.env.REACT_APP_SERVER}/productos/producto/${initialState._id}`,
      data: data,
    });
    if (response.status === 200) {
      const products = await axios({
        methods: "get",
        url: `${process.env.REACT_APP_SERVER}/productos/`,
      });
      setProductos(products.data);
      alert("Producto editado correctamente");
      history.push("/");
    } else {
      alert("Hay un problema");
    }
  }

  return (
    <div className="home">
      <div className="titulo">
        <h1>Eliminar producto</h1>
      </div>
      <Form className="formulario">
        <Form.Group controlId="controlVender" className="informacion">
          <Form.Label>Referencias</Form.Label>
          <Form.Control as="select">
            {productos.length > 0 &&
              productos.map((producto) => {
                return (
                  <option
                    key={producto._id}
                    value={producto._id}
                    onClick={handleReferencia}
                  >
                    {producto.referencia}
                  </option>
                );
              })}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="controlCrear" className="informacion">
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            name="ID"
            onChange={handle}
            defaultValue={producto.ID}
          >
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="controlCrear" className="informacion">
          <Form.Label>Nombre del producto</Form.Label>
          <Form.Control
            type="text"
            name="nombreProducto"
            onChange={handle}
            defaultValue={producto.nombreProducto}
          >
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="controlCrear" className="informacion">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            min="0"
            onChange={handle}
            name="precio"
            defaultValue={producto.precio}
          />
        </Form.Group>
        <Form.Group controlId="controlCrear" className="informacion">
          <Form.Label>Peso</Form.Label>
          <Form.Control
            type="number"
            min="0"
            onChange={handle}
            name="peso"
            defaultValue={producto.peso}
          />
        </Form.Group>
        <Form.Group controlId="controlCrear" className="informacion">
          <Form.Label>Categoria</Form.Label>
          <Form.Control
            type="text"
            name="categoria"
            onChange={handle}
            defaultValue={producto.categoria}
          >
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="controlCrear" className="informacion">
          <Form.Label>Stock</Form.Label>
          <Form.Control
            type="number"
            name="stock"
            min="1"
            onChange={handle}
            defaultValue={producto.stock}
          >
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="controlCrear" className="informacion">
          <Form.Label>Fecha de creación</Form.Label>
          <Form.Label className="form-control-plaintext">
            {date.toLocaleDateString()}
          </Form.Label>
        </Form.Group>
        <Button onClick={handleButton}>Grabar</Button>
      </Form>
    </div>
  );
}

export default EliminarProductoPage;
