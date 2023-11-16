const n1 = prompt("Informe o primeiro número: ");
const n2 = prompt("Informe o segundo número: ");

const x = parseFloat(n1);
const y = parseFloat(n2);

const soma = x + y;
const sub = x - y;
const multi = x * y;
const div = x / y;

alert(
    "Resultados\n"+
    "\nSoma: " + soma +
    "\nSubtração: " + sub +
    "\nMultiplicação: " + multi +
    "\nDivisão: " + div
)