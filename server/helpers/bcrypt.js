const bcrypt = require('bcrypt')

module.exports = {
    hash: function(password){
        return bcrypt.hashSync(password,10)
    },
    compare : function(password,hash) {
        console.log(password, hash)
        return bcrypt.compareSync(password,hash)
    }
}