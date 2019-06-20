//funcion helper normalmente usada como una utileria para realizar una tarea en especifico
export function getPriorityList(tasks) {
    const prioritiesSet = new Set(tasks.map(task => task.priority));
    return Array.from(prioritiesSet);
}
