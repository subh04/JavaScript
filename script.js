console.log("hi sabby");
var fullName="subhasish chatterjee";
var paymentMethod;
var courseName="MIT APP INVENTOR";
const uid="abc123";
//var fullName=prompt("Enter your name");
console.log("full name is : "+fullName);
var isloggedInFromGoogle=false;
var isloggedInFromFB=false;

//uid = "abcd123";

//interpolation
console.log(`
    user with name : ${fullName}
    whose unique id is followed by : ${uid}
    user with course : ${courseName}
    who is logged in from google = ${isloggedInFromGoogle}
    who is logged in from FB = ${isloggedInFromFB}

`);

L=100;
S=21.67;
var D;
D=(L-S)/L*100;
D=Math.round(D);
console.log(D+"% discount");

//ternary conditions
authenticated=false;
authenticated ? console.log("show signout") : console.log("show sign in");




