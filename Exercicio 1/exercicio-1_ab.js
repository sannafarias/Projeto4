// a - Crie uma função que recebe um objeto person e retorna um novo objeto com todas as 
// propriedades do original, mais uma propriedade "isAdult" (true se age >= 18)

const person = { name: "Carlos", age: 17 }

function verificaAdulto (person) {
    return {...person, isAdult: person.age >=18 }
}

console.log (verificaAdulto (person))

// b - Crie uma função que aceita múltiplos arrays como parâmetros e retorna um array 
// combinado com todos os elementos (use rest e spread)

const fruits = ["maçã", "banana", "laranja"];
const moreFruits = ["uva", "kiwi"];
const number = [1,2,3,4,5]

function combinarArrays (...array){
    return [].concat (...array)
}
const allFruits = combinarArrays (fruits, moreFruits)

console.log (allFruits)