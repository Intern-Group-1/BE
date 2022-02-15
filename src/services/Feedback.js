const Repository = require('../repository/Feedback')
async function createFeedback(params)
{
    try {
       const feedback = await Repository.createFeedback(params)
       return feedback 
    } catch (error) {
        console.log(error)
    }
}

async function updateFeedback(id, params)
{
    try {
        const feedback = await Repository.updateFeedback(id,  params)
        return feedback
    } catch (error) {
        console.log(error)
    }
}

async function deleteFeedback(id)
{
    try {
        const feedback = await Repository.deleteFeedback(id)
        return feedback
    } catch (error) {
        console.log(error)
    }
}

async function getFeedbackAll()
{
    try {
        const feedback = await Repository.getFeedbackAll()
        return feedback
    } catch (error) {
        console.log(error)
    }
}

async function getFeedbackByApp(id)
{
    try {
        const feedback = await Repository.getFeedbackByApp(id)
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