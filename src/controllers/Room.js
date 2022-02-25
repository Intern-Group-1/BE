const Room = require('../services/Room');
const Branch = require('../models/Branch');


const createRoom = async (req, res) =>{
    try {      
            const room = await Room.createRoom({
                name_room: req.body.name_room,
                status: req.body.status
            });
            if(!room){
                res.status(400).json("create not room!");
            }         
            return res.status(200).json(room);
  
    } catch (error) {
        console.log(error);
    }
}

const updateRoom = async (req, res) =>{
    try {      
            const room = await Room.updateRoom(req.params.id, req.body);
            if(!room){
                res.status(400).json("update not room!");
            }         
            return res.status(200).json(room);
  
    } catch (error) {
        console.log(error);
    }
}

const deleteRoom = async (req, res) =>{
    try {      
            const room = await Room.deleteRoom(req.params.id);
            if(!room){
                res.status(400).json("delete not room!");
            }         
            return res.status(200).json(room);
  
    } catch (error) {
        console.log(error);
    }
}

const countRoom = async (req, res) => {
    try {      
        const room = await Room.countRoom();
        if(!room){
            res.status(400).json("count not room!");
        }         
        return res.status(200).json(room);

} catch (error) {
    console.log(error);
}
}

module.exports ={
    createRoom,
    updateRoom,
    deleteRoom,
    countRoom
}