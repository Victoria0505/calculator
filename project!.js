var x = prompt("Enter your first number: ");
var y = prompt("Enter your second number: ")
var o = prompt("Operation: ")

document.write(x );
document.write(o );
document.write(y );
document.write("=");

x = parseFloat(x);
y = parseFloat(y);

switch (o) { 
    case '+': 
    document.write( x + y); 
    break; 
    case '-': document.write( x - y);
    break; 
    case '*': document.write( x * y);
    break; 
    case '/': document.write( x / y);
    break; 
    default: document.write("Error"); 
    break; 
} 





















// if (operation == "+") {
//     add()
// }else if (operation === "-") {
//     var answer = minus();
//     console.log("Result: " +answer)
// }else if (operation === "*") {
//     var answer = times();
//     console.log(result)
// } else if(operation === "/"){
//     var answer = divide();
// console.log(result);
// } else{
//     console.log("Error")
// }

    


// //Function for addition
// function add(x,y) {
//     console.log(x + y);
// }

// //Function for subtraction
// function minus(x,y) {
//     var result = x-y;
// }

// //Function for multiplication
// function times(x,y) {
//     var result = x*y;
// }

// //Function for division
// function divide(x,y) {
//     var result = x/y;
// }