const Repository = require('../repository/Branch');

const createBranch = async (params) => {
    try {
        const branch = await Repository.createBranch(params);
        return branch;
    } catch (error) {
        console.error(error);
    }
};

const updateBranch = async (id, params) => {
    try {
        const branch = await Repository.updateBranch(id, params);
        return branch;
    } catch (error) {
        console.log(error);
    }
}

const deleteBranch = async (id) => {
    try {
        const branch = await Repository.deleteBranch(id);
        return branch;
    } catch (error) {
        console.log(error);
    }
}

const getBranchById = async (id) =>{
    try {
        const branch = await Repository.getBranchById(id);
        return branch;
    } catch (error) {
        console.log(error);
    }
}

const getAllBranch = async () => {
    try {
        const branch = await Repository.getAllBranch();
        return branch;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createBranch,
    updateBranch,
    deleteBranch,
    getBranchById,
    getAllBranch
}