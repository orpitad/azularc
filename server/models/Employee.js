const {Schema, model} = require('mongoose');

const EmployeeSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number
        },
        email: {
            type: String,
            required: true
        },
        dob:{
            type: Date
        },
        address: {
            type: String
        },
        photo: {
            type: Buffer
        },
        // file: { type: Buffer, required: true },
        filename: { type: String },
        // mimetype: { type: String, required: true }
        
    },
    {
        timestamps: true
    }
    // name
    // - age min max default
    // - email
    // - date of birth
    // - address
    // - photo
)

const Employee = model('Employee', EmployeeSchema);

module.exports = Employee;