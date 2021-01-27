const { Router } = require('express');

const { rootRoute } = require('../controllers/api');

const apiRouter = Router();

apiRouter.get('/', rootRoute);

module.exports = apiRouter;
