function calcAreaTriangulo() {
    const base = prompt("Informe a base do triângulo:")
    const altura = prompt("Informe a altura do triângulo:")

    return base * altura / 2 
}

function calcAreaRetangulo() {
    const base = prompt("Informe a base do retângulo:")
    const altura = prompt("Informe a altura do retângulo:")

    return base * altura
}

function calcAreaQuadrado(){
    const lado = prompt("Informe o lado do quadrado")
    return lado * lado
}

function calcAreaTrapezio(){
    const baseM = parseFloat(prompt("Informe a base maior do trapézio"))
    const baseMr = parseFloat(prompt("Informe a base menor do trapézio"))
    const altura = prompt("Informe a altura do trapézio")

    return (baseM + baseMr) * altura / 2
}

function calcAreaCirculo(){
    const raio = prompt("Informe o raio do circulo")
    return (3.14) * raio * raio
}

function menu() {
    return prompt(
        "Calculadora Geométrica\n" +
        "1. Calcular área de triângulo\n" +
        "2. Calcular área de retângulo\n" +
        "3. Calcular área de quadrado\n" +
        "4. Calcular área de trapézio\n" +
        "5. Calcular área de círculo\n" +
        "6. Sair\n"
    )
}

function executar() {
    let op = ""
    do {
        op = menu()

        let resultado

        switch (op) {
            case "1":
                resultado = calcAreaTriangulo()
                break
            case "2":
                resultado = calcAreaRetangulo()
                break
            case "3":
                resultado = calcAreaQuadrado()
                break
            case "4":
                resultado = calcAreaTrapezio()
                break
            case "5":
                resultado = calcAreaCirculo()
                break
            case "6":
                alert("Saindo...")
                break
            default:
                alert("Opção inválida!")
        }

        if(resultado){
            alert("Resultado: " + resultado)
        }
    } while (op !== "6")
}

executar()