import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { useForm } from '../hook/useForm';
import { TodoList } from './TodoList';
import './style.css';


const init = ()=>{
    return JSON.parse(localStorage.getItem('todos')) || []
}


export const TodoApp = () => {


    const [ todos, dispatch ] = useReducer(todoReducer, [], init);


    const [{description}, handleInputChange, reset] = useForm ({
        description: ''
 
    });

    
    useEffect (()=>{
        localStorage.setItem('todos', JSON.stringify(todos));
    },[todos])


    const handleToggle = (todoId) =>{
        
        dispatch({
                type: 'toggle',
                payload: todoId


            })
                

    }


    const handleDelete = (todoId) =>{
        

        const action = {
            type: 'delete',
            payload: todoId
        };
        dispatch(action)

    }


    const handleSubmit = (e)=>{
        e.preventDefault();
        
        if(description.trim().length <= 1){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }
    
        const agregarAction = {
            type: 'add',
            payload: newTodo
        }
        dispatch(agregarAction);
        
        reset();

    }
  
    

  return (
    <div>
        
        <h1 className='titulo'>TodoApp</h1>
        <hr/>

        <div className='row '>

            <div className='col col-xs-12 col-sm-12 col-md-6 col-lg-6'>

                    <h3>Agregar Tareas cant: {todos.length}</h3>
                    <hr/>


                    <form onSubmit={handleSubmit}>
                        
                        <input
                            type= 'text'
                            name='description'
                            className='input-add form-control'
                            placeholder='Tareas...'
                            autoComplete='off'
                            value={description}
                            onChange={ handleInputChange }
                        />

                        <button
                            type='submit'
                            className='btn1 btn-primary mt-4 btn-block'
                        
                        >
                            Agregar
                        </button>
                    </form>
            </div>


            <div className='col1 col-xs12 col-sm-12 col-md-6 col-lg-6'>
                    <TodoList 
                        todos = {todos}
                        handleDelete = {handleDelete}
                        handleToggle = {handleToggle}
                    />

            </div>


            
        </div>

        



    </div>
  )
}
