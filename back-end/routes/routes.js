const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController');
const routes = Router();

routes.get('/usuarios', UsuarioController.getAll);
routes.post('/usuario', UsuarioController.insert);
routes.get('/usuario/:id', UsuarioController.getOne);
routes.put('/usuario/:id', UsuarioController.update);
routes.delete('/usuario/:id', UsuarioController.delete);

module.exports = routes;