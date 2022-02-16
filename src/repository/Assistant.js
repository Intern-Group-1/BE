const Assistant = require('../models/Assistant');


const createAssistant = async(params) => {
    try {
        const assistant = await Assistant(params);
        assistant.save();
        return assistant;
    } catch (error) {
        console.log(error);
    }
}

const updateAssistant = async(id, params) => {
    try {
        const assistant = await Assistant.findByIdAndUpdate(id, params);
        return assistant;
    } catch (error) {
        console.log(error);
    }
}

const deleteAssistant = async(id) => {
    try {
        const assistant = await Assistant.findOneAndDelete(id);
        return assistant;
    } catch (error) {
        console.log(error);
    }
}

const getAssistantById = async(id) => {
    try {
        const assistant = await Assistant.findOne({_id: id})
        .populate({
            path: 'account',
            select: ({email: 1, role: 1, _id: 0})
        }).select({ _id: 0, __v: 0 });
        return assistant;
    } catch (error) {
        console.log(error);
    }
}

const getAllAssistant = async () => {
    try {
        const assistant = await Assistant.find({}).
        populate({
            path: 'account',
            select: ({email: 1, role: 1, _id: 0})
        }).select({ _id: 0, __v: 0 });
        return assistant;
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
    
};