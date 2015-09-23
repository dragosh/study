/*
 FUNCTIONAL JAVASCRIPT IS GOOD
───────────────────────────────
 Basic: Recursion
 Exercise 7 of 18

Recursion is a fundamental programming concept which can lead to elegant and efficient solutions to algorithmic problems. In fact, recursion is so powerful, all iterating behaviour can be defined using recursive functions. You will find recursion indispensable when iterating over nested data structures.

A recursive function is a function which calls itself. For example, this recursive function will take an array of words, and return an array of those words, uppercased.

    function toUpperArray(items) {
       if (!items.length) return []             // end condition
       var head = items[0]                      // item to operate on
       head = head.toUpperCase()                // perform action
       var tail = items.slice(1)                // next
       return [head].concat(toUpperArray(tail)) // recursive step
    }

    toUpperArray(['hello', 'world']) // => ['HELLO', 'WORLD']

The point of this exercise is to familiarize yourself with recursion by implementing a familiar interface using a recursive function.

# Task

Implement Array#reduce using recursion.

To test your reduction works correctly we will use your reduce implementation to execute our solution to the previous basic_reduce problem. i.e. your reduce function will be passed an array of words, and a function, and an initial value which will return an object containing the counts for each word found in the array. You don't need to implement this functionality, it will be supplied to your reduce implementation.

For simplicity, your implementation of reduce need not replicate the behaviour of a reduce missing an initial value. You may assume the initial value will always be supplied.

## Arguments

  * arr: An Array to reduce over
  * fn: Function to use as the reduction step. Like regular Array#reduce, this function must be passed previousValue, currentValue, index and the array we're iterating over.
  * init: Initial value of the reduction. Unlike Array#reduce, this value is required (and you may assume it will always be supplied).

## Example

    // Your reduce function should behave the same as a
    // regular Array#reduce, but it will take the array
    // to operate on as the first argument:

    reduce([1,2,3], function(prev, curr, index, arr) {
      return prev + curr
    }, 0)
    // => 6

## Conditions

  * Do not use any for/while loops.
  * Do not use any Array methods like Array#map or Array#reduce.
  * Do not create any unecessary functions e.g. helpers.

## Resources

  * https://en.wikipedia.org/wiki/Recursion
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

 */
'use strict'

function reduce(arr, fn, initial) {
    let i = 0;
    let prev = initial || arr[i]

    let curr = fn(prev, arr[ i + 1], i, arr)
    i++

    if(arr[i]) {
        let newArr = arr.slice(i, 1)
        console.log(newArr);
        // reduce(newArr, fn, prev)

    }
    // if(arr.length) { return }
    // let prev = reduce(arr, fn, val)
    // let val = fn(prev, curr, i, arr)
    // console.log(arr[i], arr[i++]);
   return curr

}
let sum = (...args) => reduce(args, function(prev, curr, index, arr) {
    // console.log(arr, index);
    return prev + curr
})

console.log(sum(1, 8, 3));


module.exports = reduce
