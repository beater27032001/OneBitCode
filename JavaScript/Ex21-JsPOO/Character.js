module.exports = class Character {
    constructor(name, hP, aP, dP) {
        this.name = name
        this.hP = hP
        this.aP = aP
        this.dP = dP
    }

    attack(targetCharacter) {
        targetCharacter.hP -= this.aP - targetCharacter.dP
    }
}