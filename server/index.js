const express = require('express');
const morgan = require('morgan');
// const { sequelize } = require('./database');

const app = express();

// Database
const db = require('./database');

// Testing DB connection
db.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
db.sync();


// Settings
app.set('port', process.env.PORT || 3000);


// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
const employeeRoutes = require('./routes/employee.routes');
app.use('/api/employees', employeeRoutes);

//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});