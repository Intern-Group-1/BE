const Account = require('../models/Account')
const bcrypt = require('bcryptjs')
async function register (params) {
  try {
    const account = new Account(params)
    await account.generateAuthToken()
    await account.save()
    return account
  } catch (error) {
    console.log(error)
  }
}
async function login(email, password) {
  try{
    const account = await Account.findByCredentials(email, password)
    if(!account) {
      return new Error("Login Fails!")
    }
    return account
  }
  catch(error)
  {
    console.log(error)
  }
}

async function changePassword(id, password){
  try {
    const pass= await bcrypt.hash(password, 8) 
    
    const user = await Account.findByIdAndUpdate({_id:id},{password:pass}, {new:true})
    return user
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  register,
  login,
  changePassword,
}
