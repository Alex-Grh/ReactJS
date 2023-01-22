import React from "react";
import { NavLink } from "react-router-dom";
import s1 from './Dialogs.module.css';

const DialogItem = (props) => {
   let path = '/dialogs/*' + props.id;
   return (
      <div className={`${s1.dialog} ${s1.active}`}>
         <NavLink to={path}>{props.name}</NavLink>
      </div>
   )
}

const Message = (props) => {
   return (
      <div className={s1.message}>{props.message}</div>
   )
}

const Dialogs = (props) => {

   let dialogs = [
      { id: 1, name: 'Jack' },
      { id: 2, name: 'Harry' },
      { id: 3, name: 'Jacob' },
      { id: 4, name: 'Charley' },
      { id: 5, name: 'Thomas' },
      { id: 6, name: 'George' }
   ]

   let messages = [
      { id: 1, message: 'Hello!' },
      { id: 2, message: 'We study here' },
      { id: 3, message: 'You do it really well' },
   ]

   let dialogsElemens = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

   let messagesElements = messages.map(m => <Message message={m.message} id={m.id} />);

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