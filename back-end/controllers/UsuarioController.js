const { Usuario } = require('../models/');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class UsuarioController {

    async getAll(req, res) {
        try {
            const usuario = await Usuario.findAll();
            return res.status(200).json(usuario);
        } catch (err) {
            res.status(400).send({
                message: "Ocorreu um erro ao buscar todos os usuarios! Error:" + err.message
            })
        }
    }

    async cadastro(req, res) {
        try {
            req.body.senha = await bcrypt.hash(req.body.senha, 12);
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
                message: "Ocorreu um erro ao encontrar o usuario! Error:" + err.message
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
                await usuario.destroy(req.body);
                return res.status(200).json(Usuario);
            } else {
                return res.status(400).json({ mensagem: "Usuario nao encontrado" });
            }
        } catch (e) {
            return res.status(400).json({ error: e.message });
        }
    }

    async login(req, res) {
        try {
            const cpf = req.body.cpf;
            const usuario = await Usuario.findOne({ where: { cpf } });
            if (!usuario) {
                return res.status(401).json({
                    message: "Usuário não encontrado"
                });
            }
            const valid = await bcrypt.compare(req.body.senha, usuario.senha);
            if (valid) {
                let role = 'usuario';
                const token = jwt.sign({ id: usuario.id, role: role },
                    "" + process.env.ACCESS_SECRET, {
                        expiresIn: 1500
                    });
                return res.status(200).json({
                    auth: true,
                    token: token
                });
            } else {
                return res.status(401).json({
                    message: "Senha inválida"
                });
            }
        } catch (e) {
            return res.status(400).json({ error: e.message });
        }
    }
    async logout(req, res) {
        return res.status(200).json({ auth: false, token: null });
    }
}
module.exports = new UsuarioController();