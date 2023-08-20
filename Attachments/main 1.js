document.getElementById("elinger").style.color = "blue";
document.getElementById("elinger").style.fontSize = "80px";
document.getElementById("elinger").style.fontWeight = "bold";
document.getElementById("elinger").style.textAlign = "center";
document.getElementById("elinger").style.fontFamily = "Arial";
console.log(
  "%cElzero %cInger %cSchool",
  "color: red ; font-size: 40px",
  "color: green ; font-size: 40px",
  "color: blue ; font-size: 40px"
);

console.group("gorup 1");
console.log("message 1");
console.log("message 2");
console.group("child group");
console.log("message 1");
console.log("message 2");
console.group("grand child group");
console.log("message 1");
console.log("message 2");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("gorup 2");
console.log("message 1");
console.log("message 2");
console.groupEnd();

console.table(["apples", "oranges", "bananas"]);
