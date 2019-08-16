const router= require('express').Router()
const userRoute= require('./user')
const postRoute= require('./post')
const commentRoute = require('./comment')

router.use('/users', userRoute)
router.use('/posts', postRoute)
router.use('/comment', commentRoute)

module.exports= router
