/**
 * @description: Here we defined all the controller of the perosn routes means once we go to that route how our function behaves
 */

const mongoose = require("mongoose");
const Person = require("../models/Person");

//Creating a Person
exports.create = (req, res) => {
  const person = new Person({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    city: req.body.city,
    country: req.body.country,
  });
  person
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Created person data successfully.......",
        createdPerson: result,
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

//Geting all the Persons
exports.findAll = (req, res) => {
  const query = req.query;
  Person.find(query)
    .select("_id name city country")
    .exec()
    .then((results) => {
      const response = {
        count: results.length,
        Persons: results,
      };
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

//finding Person with Id
exports.findOne = (req, res) => {
  const id = req.params.personId;
  Person.findById(id)
    .select("_id name city country")
    .exec()
    .then((result) => {
      console.log(result);
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({ message: "No Valid entry found.." });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

//delete Person with given id
exports.delete = (req, res) => {
  const id = req.params.personId;
  Person.remove({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Data Deleted Successfully....",
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

//deleting all the Persons
exports.deleteAll = (req, res) => {
  Person.remove()
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Data Deleted Successfully....",
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

//update Person with given id
exports.update = (req, res) => {
  const id = req.params.personId;
  let query = { $set: {} };
  for (const key in req.body) {
    if (Person[key] && Person[key] !== req.body[key])
      query.$set[key] = req.body[key];
  }
  Person.updateOne({ _id: id }, query)
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Updated Data Successfully......",
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};
