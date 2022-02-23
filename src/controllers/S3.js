const AWS = require("aws-sdk");
require('dotenv').config()
AWS.config.update({
  secretAccessKey: process.env.AWS_ACCESS_SECRET,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  region: process.env.AWS_REGION,
});
var s3 = new AWS.S3();
console.log(process.env.AWS_BUCKET)
const handleFileUpload = (req, res) => {
  const { originalname, buffer } = req.file;
  let params = {
    Bucket: process.env.AWS_BUCKET,
    Key: originalname,
    Body: buffer,
  };
  s3.upload(params, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Failed to upload",
        error: err.message,
      });
    }
    return res.status(201).json({
      result,
    });
  });
};
module.exports = {
  handleFileUpload
};