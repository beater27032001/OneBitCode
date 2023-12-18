const Character = require("./Character")

module.exports = class Mage extends Character{
    constructor(name, hP, aP, dP, mP) {
        super(name, hP, aP, dP)
        this.mP = mP
    }

    attack(targetCharacter){
        targetCharacter.hP -= (this.aP + this.mP) - targetCharacter.dP
    }

    heal(targetCharacter){
        targetCharacter.hp += this.mP * 2
    }
}