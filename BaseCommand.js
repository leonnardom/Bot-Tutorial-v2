const { Command } = require("../../");

module.exports = class BaseCommand extends Command {
  constructor(client) {
    super(
      {
        name: "",
        aliases: [],
        category: "",
        usage: "",
      },
      client
    );
  }

  async run({ message, args, guild, author }) {}
};
