const {Elf} = require('xcraft-core-goblin');
const Valinor = require('./lib/valinor.js');

exports.xcraftCommands = Elf.birth(Valinor);
