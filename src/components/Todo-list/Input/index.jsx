import React from 'react'

import styles from './input.module.css'

const Input = (props) => {
    return (
        <input className={styles.input} {...props}/>
    )
}

export default Input