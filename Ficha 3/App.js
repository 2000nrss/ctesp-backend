function started() {
    console.log("Started Download");
}

function update(percentage) {
    console.log(percentage + "% of Download");
}

function completed() {
    console.log("Completed Donwload");
}

function performDownload(startedFn, updateFn, completedFn) {
    startedFn();
    for (let i = 0; i <= 100; i++) {
        updateFn(i);
    }
    completedFn();
}

performDownload(started, update, completed);

var arrayUtils = require("./ArrayUtils");

var array = [1, 2, 4, 5];
var empty = arrayUtils.isEmpty(array);
console.log("Array is empty?: " + empty);

var max = arrayUtils.max(array);
console.log("Maximum value of array: " + max);

var value = 2;
var index = arrayUtils.indexOf(array, value);
console.log("Index of number " + value + " is :" + index);

var subArray = arrayUtils.subArray(array, 0, 2);
console.log("Sub-Array: " + subArray);

var isSameLenght = arrayUtils.isSameLength(array, []) //[] = um array vazio
console.log("Arrays are the same size?: " + isSameLenght);

var inverted = arrayUtils.reverse(array);
console.log("Array Inverted: " + inverted);

var swapped = arrayUtils.swap(array, 0, 1);
console.log("Swapped Array: " + swapped);

var contains = arrayUtils.contains([], 100);
console.log("Array contains value?: " + contains);

var concat = arrayUtils.concatenate(array, [7, 7, 7, 7]);
console.log("Concat: " + concat);