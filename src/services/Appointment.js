const { async } = require('q')
const Repository = require('../repository/Appointment')

async function createAppointment (params)
{
    try {
        const appointment = await Repository.createAppointment(params)
        return appointment
    } catch (error) {
        console.log(error)
    }
}

async function updateAppointment(id, params)
{
    try {
        const appointment = await Repository.updateAppointment(id, params)
        return appointment
    } catch (error) {
        console.log(error)
    }
}

async function deleteAppointment(id)
{
    try {
        const appointment = await Repository.deleteAppointment(id) 
        return appointment
    } catch (error) {
        console.log(error)
    }
}
async function getAppointmentId (id) 
{
    try {
        const appointment = await Repository.getAppointmentId(id)
        return appointment
    } catch (error) {
        console.log(error)
    }
}

async function getAppointmentAll()
{
    try {
        const appointment = await Repository.getAppointmentAll()
        return appointment
    } catch (error) {
        console.log(error)
    }
}

async function getAppointmentByUser(id)
{
    try {
        const appointment = await Repository.getAppointmentByUser(id)
        return appointment
    } catch (error) {
        console.log(error)
    }
}

async function getAppointmentByDoctor(id)
{
    try {
        const appointment = await Repository.getAppointmentByDoctor(id)
        return appointment
    } catch (error) {
        console.log(error)
    }
}

async function SumApproved()
{
    try {
        const appointment = await Repository.SumApproved()
        return appointment
    } catch (error) {
        console.log(error)
    }
}
async function SumWaiting()
{
    try {
        const appointment = await Repository.SumWaiting()
        return appointment
    } catch (error) {
        console.log(error)
    }
}
async function SumCancel()
{
    try {
        const appointment = await Repository.SumCancel()
        return appointment
    } catch (error) {
        console.log(error)
    }
}
async function NotApprovedYet()
{
    try {
        const appointment = await Repository.NotApprovedYet()
        return appointment
    } catch (error) {
        console.log(error)
    }
}
async function GetNotApprovedYet()
{
    try {
        const appointment = await Repository.GetNotApprovedYet()
        return appointment
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    createAppointment,
    updateAppointment,
    deleteAppointment,
    getAppointmentAll,
    getAppointmentId,
    NotApprovedYet,
    GetNotApprovedYet,
    getAppointmentByUser,
    SumApproved,
    SumWaiting,
    SumCancel,
    getAppointmentByDoctor

}