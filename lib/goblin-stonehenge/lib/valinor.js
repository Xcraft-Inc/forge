// @ts-check
const {
  number,
  string,
  option,
  array,
  enumeration,
  Sculpt,
} = require('xcraft-core-stones');
const {Elf} = require('xcraft-core-goblin');

class SubObjType {
  foo = number;
  bar = option(string);
}

class ValinorType {
  age = number;
  name = string;
  obj = SubObjType;
  arr = array(number);
  enum = enumeration('alpha', 'beta', 'gamma');
}

class ValinorState extends Sculpt(ValinorType) {}

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

class Valinor extends Elf.Alone {
  static initialState = new ValinorLogic();

  /**
   * @param {number} age New age of this land
   */
  async init(age = 100) {
    this.log.dbg('Stonehenge initialized');
    this.do({age});
    await this.secondQuest();
  }

  async secondQuest() {}
}

module.exports = Valinor;
