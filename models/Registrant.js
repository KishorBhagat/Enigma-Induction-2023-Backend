const mongoose = require('mongoose');
const { isEmail } = require('validator');

const RegistrantSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    regdNo: {
        type: String,
        required: true,
        unique: true,
        minlength: [10, 'Regd No. must be of 10 digits'],
        maxlength: [10, 'Regd No. must be of 10 digits']
    },
    year: {
        type: Number,
        required: true,
    },
    branch: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        maxlength: [11, 'Phone no. must be of 10 digits'],
    },
    domain: {
        type: String,
        required: true,
    },
    githubProfile: {
        type: String,
        required: true,
        minlength: 18,
    },
    codingProfile: {
        type: String,
        required: true,
        minlength: 27,
    }
}, { timestamps: true});

const Registrant = new mongoose.model('registrant', RegistrantSchema);

module.exports = Registrant;