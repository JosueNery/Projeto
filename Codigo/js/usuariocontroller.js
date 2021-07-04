import express from 'express';
const usuarioModel = require('./usuario');

const router = express.Router();

router.post('/usuario', async(req, res) => {
    try {
        //inserir umas validações depois
        const result = await usuarioModel.create(req.body);
        res.status(201).send({
            data: result,
            message: "usuario cadastrado com sucesso!"
        });
    } catch (err) {
        res.status(500).send({
            message: "Ocorreu um erro ao cadastrar o usuario! Error:" + err.message
        });
    }
});

router.get('/usuario', async(req, res) => {

    try {
        const result = await usuarioModel.findAll();
        res.status(200).send({
            data: result
        });
    } catch (err) {
        res.status(500).send({
            message: "Ocorreu um erro ao buscar todos os usuarioes! Error:" + err.message
        })
    }

});

router.get('/usuario/:ID', async(req, res) => {

    try {
        const {
            ID
        } = req.params;

        const result = await usuarioModel.findByPk(ID);
        res.status(200).send({
            data: result
        });

    } catch (err) {
        res.status(500).send({
            message: "Ocorreu um erro ao buscar o usuario! Error:" + err.message
        });
    }
});

router.put('/usuario', async(req, res) => {
    try {
        console.log(req.body)
        const usuario = req.body;

        const model = await usuarioModel.findByPk(usuario.id);

        model.nome = usuario.nome;
        model.idade = usuario.idade;
        model.level = usuario.level;
        model.pokemonPreferido = usuario.pokemonPreferido;

        const resultadoSave = await model.save();
        res.status(202).send({
            data: resultadoSave
        });

    } catch (err) {
        res.status(500).send({
            message: "Ocorreu um erro ao atualizar o usuario! Error:" + err.message
        });
    }

});

router.delete('/usuario', async(req, res) => {
    try {
        const {
            ID
        } = req.query;

        const usuario = await usuarioModel.findByPk(ID);
        await usuario.destroy();

        res.status(200).send({
            message: "usuario excluído com sucesso!"
        });

    } catch (err) {
        res.status(500).send({
            message: "Ocorreu um erro ao excluir o usuario! Error:" + err.message
        });
    }

});

module.exports = router;