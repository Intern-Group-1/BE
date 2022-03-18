const mongoose =require('mongoose');
const BranchSchema = mongoose.Schema({
    name :{
        type: String,
        required: true
    },
    address: { 
        type: String,
        required: true
    },
    image:{
        type: String,
    }
}, {timestamps: true})
module.exports = mongoose.model('Branch', BranchSchema)