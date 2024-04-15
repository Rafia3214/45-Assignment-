"use strict";
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
//Define an array of magician's names 
let magician_name = ["Harry Poter", "Crisss Angel", "Shin Lim", "Penn and Teller"];
//making a copy of orignal array through .slice()function
let copy_magician_name = magician_name.slice();
//modify the copied array to include "The Great" with their names
let copy_great_magicians = make_great(copy_magician_name);
//show both arrays Orignals and copied
//Orignal
show_magicians(magician_name);
//copied
show_magicians(copy_great_magicians);
