import React from 'react'
import './style.css'

export const TodoListItem = ({todo,index,handleDelete,handleToggle}) => {
  return (
      <li 
        key={todo.id}
        className ='list-group-item'

      >
        <p 
          className=  {`${ todo.done && 'complete'}`}
          onClick = {() => handleToggle(todo.id)}
        >
            {index + 1}. {todo.desc}
        
        </p>

        <button
          className='btn btn-outline-danger '
          onClick={ () => handleDelete(todo.id)}
        >
        Borrar
        </button>
    </li>
  )
}
