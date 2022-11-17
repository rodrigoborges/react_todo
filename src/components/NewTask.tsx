import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './NewTask.module.css';
import iTask from '../interfaces/Task';

interface NewTaskProps {
    onNewTask: (task: iTask) => void
}

export default function NewTask({onNewTask }: NewTaskProps) {

    const [idIncrement, setIdIncrement] = useState(1);
    const [description, setDescription] = useState('');
    let task: iTask = {} as iTask;

    function handleChangeDescription(e: ChangeEvent<HTMLInputElement>) {
        setDescription(e.target.value)
    }

    function handleSubmitTask(e: FormEvent) {
        e.preventDefault();

        if (description === '') return;

        task.id = idIncrement;
        task.description = description;
        task.done = false;

        onNewTask(task)

        setDescription('');
        setIdIncrement(idIncrement + 1);

    }

    return (
        <div>
            <form onSubmit={handleSubmitTask} className={styles.newTask}>
                <input type="text" placeholder='Adicione uma nova tarefa' value={description} onChange={handleChangeDescription}/>
                <button type="submit">Criar</button>
            </form>

        </div>
    );
}