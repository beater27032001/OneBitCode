const vagas = []

function listarVagas(){
    const vagasEmTexto = vagas.reduce(function(textoFinal, vaga, indice){
        textoFinal += indice + ". "
        textoFinal += vaga.nome
        textoFinal += " (" + vaga.candidatos.lenght + " candidatos)\n"
        return textoFinal
    }, "")

    alert(vagasEmTexto)
}

function novaVaga(){
    const nome = prompt("Informe um nome para a vaga:")
    const descricao = prompt("Informe uma descrição para a vaga:")
    const dataLimite = prompt("Informe uma data limite (dd/mm/aaaa) para a vaga")

    const confirmacao = confirm(
        "Deseja criar essa vaga?\n" +
        "Nome: " + nome  + "\nDescrição: " + descricao + "\nData Limite: " + dataLimite
    )

    if(confirmacao){
        const novaVaga = {nome, descricao, dataLimite, candidatos: []}
        vagas.push(novaVaga)
        alert("Vaga criada!")
    }
}

function exibirVaga(){
    const indice = prompt("Informe o índice da vaga que deseja exibir:")

    if(indice >= vagas.length || indice < 0 ){
        alert("Índice inválido")
        return 
    }

    const vaga = vagas[indice]

    const candidatosEmTexto = vaga.candidatos.reduce(function(textoFinal, candidato){
        return textoFinal + "\n - " + candidato
    }, "")

    alert(
        "Vaga número " + indice +
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData Limite: " + vaga.dataLimite +
        "\nQuantidade de candidatos: " + vaga.candidatos.lenght +
        "\nCandidatos inscritos: " + candidatosEmTexto 
    )
}

function inscreverCandidato(){
    const candidato = prompt("Informe o nome do candidato:")
    const indice = prompt("Informe o índice da vaga que o candidato deseja se inscrever:")
    const vaga = vaga[indice]

    const confirmacao = confirm(
        "Deseja inscrever o candidato?\n" +
        "Nome: " + vaga.nome  + "\nDescrição: " + vaga.descricao + "\nData Limite: " + vaga.dataLimite
    )

    if(confirmacao){
        vaga.candidato.push(candidato)
        alert("Inscrição realizada!")
    }
}

function deletarVaga(){
    const indice = prompt("Informe o índice da vaga que deseja excluir:")
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Tem certeza que deseja excluir essa vaga " + indice + " ?\n" +
        "Nome: " + vaga.nome  + "\nDescrição: " + vaga.descricao + "\nData Limite: " + vaga.dataLimite
    )

    if(confirmacao){
        vagas.slice(indice, 1)
        alert("Vaga excluída!")
    }
}

function exibirMenu(){
    const op = prompt(
        "Cadastro de Vagas de Emprego" +
        "\n\nEscolha uma das opções:" +
        "\n1. Listar vagas disponíveis" +
        "\n2. Criar nova vaga" +
        "\n3. Exibir uma vaga" +
        "\n4. Inscrever um candidato" +
        "\n5. Exclir uma vaga" +
        "\n6. Sair"
    )
    return op
}

function executar(){
    let op = ""
    
    do {
        op = exibirMenu()

        switch (op) {
            case "1":
                listarVagas()
                break
            case "2":
                novaVaga()
                break
            case "3":
                exibirVaga()
                break
            case "4":
                inscreverCandidato()
                break
            case "5":
                deletarVaga()
                break
            case "6":
                alert("Saindo...")
                break
            default:
                alert("Opção inválida")
        }
    } while (op !== "6");
}

executar()