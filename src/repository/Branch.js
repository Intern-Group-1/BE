const Branch = require('../models/Branch')

const createBranch = async (params) => {
    try {
        const branch = await Branch(params)
        await branch.save()
        return branch
    } catch (error) {
        console.error(error)
    }
}

const updateBranch = async (id, params) => {
    try {
        const branch = await Branch.findByIdAndUpdate(id, params)
        return branch
    } catch (error) {
        console.log(error)
    }
}

const deleteBranch = async (id) => {
    try {
        const branch = await Branch.findByIdAndDelete(id)
        return branch
    } catch (error) {
        console.log(error)
    }
}

const getBranchById = async (id) =>{
    try {
        const branch = await Branch.findOne({_id: id})
        return branch
    } catch (error) {
        console.log(error)
    }
}

const getAllBranch = async () => {
    try {
        const branch = await Branch.find({})
        return branch
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createBranch,
    updateBranch,
    deleteBranch,
    getBranchById,
    getAllBranch
}