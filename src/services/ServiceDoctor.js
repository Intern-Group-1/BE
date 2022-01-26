const { async } = require('q')
const Repository = require('../repository/Doctor')

async function createDoctor (params){
    try {
        const doctor = await Repository.createDoctor(params)
        return doctor
    } catch (error) {
        console.log(error)
    }
}

async function updateDoctor(id, params){
    try {
        const doctor = await Repository.updateDoctor(id, params)
        return doctor
    } catch (error) {
        console.log(error)
    }
}

async function deleteDoctor(id){
    try {
        const doctor = await Repository.deleteDoctor(id)
        return doctor
    } catch (error) {
        console.log(error)
    }
}
async function getDoctorById(id){
    try {
        const doctor = await Repository.getDoctorId(id)
        return doctor
    } catch (error) {
        console.log(error)
    }
}

async function getAllDoctor(){
    try {
        const doctor = await Repository.getAllDoctor()
        return doctor
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    createDoctor,
    updateDoctor,
    deleteDoctor,
    getDoctorById,
    getAllDoctor,
}