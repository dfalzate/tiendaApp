const router = require('express').Router();
const ProductoController = require('../controllers/producto.controller');

router.route('/').get(ProductoController.findAll);
router.route('/producto/:id').get(ProductoController.findOne);
router.route('/').post(ProductoController.create);
router.route('/producto/:id').put(ProductoController.update);
router.route('/producto/:id').delete(ProductoController.delete);

module.exports = router;
