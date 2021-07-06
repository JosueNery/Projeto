const Sequelize = require('sequelize');
const database = require('./db');

const usuario = database.define('usuarios', {
    Nome: {
        type: Sequelize.STRING,

        allowNull: false
    },
    cpf: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    email: {
        allowNull: false,
        type: Sequelize.STRING
    },
    telefone: {
        allowNull: false,
        type: Sequelize.INTEGER,
    },
    senha: {
        allowNull: false,
        type: Sequelize.STRING,
    },
});

module.exports = usuario;