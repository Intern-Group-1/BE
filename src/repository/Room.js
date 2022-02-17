const Room = require('../models/Room');


const createRoom = async (params) => {
    try {
        const room = await Room(params);
        room.save();
        return room;
    } catch (error) {
        console.error(error);
    }
}

const updateRoom

module.exports = {
    createRoom,
}