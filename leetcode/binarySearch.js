function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (arr[middle] < target) {
            // search right side
            start = middle + 1;
        } else if (arr[middle] > target) {
            // search left side
            end = middle - 1;
        } else if (arr[middle] === target) {
            return middle;
        }
    }

    // target not found
    return -1;
}

console.log(binarySearch[1,2,3,4], 1);
console.log(binarySearch[1,2,3,5,9], 4);