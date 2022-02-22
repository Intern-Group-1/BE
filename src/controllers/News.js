const News = require('../services/News');
const multer = require('multer');
const uploads = require('./Uploads');
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './src/uploads');
//       },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname);
//     }
// });

// const fileFilter = (req, file, cb) => {
//     if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
//         cb(null, true);
//     }else{
//         cb(new Error('Error'), false);
//     }
// }


//const upload = uploads.upload;

const CreateNews = async (req, res) => {
    try {
        const news = await News.CreateNews({
            title: req.body.title,
            content: req.body.content,
            image: req.file.originalname,
        });
        if(!news){
            res.status(400).json("Created not news!");
        }
        return res.status(200).json(news);
    } catch (error) {
        console.log(error);
    }
}

const UpdateNews = async (req, res) => {
    try {
        const body = req.body;
        const news = await News.UpdateNews(req.params.id, body);
        if(!news){
            res.status(400).json("update not news!");
        }
        return res.status(200).json(news);
    } catch (error) {
        console.log(error);
    }
}

const DeleteNews = async (req, res) => {
    try {
        const news = await News.DeleteNews(req.params.id);
        if(!news){
            res.status(400).json("delete not news!");
        }
        return res.status(200).json(news);
    } catch (error) {
        console.log(error);
    }
}

const GetNewsById = async (req, res) => {
    try {
        const news = await News.GetNewsById(req.params.id);
        if(!news){
            res.status(400).json("find not news!");
        }
        return res.status(200).json(news);
    } catch (error) {
        console.log(error);
    }
    
}

const getAllNews = async (req, res) => {
    try {
        const news = await News.getAllNews();
        if(!news){
            res.status(400).json("find all not news!");
        }
        return res.status(200).json(news);
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    CreateNews,
    UpdateNews,
    DeleteNews,
    GetNewsById,
    getAllNews,
  //  upload
}