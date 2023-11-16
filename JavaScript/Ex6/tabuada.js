const num = parseFloat(prompt("De qual número você deseja calcular a tabuada?"))
let res = ""

for (let i = 1; i <= 20; i++) {
    res += " -> " + num + " x " + i + " = " + (num * i) + "\n"
}

alert("Resultado da Tabuada de " + num + ":\n\n" + res)