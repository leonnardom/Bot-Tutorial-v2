module.exports = class Command {
  constructor(options = {}, client) {
    this.client = client;

    this.name = options.name;
    this.aliases = options.aliases || [];
    this.category = options.category || "Nenhuma";
    this.description = options.description || "Nenhuma";
    this.usage = options.usage || "Nenhuma";
  }

  async _run(context) {
    try {
      await this.ON(context);

      await this.run(context);
    } catch (err) {
      this.error(context, e);
    }
  }

  error(error) {
    console.log(error);
  }

  ON(context) {
    return (this.utils = true);

    // return this.utils ? CommandUtils.util(context, this.utils) : true;
  }
};
