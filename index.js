require("dotenv").config();

const Client = require("./src/Client");
const client = new Client();

client.initializeLoaders().login();

process
  .on("uncaughtException", (err) => console.log(err))

  .on("unhandledRejection", (err) => console.log(err));
