import styles from './NewTask.module.css';

export default function NewTask() {
    return (
        <div>
            <form className={styles.newTask}>
                <input type="text" placeholder='Adicione uma nova tarefa'/>
                <button type="submit">Criar</button>
            </form>

        </div>
    );
}