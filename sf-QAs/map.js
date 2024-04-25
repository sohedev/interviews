function myMap(arr, callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i]));
    }
    return newArr;
}

// Example usage
let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = myMap(numbers, function (num) {
    return num * num;
});

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]