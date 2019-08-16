const Post = require('../models/post')
const User = require('../models/user')

module.exports = {
    authorizationPost(req, res, next) {
        console.log('masuk authorize')
        Post.findById(req.params.postId)
            .then(post => {
                if (!post) {
                    res.status(404).json('Not found')
                } else {
                    if (req.decode.id == post.userId) {
                        next()
                    } else {
                        res.status(403).json('Not Authorized')
                    }
                }
            })
            .catch(next)
    },
    authorizationDeletePost(req, res, next) {
        User.findById(req.params.userId)
            .then(user => {
                if (!user) {
                    res.status(404).json('Not found')
                } else {
                    if (req.decode.id == user.userId) {
                        next()
                    } else {
                        res.status(403).json('You cannot delete this comment')
                    }
                }
            })
    }
}

