
const Services = require('../services/Doctor')
async function createDoctor(req, res) {
    try {
        const doctor = await Services.createDoctor({
            full_name: req.body.full_name,
            address: req.body.address,
            phone_number: req.body.phone_number,
            age: req.body.age,
            speciality: req.body.speciality,
            gender:req.body.gender,
            avatar:req.file.location,
            account: req.body.account,
           
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
        if(req.file){
        const doctor = await Services.updateDoctor(req.params.id, {
            full_name: req.body.full_name,
            address: req.body.address,
            phone_number: req.body.phone_number,
            age: req.body.age,
            speciality: req.body.speciality,
            gender:req.body.gender,
            avatar:req.file.location,
           
        })
        if(!doctor)
        {
            return res.status(400).json({ status: 400,  message: "Updated not successfully!" })
        }
        return res.status(200).json({ status: 200, data: doctor, message: "Update doctor successfully!" })
    }
    else
    {
        const doctor = await Services.updateDoctor(req.params.id, {
            full_name: req.body.full_name,
            address: req.body.address,
            phone_number: req.body.phone_number,
            age: req.body.age,
            speciality: req.body.speciality,
            gender:req.body.gender,
           
        })
        if(!doctor)
        {
            return res.status(400).json({ status: 400,  message: "Updated not successfully!" })
        }
        return res.status(200).json({ status: 200, data: doctor, message: "Update doctor successfully!" })
    }
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
    // const account = req.account.id
    try {
        const doctor = await Services.getDoctorById(req.params.id)
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
        var page = req.query.page
        const doctor = await Services.getAllDoctor(page)
        if(!doctor){
            return res.status(402).json({ status: 402, message: "Doctor not exist!" })
        }
        return res.status(200).json({ status: 200,data: doctor })
    } catch (error) {
        console.log(error)
    }
}

async function StatisticsDoctor(req, res)
{
    const doctor = await Services.StatisticsDoctor()
    if(!doctor){
        return res.status(402).json({ status: 402, message: "Doctor not exist!" })
    }
    return res.status(200).json({ status: 200,data: doctor })
}

async function SearchUser(req, res){
    const keyword = req.query.keyword   
    try {
        const user = await Services.SearchUser(keyword)
        if(!user){
            return res.status(402).json({ status: 402, message: "User not exist!" })
        }
        return res.status(200).json({ status: 200, data: user })
    } catch (error) {
        console.log(error)
    }
}

async function GetSpeciality(req, res)
{
    try {
        const speciality = await Services.GetSpeciality()
        if(!speciality){
            return res.status(402).json({ status: 402, message: "Speciality not exist!" })
        }
        return res.status(200).json({ status: 200,data: speciality })
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