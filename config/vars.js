const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  mongodbURL : process.env.MONGO_URI,
};
