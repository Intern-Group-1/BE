const Repository = require('../repository/News');

const CreateNews = async (params) => {
    try {
        const news = await Repository.CreateNews(params)
        return news
    } catch (error) {
        console.log(error)
    }
   
}

const UpdateNews = async (id, params) => {
    try {
        const news = await Repository.UpdateNews(id, params)
        return news
    } catch (error) {
        console.log(error)
    }
}

const DeleteNews = async (id) => {
    try {
        const news = await Repository.DeleteNews(id)
        return news
    } catch (error) {
        console.log(error)
    }
}

const GetNewsById = async (id) => {
    try {
        const news = await Repository.GetNewsById(id)
        return news
    } catch (error) {
        console.log(error)
    }
    
}

const getAllNews = async () => {
    try {
        const news = await Repository.getAllNews()
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
}