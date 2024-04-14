//  Excercise 16
// More Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program
//  informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your
//  list. 
// • Print a new set of invitation messages, one for each person in your list.
var guests = ["Nazia", "Tooba", "Misbah"];
console.log("Great news!I found a bigger dinner table");
// Addingmore guests
guests.unshift("Samina");
guests.splice(guests.length / 2, 0, "Shahzad");
guests.push("Zeeshan");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
