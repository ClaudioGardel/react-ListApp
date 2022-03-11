

const inicialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];




const todoReducer = (state = inicialState, action)=>{


    switch (action?.type) {
        case 'Agregar':
            
            return [...state, action.payload]
    
        default:
            return state;
    }

  
}

let todos = todoReducer();


//Agregar una nueva tarea...
const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
}

const agregarTodoAction = {
    type: 'Agregar',
    payload: newTodo
}

todos = todoReducer(todos, agregarTodoAction)

console.log(todos)
