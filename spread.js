const players = ["Messi", "Neymar", "Suarez"]
console.log(players) //Full Array
console.log(...players) //Only Elements


const newPlayers = ["Raphinha", "Yamal", ...players]
console.log(newPlayers)
console.log(...newPlayers)