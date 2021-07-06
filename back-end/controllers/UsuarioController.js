const { Usuario } = require('../models/');

class UsuarioController {

    async getAll(req, res) {
        try {
            const usuario = await Usuario.findAll();
            return res.status(200).json(usuario);
        } catch (err) {
            res.status(400).send({
                message: "Ocorreu um erro ao buscar todos os usuarioes! Error:" + err.message
            })
        }
    }

    async insert(req, res) {
        try {
            const usuario = await Usuario.create(req.body);
            return res.status(201).json(usuario);
        } catch (err) {
            return res.status(500).send({
                message: "Ocorreu um erro ao cadastrar o usuario! Error:" + err.message
            });
        }
    }

    async getOne(req, res) {
        try {
            const usuario = await Usuario.findOne(req.params.cpf);
            return res.status(200).json(usuario);

        } catch (err) {
            return res.status(500).send({
                message: "Ocorreu um erro ao cadastrar o usuario! Error:" + err.message
            });
        }
    }

    async update(req, res) {
        try {
            const usuario = await Usuario.findByPk(req.params.id);
            if (usuario) {
                await usuario.update(req.body);
                return res.status(200).json(Usuario);
            } else {
                return res.status(400).json({ mensagem: "Usuario nao encontrado" });
            }
        } catch (e) {
            return res.status(400).json({ error: e.message });
        }
    }

    async delete(req, res) {
        try {
            const usuario = await Usuario.findByPk(req.params.id);
            if (usuario) {
                await usuario.destroy();
                return res.status(200).json(Usuario);
            } else {
                return res.status(400).json({ mensagem: "Usuario nao encontrado" });
            }
        } catch (e) {
            return res.status(400).json({ message: "Nao foi possivel deletar o usuario" + e.message });
        }
    }
}

module.exports = new UsuarioController();