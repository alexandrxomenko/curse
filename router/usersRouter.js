const express = require('express');
const usersRouter = express.Router();
const usersController = require('../controllers/usersControllers');


usersRouter.get('/', usersController.index);

usersRouter.post('/', usersController.create);

usersRouter.get('/:id', usersController.read);

usersRouter.put('/:id', usersController.update);

usersRouter.delete('/:id', usersController.delete);

module.exports = usersRouter;