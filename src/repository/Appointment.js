const { async } = require('q')
const Appointment = require('../models/Appointment')

async function createAppointment (params) {
    try {
        const appointment = await Appointment(params)
        await appointment.save()
        const id = appointment._id
        const result = await Appointment.find({_id:id})
        .populate(
            { 
                path:'user',
                select: {full_name: 1,address:1,phone_number:1,age:1, _id: 0},
               
            }) 
            .populate(
                {   path:'doctor',
                    select: {full_name: 1,address:1,phone_number:1,age:1,speciality:1,department:1, _id: 0}, 
                })
            .populate(
                {   path:'branch' 
                })
                // .populate(
                //     {   path:'assistant',
                //     select: {full_name: 1,address:1,phone_number:1,avatar:1}, 
                //     })
        return result
    } catch (error) {
        console.log(error)
    }
}

async function SumWaiting()
{
    try {
        const appointment = await Appointment.find({status: 0}).count()
        return appointment
    } catch (error) {
        console.log(error)
    }
}
async function SumApproved()
{
    try {
        const appointment = await Appointment.find({status: 1}).count()
        return appointment
    } catch (error) {
        console.log(error)
    }
}
async function SumCancel()
{
    try {
        const appointment = await Appointment.find({status: 2}).count()
        return appointment
    } catch (error) {
        console.log(error)
    }
}
 
async function updateAppointment(id, params){
    try {
         await Appointment.findByIdAndUpdate(id, params)
        const result = await Appointment.find({_id:id})
        .populate(
            { 
                path:'user',
                select: {full_name: 1,address:1,phone_number:1,age:1, _id: 0},
               
            }) 
            .populate(
                {   path:'doctor',
                    select: {full_name: 1,address:1,phone_number:1,age:1,speciality:1,department:1, _id: 0}, 
                })
            .populate(
                {   path:'schedule',
                    select: {data:1, time:1, _id: 0}, 
                })
        return result
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
        .populate(
            { 
                path:'user',
                select: {full_name: 1,address:1,phone_number:1,age:1, _id: 0},
               
            }) 
            .populate(
                {   path:'doctor',
                    select: {full_name: 1,address:1,phone_number:1,age:1,speciality:1,department:1, _id: 0}, 
                })
            .populate(
                {   path:'schedule',
                        select: {data:1, time:1, _id: 0}, 
                })
        return appointment       
    } catch (error) {
        console.log(error)
    }
}

async function getAppointmentByUser(id)
{
    try {
        const appointment = await Appointment.find({user: id})
        .populate(
            { 
                path:'user',
                select: {full_name: 1,address:1,phone_number:1,email:1, _id: 0},
               
            }) 
            .populate(
                {   path:'doctor',
                    select: {full_name: 1,address:1,phone_number:1,age:1,speciality:1,department:1,avatar:1, _id: 0}, 
                })
            .populate(
                {   path:'branch',
                       
                })
        return appointment
    } catch (error) {
        console.log(error)
    }
}

async function getAppointmentByDoctor(id)
{
    try {
        const appointment = await Appointment.find({doctor: id})
        .populate(
            { 
                path:'user',
                select: {full_name: 1,address:1,phone_number:1, _id: 0},
               
            }) 
            .populate(
                {   path:'doctor',
                    select: {full_name: 1,address:1,phone_number:1,age:1,speciality:1,department:1, _id: 0}, 
                })
            .populate(
                {   path:'branch',
                       
                })
        return appointment
    } catch (error) {
        console.log(error)
    }
}

async function getAppointmentAll()
{
    try {
        const appointment = await Appointment.find({})
        .populate(
            { 
                path:'user',
                select: {full_name: 1,address:1,phone_number:1},
               
            }) 
            .populate(
                {   path:'doctor',
                    select: {full_name: 1,address:1,phone_number:1,age:1,speciality:1,department:1}, 
                })
            .populate(
                {   path:'branch',
                       
                })
        return appointment
    } catch (error) {
        console.log(error)
    }
}

async function NotApprovedYet()
{
    try {
        const appointment = await Appointment.find({status: false}).count()
        return appointment
    } catch (error) {
        console.log(error)
    }
}
async function GetNotApprovedYet()
{
    try {
        const appointment = await Appointment.find({status: false})
        .populate(
            { 
                path:'user',
                select: {full_name: 1,address:1,phone_number:1,age:1, _id: 0},
               
            }) 
            .populate(
                {   path:'doctor',
                    select: {full_name: 1,address:1,phone_number:1,age:1,speciality:1,department:1, _id: 0}, 
                })
            .populate(
                {   path:'schedule',
                        select: {data:1, time:1, _id: 0}, 
                })
            // .select({ _id: 0, __v: 0 })
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
    getAppointmentAll,
    NotApprovedYet,
    GetNotApprovedYet,
    getAppointmentByUser,
    SumWaiting,
    SumApproved,
    SumCancel,
    getAppointmentByDoctor
} 