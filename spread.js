const players = ["Messi", "Neymar", "Suarez"]
console.log(players) //Full Array
console.log(...players) //Only Elements


const newPlayers = ["Raphinha", "Yamal", ...players]
console.log(newPlayers)
console.log(...newPlayers)


const numbers = [1465,645,253,4565,325,64.456,543,356.34]
console.log("Maximum Number :",Math.max(...numbers));