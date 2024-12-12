import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface TodoProps {
    id: number;
    title: string;
    completed: boolean;
}

export interface TodoStateProps {
    todos: Array<TodoProps>;
}

const dummyTodo: TodoProps[] = [
    {
        id: 1,
        title: "Task 1",
        completed: false
    },
    {
        id: 2,
        title: "Task 2",
        completed: true
    },
]

const initialState: TodoStateProps = {
    todos: dummyTodo
}

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TodoProps>) => {
            state.todos.push(action.payload)
        },
        deleteTodo: (state, action: PayloadAction<TodoProps>) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
        },
        updateTodo: (state, action: PayloadAction<TodoProps>) => {
            const id = action.payload.id;
            state.todos = state.todos.map(todo => todo.id === id ? {...todo, ...action.payload} : todo)
        }
    },
    selectors: {
        selectTodo: (todo) => todo.todos,
    }
});

export const {addTodo, deleteTodo, updateTodo} = todoSlice.actions;
export const selectTodos = todoSlice.selectors.selectTodo;