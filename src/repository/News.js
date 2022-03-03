const News = require('../models/News')
const CreateNews = async (params) => {
    try {
        const news = await News(params)
        news.save();
        return news;
    } catch (error) {
        console.log(error)
    }
}
const UpdateNews = async (id, params) => {
    try {
        const news = await News.findByIdAndUpdate(id, params);
        return news;
    } catch (error) {
        console.log(error)
    }
}

const DeleteNews = async (id) => {
    try {
        const news = await News.findByIdAndDelete(id)
        return news;
    } catch (error) {
        console.log(error)
    }
}

const GetNewsById = async (id) => {
    try {
        const news = await News.findOne({_id: id})
        return news
    } catch (error) {
        console.log(error)
    }
    
}

const getAllNews = async () => {
    try {
        const news = await News.find({})
        return news
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    CreateNews,
    UpdateNews,
    DeleteNews,
    GetNewsById,
    getAllNews
};