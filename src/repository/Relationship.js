const Relationship = require('../models/Relationship');

const createRelation = async (params) => {
    try {
        const relationship = await Relationship(params);
        await relationship.save();
        const id = relationship._id;
        const result = await Relationship.find({_id:id}).
        populate({
            path: 'branch', 
            select: {name_branch: 1, address: 1}
        }).populate({
            path: 'room',
            select: {name_room: 1, address: 1}
        });
        return result;
    } catch (error) {
        console.log(error);
    }
} 

const getRoomByBranchId = async() => {
    try {
      //  const id = Relationship.branch;
      //  const id = await Relationship.findOne({branch: id});
        const result = await Relationship.find().populate({
            path: 'room',
            ref: 'room',
            localField: '_id',
            foreignField: 'branch',
        }).count();
        return result;
    } catch (error) {
        console.log(error)
    }
};

module.exports = {
    createRelation,
    getRoomByBranchId
}