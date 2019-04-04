const { Employee, Office } = require('../models/employee');
const employeeCtrl = {};


employeeCtrl.getEmployees = async(req, res) => {
    const employees = await Employee.findAll();
    res.json(employees);
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