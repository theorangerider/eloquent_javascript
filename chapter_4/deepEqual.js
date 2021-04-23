function deepEqual(a,b) {
    if (a == null && b == null) {
        return true;
    }
    if (a == null || b == null) {
        return false;
    }

    if ((typeof a == "object") && (typeof b == "object")) {
        for (let key of Object.keys(a)) {
            if (key in b) {
                if (!deepEqual(a[key], b[key])) {
                    return false;
                }
            } else {
                return false;
            }
        }
        for (let key of Object.keys(b)) {
            if (!(key in a)) {
                return false;
            }
        }
        return true;
    }
    return (a === b);
}

let obj = {here: {is: "an"}, object: 2};
console.log(true, deepEqual(obj, obj));
console.log(false, deepEqual(obj, {here: 1, object: 2}));
console.log(true, deepEqual(obj, {here: {is: "an"}, object: 2}));
console.log(false, deepEqual(obj, null));
console.log(true, deepEqual(null, null));
console.log(false, deepEqual(obj, {here: {is: "an"}, object:2, extra:1}));
