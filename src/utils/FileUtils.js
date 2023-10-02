const { readdirSync, statSync } = require("fs");
const { resolve } = require("path");

module.exports = function readFile({ dir }, callback) {
  const files = readdirSync(dir);

  files.map((file) => {
    const fullPath = resolve(dir, file);

    if (statSync(dir + "/" + file).isDirectory()) {
      readFile({ dir: dir + "/" + file }, callback);
    }

    if (/\.(js|json)$/.test(file)) {
      try {
        const required = require(fullPath);
        callback(null, required);
      } catch (error) {
        callback(error, file);
      }
    }
  });
};
