const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
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
    // avatar:{
    //     type: String,
    //     required: true,
    // },
    account:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account',
    }
})

module.exports = mongoose.model('User', UserSchema) 