const MongoRepository = require("../MongoRepository");
const GuildSchema = require("../schemas/GuildSchema.js");

module.exports = class GuildRepository extends MongoRepository {
  constructor(mongoose) {
    super(mongoose, mongoose.model("Guilds", GuildSchema));
  }

  parse(entity) {
    return {
      _id: null,
      ...(super.parse(entity) || {}),
    };
  }
};
