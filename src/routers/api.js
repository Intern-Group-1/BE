const express = require('express')
const router = express.Router()
const ControllerAccount = require('../controllers/Account')
const ControllerDoctor = require('../controllers/Doctor')
const ControllerUser = require('../controllers/User')
const Authorization = require('../utils/authorization')
const auth = require('../middlewares/auth')
const multer = require('multer') 
const AWS = require("aws-sdk")
var multerS3 = require('multer-s3')
const appController = require("../controllers/S3");
// const upload = multer();
AWS.config.update({
    secretAccessKey: process.env.AWS_ACCESS_SECRET,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    region: process.env.AWS_REGION,
  })
var s3 = new AWS.S3()  
const upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: process.env.AWS_BUCKET,
      key: async function (req, file, cb) {
        // console.log(file);
        let date = await Date.now();
        cb(null, date + file.originalname); //use Date.now() for unique file keys
      },
    }),
  });
router.post('/register', ControllerAccount.register)
router.post('/login',ControllerAccount.login)
router.get('/profile', auth, ControllerAccount.profile)
//doctor
router.post('/create-doctor',upload.single("file"),auth, Authorization.roleAuthorization(['doctor','admin']),ControllerDoctor.createDoctor)
router.put('/update-doctor/:id',auth,upload.single("file"),Authorization.roleAuthorization(['doctor','admin']), ControllerDoctor.updateDoctor)
router.delete('/delete-doctor/:id',auth,Authorization.roleAuthorization(['doctor','admin']),ControllerDoctor.deleteDoctor)
router.get('/profile-doctor/:id',  ControllerDoctor.getDoctorById)
router.get('/get-all-doctor', ControllerDoctor.getAllDoctor)
router.get('/doctor-count',ControllerDoctor.StatisticsDoctor)
router.get('/search-user', ControllerDoctor.SearchUser)
router.get('/get-speciality', ControllerDoctor.GetSpeciality)
// Speciality
const Speciality = require('../controllers/Speciality')
router.post('/create-speciality',upload.single("file") ,Speciality.createSpeciality)
router.put('/update-speciality/:id',upload.single("file") ,Speciality.updateSpeciality)
router.delete('/delete-speciality/:id', Speciality.deleteSpeciality)
router.get('/get-all-speciality',Speciality.getAllSpeciality)
router.get('/get-by-speciality/:id', Speciality.getBySpeciality)
// User 
router.post('/create-user',auth,Authorization.roleAuthorization(['customer','admin']),upload.single("file"),ControllerUser.createUser)
router.put('/update-user/:id',auth,upload.single("file") ,Authorization.roleAuthorization(['customer','admin']), ControllerUser.updateUser)
router.delete('/delete-user/:id',auth,Authorization.roleAuthorization(['customer','admin']),ControllerUser.deleteUser)
router.get('/profile-user', auth, Authorization.roleAuthorization(['customer']), ControllerUser.getUserById)
router.get('/get-by-id/:id', auth, Authorization.roleAuthorization(['admin']), ControllerUser.getUserByIdAdmin)
router.get('/get-all-user', ControllerUser.getAllUser)

router.get('/user-count',ControllerUser.StatisticsUser)
router.put('/change-password', auth, Authorization.roleAuthorization(['customer', 'admin']), ControllerAccount.changePassword)
//Search
router.get('/search-doctor',ControllerUser.SearchDoctor)
//Schedule
const Schedule = require('../controllers/Schedule')
router.post('/create-schedule',auth, Authorization.roleAuthorization(['doctor','admin']),Schedule.CreateSchedule)
router.get('/get-by-schedule', auth, Authorization.roleAuthorization(['doctor','admin']), Schedule.getScheduleId)
router.get('/get-all-schedule',  Schedule.getAllSchedule)
router.put('/update-schedule/:id', auth, Authorization.roleAuthorization(['doctor', 'admin']), Schedule.updateSchedule)
router.delete('/delete-schedule/:id', auth, Authorization.roleAuthorization(['doctor','admin']), Schedule.deleteSchedule)
// Appointment
const Appointment = require('../controllers/Appointment')
router.post('/create-appointment',upload.single("file"),Appointment.createAppointment)
router.put('/update-appointment/:id',upload.single("file"),Appointment.updateAppointment)
router.delete('/delete-appointment/:id',Appointment.deleteAppointment)
router.get('/get-all-appointment',Appointment.getAppointmentAll)
router.get('/get-appointment-byuser/:id', upload.single("file"),Appointment.getAppointmentByUser)
router.get('/get-appointment-by-doctor/:id', upload.single("file"),Appointment.getAppointmentByDoctor)
router.get('/get-appointment-id/:id', Appointment.getAppointmentId)
router.get('/get-status',upload.single("file") ,Appointment.NotApprovedYet)
router.get('/get-false', Appointment.GetNotApprovedYet)


router.get('/sum-waiting', Appointment.SumWaiting)
router.get('/sum-approved', Appointment.SumApproved)
router.get('/sum-cancel', Appointment.SumCancel)
// Feedback
const Feedback = require('../controllers/Feedback')
router.get('/get-all-feedback', Feedback.getFeedbackAll)
router.get('/get-by-appointment/:id', Feedback.getFeedbackByApp)
router.post('/create-feedback', Feedback.createFeedback)
router.put('/update-feedback/:id',Feedback.updateFeedback)
router.delete('/delete-feedback/:id',Feedback.deleteFeedback)

console.log(upload.single("avatar"))
//Assistant ok
const ControllerAssistant = require('../controllers/Assistant')
router.post('/create-assistant', auth,upload.single("file"),Authorization.roleAuthorization(['assistant','admin']),ControllerAssistant.createAssistant)
router.put('/update-assistant/:id',auth,upload.single("file"),Authorization.roleAuthorization(['assistant','admin']), ControllerAssistant.updateAssistant)
router.delete('/delete-assistant/:id', auth, Authorization.roleAuthorization(['assistant','admin']), ControllerAssistant.deleteAssistant)
router.get('/get-all-assistant', ControllerAssistant.getAllAssistant)
router.get('/get-id-assistant/:id', ControllerAssistant.getAssistantById)
// auth, Authorization.roleAuthorization(['admin'])
// auth, Authorization.roleAuthorization(['assistant','admin']),
//Branch oke
const Branch = require('../controllers/Branch')
router.post('/create-branch',upload.single("file"), Branch.createBranch)
router.put('/update-branch/:id',upload.single("file") ,Branch.updateBranch)
router.delete('/delete-branch/:id', Branch.deleteBranch)
router.get('/get-id-branch/:id', Branch.getBranchById)
router.get('/get-all-branch', Branch.getAllBranch)
// 
const Relationship = require('../controllers/Relationship')
router.post('/create-relationship', Relationship.createRelation)
router.get('/get-room-by-branch-id', Relationship.getRoomByBranchId)

//Room ok
const Room = require('../controllers/Room')
router.post('/create-room', Room.createRoom)
router.put('/update-room/:id', Room.updateRoom)
router.delete('/delete-room/:id', Room.deleteRoom)

//News
const News = require('../controllers/News')
router.post('/create-news', News.CreateNews)
router.put('/update-news/:id',News.UpdateNews)
router.delete('/delete-news/:id', News.DeleteNews)
router.get('/get-id-news/:id', News.GetNewsById)
router.get('/get-all-news', News.getAllNews)

var nodemailer = require('nodemailer');


router.post("/send-mail", async (req, res) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'quocphan20111999@gmail.com',
      pass: 'dghonokbbetkcinj'
    }
  });

  var mailOptions = {
    from: 'quocphan20111999@gmail.com',
    to: req.body.email,
    subject: 'Doctor Care',
    text: req.body.text
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});

module.exports = router
  