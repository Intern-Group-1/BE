const mongoose =require('mongoose');

const RoomSchema = mongoose.Schema({
    name_room: {
        type: String,
        required: true
    },
    status: {
        type: Boolean
    },
    branch_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Branch'
    }
}, {timestamps: true});

module.exports = mongoose.model('Room', RoomSchema);