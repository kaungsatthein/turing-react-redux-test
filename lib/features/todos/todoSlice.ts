import {createAppSlice} from "@/lib/createAppSlice";
import {PayloadAction} from "@reduxjs/toolkit";

export interface TodoProps {
    id: number;
    title: string;
    completed: boolean;
}

interface TodoStateProps {
    todos: TodoProps[];
    status: "loading" | "completed"
}

const dummyTodo: TodoProps[] = [
    {id: 1, title: 'Task 1', completed: false},
    {id: 2, title: 'Task 2', completed: true},
];

const initialState: TodoStateProps = {
    todos: dummyTodo,
    status: "loading",
};

export const todoSlice = createAppSlice({
    name: "todo",
    initialState,
    reducers: (create) => ({
        loading: create.reducer((state) => {
            state.status = "loading";
        }),
        completed: create.reducer((state) => {
            state.status = "completed";
        }),
        addTodo: create.reducer((state, action: PayloadAction<TodoProps>) => {
            state.todos.push(action.payload);
        }),
        deleteTodo: create.reducer((state, action: PayloadAction<TodoProps>) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
        }),
        updateTodo: create.reducer((state, action: PayloadAction<TodoProps>) => {
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload.id ? action.payload : todo
            );
        }),
        loadAllTodo: create.asyncThunk(
            async () => {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos');
                const json = await response.json();
                return json;
            },
        ),
    }),
    selectors: {
        selectTodo: (state: TodoStateProps) => state.todos,
        selectCompletedTodo: (state: TodoStateProps) => state.todos.filter(todo => todo.completed)
    },
});

export const {addTodo, deleteTodo, updateTodo, loadAllTodo, loading, completed} = todoSlice.actions;
export const {selectTodo, selectCompletedTodo} = todoSlice.selectors;


