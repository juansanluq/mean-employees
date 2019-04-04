const { Employee, Office } = require('../models/employee');
const employeeCtrl = {};


employeeCtrl.getEmployees = async(req, res) => {
    Employee.findAll()
        .then(response => {
            response.forEach(employee => {
                Office.findByPk(employee.getDataValue('OfficeId'))
                    .then(office => {
                        response.forEach(response => {
                            res.json({
                                id: response.getDataValue('id'),
                                name: response.getDataValue('name'),
                                position: response.getDataValue('position'),
                                salary: response.getDataValue('salary'),
                                nombre_oficina: office.getDataValue('name'),
                                ubicacion_oficina: office.getDataValue('ubication'),
                            })
                        })
                    })
            })
        })
}

employeeCtrl.createEmployee = async(req, res) => {
    Office.findByPk(req.body.OfficeId)
        .then(response => {
            if (response != null) {
                Employee.create({
                        name: req.body.name,
                        position: req.body.position,
                        salary: req.body.salary,
                        OfficeId: response.getDataValue('id')
                    })
                    .then(response => {
                        res.json(
                            response
                        )
                    })
                    .catch(err => res.status(400).json(err));
            } else {
                res.status(400).json({
                    error: 'La oficina insertada no existe en la base de datos',
                })
            }
        })
        .catch(err => {
            res.json(err);
        })
}

employeeCtrl.getEmployee = async(req, res) => {
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
}

employeeCtrl.editEmployee = function() {

}

employeeCtrl.deleteEmployee = function() {

}

module.exports = employeeCtrl;