'use strict';
const api = require('express').Router();
const Sequelize = require('sequelize');
const User = Sequelize.Model.User;
const Campuses = Sequelize.Model.Campuses;
// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!

 api.get('/campuses', (req, res, next) => {
  Campuses.findAll()
  .then(foundCampuses => res.send({campuses: foundCampuses}))
  .catch(next);
});

api.get('/students', (req, res, next) => {
  User.findAll()
  .then(foundStudents => res.send({students: foundStudents}))
  .catch(next);
});

api.get('/hello', (req, res) => res.send({hello: 'world'}));

module.exports = api;
