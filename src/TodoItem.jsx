import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo } from './todoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none',
        cursor: 'pointer',
      }}
      onClick={() => dispatch(toggleTodo(todo.id))}
    >
      {todo.text}
    </li>
  );
};

export default TodoItem;
