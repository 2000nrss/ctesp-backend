// Declaração e inicialização de objetos
var std1 = { name: "Test", number: 1, grade: 12 };
var std2 = { name: "Test1", number: 2, grade: 2 };
var std3 = { name: "Test2", number: 3, grade: 19 };
var std4 = { name: "Test3", number: 4, grade: 10 };
// Declaração e inicialização de um array vazio
var students = [];
// Adicionar um objeto ao array
students.push(std1);
students.push(std2);
students.push(std3);
students.push(std4);
console.log(students);

function calcFailedGrades(array) {
    var count = 0;
    array.forEach(element => {
        if (element.grade < 9.5) {
            count++;
        }
    });
    return count;

}

var failedGradesCount = calcFailedGrades(students);
console.log("Total de notas negativas: " + failedGradesCount);