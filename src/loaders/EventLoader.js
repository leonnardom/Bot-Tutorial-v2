const { promises } = require("fs");

module.exports = class EventLoader {
  constructor(client) {
    this.client = client;
  }

  async call() {
    console.log(`\x1b[32m[EVENTS]\x1b[0m`, `Events loaded successfully.`);

    this.loadEvents("./src/client/listeningIn");
  }

  async loadEvents(path) {
    const files = await promises.readdir(path);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const event = new (require(`../../${path}/${file}`))(this.client);

      this.client.on(file.split(".")[0], (...args) => event.ON(...args));
    }
  }
};
