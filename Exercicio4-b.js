const tasks = [
    { id: 1, title: "Concluir projeto", completed: false, priority: "alta" },
    { id: 2, title: "Ler emails", completed: true, priority: "média" },
    { id: 3, title: "Participar da reunião", completed: false, priority: "alta" },
    { id: 4, title: "Comprar mantimentos", completed: true, priority: "baixa" },
    { id: 5, title: "Estudar JavaScript", completed: false, priority: "média" }
];

// b. Use some para verificar se existe alguma tarefa de baixa prioridade completa

const completedLowPriorityTask = tasks.find(
    task => task.priority === "baixa" && task.completed === true
);

if (completedLowPriorityTask) {
    console.log(`Existe pelo menos uma tarefa de baixa prioridade completa: "${completedLowPriorityTask.title}"`);
} else {
    console.log("Não há nenhuma tarefa de baixa prioridade completa.");
}

// RETORNA: Existe pelo menos uma tarefa de baixa prioridade completa: "Comprar mantimentos".