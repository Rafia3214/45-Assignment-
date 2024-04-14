// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. 
// You’ll have to think of someone else to invite.
var guestList = ["Robina Naeem", "Ayesha Shuja", "Samina Saleh"];
var dontCome = guestList[0];
console.log(dontCome, "can't come");
guestList.splice(0, 1, "Nazia Shahzad");
guestList.forEach(function (guest) { return console.log("salam ".concat(guest, ",would you like to dinner with me?")); });
