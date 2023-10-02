const { MongoDB } = require("../database");

module.exports = class DatabaseLoader {
  constructor(client) {
    this.client = client;
    this.database = false;
  }

  async call() {
    this.client.database = this.database;

    this.LoaderDatabase().then(() => {
      console.log(
        `\x1b[32m[DATABASE]\x1b[0m`,
        `Database successfully connected.`
      );
    });
  }

  LoaderDatabase(DBWrapper = MongoDB, options = {}) {
    this.client.database = new DBWrapper(options, this.client);

    return this.client.database.connect().catch((err) => {
      throw console.log(
        `\x1b[31m[DATABASE]\x1b[0m`,
        `Error connecting to database.\n${err}`
      );
    });
  }
};
