const router = require('express').Router()
const commentController= require('../controllers/commentController')
const {authentication}= require('../middlewares/authenticate')
const {authorizationDeletePost}= require('../middlewares/authorize')

router.post('/comment', authentication, commentController.create)
router.post('/', authentication, authorizationDeletePost, commentController.delete)

module.exports = router