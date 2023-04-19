// @ts-check
const {
  number,
  string,
  option,
  array,
  enumeration,
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

class ValinorState extends Elf.Sculpt(ValinorType) {}

module.exports = {
  ValinorType,
  ValinorState,
};
