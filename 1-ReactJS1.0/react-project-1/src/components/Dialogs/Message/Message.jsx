import React from "react";
import s1 from './../Dialogs.module.css';



const Message = (props) => {
   return (
      <div className={s1.message}>{props.message}</div>
   )
}

export default Message;