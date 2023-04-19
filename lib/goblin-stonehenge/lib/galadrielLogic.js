// @ts-check
const {Elf} = require('xcraft-core-goblin');
const {GaladrielState} = require('./galadrielTypes');

class GaladrielLogic extends Elf.Spirit {
  state = new GaladrielState({alive: true});

  create(id) {
    this.state.id = id;
    this.log.dbg(`I create ${id}`);
  }
}

module.exports = GaladrielLogic;
