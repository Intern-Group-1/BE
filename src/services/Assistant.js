const Repository = require('../repository/Assistant');

const createAssistant = async(params) => {
    try {
        const assistant = await Repository.createAssistant(params);
        return assistant;
    } catch (error) {
        console.log(error);
    }
}

const updateAssistant = async(id, params) => {
    try {
        const assistant = await Repository.updateAssistant(id, params);
        return assistant;
    } catch (error) {
        console.log(error);
    }
}

const deleteAssistant = async(id) => {
    try {
        const assistant = await Repository.deleteAssistant(id);
        console.log(assistant);
        return assistant;
    } catch (error) {
        console.log(error);
    }
}

const getAssistantById = async(id) => {
    try {
        const assistant = await Repository.getAssistantById(id);
        return assistant;
    } catch (error) {
        console.log(error);
    }
}

const getAllAssistant = async () => {
    try {
        const assistant = await Repository.getAllAssistant();
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
}
