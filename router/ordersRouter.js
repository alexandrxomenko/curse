const OrdersRouter  = require('express').Router();
const OrdersController = require('../controllers/ordersController')
const AddCRUDController = require('../static/AddCRUDController');

AddCRUDController(OrdersRouter, OrdersController);

// ordersRouter.get('/', ordersController.index);
//
// ordersRouter.post('/', ordersController.create);
//
// ordersRouter.get('/:id', ordersController.read);
//
// ordersRouter.put('/:id', ordersController.update);
//
// ordersRouter.delete('/:id', ordersController.delete);


module.exports = OrdersRouter;
