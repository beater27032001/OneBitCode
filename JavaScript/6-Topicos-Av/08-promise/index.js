//PENDENTE - PENDING
//RESOLVIDA - RESOLVED
//REJEITADA - REJECTED
const p = new Promise((resolve, reject) => {
    console.log('A PROMISE ESTÁ SENDO EXECUTADA')
    setTimeout(() => {
        if(true){
            reject(false)
        }
        console.log('Resolvendo a promise...')
        resolve(true)
    }, 1000 * 2)
    
})

console.log(p)

setTimeout(() => {
    console.log(p)
}, 1000 * 3) 