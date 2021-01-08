let colaboradores    = ['Rhoger', 'Cléverson', 'Gleysberto', 'Nádio', 'Rosiméri', 'Regislane', 'Agripino', 'Wellison']
let idades           = [      69,          66,           58,      61,         60,          64,         59,         55]
let temposDeTrabalho = [      31,          29,           30,      26,         25,          24,         26,         29]

function verificaAposentadoria(pessoa){
    let isPessoa = false
    let idade = 0
    let tempoTrabalhado = 0
    let cont = 0

    while(cont < colaboradores.length && !isPessoa){
        isPessoa = colaboradores[cont] == pessoa
        cont++;
    }

    if (isPessoa){
        //Encontra idade e tempo trabalhado somente se pessoa existe.
        idade = idades[cont-1], tempoTrabalhado = temposDeTrabalho[cont-1]
        //Verifica se pessoa está apto a aposentar.
        let apto = idade >= 65 ? true : tempoTrabalhado >= 30 ? true : 
        (idade >= 60 && tempoTrabalhado >= 25) ? true : false

        let apto2 = (idade >= 65 || tempoTrabalhado >= 30 || (idade >= 60 && tempoTrabalhado >= 25)) ? true : false

        let msg = apto2 ? "Parabéns, pode sair de férias eternas" : "Infelizmente ainda falta um tempo"
        console.log(msg)
    }else{
        console.log("Não existe essa pessoa")
    }
}

verificaAposentadoria("Rhoger")

