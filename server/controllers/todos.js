const Todos = require('../models').todo;
// import {
//     todo as Todo
// } from '../models';

module.exports = {
  create(req, res) {
    return Todos
      .create({
        title: req.body.title,
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },
};