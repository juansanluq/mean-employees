const Sequelize = require('sequelize');

const URI = 'mongodb://localhost/mean-crud-employees';

const sequelize = new Sequelize("employees", 'root', 'password', {
    host: "localhost",
    dialect: "mysql",
})

module.exports = sequelize;