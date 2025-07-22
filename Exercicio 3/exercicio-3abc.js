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

const firstStudentWithGradeOver90 = students.find(student => {return student.grade.some(grade => grade > 90);});
console.log('Primeiro estudante com nota maior que 90:', firstStudentWithGradeOver90);

// 3. Usando filter para encontrar estudantes ativos com media acima de 80
const highPerformingActiveStudents = students.filter(student => {
  const average = student.grade.reduce((sum, grade) => sum + grade, 0) / student.grade.length;
  return student.active && average > 80;
}
);
  
console.log('\\nEstudantes ativos com média acima de 80:');
highPerformingActiveStudents.forEach((student) => console.log(student.name));

//a. Use filter para encontrar estudantes inativos
const inactiveStudentsWithLowAverage = students.filter(student => {
  const average = student.grade.reduce((sum, grade) => sum + grade, 0) / student.grade.length;
  return !student.active && average < 50;
});

console.log('\nEstudantes inativos com média abaixo de 50:');
inactiveStudentsWithLowAverage.forEach(student => console.log(student.name));
