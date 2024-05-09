import { FaCheck } from "react-icons/fa";
import React from "react";


function CompleteIcon(props) {
  return(
    <p><span> <FaCheck 
    
    className={`icon icon-chulo ${props.finally && "icon-chulo--active"}
    `} 
      onClick={props.onComplete}
    /> </span></p>
  )
}

export { CompleteIcon };