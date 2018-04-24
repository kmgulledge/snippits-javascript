// Given an array of integers, find the pair of adjacent elements 
// that has the largest product and return that product.

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// adjacentElementsProduct(inputArray) = 21.

// 7 and 3 produce the largest product.

// Input/Output

// [time limit] 4000ms (js)
// [input] array.integer inputArray

// An array of integers containing at least two elements.

// Guaranteed constraints:
// 2 ≤ inputArray.length ≤ 10,
// -1000 ≤ inputArray[i] ≤ 1000.

// [output] integer

// The largest product of adjacent elements.
function adjacentElementsProduct(inputArray) {
var largestProduct = -1001;
for(i = 0; i <= inputArray.length; i++) {
if(inputArray[i] * inputArray[i+1] > largestProduct) {
largestProduct = inputArray[i] * inputArray[i+1];
}
}
return largestProduct;
}