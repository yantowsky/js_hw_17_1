class Calculator {
    add(firstNum, secondNum) {
        return secondNum === 0 ? `Завжди буде ${firstNum}` : firstNum + secondNum;
    }
    subtract(firstNum, secondNum) {
        return secondNum === 0 ? `Завжди буде ${firstNum}` : firstNum - secondNum;
    }
    multiply(firstNum, secondNum) {
        return firstNum === 0 || secondNum === 0 ? 'Завжди буде нуль' : firstNum * secondNum;
    }
    divide(firstNum, secondNum) {
        return firstNum === 0 ? 'Завжди буде нуль' : secondNum === 0 ? 'Ділити на нуль неможливо' : firstNum / secondNum;
    }
}

const calc = new Calculator();

console.log(calc.add(5, 3)); // 8

console.log(calc.subtract(10, 4)); // 6

console.log(calc.multiply(3, 6)); // 18

console.log(calc.divide(8, 2)); // 4