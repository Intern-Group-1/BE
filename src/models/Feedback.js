const mongoose =require('mongoose')
const FeedbackSchema = mongoose.Schema({
    appointment:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment',
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    Doctor :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
    },
    content :{
        type: String,
    },
    date:{
        type: Date,
    }
})

module.exports = mongoose.model('Feedback', FeedbackSchema) 