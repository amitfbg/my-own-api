/**
 * Description: Here we defined all the routes of person and exporting all the routes too
 */
const express = require("express");
const router = express.Router();

const Person = require("../controller/person_controller");

// Create a new Person
router.post("/", Person.create);

// Retrieve all Persons
router.get("/", Person.findAll);

// Retrieve a single Person with given id
router.get("/:personId", Person.findOne);

// Update a Person with given id
router.patch("/:personId", Person.update);

// Delete a Person with id
router.delete("/:personId", Person.delete);

// Delete all Persons
router.delete("/", Person.deleteAll);

module.exports = router;
