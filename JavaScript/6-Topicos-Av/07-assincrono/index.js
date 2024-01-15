//código sincrono
function step2(){
    console.log('Passo 2')
}

console.log('Passo 1')
step2()
console.log('Passo 3')

setTimeout(() =>{
    console.log('Passo 4')
}, 1)

console.log('Passo 5')