const { Router } = require('express');
const ProductsController = require('../controllers/products-controller');
const ProductsRepository = require('../repositories/product-repository.js')

const router = Router();

const controller = new ProductsController(new ProductsRepository())

router.get('/', controller.getProducts);
router.get('/search-product', controller.searchProducts);

module.exports = router;
