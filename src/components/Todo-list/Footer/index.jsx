import React from 'react'

import styles from "./footer.module.css"

const Footer = ({ totalTasks, totalCompletedTasks }) => {
    return (
        <footer className={styles.footer}>
            <h6 className={styles.footer__info}>Total tasks: <span className={styles.total__tasks}>{totalTasks}</span></h6>
            <h6 className={styles.footer__info}>Total completed tasks: <span className={styles.total__tasks}>{totalCompletedTasks}</span></h6>
        </footer>
    )
}

export default Footer