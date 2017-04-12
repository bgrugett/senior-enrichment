'use strict';
const api = require('express').Router();
const db = require('../db');
const User = db.models.user;
const Campus = db.models.campus;
// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!

 api.get('/campuses', (req, res, next) => {
  Campus.findAll()
  .then(foundCampuses => res.send(foundCampuses))
  .catch(next);
});

api.post('/campuses/add', (req, res, next) => {
  console.log('campus post req.body ', req.body);
  Campus.create(req.body)
  .then(addedCampus => res.send(addedCampus))
  .catch(next);
});

api.get('/students', (req, res, next) => {
  User.findAll({
    include: [ Campus ]
  })
  .then(foundStudents => res.send(foundStudents))
  .catch(next);
});

api.post('/students/add', (req, res, next) => {
  User.create(req.body)
  .then(addedStudent => res.send(addedStudent))
  .catch(next);
});

api.delete('/students/delete/:id', (req, res, next) => {
  console.log('req.body in delete ', req.body);
  console.log('req.params in delete ', req.params);
  User.destroy({
    where: {
      id: +req.params.id
    }
  })
  .then( (deletedStudent) => res.json(deletedStudent))
  .catch(next);
});
module.exports = api;
