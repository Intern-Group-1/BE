const mongoose =require('mongoose');

const BranchSchema = mongoose.Schema({
    name_branch: {
        type: String,
        required: true
    },
    address: { 
        type: String,
        required: true
    },
    
}, {timestamps: true});

module.exports = mongoose.model('Branch', BranchSchema);