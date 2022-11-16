import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <span style={{color: "#4EA8DE"}}>to</span><span style={{color: "#5E60CE"}}>do</span>
        </header>
    );
}