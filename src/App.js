import logo from './platzi.webp';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

/*const defaultTodos = [
  {text: 'Cortar cebolla', completed: false},
  {text: 'Cortar tomate', completed: true},
  {text: 'Cortar papa', completed: true},
  {text: 'Cortar aguacate', completed: false},
  {text: 'Cortar Piña', completed: false}
];*/

//localStorage.setItem('Todos_V1', JSON.stringify(defaultTodos));
//localStorage.removeItem('Todos_V1');

function App() {
  const localStorageTodos = localStorage.getItem('Todos_V1');

  let parsedTodos;

  if (!localStorageTodos){
    localStorage.setItem('Todos_V1', JSON.stringify([]));

    parsedTodos = [];
  }else{
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [searchValue, setSearchValue] = React.useState('');

  const [todos, setTodos] = React.useState(parsedTodos);



  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;

  const totalTodos = todos.length;
  
  const filteredValue = todos.filter(
    (todo) =>{  return todo.text.toLowerCase().includes(searchValue.toLowerCase())}
  );

  const saveTodos = (newTodos) => {
    localStorage.setItem('Todos_V1', JSON.stringify(newTodos));
    setTodos(newTodos);
  }

  const todosLosCompletados = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
     (todo) => todo.text == text 
    );
    if(newTodos[todoIndex].completed == true){
    newTodos[todoIndex].completed = false
    }else{
      newTodos[todoIndex].completed = true
    }
    saveTodos(newTodos);
      


  }


  const todosEliminados = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text 
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);

    console.log("Este es el todo text: " + text);

    console.log(todos);

    console.log(`Este es el todo newTodos: ${newTodos}`);

    console.log("Este es el todo index: " + todoIndex);  

  }
 

  return (
    <React.Fragment>
      <TodoCounter 



        completed= {completedTodos} 
        total= {totalTodos}


      />
      <TodoSearch 
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      />

      <TodoList>
        {filteredValue.map(todo =>(
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete = {()=> todosLosCompletados(todo.text)}
            onDelete = {()=>todosEliminados(todo.text)}
            />
        )
        )}
      </TodoList>

      <CreateTodoButton /> 
    </React.Fragment>
  );
}

export default App;
