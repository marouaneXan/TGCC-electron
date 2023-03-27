const mongoose = require('mongoose')

const employeSchema = mongoose.Schema(
    {
        completeName: {
            type: String,
            required: true
        },
        job: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('employe', employeSchema)