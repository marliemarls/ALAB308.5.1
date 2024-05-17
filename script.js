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

function largerThan(arr, num) {
    let newArray = [];
    for(let i = 0; i <= arr.length; i++){
        const element = arr[i]
        console.log(element)
        
    }

}

console.log(largerThan(arrayStrings, 3))


//given a number (n), print every number between 1 & n without using loops. USE RECURSION.

// function everyNumberBetween (num) {
//     let count = 1
//     if(count < num){
//         console.log(count)
//         count++
//     }

// }

// console.log(everyNumberBetween(5))