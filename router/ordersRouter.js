const ordersRouter  = require('express').Router();
const ordersController = require('../controllers/ordersController')


ordersRouter.get('/', ordersController.index);

ordersRouter.post('/', ordersController.create);

ordersRouter.get('/:id', ordersController.read);

ordersRouter.put('/:id', ordersController.update);

ordersRouter.delete('/:id', ordersController.delete);


module.exports = ordersRouter;
