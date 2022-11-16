import styles from './NewTask.module.css';

export default function NewTask() {
    return (
        <div className={styles.newTask}>
            <input type="text" placeholder='Adicione uma nova tarefa'/>
            <button>Criar</button>
        </div>
    );
}