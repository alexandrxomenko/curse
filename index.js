const express = require('express');
const app = express();
const port = 3001;
const usersRouter = require('./router/usersRouter');
const productsRouter = require('./router/productsRouter');
const ordersRouter = require('./router/ordersRouter');
const categoriesRouter = require('./router/categoriesRouter');
const rolesRouter = require('./router/rolesRouter');
const bodyParser = require('body-parser');
const urlendcodedParser = bodyParser.urlencoded({extended: false});

app.use(urlendcodedParser);


app.use('/orders', ordersRouter);
app.use("/users", usersRouter);
app.use('/products',productsRouter);
app.use('/categories', categoriesRouter);
app.use('/roles', rolesRouter);



app.listen(port);

