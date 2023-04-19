// @ts-check
const {Elf} = require('xcraft-core-goblin');
const {GaladrielState} = require('./galadrielTypes');

class GaladrielLogic extends Elf.Spirit {
  state = new GaladrielState();

  create(id) {
    this.state.id = id;
  }
}

module.exports = GaladrielLogic;
