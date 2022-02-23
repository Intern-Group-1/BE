const { async } = require('q')
const Repository = require('../repository/User')

async function createUser (params){
    try {
        const user = await Repository.createUser(params)
        return user
    } catch (error) {
        console.log(error)
    }
}

async function updateUser(id, params){
    try {
        const user = await Repository.updateUser(id, params)
        return user
    } catch (error) {
        console.log(error)
    }
}

async function deleteUser(id){
    try {
        const user = await Repository.deleteUser(id)
        return user
    } catch (error) {
        console.log(error)
    }
}
async function getUserById(id){
    try {
        const user = await Repository.getUserId(id)
        return user
    } catch (error) {
        console.log(error)
    }
}

async function getAllUser(page){
    try {
        const user = await Repository.getAllUser(page)
        return user
    } catch (error) {
        console.log(error)
    }
}
async function StatisticsUser()
{
    try {
        const user = await Repository.StatisticsUser()
        return user
    } catch (error) {
        console.log(error)
    }
}

async function SearchDoctor(keyword){
    try {
        const doctor = await Repository.SearchDoctor(keyword)
    return doctor
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUserById,
    getAllUser,
    SearchDoctor,
    StatisticsUser
}