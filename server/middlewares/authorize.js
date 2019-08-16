const Post= require('../models/post')


module.exports={
     authorizationPost(req, res, next){
        console.log('masuk authorize')
        Post.findById(req.params.postId)
        .then(post=>{
            if(!post){
                res.status(404).json('Not found')
            }else{
                if(req.decode.id == post.userId){
                    next()
                }else{
                    res.status(403).json('Not Authorized')
                }
            }
        })
        .catch(next)
    },

}

