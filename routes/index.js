const express = require('express');
const usersRouter = require('./usersRouter');
// const birthRouter = require('./birthRouter');
// const categoryRouter = require('./categoryRouter');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/users', usersRouter);
//    router.use('/births', birthRouter);
//    router.use('/categories', categoryRouter);
}

module.exports = routerApi;
