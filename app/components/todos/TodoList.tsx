"use client"

import React from 'react'
import {useSelector} from "react-redux";
import {selectTodos, TodoProps} from "@/lib/features/todos/todoSlice";
import TodoItem from "@/app/components/todos/TodoItem";
import TodoInput from "@/app/components/todos/TodoInput";

const TodoList = () => {
    // const dispatch = useDispatch();
    const todos = useSelector(selectTodos);
    return (
        <div>
            <TodoInput/>
            {
                todos.map((todo: TodoProps) => (
                    <TodoItem key={todo.id} todo={todo}/>
                ))
            }
        </div>
    )
}
export default TodoList
