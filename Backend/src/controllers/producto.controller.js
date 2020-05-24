const ProductoModel = require("../models/producto.model");

module.exports = {
  async create(req, res) {
    try {
      const data = req.body;
      const response = await ProductoModel.create(data);
      if (response) {
        res.status(200).send(response);
      } else {
        res.status(400).send("Bad request");
      }
    } catch (error) {
      res.status(400).send("Error: " + error);
    }
  },
  async findOne(req, res) {
    const id = req.params.id;
    const response = await ProductoModel.findById(id).populate("marca");
    if (response) {
      res.status(200).send(response);
    } else {
      res.status(400).send("Bad request");
    }
  },
  async findAll(req, res) {
    const response = await ProductoModel.find().populate("marca");
    if (response) {
      res.status(200).send(response);
    } else {
      res.status(400).send("Bad request");
    }
  },
  async update(req, res) {
    const id = req.params.id;
    const data = req.body;
    const response = await ProductoModel.findByIdAndUpdate(id, data, {
      new: true,
      useFindAndModify: false,
    });
    if (response) {
      res.status(200).send(response);
    } else {
      res.status(400).send("Bad request");
    }
  },
  async delete(req, res) {
    const id = req.params.id;
    const response = await ProductoModel.findByIdAndRemove(
      id,
      { useFindAndModify: false },
    );
    if (response) {
      res.status(200).send("Producto elminado!");
    } else {
      res.status(400).send("Bad request");
    }
  },
};
