const mongoose = require('mongoose')
const Schema = mongoose.Schema

let commentSchema= new Schema({
    comment:{
        type: String,
        maxlength: 100
    },
    postId:{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    },
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
})

let Comment= new mongoose.model('Comment', commentSchema)

module.exports= Comment