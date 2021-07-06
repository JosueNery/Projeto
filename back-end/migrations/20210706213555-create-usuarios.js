'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('Usuarios', {
            id: {
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
                type: Sequelize.INTEGER
            },
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
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            }
        });

    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('Usuarios');
    }
};