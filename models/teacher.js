const mongose = require('mongoose');
const enrollschema = new mongose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    // CNIC: {
    //     type: String,
    //     required: true,
    //     unique: true,
    // },
    designation: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
   
    salary: {
        type: String,
        required: true,
    },

})

module.exports=mongose.model("Teachermodel",enrollschema);