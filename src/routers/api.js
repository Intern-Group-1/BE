const express = require('express')
const router = express.Router()
const ControllerAccount = require('../controllers/Account')
const ControllerDoctor = require('../controllers/Doctor')
const ControllerUser = require('../controllers/User')
const Authorization = require('../utils/authorization')
const auth = require('../middlewares/auth')
//account
router.post('/register', ControllerAccount.register)
router.post('/login',ControllerAccount.login)
router.get('/profile', auth, ControllerAccount.profile)

//doctor
router.post('/create-doctor',auth, Authorization.roleAuthorization(['doctor','admin']),ControllerDoctor.createDoctor)
router.put('/update-doctor/:id',auth,Authorization.roleAuthorization(['doctor','admin']), ControllerDoctor.updateDoctor)
router.delete('/delete-doctor/:id',auth,Authorization.roleAuthorization(['doctor','admin']),ControllerDoctor.deleteDoctor)
router.get('/profile-doctor', auth, Authorization.roleAuthorization(['doctor','admin']), ControllerDoctor.getDoctorById)
router.get('/get-all-doctor', ControllerDoctor.getAllDoctor)
// User
router.post('/create-user',auth, Authorization.roleAuthorization(['customer','admin']),ControllerUser.createUser)
router.put('/update-user/:id',auth, Authorization.roleAuthorization(['customer','admin']), ControllerUser.updateUser)
router.delete('/delete-user/:id',auth,Authorization.roleAuthorization(['customer','admin']),ControllerUser.deleteUser)
router.get('/profile-user', auth, Authorization.roleAuthorization(['customer','admin']), ControllerUser.getUserById)
router.get('/get-all-user', ControllerUser.getAllUser)

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
router.post('/create-appointment', Appointment.createAppointment)
router.put('/update-appointment/:id', Appointment.updateAppointment)
router.delete('/delete-appointment/:id',Appointment.deleteAppointment)
router.get('/get-all-appointment', Appointment.getAppointmentAll)
router.get('/get-appointment-id/:id', Appointment.getAppointmentId)

// Feedback
const Feedback = require('../controllers/Feedback')
router.get('/get-all-feedback', Feedback.getFeedbackAll)
router.get('/get-by-appointment/:id', Feedback.getFeedbackByApp)
router.post('/create-feedback', Feedback.createFeedback)
router.put('/update-feedback/:id', Feedback.updateFeedback)
router.delete('/delete-feedback/:id', Feedback.deleteFeedback)
module.exports = router
