const Relationship = require('../services/Relationship');

const createRelation = async (req, res) => {
    try {
        const relationship = await Relationship.createRelation({
            branch: req.body.branch,
            room: req.body.room
        });
        if(!relationship){
            res.status(400).json('Create not relationship');
        }
        return res.status(200).json(relationship);
    } catch (error) {
        console.error(error);
    }
};

const getRoomByBranchId = async(req, res) => {
    try {
        const id = req.body.branch;
        console.log(id);
        const relationship = await Relationship.getRoomByBranchId();
        console.log(relationship);
        if(!relationship){
            res.status(400).json('get count not relationship');
        }
        return res.status(200).json(relationship);
    
    } catch (error) {
        console.log(error)
    }
};

module.exports = {
    createRelation,
    getRoomByBranchId
}