/**
 * Description: Here we created the Person Schema which is the blueprint of out Person data
 */

const mongoose = require("mongoose");

const PersonSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
});

module.exports = mongoose.model("Person", PersonSchema);
