const express = require('express')
require('dotenv').config()
const { errorHandler } = require('./middlewares/errorMiddleware')
const cors =  require('cors')
const port = process.env.PORT || 3000
const connectDB = require('./config/db')
const bodyParser = require('body-parser')
connectDB()
var corsOptions = {
    origin: '*',
    methods:['GET','POST','DELETE','OPTIONS']
    // optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
const app = express()
app.use(cors(corsOptions))
app.use(bodyParser.json({limit : "30mb",extended: true }))
app.use(bodyParser.urlencoded({limit : "30mb", extended: true }))

app.use('/api/v1/employees', require('./routes/userRoutes'))

app.use(errorHandler)
app.listen(port, console.log(`Server running on port ${port}`))