const Repository = require('../repository/Relationship');

const createRelation = async (params) => {
    try {
        const relationship = await Repository.createRelation(params);
        return relationship;
    } catch (error) {
        console.log(error);
    }
}

const getRoomByBranchId = async() => {
    try {
        const result = await Repository.getRoomByBranchId();
        return result;
    } catch (error) {
        console.log(error)
    }
};

module.exports = {
    createRelation,
    getRoomByBranchId
}