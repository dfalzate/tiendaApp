require("dotenv").config();
const express = require("express");
const cors = require("cors");
require("./db");
const ProductoRouter = require("./routers/producto.router");
const MarcaRouter = require("./routers/marca.router");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/productos", ProductoRouter);
app.use("/marcas", MarcaRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port http://localhost:${process.env.PORT}`);
});
