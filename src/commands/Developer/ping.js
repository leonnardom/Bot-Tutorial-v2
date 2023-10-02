const { Command } = require("../../");

module.exports = class PingCommand extends Command {
  constructor(client) {
    super(
      {
        name: "ping",
        aliases: ["pinga", "p"],
        category: "Developer",
        usage: "Bla bla",
      },
      client
    );
  }

  async run({ message }) {}
};
