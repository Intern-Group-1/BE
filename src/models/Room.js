const mongoose =require('mongoose')
const RoomSchema = mongoose.Schema({
    name_room: {
        type: String,
        required: true
    },
    status: {
        type: Boolean
    },
}, {timestamps: true});
module.exports = mongoose.model('Room', RoomSchema)