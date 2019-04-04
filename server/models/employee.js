const mongoose = require('mongoose');
const { Schema } = mongoose;
const Sequelize = require('sequelize');
const db = require('../database');
const Model = Sequelize.Model;

// const Model = Sequelize.Model;

// class EmployeeSQL extends Model {};
// EmployeeSQL.init({
//     // Atributos
//     name: { type: Sequelize.STRING, allowNull: false },
//     position: { type: Sequelize.STRING, allowNull: false },
//     office: { type: Sequelize.STRING, allowNull: false },
//     salary: { type: Sequelize.INTEGER, allowNull: false },
// })

// const EmployeeModel = db.define('employee', {
//     // Atributos
//     id: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true, },
//     name: { type: Sequelize.STRING, allowNull: false },
//     position: { type: Sequelize.STRING, allowNull: false },
//     office: { type: Sequelize.STRING, allowNull: false },
//     salary: { type: Sequelize.INTEGER, allowNull: false },
// })

class Employee extends Model {}

Employee.init({
    id: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true, },
    name: { type: Sequelize.STRING, allowNull: false },
    position: { type: Sequelize.STRING, allowNull: false },
    salary: { type: Sequelize.INTEGER, allowNull: false },
}, {
    timestamps: true,
    sequelize: db
});

class Office extends Model {}

Office.init({
    id: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING, allowNull: false },
    ubication: { type: Sequelize.STRING, allowNull: false },
}, {
    timestamps: true,
    sequelize: db
})

Office.hasMany(Employee, { as: 'workers' });

module.exports = {
    Employee,
    Office
}