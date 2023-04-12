const {Elf} = require('xcraft-core-goblin');
const Stone = require('./lib/stone.js');

exports.xcraftCommands = Elf.birth(Stone);
