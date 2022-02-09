const Services = require('../services/ServiceAssistant');
const path = require('path');
const createAssistant = async(req, res) => {
    try {
        const assistant = await Services.createAssistant({
            full_name: req.body.full_name,
            address: req.body.address,
            phone_number: req.body.phone_number,
            avatar: req.body.path,
            account: req.account.id,
        });
        if(!assistant){
            res.status(400).json("Created not assistant!");
        }
        return res.status(200).json(assistant);
        
    } catch (error) {
        console.log(error);
    }
}

const updateAssistant = async(req, res) => {
    try {
        const body = req.body;
        const assistant = await Services.updateAssistant(req.params.id, body);
        if(!assistant){
            res.status(400).json("Updated not assistant!");
        }
        return res.status(200).json(assistant);
    } catch (error) {
        console.log(error);
    }
}

const deleteAssistant = async(req, res) => {
    try {
        const assistant = await Services.deleteAssistant(req.params.id);
        if(!assistant){
            res.status(400).json("Delete not assistant!");
        }
        return res.status(200).json(assistant);
    } catch (error) {
        console.log(error);
    }
}

const getAssistantById = async(req, res) => {
    try {
        const assistant = await Services.getAssistantById(req.account.id);
        if(!assistant){
            res.status(400).json("Get not assistant!");
        }
        return res.status(200).json(assistant);
    } catch (error) {
        console.log(error);
    }
}

const getAllAssistant = async (req, res) => {
    try {
        const assistant = await Services.getAllAssistant();
        if(!assistant){
            res.status(400).json("Get not assistant!");
        }
        return res.status(200).json({status: 200,data: assistant});
   //     return assistant;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllAssistant,
    createAssistant,
    updateAssistant,
    deleteAssistant,
    getAssistantById,
}