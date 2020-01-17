const express = require ('express');
const ProductsRouter = express.Router();
const ProductsController = require('../controllers/productsController');


ProductsRouter.get('/', ProductsController.index);

ProductsRouter.post('/', ProductsController.create);

ProductsRouter.get('/:id', ProductsController.read);

ProductsRouter.put('/:id', ProductsController.update);

ProductsRouter.delete('/:id', ProductsController.delete);


module.exports = ProductsRouter;