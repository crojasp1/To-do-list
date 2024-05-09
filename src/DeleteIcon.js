import { GiSkullCrossedBones } from "react-icons/gi";
import React from "react";


function DeleteIcon(props){
  return(
    <p><span> <GiSkullCrossedBones 
    className="icon icon-cruz"
    onClick={props.onDelete}
    /> </span></p>

  )

}

{/*
function DeleteIcon(props) {
  return(
    <GiSkullCrossedBones 
    type = 'delete'
    color = 'gray'
    className="icon icon-cruz"
    onClick={props.onDelete}/>
  )
}
*/}

export { DeleteIcon };