const fristName = prompt("Informe o primeiro nome: ");
const lasName = prompt("Informe o sobrenome: ");
const studyArea = prompt("Qual a área de estudo? ");
const year = prompt("Qual o ano de nascimento? ");

alert(
    "Recruta Cadastrado com sucesso!\n"+
    "\nNome completo: " + fristName + " " + lasName +
    "\nCampo de estudo: " + studyArea +
    "\nIdade: " + (2023 - year)
)