const { async } = require('q')
const Repository = require('../repository/Speciality')

async function createSpeciality(params)
{
    try {
        const speciality = await Repository.createSpeciality(params)
        return speciality
    } catch (error) {
        console.log(error)
    }
}

async function updateSpeciality(id, params)
{
    try {
        const speciality = await Repository.updateSpeciality(id, params)
        return speciality
    } catch (error) {
        console.log(error)
    }
}

async function deleteSpecility(id)
{
    try {
        const speciality = await Repository.deleteSpeciality(id)
    } catch (error) {
        console.log(error)
    }
}

async function getAllSpeciality()
{
    try {
        const speciality = await Repository.getAllSpeciality()
        return speciality
    } catch (error) {
        console.log(error)
    }
}

async function getBySpeciality(id)
{
    try {
        const speciality = await Repository.getBySpeciality(id)
        return speciality
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createSpeciality,
    updateSpeciality,
    deleteSpecility,
    getAllSpeciality,
    getBySpeciality
}