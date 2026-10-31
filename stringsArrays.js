// Reverse each string in an Array and store it in anew array.
// let arr = ["Hero","zero","Abc","Inno"];
// let result = [];
// for(let i = 0; i < arr.length;i++){
//     let rev=""
//     for(let j=arr[i].length-1;j>=0;j--){
//         rev += arr[i][j];
//     }
//     result.push(rev);
// }
// console.log(result);

// -------------------------------------------------------
// Find all palindrome strings in an Array.
// let arr = ["madam","hero","level","mom","zero"];
// let result = [];

// for(let i = 0;i<arr.length;i++){
//     let rev="";

//     for(let j=arr[i].length-1;j>=0;j--){
//         rev += arr[i][j];
//     }
//     if(arr[i] === rev){
//         result.push(arr[i]);
//     }
// }
// console.log(result);
// -------------------------------------------------
// convert each string in the given array to uppercase and store the results in a new array.
// let arr = ["hero","zero","javascript","python"];
// let result = [];

// for(let i = 0;i<arr.length;i++){
//     result.push(arr[i].toUpperCase());
// }
// console.log(result);
// ------------------------------------------
// count the vowels in each string of the given array and display the count for each string.
// let arr = ["Hero","Zero","Abc","Inno"];
// for(let i=0;i<arr.length;i++){
//     let count = 0;

//     for(let j=0;j<arr[i].length;j++){
//         let ch = arr[i][j].toLowerCase();

//         if(
//             ch=="a" || ch=="e" || ch=="i" || ch =="o" || ch=="u"
//         ) {
//             count++;
//         }
//     }
//     console.log(arr[i] + ":" + count)
// }
// --------------------------------------------------------------
// Store vowel counts in an object.
// let arr = ["Hero","Zero","Abc","Inno"]
// let obj = {};

// for(let i=0;i<arr.length;i++){
//     let count = 0;

//     for(let j = 0;j<arr[i].length;j++){
//         let ch=arr[i][j].toLowerCase()

//         if(
//             ch == "a" || ch == "e"||
//             ch == "i" || ch == "o" ||
//             ch == "u"
//         ){
//             count++;
//         }
//     }
//     obj[arr[i]] = count;
// }
// console.log(obj);
// ----------------------------------------------------
// Store word lengths in an object.
let str = "Welcome to javascript";
let arr = str.split(" ");
let obj = {}

for(let i =0;i<arr.length;i++){
    obj[arr[i]] = arr[i].length;
}
console.log(obj)