// // //  Assignment 11 // // //


// Ek list of integers lein.
// Har integer ko check karein, agar woh 3 se divisible hai to us integer ko replace karein "Three", agar 5 se divisible hai to us integer ko replace karein "Five", agar dono se divisible hai to us integer ko replace karein "ThreeFive".
// Agar integer 3 ya 5 se divisible nahi hai to us integer ko unchanged rakhein.
// Output mei list ke modified elements ko print karein.

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < num.length; i++) {
    // console.log(num[i]);
    if (num[i] % 3 === 0 && num[i] % 5 === 0) {
        num[i] = "ThreeFive";
    } else if (num[i] % 3 === 0) {
        num[i] = "Three";
    } else if (num[i] % 5 === 0) {
        num[i] = "Five";
    }
}
console.log(num);

// // //  Assignment 12 // // //


// Ek list of integers lein aur sirf even numbers ko 
// filter karke ek nayi list generate karein.

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = arr2.filter(num => num % 2 === 0);
console.log(evenNumbers);



// Ek list of integers lein aur uss list ka maximum element find karein.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let max = [0];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}


// Ek string input lein aur uss mein vowels ki counting karein.

let inputString = "Hello, World!";
let vowelCount = 0;
inputString = inputString.toLowerCase();
for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === 'a' || inputString[i] === 'e' || inputString[i] === 'i' || inputString[i] === 'o' || inputString[i] === 'u') {
        vowelCount++;
    }
}
console.log("Number of vowels:", vowelCount);

// Ek list of integers lein aur uski elements ko reverse karein.

let str2 = "Javascript";
let reverse2 = str2.split("").reverse().join("");
console.log(reverse2);