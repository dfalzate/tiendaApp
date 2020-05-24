const MarcaModel = require("../models/marca.model");

module.exports = {
  async create(req, res) {
    const data = req.body;
    const response = await MarcaModel.create(data);
    if (response) {
      res.status(200).send(response);
    } else {
      res.status(400).send("Bad request");
    }
  },
  async findOne(req, res) {
    const id = req.params.id;
    const response = await MarcaModel.findById(id);
    if (response) {
      res.status(200).send(response);
    } else {
      res.status(400).send("Bad request");
    }
  },
  async findAll(req, res) {
    const response = await MarcaModel.find();
    if (response) {
      res.status(200).send(response);
    } else {
      res.status(400).send("Bad request");
    }
  },
  async update(req, res) {
    const id = req.params.id;
    const data = req.body;
    const response = await MarcaModel.findByIdAndUpdate(id, data, {
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
    const response = await MarcaModel.findByIdAndRemove(
      id,
      { useFindAndModify: false },
    );
    if (response) {
      res.status(200).send("Marca elminada!");
    } else {
      res.status(400).send("Bad request");
    }
  },
};
