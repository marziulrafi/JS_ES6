const person = {
    name : 'Karim',
    age : 23,
    profession : 'Developer',
    salary : 30000
}

for (let key in person) {
    console.log(`Key : ${key} --- Value : ${person[key]}`)
}

console.log("\n")

for (let [key,value] of Object.entries(person)) {
    console.log(`Key : ${key} --- Value : ${value}`)
}


delete person.salary
console.log("After delete :",person);