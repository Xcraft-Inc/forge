// @ts-check
const {string, boolean} = require('xcraft-core-stones');
const {Elf} = require('xcraft-core-goblin');

class GaladrielType {
  id = string;
  alive = boolean;
}

class GaladrielState extends Elf.Sculpt(GaladrielType) {}

module.exports = {
  GaladrielType,
  GaladrielState,
};
