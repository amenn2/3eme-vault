```javascript

/*

  If Condition Challenge

*/

  

let a = 0;

if (a < 10) {

  console.log(10);

} else if (a >= 10 && a <= 40) {

  console.log("10 To 40");

} else if (a > 40) {

  console.log("> 40");

} else {

  console.log("Unknown");

}

  

// Write Previous Condition With Ternary If Syntax

a < 10

  ? console.log(10)

  : a >= 10 && a <= 40

  ? console.log("10 To 40")

  : a > 40

  ? console.log("> 40")

  : console.log("Unknown");

  

// inger 2

  

let st = "Elzero Web School";

let len = st.length

  
  

if ((len*2).toString() === "34") {

    console.log("Good");

}

else {

    console.log("no")

}

  

if (st.charAt(st.indexOf("W")).toLowerCase() === "w") {

  console.log("Good");

}

  

if ( st !== "string") {

  console.log("Good");

}

  

if (typeof len === "number") {

  console.log("Good");

}

  

if ((st.slice(0 ,6)).repeat(2) === "ElzeroElzero") {

  console.log("Good");

}
```