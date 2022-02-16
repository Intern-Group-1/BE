const mongoose =require('mongoose')

const NewsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    image:{
        type: String,
        default: ""
    },
    
},{timestamps: true});

module.exports = mongoose.model('News', NewsSchema);