"use client";

import React, {useState} from 'react'
import {addTodo, TodoProps} from "@/lib/features/todos/todoSlice";
import {useDispatch} from "react-redux";


const TodoInput = () => {
    const [todoText, setTodoText] = useState('');
    const dispatch = useDispatch();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setTodoText(event.target.value);
    }

    const handleAddTodo = () => {
        const newId = Math.random() * 100;
        let todo: TodoProps = {
            id: newId,
            title: todoText,
            completed: false,
        }
        dispatch(addTodo(todo));
        setTodoText('');
    }

    return (
        <div className={"form-group"}>
            <input type={"text"} className={"form-control"} onChange={handleChange} value={todoText}/>
            <button type={"button"}
                    onClick={handleAddTodo}
            >Add Todo
            </button>
        </div>
    )
}
export default TodoInput
