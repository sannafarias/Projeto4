const tasks = [
    { id: 1, title: "Concluir projeto", completed: false, priority: "alta" },
    { id: 2, title: "Ler emails", completed: true, priority: "média" },
    { id: 3, title: "Participar da reunião", completed: false, priority: "alta" },
    { id: 4, title: "Comprar mantimentos", completed: true, priority: "baixa" },
    { id: 5, title: "Estudar JavaScript", completed: false, priority: "média" }
];

// a. Use findIndex para encontrar a posição da primeira tarefa incompleta

const firstIncompleteIndex = tasks.findIndex(task => !task.completed);

if (firstIncompleteIndex !== -1) {
    const firstIncompleteTask = tasks[firstIncompleteIndex];
    console.log(`A primeira tarefa incompleta está no índice ${firstIncompleteIndex} e tem o título: "${firstIncompleteTask.title}"`);
} else {
    console.log("Todas as tarefas estão completas.");
}
// RETORNA: A primeira tarefa incompleta está no índice 0 e tem o título: "Concluir projeto"
