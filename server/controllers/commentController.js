const Comment = require('../models/comment')

class ControllerComment{
    static read(req, res, next){}

    static create(req, res, next){
        let newComment= {
            postId: req.params.id,  // Get postId from :id
            comments:req.body.comment, // Get comment from body
            userId: req.decode.id // Get UserId from token 
        }
        console.log(newComment)

        Comment.create(newComment)
        .then(data =>{
            res.status(201).json(data)
        })
        .catch(next)
    }

    static findAll(req, res, next){
        Comment.find({postId: req.params.id})
        .then(post => {
            res.status(200).json(post)
        })
        .catch(next)
    }

    static delete(req, res, next){
        Comment.deleteOne({_id: req.params.commentId})
        .then(post => {
            res.status(200).json(post)
        })
        .catch(next)
    }
}

module.exports = ControllerComment