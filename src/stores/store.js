import { configureStore } from "@reduxjs/toolkit"
import todoListReducer from '../components/Todo-list/todoSlice'

export const store = configureStore({
    reducer : {
        todoList: todoListReducer,
    }
})