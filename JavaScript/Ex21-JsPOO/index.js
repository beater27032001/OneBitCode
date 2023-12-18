const Mage = require("./Mage");
const Thief = require("./Thief");
const Warrior = require("./Warrior");

const merlim = new Mage('Merlim', 90, 4, 2, 14)
const ban = new Thief('Ban', 140, 22, 8)
const escanor = new Warrior('Escanor', 200, 14, 12, 8)

console.table({ merlim, ban, escanor })

escanor.switchStance()
merlim.attack(escanor)
ban.attack(merlim)

console.table({ merlim, ban, escanor })

escanor.attack(merlim)
merlim.heal(merlim)
ban.attack(escanor)

console.table({ merlim, ban, escanor })