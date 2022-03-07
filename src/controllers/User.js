const Services = require('../services/User')
async function createUser(req, res) {
    try {
        console.log(req.body)
        const user = await Services.createUser({
            full_name: req.body.full_name,
            address: req.body.address,
            phone_number: req.body.phone_number,
            gender:req.body.gender,
            avatar:req.file.location,
            age:req.body.age,
            account: req.body.account
        })
        if(!user){
            return res.status(400).json({ status: 400, message: "Created not user!" }) 
        }
        return res.status(200).json({ status: 200, data: user, message: "Create user succesfully!" })
    } catch (error) {
        console.log(error)
    }
}

async function updateUser(req, res) {
    try {
        if(req.file == null )
        {
            const user = await Services.updateUser(req.params.id, {
                full_name: req.body.full_name,
                address: req.body.address,
                phone_number: req.body.phone_number,
                gender:req.body.gender,
                age:req.body.age,
            })
            if(!user)
        {
            return res.status(400).json({ status: 400,  message: "Updated not successfully!" })
        }
        return res.status(200).json({ status: 200, data: user, message: "Update user successfully!" })
        }else{
        const user = await Services.updateUser(req.params.id, {
            full_name: req.body.full_name,
            address: req.body.address,
            phone_number: req.body.phone_number,
            gender:req.body.gender,
            avatar:req.file.location,
            // age:req.body.age,
        })
        if(!user)
        {
            return res.status(400).json({ status: 400,  message: "Updated not successfully!" })
        }
        return res.status(200).json({ status: 200, data: user, message: "Update user successfully!" })
    }
        
    } catch (error) {
        console.log(error)
    }
}

async function deleteUser(req, res){
    try {
        const user = await Services.deleteUser(req.params.id)
        if(!user){
            return res.status(400).json({ status: 400, message: "Deleted user not successfully!" })
        }
        return res.status(200).json({ status: 200,message: "Delete user successfully!" })
    } catch (error) {
        console.log(error)
    }
}
exports.profile = async (req, res) => {
    return res.status(200).json(req.user)
}
async function getUserById(req, res){
    const account = req.account.id
    try {
        const user = await Services.getUserById(account)
        if(!user){
            return res.status(402).json({ status: 402, message: "User not exist!" })
        }
        return res.status(200).json({ status: 200,data: user })
    } catch (error) {
        console.log(error)
    }
}
async function getAllUser(req, res){
    try {
        var page = req.query.page
        const user = await Services.getAllUser(page)
        if(!user){
            return res.status(402).json({ status: 402, message: "User not exist!" })
        }
        return res.status(200).json({ status: 200,data: user })
    } catch (error) {
        console.log(error)
    }
}
async function StatisticsUser(req, res)
{
    const user = await Services.StatisticsUser()
    if(!user){
        return res.status(402).json({ status: 402, message: "User not exist!" })
    }
    return res.status(200).json({ status: 200,data: user })
}

async function SearchDoctor(req, res){
    const keyword = req.query.keyword   
    try {
        const doctor = await Services.SearchDoctor(keyword)
        if(!doctor){
            return res.status(402).json({ status: 402, message: "Doctor not exist!" })
        }
        return res.status(200).json({ status: 200, data: doctor })
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