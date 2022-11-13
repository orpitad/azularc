require('dotenv').config(); // allows to access environment variables

const express = require('express'); // middleware for node js
const mongoose = require('mongoose');
const app = express(); // initiate express

const Employee = require('./models/Employee')
app.use(express.json()) // Middleware to use json
app.use(express.urlencoded())
const {
    GridFsStorage
  } = require("multer-gridfs-storage");


app.get('/api', (req, res) => {
    res.send('AZUL ARC')
});

app.get('/api/employees', async(req,res) => {
    const employeesList = await Employee.find({});
    return res.json(employeesList)
});

app.post('/api/employees', async(req,res) => {
    console.log("REEEEEW",req.body)
    const {name, age, email, dob, address, photo} = req.body;
    try {
        const newEmployee = new Employee({
            name,
            age,
            email,
            dob,
            address,
            photo 
        });

        const savedEmployee = await newEmployee.save();
        return res.json(savedEmployee)
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

app.put('/api/employees/:employeeId', async(req,res) => {
    try {
        const employeeId= req.params.employeeId;
        const employee = await Employee.findById(employeeId);

        if(!employee) {
            return res.status(404).json('Employee does not exists');
        } else {
            const updatedEmployee = await Employee.findByIdAndUpdate(
                employeeId,
                req.body,
                {new: true}
            );

            return res.json(updatedEmployee);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to DB');
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.port}`)
    });
}).catch((error) => {
    console.log(error)
});
