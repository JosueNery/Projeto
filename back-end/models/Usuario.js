module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("Usuario", {
        nome: Sequelize.STRING,
        cpf: Sequelize.INTEGER,
        email: Sequelize.STRING,
        telefone: Sequelize.INTEGER,
        senha: Sequelize.STRING,
    });
    return Usuario;
}