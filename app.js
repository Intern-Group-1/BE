const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const dotenv = require('dotenv')
const Router = require('./src/routers/api')
dotenv.config()
const app = express()
const cors = require('cors')
var db = process.env.MONGO
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected!'))
  .catch((err) => console.log(err))
  app.use(cors({origin:"*", credentials:true}))
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods","*")
    res.header("Access-Control-Allow-Headers","Content-Type")
    next();
});
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(bodyParser.json())
app.use('/api', Router)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    
  console.log(`Server is running on port ${PORT}`);
});