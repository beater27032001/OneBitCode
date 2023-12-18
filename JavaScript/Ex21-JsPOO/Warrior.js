const Character = require("./Character")

module.exports = class Warrior extends Character{
    constructor(name, hP, aP, dP, shield) {
        super(name, hP, aP, dP)
        this.shield = shield
        this.stance = 'attacking'
    }

    attack(targetCharacter){
        if (this.stance === 'attacking'){
            super.attack(targetCharacter)
        }
    }

    switchStance(){
        if(this.stance === 'attacking'){
            this.stance = 'defending'
            this.dP += this.shield
        }else{
            this.shield = 'attacking'
            this.dP -= this.shield
        }
    }
}