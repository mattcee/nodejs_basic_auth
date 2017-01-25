// app/models/user.js
var bookshelf = require('../.././config/database');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var User = bookshelf.Model.extend({
  tableName: 'users',

  validPassword: function(password) {
    return bcrypt.compareSync(password, this.local.password);
  },
}, { //static methods
  generateHash: function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  },
});

// create the model for users and expose it to our app
module.exports = bookshelf.model('User', User);