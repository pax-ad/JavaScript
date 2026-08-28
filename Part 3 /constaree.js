const arr = [1, 2, 3, 4, 5];
const newArr = arr.map(num => num * 2);

console.log(newArr); // Output: [2, 4, 6, 8, 10]    

//but if we run this

arr = [6, 7, 8, 9, 10]; // This will throw an error because arr is a constant and cannot be reassigned.