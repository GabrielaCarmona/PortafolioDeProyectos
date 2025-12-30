import { JSX } from 'react/jsx-runtime';
import { useReducer } from 'react';

import { TodoContext } from './TodoContext';
import { todoState } from '../interfaces/interfaces';
import { todoReducer } from './todoReducer';

const INITIAL_STATE: todoState = {
  todoCount: 2,
  todos: [
    {
      id: '1',
      desc: 'Recolectar las piedras del infinito.',
      completed: false,
    },
    {
      id: '2',
      desc: 'Dominar el mundo.',
      completed: false,
    },
  ],
  completed: 0,
  pending: 2,
};

interface props {
  children: JSX.Element | JSX.Element[];
}

export const TodoProvider = ({ children }: props) => {
  const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

  const toggleTodo = ( id: string ) => {
    dispatch({ type: 'toggleTodo', payload: { id } })
  }

  return (
    <TodoContext.Provider value={{ todoState, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
