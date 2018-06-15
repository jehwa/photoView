import React from 'react';
import AddTodo from '../containers/AddTodo';
import TodoListContainer from '../containers/TodoListContainer'

const App = () => (
  <div>
    <AddTodo />
    <TodoListContainer />
  </div>
)

export default App;
