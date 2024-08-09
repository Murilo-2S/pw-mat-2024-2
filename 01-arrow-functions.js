/*
    Função tradicional com 1 parâmetro e 1 linha de corpo
*/

function quadrado(n) {
  return n * n;
}

console.log("O quadrado de 7 é ", quadrado(7));

/*
    Função equivalente, usando a sintaxe de arrow function
    -> não necessita de chaves
    -> não necessita de parênteses em torno do parâmetro
    -> não necessita da palavra-chave return
    -> a palavra-chave function é substituida pela flecha
        => LOGO APÓS o parâmetro
    -> a arrow function é invocada pelo nome da constante que a recebe
*/

const quadradoA = (n) => n * n;

console.log("O quadrado de 7 é ", quadrado(7));

/*
    Função tradicional com mais de um parâmetro e apenas uma linha de corpo com return
*/

function calc(a, b, c) {
  return a * b + c;
}

console.log("[TRADIC] O resultado do calculo é ", calc(10, 20, 30));

/* 
    Equivalente na sintaxe arrow function
    -> Quando o número de parâmetros != 1, os parênteses voltam a ser obrigatórios
*/

function msgErro() {
  return "ERRO FATAL!!!";
}

console.log("[TRADI] ", msgErro());

/*
    Equivalente na sintaxe arrow function
    -> parênteses vazios devem ser usados para marcar o lugar do parâmetro
*/

const msgErroA = () => "ERRO FATAL!!!";

console.log("[ARROW] ", msgErroA());

/*
    Função tradicional com parametro e várias linhas de corpo
*/

function fatorial(n) {
  let resultado = 1;
  for (let i = n; i > 1; i--) resultado *= i;
  return resultado;
}

console.log("[TRADI] O fatorial de 5 é ", fatorial(5));

/*
    Equivalente no formato arrow function
    -> Não há economia de linhas no corpo da função
    -> As chaves voltam a ser obrigatórias
*/

const fatorialA = (n) => {
  let resultado = 1;
  for (let i = n; i > 1; i--) resultado += i;
  return resultado;
};
console.log("[ARROW] O fatorial de 5 é ", fatorialA(5));
