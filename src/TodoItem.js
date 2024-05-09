import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';
import './TodoItem.css';

function TodoItem(props) {
  return (
    <li>
      <span><CompleteIcon onComplete = {props.onComplete} finally={props.completed} /></span>
      {/*<span className={`icon icon-chulo ${props.completed && "icon-chulo--active"}
                         `} onClick = {props.onComplete}> V </span>*/}
      <p className={`TodoItem_p ${props.completed && "Todo_item--complete"}`}>{props.text}</p>
      
      <span><DeleteIcon onDelete={props.onDelete} /></span>
      {/*<span className="icon icon-cruz"
                      onClick={props.onDelete}>X</span>*/}
    </li>
  )
}

export { TodoItem };