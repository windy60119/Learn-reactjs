import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './component/TodoList';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const todolist = [
        {
            id:1,
            title:'Eat'
        },
        {
            id:2,
            title:'Sleep'
        },
        {
            id:3,
            title:'Code'
        }
    ]
    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todolist={todolist}></TodoList>
            
        </div>
    );
}

export default TodoFeature;