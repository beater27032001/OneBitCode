const Character = require("./Character")

module.exports = class Thief extends Character{
    attack(targetCharacter){
        targetCharacter.hp -= (this.aP - targetCharacter.dp) * 2
    }
}