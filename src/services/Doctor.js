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
async function StatisticsDoctor()
{
    try {
        const doctor = await Repository.StatisticsDoctor()
        return doctor
    } catch (error) {
        console.log(error)
    }
}
async function SearchUser(keyword){
    try {
        const user = await Repository.SearchUser(keyword)
    return user
    } catch (error) {
        console.log(error)
    }
}
async function GetSpeciality()
{
    try {
        const speciality = await Repository.GetSpeciality()
        return speciality
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
    StatisticsDoctor,
    SearchUser,
    GetSpeciality
}