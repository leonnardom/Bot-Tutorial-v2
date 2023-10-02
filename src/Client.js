const { Client } = require("discord.js");
const { EventLoader, DatabaseLoader, CommandLoader } = require("./loaders");

module.exports = class Tutorial extends Client {
  constructor() {
    super({
      intents: 33415,
      failIfNotExists: false,
    });
  }

  login() {
    super.login(process.env.TOKEN);
  }

  initializeLoaders() {
    new EventLoader(this).call(); // Carrega os Eventos
    new DatabaseLoader(this).call(); // Carrega a  Database
    new CommandLoader(this).call({ dir: "commands" }); // Carrega os Comandos

    return this;
  }
};
