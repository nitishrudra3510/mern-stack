console.log("this is about the functions");
function mysubjects(sub, msg){
    console.log(sub+ msg + "this is your subject");
}

function myfunction(a, b , c){
    let sum = a+b+c;
    return sum;
}

let subject = "CN";
let sub2 = "DBMS";
let sub3 = "sc";
let sub4 = "web";
let sub5 = "python"
let msg = "this is your subject";
mysubjects(subject, msg);
mysubjects(sub2, msg);
mysubjects(sub3);
mysubjects(sub4);

// console.log(subject + "this is your subject");

// console.log(sub2 + "this is your subject");

// console.log(sub3 + "this is your subject");

// console.log(sub5 + "this is your subject");


// returning a value

let returnval = myfunction(2, 3, 5);
console.log(returnval);
