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
    totalRoom: { 
        type: Number,
        required: false
    }
}, {timestamps: true});

module.exports = mongoose.model('Branch', BranchSchema);