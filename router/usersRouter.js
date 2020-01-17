const express = require('express');
const usersRouter = express.Router();
const usersController = require('../controllers/usersControllers');


usersRouter.get('/', usersController.getUsers);

usersRouter.post('/add',  usersController.postUsers);


module.exports = usersRouter;