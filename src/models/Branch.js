const mongoose =require('mongoose');
const BranchSchema = mongoose.Schema({
    address: { 
        type: String,
        required: true
    },
}, {timestamps: true})
module.exports = mongoose.model('Branch', BranchSchema)