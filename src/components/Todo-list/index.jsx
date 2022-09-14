import React, {useEffect, useMemo, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {searchTask, selectTask} from "./todoSlice"

import Form from "./Form"
import Input from "./Input"
import Tasks from "./Tasks"
import Footer from "./Footer"

import '../../styles/todo-list-css/main.css' // todo: global css for todo list
import styles from '../../styles/todo-list-css/todoList.module.css' // todo: module css for parent component


const TodoList = () => {
    const dispatch = useDispatch()
    const tasks = useSelector(selectTask)

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const [searchTaskTitle, setSearchTaskTitle] = useState('')

    const searchHandler = ({target: {value}}) => {
        setSearchTaskTitle(value)
        dispatch(searchTask(value))
    }

    const totalTasks = useMemo(() => {
        return tasks.length
    }, [tasks])

    const totalCompletedTasks = useMemo(() => {
        return tasks.filter(task => task.completed).length
    }, [tasks])

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>TODOLIST</h1>
                <Form/>
                <hr/>
                <Input type="text" onChange={searchHandler} value={searchTaskTitle} placeholder="Enter the name of the task you are looking for"/>
                <Tasks tasks={tasks}/>
                <Footer totalTasks={totalTasks} totalCompletedTasks={totalCompletedTasks} />
            </div>
        </div>
    )
}

export default TodoList