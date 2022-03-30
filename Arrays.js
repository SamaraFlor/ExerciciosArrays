// 1. Como acessar o último  item de um array?
let comidas = ['strogonoff', 'lasanha', 'pizza', 'churrasco'];
console.log(comidas[comidas.length - 1]);

let {length, 0: first, [length-1]: last} = comidas;
console.log(last);

// 2. Construa uma função que retorne true se um elemento existir no array
function includes(array, elemento) {
  for (let item of array) if (item === elemento) return true;
  return false;
}

// 3. Construa uma função que dado um elemento, retorne sua posição. 
//Retorna -1 caso o elemento não exista no array não exista
const list = [1, 2, 3, 4, 5];

function contain(arr, val) {
  return arr.indexOf(val) ;
}
console.log(contain(list, 8)); 
console.log(contain(list, 2)); 

// 4. Construa uma função que adiciona um novo elemento na última posição do array
var frutas = ['Banana', 'kiwi'];

console.log(frutas.length);

var adicionar = frutas.push('Melancia');
console.log(frutas);

// 5. Construa uma função que remova a última posição do Array
var numerais = [1,4,8,12,16,18,20];
numerais.pop();
console.log(numerais);
// 6. Construa uma função que retorne as últimas n posições do Array
var numeros = new Array(1,2,3,4,5,6,7,8,9,10);
    var indice = numeros.lastIndexOf();
    console.log(numeros[numeros.length - 1]);
// 7. Construa uma função que recebe dois arrays e retorne um array concatenado
var array1 = ["a", "b", "b"];
var array2 = [1, 2, 3];
console.log(array1.concat(array2));
// 8. Crie um função que receba um array e
// uma função de entrada e execute essa função em todos os elementos do array
const every = (array, funcao) => {
  const resultados = [];
  for (let elemento of array) {
    resultados.push(funcao(elemento));
  }
  return resultados;
};

var numeros = [0, 2, 4, 8, 16, 32];
const quadrado = (x) => x * x;
//const cubo = (x) => x * x * x;
console.log(every(numeros, quadrado));
console.log(every(numeros, (num) => num * num));

// 9. Crie um função que receba um array e uma função de entrada e retorne
// apenas os elementos para os quais essa função for verdade
const usersList = [
	{name: 'Paulo', creditos: 600},
	{name: 'Maria', creditos: 900},
	{name: 'Daniel', creditos: 300},
	{name: 'Carlos', creditos: 200},
];

const result = usersList.some((user, index, array) => user.creditos === 300);
console.log(result);


// 10. Crie um função que receba um array e uma função de entrada e
 //retorne true se ela for verdadeira para todos os elementos do array

 const usersLista = [
	{name: 'João', credito: 600},
	{name: 'Ana', credito: 200},
	{name: 'Maria', credito: 300},
	{name: 'Luiza', credit0: 200},
];

const result1 = usersLista.every((user, index, array) => user.credito <1000);
console.log (result1);

// Copiar um array sem ser por referência
const fruits = ['Strawberry', 'Mango'];

const fruitsCopy1 = [...fruits];

const fruitsCopy2 = Array.from(fruits);

// Create a copy using the slice() method.
const fruitsCopy3 = fruits.slice();

//**************EXEMPLO DE FUNÇÃO QUE RECEBE UMA FUNÇÃO COMO UM DOS PARAMETROS ************/
function imprimeResult(a, b, funcao) {

}
const adicao = (x, y) => x + y;
const subtracao = (x, y) => x - y;
const multiplicacao = (x, y) => x * y;
const divisao = (x, y) => x / y;

imprimeResult(2, 3, adicao);
imprimeResult(40, 38, subtracao);
imprimeResult(25, 5, multiplicacao);
imprimeResult(20, 5, divisao);