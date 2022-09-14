import React, {useState} from 'react'
import {useDispatch} from "react-redux"
import {removeTask, completeTask} from "../todoSlice"
import {animated, config, useChain, useSpring, useSpringRef} from "react-spring"

import {FaTrashAlt} from "react-icons/fa"

import styles from './task.module.css'

const Task = ({id, title, completed}) => {
    const dispatch = useDispatch()

    const checkboxAnimationRef = useSpringRef()
    const checkboxAnimationStyle = useSpring({
        backgroundColor: completed ? "#808" : "#fff",
        borderColor: completed ? "#808" : "#fff",
        config: config.gentle,
        ref: checkboxAnimationRef
    })

    const [checkmarkLength, setCheckmarkLength] = useState(null)

    const checkmarkAnimationRef = useSpringRef()
    const checkmarkAnimationStyle = useSpring({
        x: completed ? 0 : checkmarkLength,
        config: config.gentle,
        ref: checkmarkAnimationRef
    })

    useChain(
        completed ? [checkboxAnimationRef, checkmarkAnimationRef] : [checkmarkAnimationRef, checkboxAnimationRef], [0, 0.3]
    )

    return (
        <li>
            <label className={`${styles.task} ${completed ? styles.completed : ''}`}>
                <input type="checkbox" name="checkbox" className={styles.task__checkbox} onChange={() => dispatch(completeTask({id, completed}))}/>
                <animated.svg style={checkboxAnimationStyle} className={styles['task__checkbox-svg']} aria-hidden="true" viewBox="0 0 15 11" fill="none">
                    <animated.path d="M1 4.5L5 9L14 1" strokeWidth="2" stroke="#fff" strokeDasharray={checkmarkLength} strokeDashoffset={checkmarkAnimationStyle.x} ref={(ref) => {if (ref) setCheckmarkLength(ref.getTotalLength())}}/>
                </animated.svg>
                <span className={styles.task__title}>{title}</span>
                <button type="button" className={styles.task__button} onClick={() => dispatch(removeTask(id))}><FaTrashAlt size={20}/></button>
            </label>
        </li>
    )
}

export default Task