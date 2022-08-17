import React from 'react';
import Todo from './Todo'

function Todos({ todos }) {
  return (
    <>
        {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
        ))
        }
    </>
  )
}

export default Todos