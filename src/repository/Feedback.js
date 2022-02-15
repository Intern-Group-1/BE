const { async } = require('q')
const Feedback = require('../models/Feedback')

async function createFeedback(params){
    try {
        const feedback = await new Feedback(params)
        await feedback.save()
        return feedback
    } catch (error) {
        console.log(error)
    }
}

async function updateFeedback(id, params)
{
    try {
        const feedback = await Feedback.findByIdAndUpdate(id, params)
        return feedback
    } catch (error) {
        console.log(error)
    }
}

async function deleteFeedback(id)
{
    try {
        const feedback = await Feedback.findByIdAndDelete(id)
        return feedback
    } catch (error) {
        console.log(error)
    }
}

async function getFeedbackAll()
{
    try {
        const feedback = await Feedback.find({})
        
        return feedback
    } catch (error) {
        console.log(error)
    }
}

async function getFeedbackByApp(id)
{
    try {
        const feedback = await Feedback.findOne({id})
        return feedback 
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createFeedback,
    updateFeedback,
    deleteFeedback,
    getFeedbackAll,
    getFeedbackByApp
}