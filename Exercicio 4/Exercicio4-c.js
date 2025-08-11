const tasks = [
  { id: 1, title: "Concluir projeto", completed: false, priority: "alta" },
  { id: 2, title: "Ler emails", completed: true, priority: "média" },
  { id: 3, title: "Participar da reunião", completed: false, priority: "alta" },
  { id: 4, title: "Comprar mantimentos", completed: true, priority: "baixa" },
  { id: 5, title: "Estudar JavaScript", completed: false, priority: "média" },
];

// c. Use every para verificar se todas as tarefas de alta prioridade estão incompletas

const highPriorityIncomplete = tasks.filter((task) => task.priority === "alta");

if (
  highPriorityIncomplete.length &&
  highPriorityIncomplete.every((task) => !task.completed)
) {
  console.log(
    "Todas as tarefas de alta prioridade estão incompletas. Títulos:"
  );
  highPriorityIncomplete.forEach((task) =>
    console.log(`- title: "${task.title}"`)
  );
} else {
  console.log("Nem todas as tarefas de alta prioridade estão incompletas.");
}

const allTasksCompleted = tasks.every((task) => task.completed);
console.log("Todas as tarefas concluídas:", allTasksCompleted);

/* RETORNA :
Todas as tarefas de alta prioridade estão incompletas. Títulos:
- title: "Concluir projeto"
- title: "Participar da reunião"
Todas as tarefas concluídas: false
*/
