function Sum(a,b){
    return a + b
}

console.log(`Soma normal: ${Sum(2,2)}`)

const arrowSum = (a,b) => {
    return a + b
}

console.log(`Soma arrow function: ${arrowSum(2,2)}`)

const subtract = (a,b) => a - b 

console.log(`Subtração arrow function: ${subtract(5,2)}`)

const double = n => `O dobro de ${n} é ${n*2}`
const num = 21
console.log(double(num))

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']
const startingWithP = towns.filter(town => town[0] === 'P')
console.log(startingWithP)