// @ts-check
const {Elf} = require('xcraft-core-goblin');
const {ValinorState} = require('./valinorTypes.js');

class ValinorLogic extends Elf.Spirit {
  state = new ValinorState({
    age: 'aa',
    name: 'pouet',
    obj: {foo: 1, bar: 'uhuh'},
    arr: [],
    enum: 'alpha',
  });

  grow() {
    this.state.age++;
  }

  /**
   * @param {number} age - Age
   */
  init(age) {
    const {state} = this;

    state.age = age || 10;
    this.grow();
    state.name = 1; // 'Maurice';
    state.obj.foo = 2;
    state.arr.push(42);
    delete state.obj.bar;
    state.enum = 'beta';
    if (!state.toto) {
      state.toto = {};
    }
    if (state.arr.includes(42)) {
      console.log('prout');
    }
    console.log(this.toJS());
  }
}

module.exports = ValinorLogic;
