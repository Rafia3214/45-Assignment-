// Excercise 21
// They think of something you could store in a TypeScript Object. 
// Write a program that creates Objects containing these items.

 interface mobileDetails{
    company:string
    model:string
    price:number
 }
let mobile:mobileDetails={
    company:"Samsung",
    model:"Galaxy A05",
    price:40000
    
}
interface homeDetails{
    city:string
    country:string
    adress:string
    price:number
}

let home: homeDetails={
    city:"Karachi",
    country:"Pakistan",
    adress:"Gulistan-e-Johar",
    price:10000000
}
console.log(`mobile company:${mobile.company},mobile model:${mobile.model},mobile price:${mobile.price}`);
console.log(`home city:${home.city},home country:${home.country},home price:${home.price}`);








    











    

  