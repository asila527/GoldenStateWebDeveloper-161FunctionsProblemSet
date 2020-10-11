
// isEven() function
console.log('isEven() function');
function isEven(num) {
    if (num % 2 === 0) {
        return 'true';
    } else {
        return 'false';
    }
}
console.log(isEven(4));
console.log(isEven(13));


// factorial()
console.log('factorial() function')
function factorial(num) {
    if (num === 0) {
        return 1;
    } else {
        for (let i = num - 1; i >= 1; i--) {
            num = num * i;
        }
        return num;
    }
}

console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(0));



// kebabToSnake()
console.log('kebabToSnake() function')
function kebabToSnake(str) {
    return str.replace(/[-_]/g, "_"); 
    }
console.log(kebabToSnake("hello-world"));
console.log(kebabToSnake("dogs-are-welcome"));
console.log(kebabToSnake("blah"));