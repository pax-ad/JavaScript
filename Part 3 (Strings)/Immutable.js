let a = "help   ";
a.trim();
let b = a.trim();
console.log (a);
console.log(b);

//since strings are immutable in js
// whenever we make changes new string gets created and old one remains same

// a still "help   "
// b is "help"