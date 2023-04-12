const {Elf} = require('xcraft-core-goblin');

class Stone extends Elf.Alone {
  async init() {
    this.log.dbg('Stonehenge initialized');
  }
}

module.exports = Stone;
