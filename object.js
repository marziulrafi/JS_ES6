const person = {
    name : 'Karim',
    age : 23,
    profession : 'Developer',
    salary : 30000
}
person.status = "Unmarried"

Object.seal(person)

person.new_salary = 40000 // won't print because of SEAL
/* person.age = 25
but it will updated (existing key) */
console.log(person);

Object.freeze(person) // can't add new keys or change the value of existing keys
person.name = 'Rafi'
person.fullName = 'K M Marziul Karim'
console.log(person);




// console.log(Object.keys(person))
// console.log(Object.values(person))
console.log(Object.entries(person))
