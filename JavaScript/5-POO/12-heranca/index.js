class Propetry {
    constructor(area, price){
        this.area = area
        this.price = price
    }

    getPricePerSquareMeter(){
        return this.price / this.area
    }
}

class House extends Propetry{ }

const land = new Propetry(200, 50000)
const someHouse = new House(120, 200000)

console.log(land)
console.log(someHouse.getPricePerSquareMeter())
console.log(someHouse instanceof Propetry)

class Apartment extends Propetry {
    constructor(number, area, price){
        super(area, price)
        this.number = number
    }

    getFloor(){
        return this.number.slice(0, -2)
    }
}

const apt = new Apartment("103", 100, 300000)
console.log(apt)
console.log(apt.getFloor())