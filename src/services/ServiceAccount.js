const Repository = require('../repository/Account')

async function register (params){
    try{

        const account =await Repository.register(params)
        return account
    }
    catch(error)
    {
        throw Error('Register Fails!')
    }
    
}
async function login(email, password) {
    try {
        const account = await Repository.login(email, password)
        return account
    } catch (error) {
        console.log(error)
    }
}
async function changePassword(id, password){
    try {
        const user = await Repository.changePassword(id, password)
        return user
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    register,
    login,
    changePassword
  }
  