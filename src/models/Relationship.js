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
});

// RelationshipSchema.virtual('roomCount',{
//     ref: 'Room',
//     localField: '_id',
//     foreignField: 'branch',
//     justOne: false,
//     count: true,
// })

//module.exports = mongoose.model('RelationshipBR', RelationshipBRSchema);
module.exports = mongoose.model('Relationship', RelationshipSchema);