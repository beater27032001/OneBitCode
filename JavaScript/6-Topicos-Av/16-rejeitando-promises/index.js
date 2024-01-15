async function asyncSum(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number'){
        return Promise.reject('arguments must be of type number')
    }
    return a + b
}

function asyncSubtract(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number'){
        return Promise.reject('arguments must be of type number')
    }
    return a - b
}

const sumResult = asyncSum(50, 33)
const subResult = asyncSubtract(50, null)

Promise.all([sumResult, subResult]).then(results => {
    console.log(results)
}).catch(err => {
    console.log(err)
})