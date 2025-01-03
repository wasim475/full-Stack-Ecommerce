const mongoose = require('mongoose');
const {USER_NAME, PASSWORD,DB_NAME} = process.env
const dbConnection = () => {
  mongoose
    .connect(`mongodb+srv://${USER_NAME}:${PASSWORD}@cluster0.kucqs.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => console.log("Database Connected!"));
};

module.exports = dbConnection
