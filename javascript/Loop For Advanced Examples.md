```javascript
/*
  Loop For Advanced Example
*/

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let i = 0;

for (;;) {
  console.log(products[i]);
  i++; //or i+= 1 or i = i+1
  if (i === products.length) break;
}
```