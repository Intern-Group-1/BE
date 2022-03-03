const mongoose = require('mongoose')
const AppointmentSchema = mongoose.Schema({
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
    assistant:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Assistant',
    } ,
    node:{
        type:String,
    },
    date :{
        type: Date,
    },
    time:{
        type: String,
    },
    status:{
        type:Boolean,
    },
    schedule:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Schedule',
     },
    
}) 
module.exports = mongoose.model('Appointment', AppointmentSchema) 
