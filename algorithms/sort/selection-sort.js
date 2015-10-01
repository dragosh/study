'use strict';
const selectionSort = module.exports = (input) => {
    let newArray = []
    let findSmallest = (input) => {
        let smallest = input[0]
        let smallIndex = 0
        for (let i = 0, len = input.length; i < len; i++) {
            if (input[i] < smallest) {
                smallest = input[i]
                smallIndex = i
            }
        }
        return smallIndex
    }
    for (let i = 0, len = input.length; i < len; i++) {
        let smallIndex = findSmallest(input)
        newArray.push(input.splice(smallIndex, 1)[0])
    }
    return newArray;
}

let list = [9, 2, 10, 5, 8, 7, 6, 20, 72, 23, 34, 29, 23];
console.log("Selection Sort:", selectionSort(list))
console.log("Selection Sort:", list)
