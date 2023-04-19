// @ts-check
const {Elf} = require('xcraft-core-goblin');
const {GaladrielState} = require('./galadrielTypes.js');

class Galadriel extends Elf {
  state = new GaladrielState();

  async create(id, desktopId) {
    this.do();
    this.log.dbg(`id=${this.state.id} alive=${this.state.alive}`);
    return this;
  }

  async hello() {
    this.log.dbg('Hello from', this.state.id);

    const Valinor = require('./valinor.js');
    const valinor = new Valinor(this);
    await valinor.thirdQuest();
  }

  delete() {
    /* quelque chose ... */
  }
}

module.exports = Galadriel;
