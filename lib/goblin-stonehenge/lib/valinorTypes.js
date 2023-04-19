// @ts-check
const {
  number,
  string,
  option,
  array,
  enumeration,
  Sculpt,
} = require('xcraft-core-stones');

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

module.exports = {
  ValinorType,
  ValinorState,
};
