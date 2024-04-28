import logo from './platzi.webp';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  {text: 'Cortar cebolla', completed: false},
  {text: 'Cortar tomate', completed: true},
  {text: 'Cortar papa', completed: false},
  {text: 'Cortar aguacate', completed: false}
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed= {5} total= {10}/>
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo =>(
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            />
        )
        )}
      </TodoList>

      <CreateTodoButton /> 
    </React.Fragment>
  );
}

export default App;
