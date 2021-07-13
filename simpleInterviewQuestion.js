//01. Swap variables.

//with temp.
let a = 4;
let b = 5;
let temp = a; //now the value of temp is 4;
a = b; //now the value of a is 5;
b = temp; //now the value of b is 4;
console.log("after swaping the value a: ", a, "b: ", b);

//without temp.
let x = 6;
let y = 7;
x = x + y; // now the value of x is = 13;
y = x - y; // now the value of y is = 6;
x = x - y; // now the value of x is = 7;
console.log("after swaping the value x: ", x, "y: ", y);

//with destructuring.
let p = 8;
let q = 9;
[p, q] = [q, p];
console.log("after swaping the value p: ", p, "q: ", q);


//02. Random number.
const num = 2.27665;
const result = Math.floor(num);
const result1 = Math.ceil(num);
const result2 = Math.round(num);
const result3 = Math.random();
//Create a dice with random number.
for (let i = 0; i < 10; i++) {
  const randomNumber = Math.random() * 6;
  const output = Math.round(randomNumber);
  console.log(output);
}


//03. Find max value.
const google = 656;
const facebook = 659;
const youtube = 652;
const maxValue = Math.max(google, facebook, youtube);
console.log(maxValue);


//04. Find the largest element of an array.
const numbers = [45, 75, 86, 34, 75, 97, 127, 96, 99];
let max = [0];
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  if (element > max) {
    max = element;
  }
}
console.log(max);


//05. Sum of all numbers in an array.
function getArraySum(n) {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    const e = n[i];
    sum = sum + e;
  }
  return sum;
}
const total = getArraySum([300, 200, 250]);
console.log(total);


//06. Remove duplicate item from an array.
const serialNumber = [3, 5, 7, 4, 7, 5, 7, 3, 2, 1, 9, 0, 8, 0, 9];
const unique = [];
for (let i = 0; i < serialNumber.length; i++) {
  const element = serialNumber[i];
  const index = unique.indexOf(element);
  if (index == -1) {
    unique.push(element);
  }
}
console.log(unique);


//07. Count the number of words in a string.
const speech = "Count the    number of words in a string ";
let count = 0;
for (let i = 0; i < speech.length; i++) {
  const char = speech[i];
  if (char == " " && speech[i - 1] != " ") {
    count++;
  }
}
console.log(count);


//08. Reverse string.
function reverseString(str) {
  let reverse = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    reverse = char + reverse;
  }
  return reverse;
}
const reverseResult = reverseString("I am a good person");
console.log(reverseResult);
