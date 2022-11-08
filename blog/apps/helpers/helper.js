var bcrypt = require('bcrypt')

var config = require('config')

function hash_password(password){
    var saltRound = config.get("salt")

    var salt = bcrypt.genSaltSync(saltRound)
    var has = bcrypt.hashSync(password,salt)

    return has
}

function compare_password(password, hash){
    return bcrypt.compare(password, hash, function(err, result) {
        // result == true
    });
}
module.exports = {
    hash_password: hash_password,
    compare_password: compare_password
}