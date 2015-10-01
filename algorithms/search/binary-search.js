'use strict';
/**
* ------------------------------------------------------------------------
* Imports
* ------------------------------------------------------------------------
*/
const array = require("../../generators/array");

/**
* ------------------------------------------------------------------------
* https://www.manning.com/books/grokking-algorithms
* ------------------------------------------------------------------------
*/
const binarySearch_A = (items, value) => {
    let low = 0
    let high = items.length - 1

    while (low <= high) {
        let mid = Math.floor( (low + high)/ 2)
        let guess = items[mid]
        if (guess === value) {
            return mid
        }
        if (guess > value) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return -1
}
/**
* ------------------------------------------------------------------------
* Copyright 2009 Nicholas C. Zakas. All rights reserved.
* MIT-Licensed, see source file
* ------------------------------------------------------------------------
*/
const binarySearch_B = (items, value) => {

    var startIndex  = 0,
        stopIndex   = items.length - 1,
        middle      = Math.floor((stopIndex + startIndex)/2);

    while(items[middle] != value && startIndex < stopIndex){

        //adjust search area
        if (value < items[middle]){
            stopIndex = middle - 1;
        } else if (value > items[middle]){
            startIndex = middle + 1;
        }

        //recalculate middle
        middle = Math.floor((stopIndex + startIndex)/2);
    }

    //make sure it's the right value
    return (items[middle] != value) ? -1 : middle;
}

// needs to be sorted
const input = 'ABCDEFGHI'.split('') ;//array(20).value().sort((a, b) => a - b);
let item = 'A';

console.log('Input', input);
console.time('indexOf');
console.log(input.indexOf(item));
console.timeEnd('indexOf');

console.time('binarySearch_A');
console.log(binarySearch_A(input, item));
console.timeEnd('binarySearch_A');

console.time('binarySearch_B');
console.log(binarySearch_B(input, item));
console.timeEnd('binarySearch_B');
