const { async } = require('q')
const Repository = require('../repository/Schedule')

async function createSchedule (params){
    try {
        const schedule = await Repository.CreateSchedule(params)
        return schedule
    } catch (error) {
        console.log(error)
    }
}
async function getScheduleId(id){
    try {
        const schedule = await Repository.getScheduleId(id)
        return schedule
    } catch (error) {
        console.log(error)
    }
}

async function getAllSchedule(){
    try {
        const schedule = await Repository.getAllSchedule()
        return schedule
    } catch (error) {
        console.log(error)        
    }
}

async function updateSchedule(id, params){
    try {
        const schedule = await Repository.updateSchedule(id, params)
        return schedule
    } catch (error) {
        console.log(error)
    }
}
async function deleteSchedule(id){
    try {
        const schedule = await Repository.deleteSchedule(id)
        return schedule
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createSchedule,
    getScheduleId,
    getAllSchedule,
    updateSchedule,
    deleteSchedule
}