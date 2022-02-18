const { async } = require('q')
const Serviecs = require('../services/Speciality')

async function createSpeciality(req, res)
{
    try {
        const body = req.body
        const speciality = await Serviecs.createSpeciality(body)
        if(!speciality){
            return res.status(400).json({message:"Created Speciality Not Success!"})
        }
        return res.status(200).json({status:200, data: speciality, message:'Creating Success!'})
    } catch (error) {
        console.log(error)
    }
}

async function updateSpeciality(req, res)
{
    try {
        const body = req.body
        const speciality = await Serviecs.updateSpeciality(req.params.id, body)
        if(!speciality)
        {
            return res.status(400).json({ status: 400,  message: "Updated not successfully!" })
        }
        return res.status(200).json({ status: 200, data: speciality, message: "Update successfully!" })
    } catch (error) {
        console.log(error)
    }
}

async function deleteSpeciality(req, res)
{
    try {
        const speciality = await Serviecs.deleteSpecility(req.params.id)
        if(!speciality)
        {
            return res.status(400).json({ status: 400,  message: "Deleted not successfully!" })
        }
        return res.status(200).json({ status: 200, data: speciality, message: "Deleting successfully!" })
    } catch (error) {
        console.log(error)
    }
}

async function getAllSpeciality(req, res)
{
    try {
        const speciality = await Serviecs.getAllSpeciality()
        if(!speciality){
            return res.status(402).json({ status: 402, message: "Speciality not exist!" })
        }
        return res.status(200).json({ status: 200,data: speciality })
    } catch (error) {
        console.log(error)
    }
}

async function getBySpeciality(req, res)
{
    try {
        const speciality = await Serviecs.getBySpeciality(req.params.id)
        if(!speciality){
            return res.status(402).json({ status: 402, message: "Speciality not exist!" })
        }
        return res.status(200).json({ status: 200,data: speciality })
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