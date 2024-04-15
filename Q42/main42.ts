
// Excercise 42

// Great Magicians: Start with a copy of your program from Exercise 39. 
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great
//  to each magician’s name. Call show_magicians() to see that the list has actually been modified

function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician)
    })
}

function make_great(magicians: string[]){

    return magicians.map(name =>`The Great ${name}`);
}
let magician_name = ["Harry Poter","Crisss Angel","Shin Lim","Penn and Teller"]
 let great_megicians =  make_great(magician_name);

 show_magicians(great_megicians)