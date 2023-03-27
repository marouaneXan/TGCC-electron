const asyncHandler = require('express-async-handler')
const Employees = require ('../models/employéesModel')


const addEmploye = asyncHandler(async (req, res) => {
    const { completeName, job, phoneNumber, email } = req.body

    if (!completeName || !job || !phoneNumber, !email ) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    const employee = await Employees.findOne({ email });

    if (employee) {
        res.status(400)
        throw new Error('There is already an employee with this email.')
    }

    const createEmploye = Employees.create({
        completeName,
        job,
        phoneNumber,
        email
    })

    if(createEmploye) {
        res.status(201)
        res.send("Employee added succefully")
    } else {
        res.status(400)
        throw new Error('Invalid Employe Data')
    }
})

const allEmployees = asyncHandler(async (req, res) => {
    const employees = await Employees.find({}, { password: 0 });

    if (employees) {
        res.send(employees);
    } else {
        res.json({ message: 'no employees'})
    }
})


module.exports = { addEmploye, allEmployees }