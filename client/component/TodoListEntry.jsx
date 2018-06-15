import React from 'react';

const TodoListEntry = (props) => (
  <div 
    onClick={props.onClick}
    style={{
      textDecoration: props.completed ? 'line-through' : 'none'
    }}>
    {props.text}
  </div>
) 

export default TodoListEntry;