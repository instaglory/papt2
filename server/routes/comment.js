const router = require('express').Router()
const commentController= require('../controllers/commentController')
const {authentication}= require('../middlewares/authenticate')
const {authorizationDeletePost}= require('../middlewares/authorize')

router.get('/:id', authentication, commentController.findAll)
router.post('/:id', authentication, commentController.create)
router.delete('/:id/:commentId', authentication, authorizationDeletePost, commentController.delete)

module.exports = router