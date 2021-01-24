/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';
import { todoReducer } from './reducer/todoReducer';
import useForm from '../../hooks/useForm';
import TodoList from './components/TodoList';
import './styles.css';

const init = () => JSON.parse(localStorage.getItem('todos')) || [];

const TodoApp = () => {
    const [todos, dispatch] = React.useReducer(todoReducer, [], init);

    const [{ description }, handleInputChange, resetValues] = useForm({ description: '' });

    React.useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleDelete = (todoId) => {
        const action = {
            type: 'DELETE',
            payload: todoId,
        };
        dispatch(action);
    };

    const handleToggle = (todoId) => {
        const action = {
            type: 'TOGGLE',
            payload: todoId,
        };
        dispatch(action);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim().length <= 1) {
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false,
        };

        const action = {
            type: 'ADD',
            payload: newTodo,
        };

        dispatch(action);
        resetValues();
    };

    return (
        <div className='container p-5'>
            <h1>TodoAPP ({todos.length})</h1>
            <hr />
            <div className='row'>
                <div className='col-7'>
                    <TodoList todos={todos} handleToggle={handleToggle} handleDelete={handleDelete} />
                </div>

                <div className='col-5'>
                    <h4>Agregar TODO</h4>
                    <hr />
                    <form className='d-grid gap-2' onSubmit={handleSubmit}>
                        <input type='text' name='description' className='form-control' value={description} placeholder='Aprender ...' autoComplete='off' onChange={handleInputChange} />
                        <button type='submit' className='btn btn-outline-primary mt-1'>
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TodoApp;
