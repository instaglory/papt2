const router= require('express').Router()
const userRoute= require('./user')
const postRoute= require('./post')

router.use('/users', userRoute)
router.use('/posts', postRoute)

module.exports= router
