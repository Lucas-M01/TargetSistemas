/*Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia. O carro de Ribeirão Preto em direção a Franca, a uma velocidade constante de 110 km/h e o caminhão de Franca em direção a Ribeirão Preto a uma velocidade constante de 80 km/h. Quando eles se cruzarem na rodovia, qual estará mais próximo a cidade de Ribeirão Preto?



IMPORTANTE:

a) Considerar a distância de 100km entre a cidade de Ribeirão Preto <-> Franca.

b) Considerar 2 pedágios como obstáculo e que o caminhão leva 5 minutos a mais para passar em cada um deles e o carro possui tag de pedágio (Sem Parar)

c) Explique como chegou no resultado. */

let tempo = 0, deslocamento = 100, espaco = 0, pedagio = 5, carro = 110, atraso, encontro

//DESCOBRIR O TEMPO
function time(velocidade) {
    let veloMedia = velocidade
    tempo = (deslocamento/veloMedia)
    return tempo;
}

//DESCOBRIR O TEMPO ACRESCENTANDO O ATRASO
function timeAtraso(velocidade){
    tempo = time(velocidade)
    atraso = tempo + ((pedagio*=2) / 60)
    return atraso.toFixed(2);
}

const resultado = (func1, func2, velocidade) => {
    let ex1 = func1(velocidade)
    let ex2 = func2(velocidade)
    
    //DESCOBRIR A VELOCIDADE MÉDIA DO CAMINHÃO COM O ATRASO
    function velocidadeMedia() {
        espaco = deslocamento/atraso
        return espaco.toFixed(1);
    }
    
    //DESCOBRIR A DISTANCIA DO LOCAL QUE SE CRUZARAM ATÉ A CIDADE DE RIBEIRÃO PRETO
    function encontro(){
        encontro = (carro * deslocamento) / (carro + espaco)
        return encontro.toFixed(1)
    }
    
    console.log(`Cálculo do tempo ${ex1} h, calculo do tempo com o atraso ${ex2} h, calculo da velocidade média ${velocidadeMedia()} km/h. Com isso os veículos quando se cruzarem se encontraram a ${encontro()} km`);
}

resultado(time, timeAtraso, 80)