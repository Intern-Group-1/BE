const { async } = require('q')
const Schedule = require('../models/Schedule')

async function CreateSchedule(params){
    try {
        const schedule = await new Schedule (params)
        await schedule.save()
        const result = await Schedule
        .populate(schedule, 
            {   path:'doctor',
                select: {full_name: 1,address:1,phone_number:1,age:1,speciality:1,department:1, _id: 0}, 
            })
        return result
    } catch (error) {
        console.log(error)
    }
} 

async function updateSchedule(id, params){
    try {
        await Schedule.findByIdAndUpdate(id, params)
        const result = await Schedule.findOne({id})
        .populate( 
            {   path:'doctor',
                select: {full_name: 1,address:1,phone_number:1,age:1,speciality:1,department:1, _id: 0}, 
            })
        return result
    } catch (error) {
        console.log(error)
    }
}
async function deleteSchedule(id){
    try {
        const schedule = await Schedule.findOneAndDelete(id)
        return schedule
    } catch (error) {
        console.log(error)
    }
}
async function getScheduleId(id){
    try {
        const schedule = await Schedule.findOne({id}).populate({
              path:'doctor',
             select: {full_name: 1,address:1,phone_number:1,age:1,speciality:1,department:1, _id: 0},
          })
          .select({ _id: 0, __v: 0 })
          console.log(schedule)
        return schedule
    } catch (error) {
        
        console.log(error)
    }
}

async function getAllSchedule(){
    try {
        const schedule = await Schedule.find({}).populate({
            path:'doctor',
            select: {full_name: 1,address:1,phone_number:1,age:1,speciality:1,department:1, _id: 0},
          })
          .select({ _id: 0, __v: 0 })
        return schedule
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    CreateSchedule,
    getScheduleId,
    updateSchedule,
    deleteSchedule,
    getAllSchedule
}