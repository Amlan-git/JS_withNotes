// ARROW FUNCTIONS

//normal function
// function showMessage(){
//     window.alert('hi from normal function');
// }

// showMessage();

// //function expression
// let showMessage2 = function() {
//     alert('hi from function expression');
// };
// here ; is added at the end of the function expression
// The semicolon ; is recommended at the end of the statement, 
// it’s not a part of the function syntax.
/* The semicolon would be there for a simpler assignment, 
such as let sayHi = 5;, 
and it’s also there for a function assignment. 
*/


//example for callback functions & function expression
function ask(question, yes, no){
    if(confirm(question))  {
        yes();
    }
    else{
        no();
    }
}
function showOk(){
    alert("you agreed");
}
function showCancel(){
    alert("you cancelled");
}

ask("Do you agree", showOk, showCancel);



//arrow function
// function showMessage3(){

// }
let functionName = (a,b) => (a+b);

// in simple terms, it's the shorter version of : 
// let functionName = function(a,b){
//     return a+b;
// } 


let sum = (a,b,c) => (a+b+c);

// if there is only one parameter then we can omit the ()
let double = a => a*2;

// no arguments
let sayHi = () => (alert("Hello!"));


//multiline arrow functions 
