import React from 'react';
import Todo from './Todo'

function Todos({ todos, onDelete, onToggle, onFinishedTodos }) {
  return (
    <>
        {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} onDelete={onDelete} onToggle={onToggle} onFinishedTodos={onFinishedTodos} />
        ))
        }
    </>
  )
}

export default Todos