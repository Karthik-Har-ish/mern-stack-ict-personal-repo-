// Question 1: 
// iterate through each element of array and return the sum of all numbers in the array. also find out if each element of the array is odd or even
function sumOfArray(arr){
    // write your code here
    let sum=0;
    for(i=0;i<arr.length;i++){

        // calculation of the sum of all elements 
        sum+=arr[i];

        // checks if the number at index i is even or odd and logs the same into console
        if(arr[i]%2===0){
            console.log(`${arr[i]} is even`);
        } else{
            console.log(`${arr[i]} is odd`);
        }
    }
    return sum;
}


// Question 2:

// Count the number of digits in any number

function digits(n){
    // write code here...
    // Convert the number into a string and then find the length of string
    return n.toString().length
}


// Question 3:

// find the largest number in an array

function largestNum(arr){
    // write code here...
    return Math.max(...arr)
}
// test code
let nums = [10,25,67,89,34,22]
console.log(`largest number in array is ${largestNum(nums)}`)

