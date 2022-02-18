const Room = require('../models/Room');
const Branch = require('../models/Branch');

const createRoom = async (params) => {
    try {
            const room = await Room(params);
            await room.save();
            const id = room._id;
            const result = await Room.find({_id: id}).
            populate({
                path: 'branch', 
                select: {name_branch:1, address: 1, totalRoom: 0}
            })
            return result;
    } catch (error) {
        console.error(error);
    }
}

const updateRoom = async (id, params) => {
    try {
        await Room.findByIdAndUpdate(id, params);
        const result = await Room.find({_id: id}).
            populate({
                path: 'branch', 
                select: {name_branch:1, address: 1, totalRoom: 1}
            })
        return result;
    } catch (error) {
        console.log(error);
    }
}

const deleteRoom = async (id) => {
    try {
        const room = await Room.findByIdAndRemove({_id:id});
        return room;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createRoom,
    updateRoom,
    deleteRoom
}