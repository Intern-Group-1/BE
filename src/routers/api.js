const express = require('express')
const router = express.Router()
const ControllerAccount = require('../controllers/Account')
const ControllerDoctor = require('../controllers/Doctor')
const ControllerUser = require('../controllers/User')
const ControllerAssistant = require('../controllers/Assistant')
const Uploads = require('../controllers/Uploads')
const News = require('../controllers/News')
const Branch = require('../controllers/Branch')
const Room = require('../controllers/Room')
const Relationship = require('../controllers/Relationship')
const Authorization = require('../utils/authorization')
const auth = require('../middlewares/auth')
const VerifySignUp = require('../middlewares/verifySignUp')
const req = require('express/lib/request')
const multer = require('multer');
const upload = multer();

//account
router.post('/register', VerifySignUp.checkDuplicateUsernameOrEmail,ControllerAccount.register)
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
router.post('/create-assistant', auth, Authorization.roleAuthorization(['assistant','admin']), Uploads.upload, ControllerAssistant.createAssistant)
router.put('/update-assistant/:id', auth, Authorization.roleAuthorization(['assistant','admin']), Uploads.upload, ControllerAssistant.updateAssistant)
router.delete('/delete-assistant/:id', auth, Authorization.roleAuthorization(['assistant','admin']), ControllerAssistant.deleteAssistant)
router.get('/get-all-assistant', auth, Authorization.roleAuthorization(['assistant','admin']), ControllerAssistant.getAllAssistant)
router.get('/get-id-assistant/:id', auth, Authorization.roleAuthorization(['assistant','admin']), ControllerAssistant.getAssistantById)

//News
router.post('/create-news', Uploads.upload, News.CreateNews);
router.put('/update-news/:id',News.UpdateNews);
router.delete('/delete-news/:id', News.DeleteNews);
router.get('/get-id-news/:id', News.GetNewsById);
router.get('/get-all-news', News.getAllNews);


//Branch
router.post('/create-branch', Branch.createBranch);
router.put('/update-branch/:id', Branch.updateBranch);
router.delete('/delete-branch/:id', Branch.deleteBranch);
router.get('/get-id-branch/:id', Branch.getBranchById);
router.get('/get-all-branch', Branch.getAllBranch);


//Room
router.post('/create-room', Room.createRoom);
router.put('/update-room/:id', Room.updateRoom);
router.delete('/delete-room/:id', Room.deleteRoom);


// RelationshipBR
router.post('/create-relationship', Relationship.createRelation);
router.get('/get-room-by-branch-id', Relationship.getRoomByBranchId);

router.put('/change-password', auth, Authorization.roleAuthorization(['customer', 'admin']), ControllerAccount.changePassword)
//Search
router.get('/search-doctor',ControllerUser.SearchDoctor)

module.exports = upload
module.exports = router

