const mongoose =require('mongoose')
const RelationshipSchema = mongoose.Schema({
    room:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room'
    },
    branch: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Branch'
    },
})
module.exports = mongoose.model('Relationship', RelationshipSchema);