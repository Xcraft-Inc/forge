const {Elf} = require('xcraft-core-goblin');
const Valinor = require('./lib/valinor.js');
const ValinorLogic = require('./lib/valinorLogic.js');

exports.xcraftCommands = Elf.birth(Valinor, ValinorLogic);
