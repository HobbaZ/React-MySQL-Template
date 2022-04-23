const bcrypt = require('bcrypt');
const sql = require('../config/connection');

const User = function(user) {
    this.username = user.username;
    this.firstname = user.firstname;
    this.lastname = user.lastname;
    this.email = user.email;
    this.password = user.password;
};

User.create = (newUser, result) => {
    sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
        if (err) {
            console.log("error", err);
            return;
        }
        console.log("user created: ", {...newUser})
    })
}

module.exports = User;