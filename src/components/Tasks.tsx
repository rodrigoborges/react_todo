import Task from "./Task";
import iTask from "../interfaces/Task"

interface TasksProps {
    listTasks: iTask[]
}

export default function Tasks({listTasks}: TasksProps) {
    console.log(listTasks)

    if (listTasks === undefined) {
        return (
            <div>
                <h1>Não existem tarefas a serem realizadas.</h1>
            </div>
        );
    } else {
        return (
            <div>
                {listTasks.map(task => <Task key={task.id} task={task} />) }
            </div>
        );
    }
}