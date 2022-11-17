import styles from './Task.module.css';
import iTask from "../interfaces/Task";
import { FormEvent, useState } from 'react';
interface TaskProps {
    task: iTask,
    onSetlistTasks: (id: number, status: boolean) => void,
    onRemoveListTasks: (id: number) => void
}

export default function Task({task, onSetlistTasks, onRemoveListTasks}: TaskProps) {

    const [checked, setChecked] = useState(task.done);

    function handleChangeDone(e: FormEvent<HTMLInputElement>) {
        setChecked(!checked);
        onSetlistTasks(Number(e.currentTarget.id), !checked)
    }

    function handleRemoveTask(id: number) {
        onRemoveListTasks(id);
    }

    return (
        <div className={styles.task}>
            <div>
                <div className={styles.taskContent}>
                    <input type="checkbox" id={`${task.id}`} checked={checked} onChange={handleChangeDone} />
                    <label htmlFor={`${task.id}`} className={`${task.done ? styles.taskLineThrough : ""}`} >{task.description}</label>
                    <button onClick={() => handleRemoveTask(task.id)}>Remover</button>
                </div>
            </div>
        </div>
    );
}