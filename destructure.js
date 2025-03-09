const person = {
    name : 'Karim',
    age : 23,
    profession : 'Developer',
    salary : 30000,
    married : false,
    'fav places' : ['Saint Martin', 'Sylhet', 'Chattogram']
}


const {profession,married, ['fav places']: favPlaces, name, age, salary, friends} = person
console.log(age)
console.log(profession)
console.log(favPlaces)
console.log(friends)




//Array Destructure

const players = ["Messi", {name : "Lewandowski"}, "Neymar", "Suarez"]

const [p1,lewa,nj,luis] = players
console.log(p1) // It will print the index 0 element
console.log(lewa)
console.log(luis)