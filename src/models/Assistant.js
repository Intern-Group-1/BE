const mongoose =require('mongoose')
const AssistantSchema = mongoose.Schema({
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
    avatar:{
        type: String,
        required: false,
    },
    account:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account',
    }
})
module.exports = mongoose.model('Assistant', AssistantSchema) 