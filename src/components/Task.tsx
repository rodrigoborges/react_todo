import styles from './Task.module.css';

export default function Task() {
    return (
        <div className={styles.task}>
            <div>
                <div className={styles.taskContent}>
                    <input type="checkbox" id="task_" />
                    <label htmlFor="task_">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem repudiandae earum eos.</label>
                    <button>Remover</button>
                </div>
            </div>
        </div>
    );
}