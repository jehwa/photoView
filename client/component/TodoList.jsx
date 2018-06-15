import React from 'react';
import TodoListEntry from './TodoListEntry.jsx';

const TodoList = (props) => {
  console.log(props);
  if(props.todos.length) {
    return props.todos.map(todo => <TodoListEntry key={todo.id} {...todo} onClick={() => props.toggleTodo(todo.id)} />)
  } else {
    return <div> nothing here </div>
  }
} 

export default TodoList;