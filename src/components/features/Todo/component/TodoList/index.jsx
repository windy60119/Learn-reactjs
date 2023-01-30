import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todoList: PropTypes.array
};

/* mac dinh la 1 mang rong */
TodoList.defaultProps = {
    todoList: []
}

function TodoList({ todoList }) {

    return (
        <ul>
            {todoList.map(todo => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    );
}

export default TodoList;