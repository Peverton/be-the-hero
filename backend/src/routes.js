const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/**
 * Tipos de parâmetros:
 *
 * ?name=Pedro
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, Paginação)
 *
 * /users/:id
 * Route Params: Parâmetros utilizados para identificar recursos
 *
 * Formato JSON
 * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
 */

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;
