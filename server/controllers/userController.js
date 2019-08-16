const User = require('../models/user')
const { generateToken } = require('../helpers/jwt')
const { compare } = require('../helpers/bcrypt')

class userController {

    static register(req, res, next) {
        console.log('masuk regis');
        let newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })

        newUser.save()
            .then(user => {
                res.status(201).json(user)
            })
            .catch(next)
    }

    static login(req, res, next) {
        User.findOne({
                email: req.body.email
            })
            .then(user => {
                console.log(user)
                if (user) {
                    if (compare(req.body.password, user.password)) {
                        let payload = {
                            id: user._id,
                            email: user.email,
                            username: user.username
                        }

                        let token = generateToken(payload)

                        res.status(200).json({
                            token,
                            userId: user._id,
                            username: user.username
                        })
                    } else {
                        throw {
                            code: 404,
                            message: 'Wrong Email/Password'
                        }
                    }
                } else {
                    throw {
                        code: 404,
                        message: 'Wrong Email/Password'
                    }
                }
            })
            .catch(next)
    }

    static update(req, res, next){
        console.log(req.decode);
        console.log(req.file);
        console.log(req.body);
        User.updateOne({
            _id: req.decode.id
        },{
            bio: req.body.bio,
            profilePic: req.file.cloudStoragePublicUrl
        })
        .then(response => {
            res.status(200).json(response)
        })
        .catch(next)
    }
}

module.exports = userController