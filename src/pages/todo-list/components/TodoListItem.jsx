/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';
import PropTypes from 'prop-types';

const TodoListItem = ({ todo, index, handleDelete, handleToggle }) => (
    <li key={todo.id} className='list-group-item'>
        <p
            className={`${todo.done && 'complete'}`}
            onClick={() => {
                handleToggle(todo.id);
            }}
        >
            {index + 1}. {todo.desc}
        </p>
        <button
            type='submit'
            className='btn btn-danger'
            onClick={() => {
                handleDelete(todo.id);
            }}
        >
            Borrar
        </button>
    </li>
);

TodoListItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        desc: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired,
    }),
    index: PropTypes.number.isRequired,
    handleToggle: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
};

TodoListItem.defaultProps = {
    todo: {},
};

export default TodoListItem;
