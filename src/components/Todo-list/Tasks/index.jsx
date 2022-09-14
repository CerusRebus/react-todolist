import React from 'react'

import Task from "../Task"

import styles from './tasks.module.css'

const Tasks = ({ tasks }) => {

    return (
        <ul className={styles.task}>
            {tasks.filter(task => task.visible).map(task => <Task key={task.id} id={task.id} title={task.title} completed={task.completed} /> )}
        </ul>
    )
}

export default Tasks