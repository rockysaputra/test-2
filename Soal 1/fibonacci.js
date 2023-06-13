let rows = process.argv[2];
let columns = process.argv[3];

const number = rows * columns;
let number1 = 0;
let number2 = 1;
let nextTerm;

console.log('Fibonacci Series:');

let fibonacciArray = [];
for (let i = 1; i <= number; i++) {
    fibonacciArray.push(number1);
    // menyimpan nilai nya ke array
    nextTerm = number1 + number2;
    number1 = number2;
    number2 = nextTerm;
}

for (let j = 0; j < rows; j++) {
    let str = "";
    for (let k = 0; k < columns; k++) {
        const index = j * columns + k;
        if (index < fibonacciArray.length) {
            str += fibonacciArray[index] + "  ";
            // Mencetak nilai dari array dalam bentuk kolom
        }
    }
    console.log(str);
}
