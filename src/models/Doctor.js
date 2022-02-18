const mongoose =require('mongoose')

const DoctorSchema = mongoose.Schema({
    full_name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required:true,
    },
    phone_number: {
        type: String,
        required: true,
    },
    age :{
        type: Number,
        required: true,
    },
    gender:{
        type: Boolean,
        required: true,
    },
    speciality:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Speciality',

    },
    avatar:{
        type: String,
        required: true,
    },
    account:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account',
    }
})

module.exports = mongoose.model('Doctor', DoctorSchema) 