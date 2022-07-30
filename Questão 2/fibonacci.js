/*Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência. */

const fibonacci = (x) => {
    let num1=0, num2=1, num3=1
    while(x > num3){
        num3 = num1 + num2
        num1 = num2
        num2 = num3
    }
    if(x == 0 || x == 1){
        console.log(`O número ${x} está na sequência de fibonacci.`)
    }else if(x == num3){
        console.log(`O número ${x} está na sequência de fibonacci.`)
    }else {
        console.log(`O número ${x} não pertence a sequência de fibonacci`)
    }
}

fibonacci(0)