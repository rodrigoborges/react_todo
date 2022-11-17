import styles from './Task.module.css';
import iTask from "../interfaces/Task";
interface TaskProps {
    task: iTask
}

export default function Task({task}: TaskProps) {
    return (
        <div className={styles.task}>
            <div>
                <div className={styles.taskContent}>
                    <input type="checkbox" id={`task_${task.id}`} />
                    <label htmlFor={`task_${task.id}`}>{task.description}</label>
                    <button>Remover</button>
                </div>
            </div>
        </div>
    );
}