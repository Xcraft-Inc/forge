// @ts-check
const {object, number} = require('xcraft-core-stones');
const {Elf} = require('xcraft-core-goblin');

/**
 * @template T
 * @typedef {import("xcraft-core-stones").t<T>} t
 */

const ValinorType = object({
  age: number,
});

/** @type {t<ValinorType>} */
class Valinor extends Elf.Alone {
  /* @type {t<typeof number>} */
  age;

  async init() {
    this.log.dbg('Stonehenge initialized');
    this.age = '100';
  }
}

module.exports = Valinor;
