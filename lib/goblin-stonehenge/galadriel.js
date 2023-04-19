const {Elf} = require('xcraft-core-goblin');
const Galadriel = require('./lib/galadriel.js');
const GaladrielLogic = require('./lib/galadrielLogic.js');

exports.xcraftCommands = Elf.birth(Galadriel, GaladrielLogic);
