const v1 = prompt("Informe o nome do primeiro veículo: ");
const vel1 = parseFloat(prompt("Informe a velociadde do primeiro veículo: "));

const v2 = prompt("Informe o nome do segundo veículo: ");
const vel2 = parseFloat(prompt("Informe a velociadde do segundo veículo: "));

if (vel1 > vel2) {
    alert(v1 + " é mais rápido que o " +v2)
}else if(vel2 > vel1){
    alert(v2 + " é mais rápido que o " +v1)
}else{
    alert("As velocidades são iguais")
}