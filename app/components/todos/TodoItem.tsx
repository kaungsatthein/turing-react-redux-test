import React, {useState} from 'react'
import {deleteTodo, TodoProps, updateTodo} from "@/lib/features/todos/todoSlice";
import {useDispatch} from "react-redux";

const TodoItem = ({todo}: { todo: TodoProps }) => {
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false);
    const [editTodo, setEditTodo] = useState(todo.title);

    const handleDelete = () => {
        dispatch(deleteTodo(todo))
    }
    const handleEdit = () => {
        setEditMode(!editMode);
        dispatch(updateTodo({...todo, title: editTodo}))
    }
    const handleChangeEditTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditTodo(event.target.value);
    }

    return <div>
        {editMode ?
            (
                <>
                    <input type={"text"} value={editTodo} onChange={handleChangeEditTodo}/>
                </>
            ) : <span>{todo.title}</span>
        }
        &nbsp;
        <button onClick={handleEdit}>{editMode ? "Update" : "Edit"}</button>
        &nbsp;
        <button onClick={handleDelete}>Delete
        </button>

    </div>;
}

export default TodoItem
