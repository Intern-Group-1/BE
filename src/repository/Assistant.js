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
        const assistant = await findByIdAndUpdate(id, params);
        return assistant;
    } catch (error) {
        console.log(error);
    }
}

const deleteAssistant = async(id) => {
    try {
        const assistant = await findOneAndDelete(id);
        return assistant;
    } catch (error) {
        console.log(error);
    }
}

const getAssistantById = async(id) => {
    try {
        const assistant = await findOne({id})
        .populate({
            path: 'account',
            select: ({email: 1, role: 1, _id: 0})
        });
        return assistant;
    } catch (error) {
        console.log(error);
    }
}

const getAllAssistant = async () => {
    try {
        const assistant = await find({}).
        populate({
            path: 'account',
            select: ({email: 1, role: 1, _id: 0})
        });
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