let arrayTest = [1, 2, 3];
let arrayStrings = ["hi", "how are you doing", "today is a good day since it's friday."]

//part 1;
//given an array of numbers, add and return the sum
function returnSum(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element
    });
    return sum
};

// console.log(returnSum(arrayTest))


//given an array ofnumbers, return the average of the sum
function returnAverage(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element
        // console.log(sum)
    });

    sum = sum / arr.length 
    return sum
};

// console.log(returnAverage(arrayTest))

//given an array of strings, return the longest string. using the sort method i can do this easily 
function longestStr(arr){
    let arrayMap = arr.sort(function (a, b){
        return b.length - a.length
    });
    
    return arrayMap[0]
}

// console.log(longestStr(arrayStrings))

//given an array of strings AND a number, return an array of the strings longer than the given number.
//function will take in an array and a number
//within the function there will be a newArray variable created that is an empty array
//function will iterate through the array and look at the length of each element
//if the element length is larger than the given number, it will push the element into newArray
//else it will continue to iterate
//in the end of the for loop, the function will return the newArray
//after much research i found decided to do the filter method because i couldnt get my loop to work 

function largerThan(arr, num) {
    return arr.filter((str) => str.length > num)

}

// console.log(largerThan(['say', 'hello', 'in', 'the', 'morning'], 3))


// given a number (n), print every number between 1 & n without using loops. USE RECURSION.
    let count = 1
    console.log(count)
function everyNumberBetween (num) {
    
    if(count < num ){
        count++ 
        console.log(count)
        everyNumberBetween(num)
    }
}

// console.log(everyNumberBetween(5))


//part 2: Thinking Methodocially 

let testObj = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];

let ageSort = testObj.sort((a, b) => parseFloat(a.age) - parseFloat(b.age))
let greaterThan50 = testObj.filter((obj) => obj.age < 50) /** depending on if you want an array of those under 50 or over 50, the greater than or equal signs is up to you */

console.log(ageSort, greaterThan50)