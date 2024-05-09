import './TodoCounter.css';

function TodoCounter( {completed, total})  {
  let message = "";

  if(total==0){
    message = "No hay ToDos Pendientes";
  }
  else if(completed==total){
    message = "Felicidades, has completado todos los ToDos"
  }else {
    message = `Has completado ${completed} de ${total} ToDos`
  }
  
  return (

    <h1>
      {message}
   
    </h1>
  )
}

export { TodoCounter };