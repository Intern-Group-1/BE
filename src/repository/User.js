const { async } = require('q')
const User = require('../models/User')
const Doctor = require('../models/Doctor')
async function createUser (params){
    try {
        const user = await new User(params)
        await user.save()
        const id = user._id
        const result = await User.find({_id:id})
        .populate({
                path: 'account',
                select: {email: 1, role: 1, _id: 0},
              })
        return result
    } catch (error) {
        console.log(error)
    }
}

async function updateUser(id, params){
    try {
        await User.findByIdAndUpdate(id, params)
        const result = await User.find({_id:id}) 
            .populate({
                path: 'account',
                select: {email: 1, role: 1, _id: 0},
              })
        return result
    } catch (error) {
        console.log(error)
    }
}

async function deleteUser(id){
    try {
        const user = await User.findOneAndDelete(id)
        return user
    } catch (error) {
        console.log(error)
    }
}

async function getUserId(id){
    try {
        const user = await User.findOne({id})
        .populate({
          path: 'account',
          select: {email: 1, role: 1, _id: 0},
        })
        // .select({ _id: 0, __v: 0 })
        return user
    } catch (error) {
        console.log(error)
    }
}
const PAGE_SIZE = 2
async function getAllUser(page){
    try {
        if(page)
        {
            if(page < 1)
            {
                page = 1
            }
            var skips = (page - 1) * PAGE_SIZE
            const doctor = await User.find({})
            .skip(skips)
            .limit(PAGE_SIZE)
            .populate({
                path: 'account',
                select: {email: 1, role: 1, _id: 0},
              })
            return doctor
        }
        else{
        const user = await User.find({}).populate({
            path: 'account',
            select: {email: 1, role: 1, _id: 0},
          })
        return user
        }
    } catch (error) {
        console.log(error)
    }
}

async function StatisticsUser(){
    try {
        const user = await User.find({}).count()
        return user
    } catch (error) {
        console.log(error)
    }
}

async function SearchDoctor(keyword){
    try {
        let query = {}
        
        if(keyword)
        {
            query.$or = [
                { "full_name": { $regex: keyword, $options: 'i' } },
                { "speciality": { $regex: keyword, $options: 'i' } },
              ]
        }
        let doctor = await Doctor.find(query)//   select: { full_name: 1, address: 1, phone_number: 1,age:1,speciality:1,department:1, _id: 0 },
      
      return doctor
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUserId,
    getAllUser,
    SearchDoctor,
    StatisticsUser
}