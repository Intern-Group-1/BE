const { async } = require('q')
const Doctor = require('../models/Doctor')

async function createDoctor (params){
    try {
        const doctor = await new Doctor(params)
        await doctor.save()
        return doctor
    } catch (error) {
        console.log(error)
    }
}

async function updateDoctor(id, params){
    try {
        const doctor = await Doctor.findByIdAndUpdate(id, params)
        return doctor
    } catch (error) {
        console.log(error)
    }
}

async function deleteDoctor(id){
    try {
        const doctor = await Doctor.findOneAndDelete(id)
        return doctor
    } catch (error) {
        console.log(error)
    }
}

async function getDoctorId(id){
    try {
        const doctor = await Doctor.findOne({id})
        .populate({
          path: 'account',
          select: {email: 1, role: 1, _id: 0},
        })
        .select({ _id: 0, __v: 0 })
        return doctor
    } catch (error) {
        console.log(error)
    }
}

async function getAllDoctor(){
    try {
        const doctor = await Doctor.find({}).populate({
            path: 'account',
            select: {email: 1, role: 1, _id: 0},
          })
          .select({ _id: 0, __v: 0 })
        return doctor
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    createDoctor,
    updateDoctor,
    deleteDoctor,
    getDoctorId,
    getAllDoctor,
}