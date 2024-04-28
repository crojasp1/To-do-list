import './TodoItem.css';

function TodoItem(props) {
  return (
    <li>
      <span className={`icon icon-chulo ${props.completed && "icon-chulo--active"}`}>V</span>
      <p className={`TodoItem_p ${props.completed && "Todo_item--complete"}`}>{props.text}</p>
      
      <span className="icon icon-cruz">X</span>
    </li>
  )
}

export { TodoItem };