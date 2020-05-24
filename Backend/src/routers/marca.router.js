const router = require("express").Router();
const MarcaController = require("../controllers/marca.controller");

router.route("/").get(MarcaController.findAll);
router.route("/marca/:id").get(MarcaController.findOne);
router.route("/").post(MarcaController.create);
router.route("/marca/:id").put(MarcaController.update);
router.route("/marca/:id").delete(MarcaController.delete);

module.exports = router;
