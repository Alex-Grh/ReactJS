import React from "react";
import s1 from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

   let dialogsElemens = props.elemState.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

   let messagesElements = props.elemState.messages.map(m => <Message message={m.message} id={m.id} />);

   return (
      <div className={s1.dialogs}>
         <div className={s1.dialogsItems}>
            {dialogsElemens}
         </div>
         <div className={s1.messages}>
            {messagesElements}
         </div>
      </div>
   )
}

export default Dialogs;