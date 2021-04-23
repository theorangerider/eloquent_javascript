function arrayToList(arr) {
    let head = {value:arr[0], rest:null};
    let cur = head;
    if (arr.length > 1) {
        for (let elem of arr.splice(1)) {
            cur.rest = {value:elem, rest:null};
            cur = cur.rest
        }
    }
    return head;
}

function listToArray(list) {
    let arr = [];
    let cur = list;
    while (cur) {
        arr.push(cur.value);
        cur = cur.rest;
    }
    return arr;
}

function prepend(elem, list) {
    return {value:elem, rest:list};
}

function nth(list, pos) {
    if (pos == 0) {
        return list.value
    } else {
        return nth(list.rest, pos-1);
    }
}

console.log(arrayToList([10,20]));
console.log(listToArray(arrayToList([10,20,30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
