function add(num1, num2=10) {
    // if(num2 == undefined) {
    //     num2 = 0;
    // }
    // num2 = num2 || 2;

    return num1 + num2;
}

const total = add(5, 20);

console.log(total);