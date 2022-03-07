const mongoose = require('mongoose')
const SpecialitySchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    images:{
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Speciality', SpecialitySchema) 
