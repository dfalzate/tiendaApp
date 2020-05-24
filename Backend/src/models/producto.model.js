const mongoose = require("mongoose");

const ProductoSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    talla: {
      type: String,
      required: true,
      enum: ["S", "M", "L"],
    },
    observaciones: {
      type: String,
      required: true,
    },
    marca: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Marca",
      required: true,
    },
    inventario: {
      type: Number,
      required: true,
    },
    fechaEmbarque: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Producto", ProductoSchema);
