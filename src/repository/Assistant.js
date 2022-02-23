const Assistant = require('../models/Assistant');
const createAssistant = async(params) => {
    try {
        const assistant = await Assistant(params);
        await assistant.save()
        const id = assistant._id
        const result = await Assistant.find({_id:id})
        .populate({
                path: 'account',
                select: {email: 1, role: 1, _id: 0},
              })
        return result
    } catch (error) {
        console.log(error);
    }
}
const updateAssistant = async(id, params) => {
    try {
         await Assistant.findByIdAndUpdate(id, params);
        const result = await Assistant.find({_id:id})
            .populate({
                path: 'account',
                select: {email: 1, role: 1, _id: 0},
              })
        return result
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
}