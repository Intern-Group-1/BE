const mongoose = require('mongoose')
const SpecialitySchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    images:{
        type: String,
    }
})
module.exports = mongoose.model('Speciality', SpecialitySchema) 
