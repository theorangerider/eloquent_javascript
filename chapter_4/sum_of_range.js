function my_range(a,b) {
    arr = [];
    for (let i = a; i <= b; i++) {
        arr.push(i);
    }
    return arr;
}

function my_sum(my_arr) {
    let sum = 0;
    for(let val of my_arr) {
        sum += val;
    }
    return sum;
}

console.log(my_range(1,10));
console.log(my_range(3,17));
console.log(my_sum(my_range(1,10)));
