const { model } = require('mongoose')
const { async } = require('q')
const Service = require('../services/Appointment')

async function createAppointment(req, res)
{
    try {
        const appointment = await Service.createAppointment({
             user: req.body.user,
             doctor:req.body.doctor,
             node:req.body.node,
             status:req.body.status
        })
        if(!appointment)
        {
            return res.status(400).json({ status: 400, message: "Created not appointment!" }) 
        }
        return res.status(200).json({ status: 200, data: appointment, message: "Create appointment succesfully!" })
    } catch (error) {
        console.log(error)
    }
}

async function updateAppointment(req, res)
{
    try {
        const body = req.body
        const appointment = await Service.updateAppointment(req.params.id, body)
        if(!appointment)
        {
            return res.status(400).json({ status: 400,  message: "Updated not successfully!" })
        }
        return res.status(200).json({ status: 200, data: appointment, message: "Update appointment successfully!" })
    } catch (error) {
        console.log(error)
    }
}

async function deleteAppointment(req, res)
{
    try {
        const appointment = await Service.deleteAppointment(req.params.id)
        if(!appointment)
        {
            return res.status(400).json({ status: 400, message: "Deleted appointment not successfully!" })
        }
        return res.status(200).json({ status: 200,message: "Delete appointment successfully!" })
    } catch (error) {
        console.log(error)
    }
}

async function getAppointmentAll(req, res)
{
    try {
        const appointment = await Service.getAppointmentAll()
        if(!appointment)
        {
            return res.status(402).json({ status: 402, message: "Appointment not exist!" })
        }
        return res.status(200).json({ status: 200,data: appointment })
    } catch (error) {
        console.log(error)
    }

}
module.exports = {
    createAppointment,
    updateAppointment,
    deleteAppointment,
    getAppointmentAll
}