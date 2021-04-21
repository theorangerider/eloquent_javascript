let size = 8;

/* Prints a chessboard of a given size x size */

let my_str = "";
for(let i = 0; i < size; i++) {
    let a = " ";
    let b = "#";
    if (i % 2 == 1) {
        a = "#";
        b = " ";
    }
    for (let j = 0; j < size; j++) {
        if(j % 2 == 0) {
            my_str += a;
        }
        else {
            my_str += b;
        }
    }
    my_str += "\n";
}
console.log(my_str);
