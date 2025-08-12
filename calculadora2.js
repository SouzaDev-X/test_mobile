// calculadora.js
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o primeiro número: ", (num1) => {
rl.question("Digite o operador: ", (operador) => {
rl.question("Digite o segundo número: ", (num2) => {
            
            
    let numero1 = parseFloat(num1);
    let numero2 = parseFloat(num2);
    let resultado;

            
if (operador === "+") {
resultado = numero1 + numero2;
} else if (operador === "-") {
resultado = numero1 - numero2;
} else if (operador === "*") {
resultado = numero1 * numero2;
} else if (operador === "/") {


if (numero2 !== 0) {
resultado = numero1 / numero2;
} else {
resultado = "Erro: divisão por zero";
}
} else {
resultado = "Operador inválido";
}
console.log(`Resultado: ${resultado}`);

rl.close();
});
});
});

// Script-Case