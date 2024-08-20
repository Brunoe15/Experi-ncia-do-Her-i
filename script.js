//Variaveis para armazenar nome e experiencia do nosso heroi
let nomeHeroi = 'Bruno'
let experiencia = 1975  

//Mensagem com Nome, nivel e Classe do herói
console.log ('O Herói de nome ' + nomeHeroi + ' está no nivel ' + experiencia)

//Estrutura de decisão para determinar classe do nosso herói (ultilizando if-else)
if (experiencia <= 1000){
    console.log ('CLASSE: FERRO')
} else if (experiencia <= 2000){
    console.log ('CLASSE: BRONZE')
} else if (experiencia <= 5000){
    console.log ('CLASSE: PRATA')
} else if (experiencia <= 6000){
    console.log ('CLASSE: OURO')
} else if (experiencia <= 8000){
    console.log ('CLASSE: PLATINA DIAMANTE')
} else if (experiencia <= 9000){
    console.log ('CLASSE: ASCENDENTE')
} else if (experiencia <= 10000){
    console.log ('CLASSE: IMORTAL')
} else {
    console.log ('CLASSE: RADIANTE')
}
