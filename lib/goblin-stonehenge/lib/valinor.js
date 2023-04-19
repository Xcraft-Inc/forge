// @ts-check
const {Elf} = require('xcraft-core-goblin');
const {ValinorState} = require('./valinorTypes.js');

class Valinor extends Elf.Alone {
  state = new ValinorState();

  position = 0;

  /**
   * @param {number} age New age of this land
   */
  async init(age = 100) {
    this.log.dbg('Stonehenge initialized');
    this.log.dbg(`age=${this.state.age}`);
    this.do({age});
    this.log.dbg(`age=${this.state.age}`);
    await this.secondQuest();
  }

  async secondQuest() {
    this.log.dbg('second quest');

    const desktopId = 'valinor@system';

    const Galadriel = require('./galadriel.js');
    const galadriel1 = await new Galadriel(this).create(
      'galadriel@1',
      desktopId
    );
    const galadriel2 = await new Galadriel(this).create(
      'galadriel@2',
      desktopId
    );

    await galadriel1.hello();
    await galadriel2.hello();
  }

  thirdQuest() {
    this.log.dbg('uhuh');
  }
}

module.exports = Valinor;
