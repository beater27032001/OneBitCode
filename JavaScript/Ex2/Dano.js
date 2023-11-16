const ata = prompt("Qual é o nome do personagem atacante?");
const pDeAta = parseFloat(prompt("Qual é o poder de ataque?"));

const def = prompt("Qual é o nome do personagem defensor?");
let hp = parseFloat(prompt("Quantos pontos de vida ele possui?"));
const pDeDef = parseFloat(prompt("Qual é o poder de defesa?"));
const escudo = prompt("Ele possui escudo? (Sim/Não)");

let danoCausado = 0;

if(pDeAta > pDeDef && escudo == "Não"){
    danoCausado = pDeAta - pDeDef;
}else if(pDeAta > pDeDef && escudo == "Sim"){
    danoCausado = (pDeAta - pDeDef)/2 ;
}

hp -= danoCausado;

alert(ata + " causou " + danoCausado + " pontos de dano em " + def)
alert(
  ata + "\nPoder de ataque: " + pDeAta + "\n\n" +
  def + "\nPontos de vida: " + hp +
  "\nPoder de defesa: " + pDeDef + "\nPossui escudo: " + escudo
)