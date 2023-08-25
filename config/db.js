const mongoose = require("mongoose");

const dbConnection = () => {
  const url = process.env.DB_STRING;
  if (!url) {
    return console.error("you should add db string");
  }
  mongoose
    .connect(url, {})
    .then((conn) => {
      console.log(`DATABASE CONNCTED TO: ${conn.connection.host}`);
    })
    .catch((err) => console.log(err));
};

module.exports = dbConnection;
