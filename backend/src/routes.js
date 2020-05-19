const { Router } =  require('express');

const DevController = require('./controllers/DevController');
const SeacrhController = require('./controllers/SearchController');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SeacrhController.index);

module.exports = routes; // fazendo o exportamento das rotas 