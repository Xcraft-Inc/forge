// @ts-check
const {string, Sculpt} = require('xcraft-core-stones');

class GaladrielType {
  id = string;
}

class GaladrielState extends Sculpt(GaladrielType) {}

module.exports = {
  GaladrielType,
  GaladrielState,
};
