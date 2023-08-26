```javascript
/*

  Loop Challenge

*/

  

let myAdmins = ["Ahmed", "Osama", "Sayed", "zli", "Stop", "Samera"];

let myEmployees = [

  "Amgad",

  "zia",

  "Samah",

  "Ameer",

  "Omar",

  "Othman",

  "Amany",

  "Samia",

  "Anwar",

];

let neww = [];

for (let i = 0; i < myAdmins.length; i++) {

  if (myAdmins[i] === "Stop") {

    break;

  }

  neww.push(myAdmins[i]);

}

document.write(`<div>We Have ${neww.length} Admins</div>`);

document.write(`<hr></hr>`);

for (let j = 0; j < neww.length; j++) {

  let counter = 0;

  document.write(`<h2>The admin for team ${j + 1} is ${myAdmins[j]}</h2>`);

  document.write(`<h3>Team members</h3>`);

  

  for (let x = 0; x < myEmployees.length; x++) {

    if (myEmployees[x][0] === myAdmins[j][0]) {

      document.write(`<p> ${++counter} -${myEmployees[x]}</p>`);

    }

  }

  document.write(`<hr></hr>`);

}
```

better

```javascript
let myAdmins = ["Ahmed","Oussama", 'Ali',"Sayeed","Stop","Samira"],

    myEmployees = ["Amir","Simo","Omar","Ossman","Amal","Salim","Souad"],

    justAdmin = [];

  

for(let i = 0 ; i < myAdmins.length ; i++){

    if(myAdmins[i] === "Stop") {

        break;

    }

    justAdmin.push(myAdmins[i]);

}

  

document.write(`We have ${justAdmin.length} Admins :`);

document.write(`<hr>`);

  

for (let j = 0 ; j < justAdmin.length ; j++) {

    let counter = 1;

    document.write(`<div>`);

        document.write(`The admin for team ${j + 1} is ${justAdmin[j]} :`);

        document.write(`<h3>Team Members :</h3>`);

            for (let k = 0; k < myEmployees.length; k++) {

                if(justAdmin[j][0] === myEmployees[k][0]) {

                    document.write(`<p> - ${counter++}) ${myEmployees[k]} </p>`);

                }

            }

    document.write(`</div>`);

    document.write(`<hr>`);

}
```