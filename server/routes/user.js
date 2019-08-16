const router= require('express').Router()
const userController= require('../controllers/userController')
const commentController = require('../controllers/commentController')
const { authentication } = require('../middlewares/authenticate');
const { authorization } = require('../middlewares/authorize');
const { multer, sendUploadToGCS, getPublicUrl } = require('../helpers/image');

router.post('/login', userController.login)
router.post('/register', userController.register)
router.patch('/update', authentication, multer.single('profilePic'), sendUploadToGCS, userController.update)
router.get('/', authentication, userController.findOne)

module.exports = router
