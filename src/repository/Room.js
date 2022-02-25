const Room = require('../models/Room');
const Branch = require('../models/Branch');

const createRoom = async (params) => {
    try {
            const room = await Room(params);
            room.save();
            return room;
    } catch (error) {
        console.error(error);
    }
}

const updateRoom = async (id, params) => {
    try {
        const room = await Room.findByIdAndUpdate(id, params);
        return room;
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

const countRoom = async () => {
    try {
        const room = await Room.find({}).count();
        return room;
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createRoom,
    updateRoom,
    deleteRoom,
    countRoom
}