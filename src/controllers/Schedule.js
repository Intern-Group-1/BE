const { model } = require('mongoose')
const { async } = require('q')
const Services = require('../services/Schedule')

async function CreateSchedule(req, res) {
    try {
        const schedule = await Services.createSchedule({
            data: req.body.data,
            time: req.body.time,
            doctor: req.body.doctor
        })
        if(!schedule){
            return res.status(400).json({ status: 400, message: "Created not schedule!" }) 
        }
        return res.status(200).json({ status: 200, data: schedule, message: "Create schedule succesfully!" })
    } catch (error) {
        
    }
}

async function getScheduleId(req, res){
    const doctor = req.body.doctor
    console.log(doctor)
    try {
        const schedule = await Services.getScheduleId(doctor)
        if(!schedule){
            return res.status(402).json({ status: 402, message: "Schedule not exist!" })
        }
        return res.status(200).json({ status: 200,data: schedule })
    } catch (error) {
        console.log(error)
    }
}

async function getAllSchedule(req, res){
    try {
        const schedule = await Services.getAllSchedule()
        if(!schedule){
            return res.status(402).json({ status: 402, message: "Schedule not exist!" })
        }
        return res.status(200).json({ status: 200,data: schedule })
    } catch (error) {
        console.log(error)
    }
}
async function deleteSchedule(req, res){
    try {
        const schedule = await Services.deleteSchedule(req.params.id)
        if(!schedule){
            return res.status(400).json({ status: 400, message: "Deleted schedule not successfully!" })
        }
        return res.status(200).json({ status: 200,message: "Delete schedule successfully!" })
    } catch (error) {
        console.log(error)
    }
}

async function updateSchedule(req, res) {
    try {
        const body = req.body
        const schedule = await Services.updateSchedule(req.params.id, body)
        if(!schedule)
        {
            return res.status(400).json({ status: 400,  message: "Updated not successfully!" })
        }
        return res.status(200).json({ status: 200, data: schedule, message: "Update schedule successfully!" })
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    CreateSchedule,
    getScheduleId,
    getAllSchedule,
    updateSchedule,
    deleteSchedule
}