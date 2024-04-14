
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send
//  out a new set of invitations. 
// You’ll have to think of someone else to invite.


let guestList= ["Robina Naeem","Ayesha Shuja","Samina Saleh"];

let dontCome=guestList[0];
console.log(dontCome,"can't come");
guestList.splice(0,1,"Nazia Shahzad");
guestList.forEach(guest=>console.log(`salam ${guest},would you like to dinner with me?`));