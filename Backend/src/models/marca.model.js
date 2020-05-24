const mongoose = require("mongoose");

const MarcaSchema = new mongoose.Schema({
  marca: {
    type: String,
    required: true,
  },
  referencia: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model("Marca", MarcaSchema);
