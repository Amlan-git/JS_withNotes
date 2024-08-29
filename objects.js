let user1 = new Object();

let user2 = {}; // object literal

let user3 = {
    name: "Amlan",
    age: 24,
    likes: [music, tech, football],
    isMusician : true,
    "is he hardworking": true
}

//add
user3.role = "Fullstack Developer"
user3.course = "Harkirat 100x"

//delete 
delete user3.course;

//read
alert(user3.role);
console.log(user3.likes);


