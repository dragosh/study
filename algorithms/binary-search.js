'use strict';
const binarySearch = function binarySearch(list, item) {
    let low = 0
    let high = list.length - 1

    while (low <= high) {
        let mid = (low + high)
        let guess = list[mid]
        if (guess === item) {
            return mid
        }
        if (guess > item) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return -1
}
let list = [ 18, 1, 0, 18, 7, 15, 14, 1, 12, 5 ].sort( (a, b) => a - b )

console.time('binarySearch');
console.log(binarySearch(list, 15));
console.timeEnd('binarySearch');
