/**
 * @description: Here we are configuring the url of database to connect the databse Here i am using mongodb
 *
 * *****Set the url of your mongodb database to connect with your database*******
 */

const dotenv = require("dotenv");
dotenv.config();
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@api.0q8lh.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
module.exports = url;
