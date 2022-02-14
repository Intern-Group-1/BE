const { async } = require('q')
const Appointment = require('../models/Appointment')

async function createAppointment (params) {
    try {
        const appointment = await Appointment(params)
        await appointment.save()
        return appointment
    } catch (error) {
        console.log(error)
    }
}

async function updateAppointment(id, params){
    try {
        const appointment = await Appointment.findByIdAndUpdate(id, params)
        return appointment
    } catch (error) {
        console.log(error)
    }
}

async function deleteAppointment(id){
    try {
        const appointment = await Appointment.findByIdAndDelete(id)
        return appointment
    } catch (error) {
        console.log(error)
    }
}

async function getAppointmentId(id) {
    try {
        const appointment = await Appointment.findOne({id})
        return appointment       
    } catch (error) {
        console.log(error)
    }
}

async function getAppointmentAll()
{
    try {
        const appointment = await Appointment.find({})
        return appointment
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createAppointment,
    updateAppointment,
    deleteAppointment,
    getAppointmentId,
    getAppointmentAll
} 