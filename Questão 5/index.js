/*Escreva um programa que inverta os caracteres de um string.
IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;*/

const letras = (palavra) => {
    for (var i = palavra.length - 1, inverso = ''; i >= 0; inverso += palavra[i--]) { }
    console.log(inverso);
}

letras('A B C D E F G H I J K L M N O P Q R S T U V W X Y Z')