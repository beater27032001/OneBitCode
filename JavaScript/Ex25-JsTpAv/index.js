async function imc(weight, heigh) {
    if (typeof weight !== 'number' || typeof heigh !== 'number') {
        Promise.reject('arguments must be of type number')
    }
    return weight / (heigh * heigh)

}

function showImc(weight, heigh) {
    imc(weight, heigh).then((result) => {
        console.log(`O resultado do IMC foi de ${result}`)

        if (result < 18.5) {
            console.log('Situação: MAGREZA')
        } else if (result < 25) {
            console.log('Situação: NORMAL')
        } else if (result < 30) {
            console.log('Situação: SOBREPESO')
        } else if (result < 40) {
            console.log('Situação: OBESIDADE')
        } else {
            console.log('Situação: OBESIDADE GRAVE')
        }
    }).catch((err) => {
        console.log(err)
    })


    console.log(`Calculando o IMC para peso ${weight} e altura ${heigh}`)
}

showImc(71, 1.74)
showImc(48, 1.60)
showImc(71, "texto")
showImc(82, 1.72)
showImc(120, 1.80)
showImc(90, 1.75)