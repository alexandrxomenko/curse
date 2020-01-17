const ProductsRouter = require ('express').Router();
const ProductsController = require('../controllers/productsController');

const AddCRUDController = require('../static/AddCRUDController');

AddCRUDController(ProductsRouter, ProductsController);

// ProductsRouter.get('/', ProductsController.index);
//
// ProductsRouter.post('/', ProductsController.create);
//
// ProductsRouter.get('/:id', ProductsController.read);
//
// ProductsRouter.put('/:id', ProductsController.update);
//
// ProductsRouter.delete('/:id', ProductsController.delete);


module.exports = ProductsRouter;