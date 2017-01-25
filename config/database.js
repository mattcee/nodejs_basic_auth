'use strict';

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : '127.0.0.1',
    port     : '3306',
    user     : 'root',
    password : '',
    database : 'nodejs_basic_auth',
    charset  : 'utf8'
  }
});

var bookshelf = require('bookshelf')(knex);
bookshelf.plugin('registry');

module.exports = bookshelf;