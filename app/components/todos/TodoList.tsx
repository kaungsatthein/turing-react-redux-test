"use client"

import React from 'react'
import {useSelector} from "react-redux";
import {selectCompletedTodo, selectTodo, TodoProps} from "@/lib/features/todos/todoSlice";
import TodoItem from "@/app/components/todos/TodoItem";
import TodoInput from "@/app/components/todos/TodoInput";
import {useAppDispatch} from "@/lib/hooks";

const TodoList = () => {
    const dispatch = useAppDispatch();
    const todos: TodoProps[] = useSelector(selectTodo);
    const completedTodo: TodoProps[] = useSelector(selectCompletedTodo)

    return (
        <div>
            <span>Completed count - {completedTodo.length}</span>
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
