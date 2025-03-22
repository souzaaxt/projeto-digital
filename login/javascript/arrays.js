let frutas = ["Maçã", "Banana", "Laranja"];

// Push
frutas.push("Uva")

console.log(frutas)

// Pop
frutas.pop()

console.log(frutas)

// Shift
frutas.shift()

console.log(frutas)

// Unshift
frutas.unshift("Morango")

console.log(frutas)

// Slice
let duasFrutas = frutas.slice(1, 3)

console.log(duasFrutas)

// Join
let frutasJuntas = frutas.join(" ===> ")

console.log(frutasJuntas)

// Reverse
let frutasReversas = frutas.reverse()

console.log(frutasReversas)

// Concat
let frutas2 = ["Pera", "Manga", "Melancia"]

const todasFrutas = frutas.concat(frutas2)

console.log(todasFrutas)

// indexOf
const posicaoManga = todasFrutas.indexOf("Manga")

console.log(posicaoManga)