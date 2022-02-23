const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const dotenv = require('dotenv')
const Router = require('./src/routers/api')
const Role = require('./src/models/Account');
dotenv.config()
const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

var db = process.env.MONGO
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {console.log('MongoDB connected!'); initial()})
  .catch((err) => console.log(err))
  function initial() {
    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        new Role({
          role: {enum:"customer"}
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
          console.log("added 'customer' to roles collection");
        });
        new Role({
          role: {enum:"doctor"}
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
          console.log("added 'doctor' to roles collection");
        });
        new Role({
          role: {enum:"admin"}
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
          console.log("added 'admin' to roles collection");
        });
        new Role({
          role: {enum: "assistant"}
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
          console.log("added 'assistant' to roles collection");
        });
      }
    });
  }
app.use('/api', Router)
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    
  console.log(`Server is running on port ${PORT}`);
});