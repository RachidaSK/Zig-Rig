const db = require("../models");

// Defining methods for the loadTemplateController
module.exports = {
  findAll: function(req, res) {
    db.LoadTemplate
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    },
  findById: function(req, res) {
    db.LoadTemplate
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    },
  create: function(req, res) {
    db.LoadTemplate
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    },
  update: function(req, res) {
    db.LoadTemplate
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    },
  remove: function(req, res) {
    db.LoadTemplate
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    }
  };