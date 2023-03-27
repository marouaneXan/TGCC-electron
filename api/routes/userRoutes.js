const express = require('express')
const router = express.Router()
const { addEmploye, allEmployees } = require('../controllers/employéesController')

router.post('/addEmploye', addEmploye).get('/allEmployees', allEmployees)

module.exports = router