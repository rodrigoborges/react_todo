import Task from "./Task";
import iTask from "../interfaces/Task"

interface TasksProps {
    listTasks: iTask[],
    onSetlistTasks: (id: number, status: boolean) => void
}

export default function Tasks({listTasks, onSetlistTasks}: TasksProps) {

    const numTask: number = listTasks.length;
    if (numTask === 0) {
        return (
            <div>
                <h1>Não existem tarefas a serem realizadas.</h1>
            </div>
        );
    } else {
        return (
            <div>
                <header>
                    <h4>Total de tarefas: {numTask}</h4>
                    <h4>Concluídas: {listTasks.filter(task => task.done).length} de {numTask}</h4>
                </header>
                <div>
                    {listTasks.map(task => { return (<Task key={task.id} task={task} onSetlistTasks={onSetlistTasks} />) } )}
                </div>
            </div>
        );
    }
}