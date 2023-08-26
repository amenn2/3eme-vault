```javascript
/*
  Number
  - Double Precision
  - Syntactic Sugar "_"
  - e
  - **
  - With Decimal
  - Number + BigInt
  - Number Min Value
  - Number Max Value
*/

console.log(1000000);
console.log(1_000_000); //the same (Syntactic Sugar)
console.log(1e6); // 6 zeros
console.log(10 ** 6); //the same
console.log(10 * 10 * 10 * 10 * 10 * 10); 
console.log(1000000.0);

console.log(Number.MAX_SAFE_INTEGER);
//9007199254740991
console.log(Number.MAX_VALUE);
//1.7976931348623157e+308
console.log(Number.MAX_VALUE + 23434343434);
//1.7976931348623157e+308 (the same because max is max)
```