const { async } = require('q')
const Feedback = require('../models/Feedback')

async function createFeedback(params){
    try {
        const feedback = await new Feedback(params)
        await feedback.save()
        const id = feedback._id
        const result = await Feedback.find({_id:id})
        .populate(
            { 
                path:'user',
                select: {full_name: 1,address:1,phone_number:1,age:1, _id: 0},
               
            }) 
            .populate(
                {   path:'doctor',
                    select: {full_name: 1,address:1,phone_number:1,age:1,speciality:1,department:1, _id: 0}, 
                })
            // .populate(
            //     {   path:'schedule',
            //         select: {data:1, time:1, _id: 0}, 
            //     })
        return result
    } catch (error) {
        console.log(error)
    }
}

async function updateFeedback(id, params)
{
    try {
        const feedback = await Feedback.findByIdAndUpdate(id, params)
        const result = await Feedback.find({_id:id})
        .populate(
            { 
                path:'user',
                select: {full_name: 1,address:1,phone_number:1,age:1, _id: 0},
               
            }) 
            .populate(
                {   path:'doctor',
                    select: {full_name: 1,address:1,phone_number:1,age:1,speciality:1,department:1, _id: 0}, 
                })
            // .populate(
            //     {   path:'schedule',
            //         select: {data:1, time:1, _id: 0}, 
            //     })
        return result
        //return feedback
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
        .populate(
            { 
                path:'user',
                select: {full_name: 1,address:1,phone_number:1,age:1, _id: 0},
               
            }) 
            .populate(
                {   path:'doctor',
                    select: {full_name: 1,address:1,phone_number:1,age:1,speciality:1,department:1, _id: 0}, 
                })
            // .populate(
            //     {   path:'schedule',
            //         select: {data:1, time:1, _id: 0}, 
            //     })
        
        return feedback
    } catch (error) {
        console.log(error)
    }
}

async function getFeedbackByApp(id)
{
    try {
        const feedback = await Feedback.findOne({id})
        .populate(
            { 
                path:'user',
                select: {full_name: 1,address:1,phone_number:1,age:1, _id: 0},
               
            }) 
            .populate(
                {   path:'doctor',
                    select: {full_name: 1,address:1,phone_number:1,age:1,speciality:1,department:1, _id: 0}, 
                })
            // .populate(
            //     {   path:'schedule',
            //         select: {data:1, time:1, _id: 0}, 
            //     })
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