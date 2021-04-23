function reverseArray(arr) {
    let newArr = [];
    for (let a of arr) {
        newArr.unshift(a);
    }
    return newArr;
}

function reverseArrayInPlace(arr) {
    for (let i = 0; i < Math.floor(arr.length/2); i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
}

console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1,2,3,4,5]
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
