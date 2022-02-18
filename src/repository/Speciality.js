const { spawn, async } = require('q')
const Speciality = require('../models/Speciality')
async function createSpeciality(params)
{
    try {
        const speciality = await new Speciality(params)
        await speciality.save()
        return speciality
    } catch (error) {
        console.log(error)
    }
}

async function updateSpeciality(id, params)
{
    try {
        await Speciality.findByIdAndUpdate(id, params)
        const result = await Speciality.find({_id:id})
        return result
    } catch (error) {
        console.log(error)
    }
}

async function deleteSpeciality(id)
{
    try {
        const speciality = await Speciality.findOneAndDelete(id)
        return speciality
    } catch (error) {
        console.log(error)
    }
}

async function getAllSpeciality()
{
    try {
        const speciality = await Speciality.find({})
      
        return speciality
    } catch (error) {
        console.log(error)
    }
}

async function getBySpeciality(id)
{
    try {
        const speciality = await Speciality.findOne({_id: id})
        return speciality
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createSpeciality,
    updateSpeciality,
    deleteSpeciality,
    getAllSpeciality,
    getBySpeciality
}