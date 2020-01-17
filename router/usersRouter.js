const usersRouter = require('express').Router();
const usersController = require('../controllers/usersControllers');
const AddCRUDController = require('../static/AddCRUDController');

AddCRUDController (usersRouter, usersController);


// usersRouter.get('/', usersController.index);
//
// usersRouter.post('/', usersController.create);
//
// usersRouter.get('/:id', usersController.read);
//
// usersRouter.put('/:id', usersController.update);
//
// usersRouter.delete('/:id', usersController.delete);

module.exports = usersRouter;