// Excercise 44
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
// The function should have one parameterich that is being ordered.Call the function three times, 
// using a different number of arguments each time that collects as many items as the function call provides, 
// and it should print a summary of the sandw. 
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n Making a sandwich with the following items: \n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nYour sandwich is ready");
}
//call the function three times, using a different number of arguments  
makeSandwich("cheese", "tomato", "lettuce");
makeSandwich("cheese", "egg", "cucumber");
makeSandwich("cheese", "chicken", "mayo");
