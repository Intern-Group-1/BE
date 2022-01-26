const { async } = require('q')
const Services = require('../services/ServiceDoctor')

async function createDoctor(req, res) {
    try {
        
        const doctor = await Services.createDoctor({
            full_name: req.body.full_name,
            address: req.body.address,
            phone_number: req.body.phone_number,
            age: req.body.age,
            speciality: req.body.speciality,
            department: req.body.department,
            account: req.account.id
        })
        if(!doctor){
            return res.status(400).json({ status: 400, message: "Created not doctor!" }) 
        }
        return res.status(200).json({ status: 200, data: doctor, message: "Create doctor succesfully!" })
    } catch (error) {
        console.log(error)
    }
}

async function updateDoctor(req, res) {
    try {
        const body = req.body
        const doctor = await Services.updateDoctor(req.params.id, body)
        if(!doctor)
        {
            return res.status(400).json({ status: 400,  message: "Updated not successfully!" })
        }
        return res.status(200).json({ status: 200, data: doctor, message: "Update doctor successfully!" })
    } catch (error) {
        console.log(error)
    }
}

async function deleteDoctor(req, res){
    try {
        const doctor = await Services.deleteDoctor(req.params.id)
        if(!doctor){
            return res.status(400).json({ status: 400, message: "Deleted doctor not successfully!" })
        }
        return res.status(200).json({ status: 200,message: "Delete doctor successfully!" })
    } catch (error) {
        console.log(error)
    }
}
exports.profile = async (req, res) => {
    return res.status(200).json(req.user)
}
async function getDoctorById(req, res){
    const account = req.account.id
    try {
        const doctor = await Services.getDoctorById(account)
        if(!doctor){
            return res.status(402).json({ status: 402, message: "Doctor not exist!" })
        }
        return res.status(200).json({ status: 200,data: doctor })
    } catch (error) {
        console.log(error)
    }
}
async function getAllDoctor(req, res){
    try {
        const doctor = await Services.getAllDoctor()
        if(!doctor){
            return res.status(402).json({ status: 402, message: "Doctor not exist!" })
        }
        return res.status(200).json({ status: 200,data: doctor })
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