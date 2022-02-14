const mongoose =require('mongoose')
const ScheduleSchema = mongoose.Schema({
    data:{
        type: Date,
        required: true
    },
    time:{
        type:String,
        required:true
    },
    doctor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
    }
})

module.exports = mongoose.model('Schedule', ScheduleSchema) 