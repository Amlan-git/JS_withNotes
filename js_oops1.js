// //this 

// let user = { name: "Amlan",
//     sayBye() {
//         console.log(`Bye from ${this.name}`);
//     }
// };

// user.sayBye();
// //Bye from Amlan

// let user1 = {name: "Esha"};

// function sayHello(name){
//     console.log(`Hello! I am ${this.name}` );
//     console.log("Hi I am " + this.name + " and good morning!");
//     // Hi I am Amlan and good morning! 
//     // concatenation happens here
//     console.log("Hii I am " , this.name), "good morning!!"; 
//     // this one won't concatenate "good morning !!" after the ,

// }



// // user.ab = sayHello;

// user.ab = () => {
//     console.log(`Hello from arrow! I am ${this.name}` );
// }

// // user.a = "hello hi hi bye bye";
// user1.sayHello = sayHello;

// user.ab();
// // console.log(user.a);
// user1.sayHello();

// let cap = {
//     name: "Steve",
//     sayHi : function(){
//         console.log("53", this.name);
//         // 53 Steve
//         const iAmInner = function(param){
//             console.log("55", this.name);
//             //55 
//             // it won't be undefined as this here refers to the window object
//         }
//         iAmInner(20);
//     }
// }

// cap.sayHi();


var firstName = "Loki";
let cap = {
    firstName: "Steve",
    sayHi : function(){
        console.log("53", this.firstName);
        const subInner = () =>{
            console.log("54", this.firstName);
            const iAmInner = () => {
                console.log("55", this.firstName);
            };
            iAmInner();
        };
        subInner();

    },
};

cap.sayHi();

