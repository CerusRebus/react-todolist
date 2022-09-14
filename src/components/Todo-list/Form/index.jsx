import React, {useState} from 'react'
import {useDispatch} from "react-redux"
import {addTask} from "../todoSlice"

import Input from "../Input"

import {FaPlus} from "react-icons/fa"

import styles from './form.module.css'

const Form = () => {
    const [taskTitle, setTaskTitle] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTask(taskTitle))
        setTaskTitle('')
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <Input type="text" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} placeholder="Enter the name of the new task"/>
            <button type="submit" className={styles.form__button} disabled={taskTitle === ''}><FaPlus size={12}/>Add task</button>
        </form>
    )
}

export default Form