import {createSlice} from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid'

const initialState = JSON.parse(localStorage.getItem('tasks')) ?? []

export const todoListSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers : {
        addTask: (state, action) => {
            state.push({ title: action.payload, id: uuidv4(), completed: false, visible: true })
        },
        removeTask: (state, action) => {
            state.splice(state.findIndex((task) => task.id === action.payload), 1)
        },
        completeTask: (state, { payload: { id, completed } }) => {
            state.find((task) => task.id === id).completed = !completed
        },
        searchTask: (state, { payload }) => {
            payload !== '' ? state.map(task =>  task.visible = new RegExp("^" + payload, "i").test(task.title))
                : state.map(task => { task.visible = true; return task })
        }
    }
})

export const selectTask = (state) => state.todoList

export const { addTask, removeTask, completeTask, searchTask } = todoListSlice.actions

export default todoListSlice.reducer