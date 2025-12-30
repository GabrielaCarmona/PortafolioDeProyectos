//import { useContext } from 'react'
import { useTodos } from '../hooks/useTodos'
import { Todo } from '../interfaces/interfaces'
//import { TodoContext } from '../context/TodoContext';

interface props {
    todo: Todo
}

export const TodoItem = ( { todo }: props ) => {

    //const { toggleTodo } = useContext(TodoContext);

    const { toggleTodo } = useTodos();

  return (
    <li 
    onDoubleClick={ () => toggleTodo( todo.id ) } 
    style={{
        cursor: 'pointer',
        textDecoration: todo.completed ? 'line-through' : '',
        userSelect: 'none'
    }} >
        { todo.desc }
    </li>
  )
}
