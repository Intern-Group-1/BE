// const multer = require('multer');

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, '../uploads');
//       },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname);
//     }
// });



// const upload = multer({
//     storage: storage,
//     limits:{
//         fileSize: 1024*1024*10
//     },
//     fileFilter:fileFilter
// }).single('image');

// module.exports = {
//     upload: upload
// }

const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const dotenv = require('dotenv');
dotenv.config()


aws.config.update({
    secretAccessKey: process.env.AWS_SECRET_KEY,
    accessKeyId:process.env.AWS_ACCESS_KEY,
    region:process.env.AWS_BUCKET_REGION
})


const s3 = new aws.S3();

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
        cb(null, true);
    }else{
        cb(new Error('Error'), false);
    }
}

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.originalname});
    },
    destination: function (req, file, cb) {
                 cb(null, './src/uploads');
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    },
    fileFilter:fileFilter
  })
}).single('image');

module.exports = {
    upload: upload
}
