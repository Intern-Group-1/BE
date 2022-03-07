const Feedback = require('../models/Feedback')
const Services = require('../services/Feedback')

async function createFeedback(req, res)
{
    try {
        const body = req.body
        const feedback = await Services.createFeedback(body)
        if(!feedback)
        {
            return res.status(400).json({ status: 400, message: "Created not feedback!" }) 
        }
        return res.status(200).json({ status: 200, data: feedback, message: "Create feedback succesfully!" })
    } catch (error) {
        console.log(error)
    }
}

async function updateFeedback(req, res)
{
    try {
        const body= req.body
        const feedback = await Services.updateFeedback(req.params.id, body)
        if(!feedback)
        {
            return res.status(400).json({ status: 400, message: "Updated not feedback!" })
        }
        return res.status(200).json({ status: 200, data: feedback, message: "Updating feedback succesfully!" })
    } catch (error) {
        console.log(error)
    }
}
async function deleteFeedback(req, res)
{
    try {
        const feedback = await Services.deleteFeedback(req.params.id)
        if(!feedback)
        {
            return res.status(400).json({ status: 400, message: "Deleted not feedback!" })
        }
        return res.status(200).json({ status: 200, data: feedback, message: "Deleting feedback succesfully!" })
    } catch (error) {
        console.log(error)
    }
}
async function getFeedbackAll(req, res)
{
    try {
        const feedback = await Services.getFeedbackAll()
        console.log(feedback)
        if(!feedback)
        {
            return res.status(400).json({ status: 400, message: "Get not feedback!" })
        }
        return res.status(200).json({ status: 200, data: feedback, message: "Get feedback succesfully!" })
    } catch (error) {
        console.log(error)
    }
}

async function getFeedbackByApp(req, res)
{
    try {
     const feedback = await Services.getFeedbackByApp(req.params.id)
     if(!feedback)
        {
            return res.status(400).json({ status: 400, message: "Get not feedback!" })
        }
        return res.status(200).json({ status: 200, data: feedback, message: "Get feedback succesfully!" })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createFeedback,
    updateFeedback,
    getFeedbackAll,
    getFeedbackByApp,
    deleteFeedback
}