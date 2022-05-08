let Tony = {
    firstName:"jamiu",
    age:999,
    address:{
        street:"13 iiiii",
        city:"APAPA"
    }
}
var nameo ="yusuf"

function greet(person){
    console.log("hello" + person.firstName)
}
greet(Tony)

greet({firstName:"john"})