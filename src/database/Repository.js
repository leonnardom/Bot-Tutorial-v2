module.exports = class Repository {
  constructor() {
    if (this.constructor === Repository)
      throw new Error("Cannot instantiate absctract class'");
  }

  parse(entity) {}

  add(entity) {}

  findOne(id) {}

  findAll() {}

  get(id) {}

  remove(id) {}
};
