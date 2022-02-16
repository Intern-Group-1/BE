const { async } = require('q')
const { populate } = require('../models/Doctor')
const ServiceUser = require('../services/Account')
async function register (req, res){
    try{
    const body = req.body
    if(body.password != body.password_again){
        return res.status(400).json({ status: 400, message: "The password is incorrect! Please try again." })
    }
    const account = await ServiceUser.register(body)
    if(!account)
    {
        throw new Error({ error: 'Registration was not successful! Please register again.' })
    }
    return res.status(200).json({ status: 200, data: account, message: "Succesfully Users Retrieved" })
    }catch(error)
    {
        console.log(error)
    }

}

async function login (req, res){
    try {
        const { email, password } = req.body
        const account = await ServiceUser.login(email, password)
        if(!account){
            throw new Error({ error: 'Login Fails.' })
        }
        return res.status(200).json({ status: 200, data: account, message: "Succesfully Login" })
    } catch (error) {
        console.log(error)
    }
}
async function profile (req, res) {
    return res.status(200).json(req.account)
  }
  
async function changePassword(req, res){
    try {
        const password = req.body.password
        const account = req.account.id
        const user = await ServiceUser.changePassword(account, password)
        return res.status(200).json({ status: 200, data: user, message: "ChangePassword Succesfully" })
    } catch (error) {
        
    }
}
module.exports = {
    register,
    login,
    profile,
    changePassword
  }
  