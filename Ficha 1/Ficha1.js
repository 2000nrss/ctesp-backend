function calculateFinalGrade(practicalGrade, theoreticalGrade) {
    var finalGrade = (practicalGrade + theoreticalGrade) / 2;
    return finalGrade;
}


function monthByName(monthNumber) {
    switch (monthNumber) {
        case 1:
            console.log("Janeiro");
            break;
        case 2:
            console.log("Fevereiro");
            break;
        case 3:
            console.log("Março");
            break;
        case 4:
            console.log("Abril");
            break;
        case 5:
            console.log("Maio");
            break;
        case 6:
            console.log("Junho");
            break;
        case 7:
            console.log("Julho");
            break;
        case 8:
            console.log("Agosto");
            break;
        case 9:
            console.log("Setembro");
            break;
        case 10:
            console.log("Outubro");
            break;
        case 11:
            console.log("Novembro");
            break;
        case 12:
            console.log("Dezembro");
            break;
        default:
            console.log("N/A");
            break;
    }
}

monthByName(3);


function calculator(operand1, operand2, operator) {
    if (operator == '+') {
        console.log(operand1 + operand2);
    } else if (operator == '-') {
        console.log(operand1 - operand2);
    } else if (operator == '*') {
        console.log(operand1 * operand2);
    } else if (operator == '/') {
        console.log(operand1 / operand2);
    } else if (operator == '^') {
        console.log(operand1 ^ operand2);
    }
}

calculator(2, 2, '+');


function multiplesOfFive(value) {
    for (let i = 1; i <= value; i++) {
        if (i % 5 == 0) {
            console.log(1);
        }
    }
}

multiplesOfFive(20)

function sumOf(value) {
    var soma = 0;
    for (let i = 1; i <= value; i++) {
        soma = soma + i;
    }
    console.log(soma);
}

sumOf(100);

function calculateFact(value) {
    var fact = 1;
    for (let i = value; i >= 1; i--) {
        fact = fact * i;
    }
    console.log(fact);
}

calculateFact(3);

var array = [1, 1, 1, 6, 1];

function calculateAverage(array) {
    var sum = 0;
    var average = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];

    }
    average = sum / array.length;
    return average;
}

var avg = calculateAverage(array);

function getMax(array) {
    var max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

var max = getMax(array);
console.log("Max:" + max);

function getMin(array) {
    var min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

var min = getMin(array);
console.log("Min:" + min);