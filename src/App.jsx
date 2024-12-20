import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const App = () => {
  return (
    <div>
      <h1>Redux Toolkit To-Do App</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
