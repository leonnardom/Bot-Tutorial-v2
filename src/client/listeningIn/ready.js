module.exports = class Ready {
  constructor(client) {
    this.client = client;
  }

  async ON() {
    console.log(`\x1b[32m[CLIENT]\x1b[0m`, `Client logged successfully.`);

    await this.client.user.setActivity(`Feito com ❤ por zSpl1nterUS_`);

    await this.client.user.setStatus("idle");
  }
};
