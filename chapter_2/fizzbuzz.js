for(let i = 1; i <= 100; i++) {
    let my_str = "";
    if(i % 3 == 0) {
        my_str = "Fizz"
    }
    if(i % 5 == 0) {
        my_str += "Buzz"
    }
    console.log(my_str || i);
}
