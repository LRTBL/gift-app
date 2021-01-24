import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, handleToggle, handleDelete }) => (
    <ul className='list-group list-group-flush'>
        {todos.map((todo, index) => (
            <TodoListItem key={todo.id} todo={todo} index={index} handleToggle={handleToggle} handleDelete={handleDelete} />
        ))}
    </ul>
);

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            desc: PropTypes.string.isRequired,
            done: PropTypes.bool.isRequired,
        }),
    ),
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired,
};

TodoList.defaultProps = {
    todos: [],
};

export default TodoList;
