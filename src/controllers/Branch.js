const Branch = require('../services/Branch');

const createBranch = async (req, res) => {
    try {
        const branch = await Branch.createBranch({
            name_branch: req.body.name_branch,
            address: req.body.address,
            totalRoom: req.body.totalRoom
        });
        if(!branch){
            res.status(400).json("Created not branch!");
        }
        return res.status(200).json(branch);
    } catch (error) {
        console.error(error);
    }
};

const updateBranch = async (req, res) => {
    try {
        const branch = await Branch.updateBranch(req.params.id, req.body);
        if(!branch){
            res.status(400).json("Update not branch!");
        }
        return res.status(200).json(branch);
    } catch (error) {
        console.log(error);
    }
}

const deleteBranch = async (req, res) => {
    try {
        const branch = await Branch.deleteBranch(req.params.id);
        if(!branch){
            res.status(400).json("Delete not branch!");
        }
        return res.status(200).json(branch);
    } catch (error) {
        console.log(error);
    }
}

const getBranchById = async (req, res) =>{
    try {
        const branch = await Branch.getBranchById(req.params.id);
        if(!branch){
            res.status(400).json("find not branch!");
        }
        return res.status(200).json(branch);
    } catch (error) {
        console.log(error);
    }
}

const getAllBranch = async (req,res) => {
    try {
        const branch = await Branch.getAllBranch();
        if(!branch){
            res.status(400).json("find all not branch!");
        }
        return res.status(200).json(branch);
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