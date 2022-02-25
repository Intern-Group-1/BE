const Repository = require('../repository/Room');

const createRoom = async (params) => {
    try {
        const room = await Repository.createRoom(params);
        return room;
    } catch (error) {
        console.log(error)
    }
}

const updateRoom = async (id, params) => {
    try {
        const room = await Repository.updateRoom(id, params);
        return room;
    } catch (error) {
        console.log(error);
    }
}

const deleteRoom = async (id) => {
    try {
        const room = await Repository.deleteRoom(id);
        return room;
    } catch (error) {
        console.log(error);
    }
}

const countRoom = async () => {
    try {
        const room = await Repository.countRoom();
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