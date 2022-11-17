import styles from './Task.module.css';
import iTask from "../interfaces/Task";
import { FormEvent, useState } from 'react';
interface TaskProps {
    task: iTask,
    onSetlistTasks: (id: number, status: boolean) => void
}

export default function Task({task, onSetlistTasks}: TaskProps) {

    const [checked, setChecked] = useState(task.done);

    function handleChangeDone(e: FormEvent<HTMLInputElement>) {
        setChecked(!checked);
        onSetlistTasks(Number(e.currentTarget.id), !checked)
    }

    return (
        <div className={styles.task}>
            <div>
                <div className={styles.taskContent}>
                    <input type="checkbox" id={`${task.id}`} checked={checked} onChange={handleChangeDone} />
                    <label htmlFor={`${task.id}`}>{task.description}</label>
                    <button>Remover</button>
                </div>
            </div>
        </div>
    );
}