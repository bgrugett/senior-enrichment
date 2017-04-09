'use strict';
var Sequelize = require('sequelize');
var db = require('../index.js');

const Campuses = db.define('campuses', {
  name: Sequelize.STRING,
  planet: Sequelize.STRING
});
console.log('~~in models Campuses');
module.exports = Campuses;
