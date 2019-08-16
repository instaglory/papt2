const router= require('express').Router()
const userController= require('../controllers/userController')
const commentController= require('../controllers/commentController')

router.post('/login', userController.login)
router.post('/register', userController.register)

module.exports=router
