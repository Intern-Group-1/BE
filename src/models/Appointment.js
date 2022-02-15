const mongoose = require('mongoose')
const AppointmentSchema = mongoose.Schema({
    // branch:
    // {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Branch',
    // },
    // room:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Room',
    // },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    doctor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
    },  
    node:{
        type:String,
    },
    status:{
        type:Boolean,
    },
    schedule:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Schedule',
     }
}) 
module.exports = mongoose.model('Appointment', AppointmentSchema) 
