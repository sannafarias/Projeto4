// Exercício 3: filter e find

const students = [
  {id:1, name: 'João', age: 20, grade: [85, 90, 78], active : true},
  {id:2, name: 'Maria', age: 19, grade: [92, 95, 89], active : true},
  {id:3, name: 'Pedro', age: 21, grade: [70, 65, 80], active : false},
  {id:4, name: 'Ana', age: 18, grade: [60, 65, 68], active : true},
  {id:5, name: 'Carlos', age: 22, grade: [90, 88, 92], active : false},
]

// 1. Usando filter para encontrar estudantes com idade >= 20

const studentsOver20 = students.filter(student => student.age >= 20);
console.log('Estudantes com 20 anos ou mais:', studentsOver20);


// 2. Usando find para encontrar o primeiro estudante com nota > 90

const firstStudentWithGradeOver90 = students.find(student => student.grade.some(grade => grade > 90));
console.log('Primeiro estudante com nota maior que 90:', firstStudentWithGradeOver90);