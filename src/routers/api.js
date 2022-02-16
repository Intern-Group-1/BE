const express = require('express')
const router = express.Router()
const ControllerAccount = require('../controllers/Account')
const ControllerDoctor = require('../controllers/Doctor')
const ControllerUser = require('../controllers/User')
const ControllerAssistant = require('../controllers/Assistant')
const ControllerUploads = require('../controllers/Uploads')
const News = require('../controllers/News')
const Authorization = require('../utils/authorization')
const auth = require('../middlewares/auth')
const req = require('express/lib/request')
const multer = require('multer');
const upload = multer();

//account
router.post('/register', ControllerAccount.register)
router.post('/login',ControllerAccount.login)
router.get('/profile', auth, ControllerAccount.profile)

//doctor
router.post('/create-doctor',auth, Authorization.roleAuthorization(['doctor','admin']),ControllerDoctor.createDoctor)
router.put('/update-doctor/:id',Authorization.roleAuthorization(['doctor','admin']), ControllerDoctor.updateDoctor)
router.delete('/delete-doctor/:id',Authorization.roleAuthorization(['doctor','admin']),ControllerDoctor.deleteDoctor)
router.get('/profile-doctor', auth, Authorization.roleAuthorization(['doctor','admin']), ControllerDoctor.getDoctorById)
router.get('/get-all-doctor', ControllerDoctor.getAllDoctor)
// User
router.post('/create-user',auth, Authorization.roleAuthorization(['customer','admin']),ControllerUser.createUser)
router.put('/update-user/:id',auth, Authorization.roleAuthorization(['customer','admin']), ControllerUser.updateUser)
router.delete('/delete-user/:id',auth,Authorization.roleAuthorization(['customer','admin']),ControllerUser.deleteUser)
router.get('/profile-user', auth, Authorization.roleAuthorization(['customer','admin']), ControllerUser.getUserById)
router.get('/get-all-user', ControllerUser.getAllUser)

//Assistant
router.post('/create-assistant', auth, Authorization.roleAuthorization(['assistant','admin']), ControllerUploads.upload, ControllerAssistant.createAssistant)
router.put('/update-assistant/:id', auth, Authorization.roleAuthorization(['assistant','admin']), ControllerUploads.upload, ControllerAssistant.updateAssistant)
router.delete('/delete-assistant/:id', auth, Authorization.roleAuthorization(['assistant','admin']), ControllerAssistant.deleteAssistant)
router.get('/get-all-assistant', auth, Authorization.roleAuthorization(['assistant','admin']), ControllerAssistant.getAllAssistant)
router.get('/get-id-assistant/:id', auth, Authorization.roleAuthorization(['assistant','admin']), ControllerAssistant.getAssistantById)

//News
router.post('/create-news', auth,News.upload, News.CreateNews);
router.put('/update-news/:id', auth, News.upload, News.UpdateNews);
router.delete('/delete-news/:id', News.DeleteNews);
router.get('/get-id-news/:id', News.GetNewsById);
router.get('/get-all-news', News.getAllNews);


router.put('/change-password', auth, Authorization.roleAuthorization(['customer', 'admin']), ControllerAccount.changePassword)
//Search
router.get('/search-doctor',ControllerUser.SearchDoctor)

module.exports = upload
module.exports = router

