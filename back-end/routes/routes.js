const { Router } = require('express');
const jwt = require('jsonwebtoken');
const UsuarioController = require('../controllers/UsuarioController');
const routes = Router();
const verificar = require('../middlewares/autenticacao');

routes.get('/usuarios', verificar(['usuario/admin']), UsuarioController.getAll);
routes.post('/cadastro', UsuarioController.cadastro);
routes.post('/login', UsuarioController.login);
routes.get('/logout', UsuarioController.logout);
routes.get('/usuario/:id', verificar(['usuario/admin']), UsuarioController.getOne);
routes.put('/usuario/:id', verificar(['usuario']), UsuarioController.update);
routes.delete('/usuario/:id', verificar(['usuario/admin']), UsuarioController.delete);

routes.get("/oi", verificar(['usuario']), (req, res) => {
    res.status(200).json({ mensagem: "oi" });
})
module.exports = routes;