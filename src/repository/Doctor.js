const { async } = require('q')
const Doctor = require('../models/Doctor')
const User = require('../models/User')
async function createDoctor (params){
    try {
        const doctor = await new Doctor(params)
        await doctor.save()
        const id = doctor._id
        const result = await Doctor.find({_id:id})
        .populate(
            { 
                path:'speciality',
                select: {name: 1,images:1, _id: 0},
            }) 
            .populate({
                path: 'account',
                select: {email: 1, role: 1, _id: 0},
              })
        return result
    } catch (error) {
        console.log(error)
    }
}
async function updateDoctor(id, params){
    try {
        await Doctor.findByIdAndUpdate(id, params)
        const result = await Doctor.find({_id:id})
        .populate(
            { 
                path:'speciality',
                select: {name: 1,images:1, _id: 0},
            }) 
            .populate({
                path: 'account',
                select: {email: 1, role: 1, _id: 0},
              })
        return result
    } catch (error) {
        console.log(error)
    }
}

async function deleteDoctor(id){
    try {
        const doctor = await Doctor.findByIdAndDelete(id)
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
        .populate(
            { 
                path:'speciality',
                select: {name: 1,images:1, _id: 0},
            })
        return doctor
    } catch (error) {
        console.log(error)
    }
}
const PAGE_SIZE = 2
async function getAllDoctor(page){
    try {
        if(page)
        {
            if(page < 1)
            {
                page = 1
            }
            var skips = (page - 1) * PAGE_SIZE
            const doctor = await Doctor.find({})
            .skip(skips)
            .limit(PAGE_SIZE)
            .populate({
                path: 'account',
                select: {email: 1, role: 1, _id: 0},
            })
            .populate(
                { 
                    path:'speciality',
                    select: {name: 1,images:1, _id: 0},
                })

            return doctor
        }
        else{
        const doctor = await Doctor.find({})
        .populate({
            path: 'account',
            select: {email: 1, role: 1, _id: 0},
          })
          .populate(
              { 
                  path:'speciality',
                  select: {name: 1,images:1, _id: 0},
              })
        //    .select({ _id: 0, __v: 0 })
        return doctor
            }
        
    } catch (error) {
        console.log(error)
    }
}
async function StatisticsDoctor(){
    try {
        const doctor = await Doctor.find({}).count()
        return doctor
    } catch (error) {
        console.log(error)
    }
}

async function SearchUser(keyword){
    try {
        let query = {}
        
        if(keyword)
        {
            query.$or = [
                { "full_name": { $regex: keyword, $options: 'i' } },
                { "address": { $regex: keyword, $options: 'i' } },
              ]
        }
        let user = await User.find(query)
      return user
    } catch (error) {
        console.log(error)
    }
}

async function GetSpeciality()
{
    try {
        const speciality = await Doctor.distinct("speciality")
        return speciality
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
    StatisticsDoctor,
    SearchUser,
    GetSpeciality
}